/**
 * Main App Controller Component
 * Manages global application state, active screen routing, student details, and progression.
 */
const { useState, useEffect } = React;

// Safe array shuffling utility fallback
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
    // Dynamic retrieval from window object on each render to prevent script loading order issues
    const WelcomeComp = window.Welcome || (typeof Welcome !== 'undefined' ? Welcome : null);
    const TopicsComp = window.Topics || (typeof Topics !== 'undefined' ? Topics : null);
    const TeacherPanelComp = window.TeacherPanel || (typeof TeacherPanel !== 'undefined' ? TeacherPanel : null);
    const QuizComp = window.Quiz || (typeof Quiz !== 'undefined' ? Quiz : null);
    const SummaryComp = window.Summary || (typeof Summary !== 'undefined' ? Summary : null);

    const [step, setStep] = useState('welcome');
    const [studentInfo, setStudentInfo] = useState({
        name: 'ישראל ישראלי',
        classGroup: 'י1',
        teacher: 'אביבה',
        level: 'easy'
    });

    const [selectedTopic, setSelectedTopic] = useState({
        id: "Input_Output_Variables",
        title: "משתנים, קלט ופלט (C#)",
        sheetName: "Variables_Input_Output"
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

    // הגדרה דינמית של נושא השאלון
    const quizTopic = selectedTopic?.title || "משתנים, קלט ופלט (C#)";

    // מעבר ממסך הרשמה לבחירת נושא
    const handleWelcomeSubmit = () => {
        setStep('topics');
    };

    // בחירת נושא והתחלת השאלון
    const handleSelectTopic = (topic) => {
        setSelectedTopic(topic);
        handleStartQuiz(studentInfo.level, topic);
    };   

    const handleQuizFinish = (finishedLevelId) => {
        if (finishedLevelId && finishedLevelId !== 'all') {
            setCompletedLevels(prev => {
                if (!prev.includes(finishedLevelId)) {
                    return [...prev, finishedLevelId];
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
        setStep('topics');
    };

    const handleStartQuiz = (targetLevel, topicParam) => {
        try {
            const levelToUse = targetLevel || studentInfo.level || 'easy';
            const topicToUse = topicParam || selectedTopic;
            setStudentInfo(prev => ({ ...prev, level: levelToUse }));

            // טעינת השאלות לפי הנושא שנבחר
            let rawQuestions = window.allIOVQuestions || (typeof allIOVQuestions !== 'undefined' ? allIOVQuestions : []);
            if (topicToUse?.questionsKey && window[topicToUse.questionsKey]) {
                rawQuestions = window[topicToUse.questionsKey];
            }

            if (!rawQuestions || rawQuestions.length === 0) {
                alert('שגיאה: לא נטענו שאלות למערכת עבור נושא זה');
                return;
            }

            let filtered = rawQuestions;
            if (levelToUse && levelToUse !== 'all') {
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

                const currentLevelId = studentInfo.level || 'easy';
                handleQuizFinish(currentLevelId);

                setStep('summary');
                sendToSheets(score, updatedAnswers, currentLevelId);
            }
        } catch (err) {
            alert('התרחשה שגיאה בעת מעבר שאלה: ' + err.message);
            console.error(err);
        }
    };

    const sendToSheets = async (score, answers, levelUsed) => {
        setIsSending(true);
        setSendSuccess(false);

        try {
            const configObj = typeof CONFIG !== 'undefined' ? CONFIG : (window.CONFIG || {});
            const scriptUrl = configObj.SCRIPT_URL;

            if (!scriptUrl) {
                console.warn('CONFIG.SCRIPT_URL אינו מוגדר. תוצאות לא יישלחו לגוגל שיטס.');
                setIsSending(false);
                return;
            }

            const activeLevel = levelUsed || studentInfo?.level || 'easy';
            
            // שם הגיליון מתוך הנושא שנבחר, או ברירת מחדל
            const targetSheetName = selectedTopic?.sheetName || configObj.SHEET_NAME || 'Variables_Input_Output';

            const payload = {
                sheetName: targetSheetName,
                firstName: (studentInfo?.name || 'תלמיד').split(' ')[0] || 'תלמיד',
                lastName: (studentInfo?.name || '').split(' ').slice(1).join(' ') || '',
                classGroup: studentInfo?.classGroup || '',
                teacher: studentInfo?.teacher || 'מורה',
                level: activeLevel === 'all' ? 'מרתון (הכל)' : activeLevel,
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

    const nextLevel = getNextLevel(studentInfo.level);

    const handleNextLevel = () => {
        if (nextLevel) {
            handleStartQuiz(nextLevel);
        }
    };

    return (
        <div>
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
                ) : <div className="p-5 text-center text-rose-600 font-bold">טוען מסך פתיחה... (שגיאה: Welcome חסר)</div>
            )}

            {step === 'topics' && (
                TopicsComp ? (
                    <TopicsComp
                        studentInfo={studentInfo}
                        onSelectTopic={handleSelectTopic}
                        onBack={() => setStep('welcome')}
                        onOpenTeacherPanel={() => setStep('teacher')}
                    />
                ) : (
                    <div className="p-6 text-center">
                        <h2 className="text-xl font-bold mb-4">בחירת נושא לתרגול</h2>
                        <button 
                            onClick={() => handleSelectTopic({ id: 'Input_Output_Variables', title: 'קלט / פלט ומשתנים', sheetName: 'Variables_Input_Output' })}
                            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
                        >
                            התחל תרגול קלט / פלט ומשתנים
                        </button>
                    </div>
                )
            )}

            {step === 'teacher' && (
                TeacherPanelComp ? (
                    <TeacherPanelComp
                        onClose={() => setStep('welcome')}
                    />
                ) : <div className="p-5 text-center text-rose-600 font-bold">שגיאה: TeacherPanel חסר</div>
            )}

            {step === 'quiz' && activeQuestions.length > 0 && (
                QuizComp ? (
                    <QuizComp
                        studentInfo={studentInfo}
                        quizTopic={quizTopic}
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
                    />
                ) : <div className="p-5 text-center text-rose-600 font-bold">שגיאה: Summary חסר</div>
            )}
        </div>
    );
};

// Mount the main App component into the root element in index.html
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);