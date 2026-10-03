/**
 * QuizScreen Component
 * Interactive quiz component for C# questions with code snippet display, option selection, and RTL support.
 */
const getLevelBadge = (level) => {
    // Map stored difficulty IDs to the label, icon, and classes shown in the quiz.
    switch (level?.toLowerCase()) {
        case 'easy':
            return { label: 'רמה קלה', icon: '🌱', style: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
        case 'medium':
            return { label: 'רמה בינונית', icon: '⚡', style: 'bg-amber-100 text-amber-800 border-amber-200' };
        case 'hard':
        case 'advanced':
            return { label: 'רמה מתקדמת', icon: '🔥', style: 'bg-rose-100 text-rose-800 border-rose-200' };
        default:
            return { label: 'תרגול', icon: '🎯', style: 'bg-indigo-100 text-indigo-800 border-indigo-200' };
    }
};

// Detect Hebrew text so natural-language content can use RTL typography without changing code.
const containsHebrewText = (text) => /[\u0590-\u05FF]/.test(text || '');

const Quiz = ({
    studentInfo,
    quizTopic,
    quizMode,
    question,
    currentIndex,
    totalQuestions,
    selectedOption,
    setSelectedOption,
    isChecked,
    onCheck,
    onNext
}) => {
    // Show a recoverable fallback if the question bank has no current question.
    if (!question) {
        return (
            <div className="min-h-screen py-10 px-4 flex flex-col items-center justify-center bg-slate-100" dir="rtl">
                <div className="max-w-md w-full bg-white rounded-2xl border border-rose-200 p-6 text-center space-y-4 shadow-sm">
                    <div className="text-4xl">⚠️</div>
                    <h3 className="text-lg font-bold text-slate-800">בעיה בטעינת שאלה {currentIndex + 1}</h3>
                    <p className="text-xs text-slate-500">השאלה במאגר חסרה או מכילה נתונים לא תקינים.</p>
                    <button onClick={onNext} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm cursor-pointer">
                        דילוג לשאלה הבאה ←
                    </button>
                </div>
            </div>
        );
    }

    const options = Array.isArray(question.options) ? question.options : [];
    const progress = ((currentIndex + 1) / totalQuestions) * 100;
    const levelBadge = getLevelBadge(question.level);
    const isHebrewQuestion = containsHebrewText(question.question);
    const isHebrewExplanation = containsHebrewText(question.explanation);

    return (
        <div className="min-h-screen py-2 md:py-4 px-2 flex flex-col items-center justify-start bg-slate-100 overflow-y-auto" dir="rtl">
            <div className="max-w-3xl w-full min-h-0 md:min-h-[calc(100vh-2rem)] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">

                {/* Student identity and selected topic */}
                <div className="bg-slate-800 text-slate-200 px-4 py-2 flex flex-wrap justify-between items-center text-xs gap-2 border-b border-slate-700">
                    <div className="flex items-center space-x-1.5 space-x-reverse font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-slate-400">מחובר/ת:</span>
                        <span className="font-bold text-white">{studentInfo?.name || 'תלמיד/ה'}</span>
                        {studentInfo?.teacher && <span className="text-slate-400">({studentInfo.teacher})</span>}
                    </div>

                    <div className="flex items-center bg-slate-700/60 px-2.5 py-0.5 rounded text-indigo-300 font-semibold border border-slate-600/50">
                        <span className="ml-1">📚</span>
                        <span>{quizTopic || 'תרגול C#'}</span>
                    </div>
                    {/* Show the activity mode separately from each question's difficulty badge. */}
                    {quizMode === 'preparation' && (
                        <span className="rounded bg-amber-100 px-2 py-0.5 font-bold text-amber-900">הכנה למבחן</span>
                    )}
                </div>

                {/* Progress reflects the current question within the quiz */}
                <div className="w-full bg-slate-100 h-1.5 shrink-0">
                    <div className="bg-indigo-500 h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>

                {/* Main question content */}
                <div className="p-4 md:p-5 space-y-4 text-right flex-1 flex flex-col">

                    {/* Difficulty badge and question number */}
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400">שאלה {currentIndex + 1} מתוך {totalQuestions}</span>

                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border flex items-center space-x-1 space-x-reverse ${levelBadge.style}`}>
                            <span>{levelBadge.icon}</span>
                            <span>{levelBadge.label}</span>
                        </span>
                    </div>

                    {/* Question prompt */}
                    <div className="min-h-[40px] shrink-0 overflow-y-auto flex items-center w-full" dir={isHebrewQuestion ? 'rtl' : 'ltr'}>
                        <h2 className={`font-bold text-slate-800 leading-snug w-full ${isHebrewQuestion ? 'text-lg md:text-xl text-right' : 'text-base md:text-lg text-left'}`}>
                            {question.question || 'שאלה ללא נושא'}
                        </h2>
                    </div>

                    {/* Show a code panel only when the question has a snippet, avoiding an empty block. */}
                    {question.code && (
                        <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner no-select" dir="ltr">
                            <div className="bg-slate-800/80 px-3 py-1 flex items-center justify-between text-[11px] text-slate-400 font-mono border-b border-slate-700/50">
                                <span>C# Code</span>
                            </div>
                            <pre className="code-font text-emerald-400 p-3 text-xs md:text-sm leading-relaxed overflow-y-auto whitespace-pre-wrap max-h-64 min-h-[60px]">
                                {question.code}
                            </pre>
                        </div>
                    )}

                    {/* Disable choices after checking and highlight the correct answer */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 shrink-0">
                        {options.map((opt, idx) => {
                            const isHebrewOption = containsHebrewText(opt);

                            return (
                            <button key={idx} disabled={isChecked} onClick={() => setSelectedOption(idx)}
                                className={`w-full h-14 md:h-16 p-3 rounded-xl border-2 text-right transition-all flex items-center justify-between overflow-hidden
                                    ${selectedOption === idx ? 'border-indigo-500 bg-indigo-50/60 font-semibold' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}
                                    ${isChecked && idx === question.answer ? 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold' : ''}
                                    ${isChecked && selectedOption === idx && idx !== question.answer ? 'border-rose-400 bg-rose-50 text-rose-800' : ''}`}
                            >
                                <span
                                    dir={isHebrewOption ? 'rtl' : 'ltr'}
                                    className={`break-words flex-1 pl-2 max-h-full overflow-y-auto ${isHebrewOption ? 'text-xs md:text-sm text-right' : 'ltr-content code-font text-xs md:text-sm text-left'}`}
                                >
                                    {opt}
                                </span>
                                <span className="text-xs font-bold shrink-0 mr-2 bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{idx + 1}</span>
                            </button>
                            );
                        })}
                    </div>

                    {/* Check the selected answer or continue after feedback */}
                    <div className="h-10 md:h-12 shrink-0">
                        {!isChecked ? (
                            <button disabled={selectedOption === null} onClick={onCheck}
                                className={`w-full h-full rounded-xl font-bold text-sm transition-all shadow-sm ${selectedOption !== null ? 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>
                                בדיקת תשובה
                            </button>
                        ) : (
                            <button onClick={onNext} className="w-full h-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer">
                                {currentIndex < totalQuestions - 1 ? 'לשאלה הבאה ←' : 'סיום וצפייה בתוצאות 🎯'}
                            </button>
                        )}
                    </div>

                    {/* Show correctness feedback and the explanation after checking */}
                    <div dir={isHebrewExplanation ? 'rtl' : 'ltr'} aria-live="polite" className={`h-16 md:h-20 shrink-0 overflow-y-auto p-1 rounded-xl border-r-4 transition-opacity duration-200 ${isChecked
                        ? 'opacity-100 ' + (selectedOption === question.answer ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-amber-50 border-amber-500 text-amber-900')
                        : 'opacity-0 pointer-events-none border-transparent bg-transparent'
                        }`}>
                        {isChecked && (
                            <>
                                <div className={`font-bold ${isHebrewExplanation ? 'text-xs md:text-sm' : 'text-sm md:text-base'}`}>
                                    {selectedOption === question.answer ? '✨ נכון מאוד!' : '💡 הסבר:'}
                                </div>
                                <p className={`leading-snug ${isHebrewExplanation ? 'text-xs md:text-sm text-right' : 'text-sm md:text-base text-left'}`}>
                                    {question.explanation}
                                </p>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

// Expose the component globally so App.js can render it from the browser.
window.Quiz = Quiz;