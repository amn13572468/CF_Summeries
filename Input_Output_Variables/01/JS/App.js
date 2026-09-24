/**
 * App.js - Controller Component
 * Filters questions by selected level, shuffles options/questions, and manages application state.
 */

const { useState } = React; // או: import React, { useState } from 'react';

const App = () => {
    const [step, setStep] = useState('welcome'); // 'welcome' | 'quiz' | 'summary'
    //const [studentInfo, setStudentInfo] = useState({
    //    name: '',
    //    classGroup: '',
    //    teacher: 'מורה',
    //    level: 'all'
    //});
    const [studentInfo, setStudentInfo] = useState({
        name: 'ישראל ישראלי',   // <--- ערך זמני לשם
        classGroup: 'י1',       // <--- ערך זמני לכיתה
        teacher: 'אביבה',       // <--- שם המורה לסטנדרט
        level: 'all'
    });
    const [activeQuestions, setActiveQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [finalScore, setFinalScore] = useState(0);
    const [isSending, setIsSending] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);

    /**
     * Filters questions based on selected difficulty, shuffles questions and options.
     */
    const handleStartQuiz = () => {
        // 1. Filter questions according to selected level ('all', 'easy', 'medium', 'hard')
        let filtered = allIOVQuestions;
        if (studentInfo.level && studentInfo.level !== 'all') {
            filtered = allIOVQuestions.filter(q => q.level === studentInfo.level);
        }

        // 2. Deep copy & Shuffle questions and options (using Fisher-Yates logic from utils.js)
        const preparedQuestions = shuffleArray(filtered).map(q => {
            const optionsWithIndex = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.answer }));
            const shuffledOptions = shuffleArray(optionsWithIndex);

            return {
                ...q,
                options: shuffledOptions.map(o => o.text),
                answer: shuffledOptions.findIndex(o => o.isCorrect)
            };
        });

        // 3. Update state
        setActiveQuestions(preparedQuestions);
        setCurrentQuestion(0);
        setUserAnswers([]);
        setSelectedOption(null);
        setIsChecked(false);
        setStep('quiz');
    };

    /**
     * Handles progression to next question or final summary calculation.
     */
    const handleNext = () => {
        const q = activeQuestions[currentQuestion];
        const isCorrect = selectedOption === q.answer;

        const updatedAnswers = [...userAnswers, {
            ...q,
            isCorrect,
            selectedOption
        }];
        setUserAnswers(updatedAnswers);

        if (currentQuestion < activeQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setIsChecked(false);
        } else {
            const score = Math.round((updatedAnswers.filter(a => a.isCorrect).length / activeQuestions.length) * 100);
            setFinalScore(score);
            setStep('summary');
            sendToSheets(score, updatedAnswers);
        }
    };

    /**
     * Submits results to Google Sheets web app.
     */
    const sendToSheets = async (score, answers) => {
        setIsSending(true);
        setSendSuccess(false);

        const payload = {
            sheetName: CONFIG.SHEET_NAME,
            firstName: studentInfo.name.split(' ')[0] || studentInfo.name,
            lastName: studentInfo.name.split(' ').slice(1).join(' ') || '',
            classGroup: studentInfo.classGroup || '', // <--- השורה החדשה להוספה
            teacher: studentInfo.teacher,
            level: studentInfo.level === 'all' ? 'מרתון (הכל)' : studentInfo.level,
            score: score,
            detailedErrReport: answers.filter(a => !a.isCorrect).map(a => `[ש${a.id || ''}] ${a.question}`).join(' | ') || 'ללא שגיאות',
            detailedSuccReport: answers.filter(a => a.isCorrect).map(a => `[ש${a.id || ''}] ${a.question}`).join(' | ') || 'ללא הצלחות'
        };
        console.log("Sending JSON payload to URL:", CONFIG.SCRIPT_URL);
        console.log("Payload data:", payload);
        try {
            await fetch(CONFIG.SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                //headers: { 'Content-Type': 'application/json' },
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(payload)
            });
            console.log("Data sent successfully!");
            setSendSuccess(true);
        } catch (err) {
            console.error('Error submitting results:', err);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div>
            {step === 'welcome' && (
                <WelcomeScreen
                    studentInfo={studentInfo}
                    setStudentInfo={setStudentInfo}
                    quizTopic="משתנים, קלט ופלט (C#)"
                    onStart={handleStartQuiz}
                />
            )}

            {step === 'quiz' && activeQuestions.length > 0 && (
                <QuizScreen
                    studentInfo={studentInfo}
                    quizTopic="משתנים, קלט ופלט (C#)"
                    question={activeQuestions[currentQuestion]}
                    currentIndex={currentQuestion}
                    totalQuestions={activeQuestions.length}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    isChecked={isChecked}
                    onCheck={() => setIsChecked(true)}
                    onNext={handleNext}
                />
            )}

            {step === 'summary' && (
                <SummaryScreen
                    studentInfo={studentInfo}
                    finalScore={finalScore}
                    userAnswers={userAnswers}
                    isSending={isSending}
                    sendSuccess={sendSuccess}
                    onReset={() => setStep('welcome')}
                />
            )}
        </div>
    );
};