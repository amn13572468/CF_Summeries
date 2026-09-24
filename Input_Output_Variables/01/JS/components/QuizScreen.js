/**
 * QuizScreen Component
 * Fixed Hebrew text direction (RTL) for questions and explanations.
 */
const getLevelBadge = (level) => {
    switch (level) {
        case 'easy':
            return {
                label: 'רמה קלה',
                icon: '🌱',
                style: 'bg-emerald-100 text-emerald-800 border-emerald-200'
            };
        case 'medium':
            return {
                label: 'רמה בינונית',
                icon: '⚡',
                style: 'bg-amber-100 text-amber-800 border-amber-200'
            };
        case 'hard':
        case 'advanced':
            return {
                label: 'רמה מתקדמת',
                icon: '🔥',
                style: 'bg-rose-100 text-rose-800 border-rose-200'
            };
        default:
            return {
                label: 'תרגול',
                icon: '🎯',
                style: 'bg-indigo-100 text-indigo-800 border-indigo-200'
            };
    }
};

const QuizScreen = ({
    studentInfo,
    quizTopic,
    question,
    currentIndex,
    totalQuestions,
    selectedOption,
    setSelectedOption,
    isChecked,
    onCheck,
    onNext
}) => {
    // Calculate progress percentage
    const progress = ((currentIndex + 1) / totalQuestions) * 100;

    // Get badge configuration for current question
    const levelBadge = getLevelBadge(question.level);

    return (
        <div className="min-h-screen py-4 px-2 flex flex-col items-center justify-start md:pt-4 bg-slate-100 overflow-y-scroll" dir="rtl">
            <div className="max-w-3xl w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">

                {/* User & Quiz Info Bar */}
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
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 h-1.5 shrink-0">
                    <div className="bg-indigo-500 h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>

                {/* Main Content Area */}
                <div className="p-4 md:p-5 space-y-3 text-right">

                    {/* Header Info */}
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400">שאלה {currentIndex + 1} מתוך {totalQuestions}</span>

                        {/* Dynamic Level Badge */}
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border flex items-center space-x-1 space-x-reverse ${levelBadge.style}`}>
                            <span>{levelBadge.icon}</span>
                            <span>{levelBadge.label}</span>
                        </span>
                    </div>

                    {/* Question Title (Explicit RTL & Full Width) */}
                    <div className="min-h-[40px] flex items-center w-full" dir="rtl">
                        <h2 className="text-lg md:text-xl font-bold text-slate-800 text-right leading-snug w-full">
                            {question.question}
                        </h2>
                    </div>

                    {/* C# Code Container (Always LTR for code) */}
                    <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner" dir="ltr">
                        <div className="bg-slate-800/80 px-3 py-1 flex items-center justify-between text-[11px] text-slate-400 font-mono border-b border-slate-700/50">
                            <span>C# Code</span>
                        </div>
                        <pre className="code-font text-emerald-400 p-3 text-xs md:text-sm leading-relaxed overflow-y-auto whitespace-pre-wrap h-40">
                            {question.code}
                        </pre>
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {question.options.map((opt, idx) => (
                            <button key={idx} disabled={isChecked} onClick={() => setSelectedOption(idx)}
                                className={`w-full p-3 rounded-xl border-2 text-right transition-all flex items-center justify-between h-[50px]
                                    ${selectedOption === idx ? 'border-indigo-500 bg-indigo-50/60 font-semibold' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}
                                    ${isChecked && idx === question.answer ? 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold' : ''}
                                    ${isChecked && selectedOption === idx && idx !== question.answer ? 'border-rose-400 bg-rose-50 text-rose-800' : ''}`}
                            >
                                <span className="ltr-content code-font text-xs md:text-sm truncate">{opt}</span>
                                <span className="text-xs font-bold shrink-0 mr-2">{idx + 1}</span>
                            </button>
                        ))}
                    </div>

                    {/* Action Button Container */}
                    <div>
                        {!isChecked ? (
                            <button disabled={selectedOption === null} onClick={onCheck}
                                className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm ${selectedOption !== null ? 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>
                                בדיקת תשובה
                            </button>
                        ) : (
                            <button onClick={onNext} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer">
                                {currentIndex < totalQuestions - 1 ? 'לשאלה הבאה ←' : 'סיום וצפייה בתוצאות 🎯'}
                            </button>
                        )}
                    </div>

                    {/* Feedback Explanation Box (Explicit RTL) */}
                    <div dir="rtl" className={`min-h-[70px] p-3 rounded-xl border-r-4 text-xs md:text-sm transition-all duration-500 ease-in-out ${isChecked
                            ? 'opacity-100 translate-y-0 ' + (selectedOption === question.answer ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-amber-50 border-amber-500 text-amber-900')
                            : 'opacity-0 -translate-y-2 pointer-events-none border-transparent bg-transparent'
                        }`}>
                        {isChecked && (
                            <>
                                <div className="font-bold mb-0.5">
                                    {selectedOption === question.answer ? '✨ נכון מאוד!' : '💡 הסבר:'}
                                </div>
                                <p className="text-right leading-relaxed">{question.explanation}</p>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};