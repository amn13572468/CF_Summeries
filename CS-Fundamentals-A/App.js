/**
 * Main App Controller Component
 * Manages global application state, active screen routing, student details, and progression.
 */
const { useState, useEffect } = React;

// Shuffle a copy of an array, preferring the shared utility when available.
const safeShuffleArray = (arr) => {
    if (typeof window.shuffleArray === 'function') return window.shuffleArray(arr);
    if (typeof shuffleArray === 'function') return shuffleArray(arr);
    const array = [...(arr || [])];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const App = () => {
    // Resolve browser-global components so scripts loaded through Babel can be used.
    const WelcomeComp = window.Welcome || (typeof Welcome !== 'undefined' ? Welcome : null);
    const TopicsComp = window.Topics || (typeof Topics !== 'undefined' ? Topics : null);
    const TeacherPanelComp = window.TeacherPanel || (typeof TeacherPanel !== 'undefined' ? TeacherPanel : null);
    const QuizComp = window.Quiz || (typeof Quiz !== 'undefined' ? Quiz : null);
    const SummaryComp = window.Summary || (typeof Summary !== 'undefined' ? Summary : null);

    // Track the active screen and the student, question, answer, and submission state.
    const [step, setStep] = useState('welcome');
    const [selectedTopic, setSelectedTopic] = useState(null);
    // Preparation is a separate activity, not a homework difficulty level.
    // The quizMode state distinguishes between normal homework practice and test-preparation mode.
    
    const [quizMode, setQuizMode] = useState('practice');
    const [studentInfo, setStudentInfo] = useState({
        name: 'ישראל ישראלי',
        classGroup: 'י1',
        teacher: 'אביבה',
        level: 'easy'
    });
    const [activeQuestions, setActiveQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [finalScore, setFinalScore] = useState(0);
    const [isSending, setIsSending] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);

    const [completedLevels, setCompletedLevels] = useState([]);

    useEffect(() => {
        setCompletedLevels([]);
    }, []);

    const quizTopic = selectedTopic?.title || "משתנים, קלט ופלט (C#)";

    // Move from student setup to the list of available topics.
    const handleWelcomeSubmit = () => {
        setStep('topics');
    };

    // Save the selected topic and start its quiz at the student's current level.
    const handleSelectTopic = (topic) => {
        setSelectedTopic(topic);
        handleStartQuiz(studentInfo.level, topic);
    };

    // Start the selected topic's preparation bank without changing homework progress.
    const handleSelectPreparation = (topic) => {
        setSelectedTopic(topic);
        handleStartQuiz('all', topic, 'preparation');
    };

    const handleQuizFinish = (finishedLevelId) => {
        // Completed levels control when marathon mode becomes available.
        if (finishedLevelId && finishedLevelId !== 'all') {
            setCompletedLevels(prev => {
                if (!prev.includes(finishedLevelId)) {
                    const updated = [...prev, finishedLevelId];
                    return updated;
                }
                return prev;
            });
        }
    };

    const handleReset = () => {
        setCurrentQuestion(0);
        setUserAnswers([]);
        setSelectedOption(null);
        setIsChecked(false);
        setFinalScore(0);
        setIsSending(false);
        setSendSuccess(false);
        setStep('welcome');
    };

    const handleStartQuiz = (targetLevel, topicToUse, mode = 'practice') => {
        try {
            const levelToUse = targetLevel || studentInfo.level || 'easy';
            // Keep the student's saved homework level unchanged during preparation.
            if (mode === 'practice') setStudentInfo(prev => ({ ...prev, level: levelToUse }));

            // Preparation uses its own bank key; normal practice keeps the topic's homework bank.
            const questionsKey = mode === 'preparation'
                ? topicToUse?.preparationQuestionsKey
                : topicToUse?.questionsKey || 'allIOVQuestions';
            // Question scripts register named banks on window; retain the legacy fallback for the default bank.
            const rawQuestions = window[questionsKey] || (
                questionsKey === 'allIOVQuestions' && typeof allIOVQuestions !== 'undefined'
                    ? allIOVQuestions
                    : []
            );
            if (!rawQuestions || rawQuestions.length === 0) {
                alert(`שגיאה: מאגר השאלות לנושא ${topicToUse?.title || ''} לא נטען (${questionsKey})`);
                return;
            }

            // Preparation includes the medium and hard questions, never the homework levels.
            let filtered = mode === 'preparation'
                ? rawQuestions.filter(q => q.level === 'medium' || q.level === 'hard')
                : rawQuestions;
            if (mode !== 'preparation' && levelToUse && levelToUse !== 'all') {
                filtered = rawQuestions.filter(q => q.level === levelToUse);
            }

            if (!filtered || filtered.length === 0) {
                alert(`לא נמצאו שאלות עבור הרמה שנבחרה: ${levelToUse}`);
                return;
            }

            const preparedQuestions = safeShuffleArray(filtered).map(q => {
                const optionsWithIndex = (q.options || []).map((opt, idx) => ({ text: opt, isCorrect: idx === q.answer }));
                const shuffledOptions = safeShuffleArray(optionsWithIndex);

                return {
                    ...q,
                    options: shuffledOptions.map(o => o.text),
                    answer: shuffledOptions.findIndex(o => o.isCorrect)
                };
            });

            setActiveQuestions(preparedQuestions);
            setCurrentQuestion(0);
            setUserAnswers([]);
            setSelectedOption(null);
            setIsChecked(false);
            setFinalScore(0);
            setIsSending(false);
            setSendSuccess(false);
            setQuizMode(mode);
            setStep('quiz');
        } catch (err) {
            alert('שגיאה בהתחלת השאלון: ' + err.message);
            console.error(err);
        }
    };

    const handleNext = () => {
        try {
            const q = activeQuestions[currentQuestion];
            if (!q) {
                alert('שגיאה: השאלה הנוכחית אינה קיימת');
                return;
            }

            // Store the selected answer with the question for the final summary.
            const isCorrect = selectedOption === q.answer;
            const updatedAnswer = {
                ...q,
                isCorrect,
                selectedOption
            };

            const updatedAnswers = [...userAnswers, updatedAnswer];
            setUserAnswers(updatedAnswers);

            if (currentQuestion < activeQuestions.length - 1) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedOption(null);
                setIsChecked(false);
            } else {
                const score = Math.round((updatedAnswers.filter(a => a.isCorrect).length / activeQuestions.length) * 100);
                setFinalScore(score);

                const currentLevelId = quizMode === 'preparation' ? 'preparation' : studentInfo.level || 'easy';
                // Completing preparation must not unlock or mark a homework level complete.
                if (quizMode !== 'preparation') handleQuizFinish(currentLevelId);

                setStep('summary');
                sendToSheets(score, updatedAnswers, currentLevelId, quizMode);
            }
        } catch (err) {
            alert('התרחשה שגיאה בעת מעבר שאלה: ' + err.message);
            console.error(err);
        }
    };

    const sendToSheets = async (score, answers, levelUsed, mode = 'practice') => {
        setIsSending(true);
        setSendSuccess(false);

        try {
            // Build a compact student result report for the configured Google Apps Script.
            const configObj = typeof CONFIG !== 'undefined' ? CONFIG : (window.CONFIG || {});
            const scriptUrl = configObj.SCRIPT_URL;

            if (!scriptUrl) {
                console.warn('CONFIG.SCRIPT_URL אינו מוגדר. תוצאות לא יישלחו לגוגל שיטס.');
                setIsSending(false);
                return;
            }

            const activeLevel = levelUsed || studentInfo?.level || 'easy';

            // Prepare the payload with student info, score, and detailed answer reports.
            // Use the topic's sheetName if available, otherwise fall back to the configured default or a generic name.
            const payload = {
                sheetName: selectedTopic?.sheetName || configObj.SHEET_NAME || 'DefaultSheet',
                firstName: (studentInfo?.name || 'תלמיד').split(' ')[0] || 'תלמיד',
                lastName: (studentInfo?.name || '').split(' ').slice(1).join(' ') || '',
                classGroup: studentInfo?.classGroup || '',
                teacher: studentInfo?.teacher || 'מורה',
                // Keep test-preparation results distinct from homework levels and Marathon.
                level: mode === 'preparation' ? 'הכנה למבחן' : activeLevel === 'all' ? 'מרתון (הכל)' : activeLevel,
                score: score,
                detailedErrReport: answers.filter(a => !a.isCorrect).map(a => `[ש${a.id || ''}] ${a.question || ''}`).join(' | ') || 'ללא שגיאות',
                detailedSuccReport: answers.filter(a => a.isCorrect).map(a => `[ש${a.id || ''}] ${a.question || ''}`).join(' | ') || 'ללא הצלחות'
            };

            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(payload)
            });

            setSendSuccess(true);
        } catch (err) {
            console.error('Error submitting results:', err);
        } finally {
            setIsSending(false);
        }
    };

    const getNextLevel = (currentLevel) => {
        if (currentLevel === 'easy') return 'medium';
        if (currentLevel === 'medium') return 'hard';
        if (currentLevel === 'hard') return 'all';
        return null;
    };

    // Preparation has no next homework level to unlock.
    const nextLevel = quizMode === 'preparation' ? null : getNextLevel(studentInfo.level);

    const handleNextLevel = () => {
        if (nextLevel) {
            handleStartQuiz(nextLevel, selectedTopic);
        }
    };

    return (
        <div>
            {/* 1. Student setup and difficulty selection */}
            {step === 'welcome' && (
                WelcomeComp ? (
                    <WelcomeComp
                        studentInfo={studentInfo}
                        setStudentInfo={setStudentInfo}
                        quizTopic={quizTopic}
                        onStart={handleWelcomeSubmit}
                        onStartQuiz={handleWelcomeSubmit}
                        onOpenTeacherPanel={() => setStep('teacher')}
                        completedLevels={completedLevels}
                    />
                ) : <div className="p-5 text-center text-rose-600 font-bold">טוען מסך פתיחה...</div>
            )}

            {/* 2. Available syllabus topics */}
            {step === 'topics' && (
                TopicsComp ? (
                    <TopicsComp
                        studentInfo={studentInfo}
                        onSelectTopic={handleSelectTopic}
                        onSelectPreparation={handleSelectPreparation}
                        onBack={() => setStep('welcome')}
                        onOpenTeacherPanel={() => setStep('teacher')}
                    />
                ) : <div className="p-5 text-center text-rose-600 font-bold">שגיאה: Topics.js חסר</div>
            )}

            {/* 3. Teacher controls for topic access */}
            {step === 'teacher' && (
                TeacherPanelComp ? (
                    <TeacherPanelComp
                        onBack={() => setStep('topics')}
                    />
                ) : <div className="p-5 text-center text-rose-600 font-bold">שגיאה: TeacherPanel.js חסר</div>
            )}

            {/* 4. Active quiz question */}
            {step === 'quiz' && activeQuestions.length > 0 && (
                QuizComp ? (
                    <QuizComp
                        studentInfo={studentInfo}
                        quizTopic={quizTopic}
                        quizMode={quizMode}
                        question={activeQuestions[currentQuestion]}
                        currentIndex={currentQuestion}
                        totalQuestions={activeQuestions.length}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        isChecked={isChecked}
                        onCheck={() => setIsChecked(true)}
                        onNext={handleNext}
                    />
                ) : <div className="p-5 text-center text-rose-600 font-bold">שגיאה: Quiz חסר</div>
            )}

            {/* 5. Final score and answer review */}
            {step === 'summary' && (
                SummaryComp ? (
                    <SummaryComp
                        studentInfo={studentInfo}
                        finalScore={finalScore}
                        userAnswers={userAnswers}
                        isSending={isSending}
                        sendSuccess={sendSuccess}
                        onReset={handleReset}
                        onNextLevel={handleNextLevel}
                        nextLevel={nextLevel}
                        quizMode={quizMode}
                    />
                ) : <div className="p-5 text-center text-rose-600 font-bold">שגיאה: Summary חסר</div>
            )}
        </div>
    );
};

// Mount the application into the root element declared in index.html.
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);