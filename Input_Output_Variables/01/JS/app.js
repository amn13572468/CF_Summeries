// User when running as builders (like Vite, Create React App, Webpack, Node.js)
/*import React, { useState, useEffect } from 'react';
import WelcomeScreen from './welcome-screen';
import QuizScreen from './quiz-screen';
import SummaryScreen from './summarys-screen';
import { shuffleArray } from './utils';
import { allIOVQuestions, CONFIG } from './questions';*/

// בראש הקובץ app.js - ללא שורות import!
// בראש הקובץ app.js - ללא שורות import!
const { useState, useEffect } = React;

// פונקציית ערבוב בטוחה (Safe Shuffle Fallback)
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
    // שליפה דינמית מ-window בכל רינדור למניעת בעיות סדר טעינת קבצים
    const WelcomeComp = window.WelcomeScreen || (typeof WelcomeScreen !== 'undefined' ? WelcomeScreen : null);
    const QuizComp = window.QuizScreen || (typeof QuizScreen !== 'undefined' ? QuizScreen : null);
    const SummaryComp = window.SummaryScreen || (typeof SummaryScreen !== 'undefined' ? SummaryScreen : null);

    const [step, setStep] = useState('welcome');
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

    /* 
        localStorage is available in the browser environment and can be used to persist data across sessions.
        This effect runs once on component mount to load any previously completed levels.
        LocalStorage is a synchronous API, so we can safely read from it without worrying about async behavior.
        LocalStorage saves data as strings, so we need to parse it back into an array when loading.
        And saves the data as a JSON string when updating the completedLevels state.
        Key difference: 
        localStorage retains data indefinitely(even after closing the browser). 
        sessionStorage is automatically deleted as soon as the student closes the tab or the browser!
        Load completed levels from localStorage on initial render
     */
    /*useEffect(() => {
        // reload completed levels from localStorage/sessionStorage
        // to ensure full synchronization
        try {
    
            //const saved = localStorage.getItem('completedLevels');
            const saved = sessionStorage.getItem('completedLevels');
            console.log("נתונים שנטענו מ-LocalStorage:", saved);
            if (saved) setCompletedLevels(JSON.parse(saved));
        } catch (e) {
            console.error(e);
        }
    }, []);*/
    useEffect(() => {
        // No Reload of completed levels from localStorage/sessionStorage
        // to ensure full synchronization
        setCompletedLevels([]);
    }, []);
    const quizTopic = "משתנים, קלט ופלט (C#)";

    const handleQuizFinish = (finishedLevelId) => {
        if (finishedLevelId && finishedLevelId !== 'all') {
            setCompletedLevels(prev => {
                if (!prev.includes(finishedLevelId)) {
                    const updated = [...prev, finishedLevelId];
                    //localStorage.setItem('completedLevels', JSON.stringify(updated));
                    //sessionStorage.setItem('completedLevels', JSON.stringify(updated));
                    return updated;
                }
                return prev;
            });
        }
    };

    const handleReset = () => {
        //Fix bug: Reset completed levels in localStorage
        // Reload completed levels from localStorage to ensure 
        // full synchronization
        /*try {
            // const saved = localStorage.getItem('completedLevels');
            const saved = sessionStorage.getItem('completedLevels');
            if (saved) setCompletedLevels(JSON.parse(saved));
        } catch (e) {
            console.error(e);
        }*/
        setCurrentQuestion(0);
        setUserAnswers([]);
        setSelectedOption(null);
        setIsChecked(false);
        setFinalScore(0);
        setIsSending(false);
        setSendSuccess(false);
        setStep('welcome');
    };

    const handleStartQuiz = (targetLevel) => {
        try {
            const levelToUse = targetLevel || studentInfo.level || 'easy';

            setStudentInfo(prev => ({ ...prev, level: levelToUse }));

            let rawQuestions = window.allIOVQuestions || (typeof allIOVQuestions !== 'undefined' ? allIOVQuestions : []);
            if (!rawQuestions || rawQuestions.length === 0) {
                alert('שגיאה: לא נטענו שאלות למערכת (allIOVQuestions חסר)');
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
                // הגעה לשאלה האחרונה
                const score = Math.round((updatedAnswers.filter(a => a.isCorrect).length / activeQuestions.length) * 100);
                setFinalScore(score);

                const currentLevelId = studentInfo.level || 'easy';
                handleQuizFinish(currentLevelId);

                // מעבר למסך סיכום
                setStep('summary');
                sendToSheets(score, updatedAnswers, currentLevelId);
            }
        } catch (err) {
            alert('תרחשה שגיאה בעת מעבר שאלה: ' + err.message);
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

            const payload = {
                sheetName: configObj.SHEET_NAME || 'DefaultSheet',
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
                        onStart={handleStartQuiz}
                        completedLevels={completedLevels}
                    />
                ) : <div className="p-5 text-center text-rose-600 font-bold">טוען מסך פתיחה... (שגיאה: WelcomeScreen חסר)</div>
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
                ) : <div className="p-5 text-center text-rose-600 font-bold">שגיאה: QuizScreen חסר</div>
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
                ) : <div className="p-5 text-center text-rose-600 font-bold">שגיאה: SummaryScreen חסר</div>
            )}
        </div>
    );
};

window.App = App;
//export default App;