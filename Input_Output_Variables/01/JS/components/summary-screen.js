/**
 * SummaryScreen Component
 * Displays student info, final score percentage, submission status,
 * and a full breakdown of all answered questions with errors, correct answers, and explanations.
 */
const { useState, useEffect } = React;

const SummaryScreen = ({
    studentInfo = {},
    finalScore = 0,
    userAnswers = [],
    isSending,
    sendSuccess,
    onReset,
    onNextLevel,
    nextLevel
}) => {
    return (
        <div className="min-h-screen py-10 px-4 bg-slate-100 flex justify-center items-start" dir="rtl">
            <div className="max-w-3xl w-full bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-sm">

                {/* באנר הודעת הצלחה */}
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl font-bold text-center">
                    {isSending
                        ? 'שמירת תוצאות...'
                        : sendSuccess
                            ? 'כל הכבוד, האתגר הושלם! 🎉 כפתורי ההמשך בתחתית העמוד 👇'
                            : 'התרגול הסתיים 🎉'}
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-slate-800">סיכום האתגר</h2>
                </div>

                {/* פרטי תלמיד וציון */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-right space-y-2">
                        <h3 className="font-bold text-slate-700 text-sm border-b pb-2">פרטי התלמיד/ה</h3>
                        <div><span className="text-xs text-slate-500">שם מלא: </span><strong>{studentInfo?.name || 'תלמיד/ה'}</strong></div>
                        <div><span className="text-xs text-slate-500">כיתה: </span><strong>{studentInfo?.classGroup || '-'}</strong></div>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 flex flex-col items-center justify-center text-center">
                        <span className="text-xs font-bold text-indigo-600 uppercase">ציון סופי</span>
                        <div className="text-5xl font-black text-indigo-600 mt-1">{finalScore}%</div>
                    </div>
                </div>

                {/* פירוט תשובות והסברים */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                    <h3 className="text-lg font-bold text-slate-800 text-right">פירוט התשובות והסברים:</h3>

                    <div className="space-y-4">
                        {userAnswers && userAnswers.map((item, idx) => (
                            <div
                                key={idx}
                                className={`p-5 rounded-xl border text-right transition-all ${item?.isCorrect
                                    ? 'bg-emerald-50/40 border-emerald-200'
                                    : 'bg-rose-50/40 border-rose-200'
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item?.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                        }`}>
                                        {item?.isCorrect ? '✓ תשובה נכונה' : '✗ תשובה שגויה'}
                                    </span>
                                    <span className="text-xs font-bold text-slate-500">שאלה {idx + 1}</span>
                                </div>

                                <h4 className="font-bold text-slate-800 text-base mb-2">{item?.question}</h4>

                                {item?.code && (
                                    <div className="mb-3 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 p-3 text-xs" dir="ltr">
                                        <pre className="code-font text-emerald-400 overflow-x-auto whitespace-pre-wrap max-h-48">{item.code}</pre>
                                    </div>
                                )}

                                <div className="text-xs md:text-sm space-y-1 mb-3">
                                    <div>
                                        <span className="font-semibold text-slate-600">תשובתך: </span>
                                        <span className={`code-font ltr-content font-bold ${item?.isCorrect ? 'text-emerald-700' : 'text-rose-600'}`}>
                                            {item?.options && item.selectedOption !== null && item.selectedOption !== undefined
                                                ? item.options[item.selectedOption]
                                                : <span className="text-slate-400 font-normal">(לא נבחרה תשובה)</span>}
                                        </span>
                                    </div>
                                    {!item?.isCorrect && (
                                        <div>
                                            <span className="font-semibold text-slate-600">התשובה הנכונה: </span>
                                            <span className="code-font ltr-content font-bold text-emerald-700">
                                                {item?.options && item.answer !== undefined ? item.options[item.answer] : ''}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-white/80 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                                    <strong className="block mb-0.5 text-slate-800">💡 הסבר:</strong>
                                    {item?.explanation}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* כפתורי פעולה בתחתית */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                        onClick={onReset}
                        className="w-full sm:w-1/2 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-bold transition-all shadow-sm cursor-pointer"
                    >
                        חזרה למסך הראשי 🔄
                    </button>

                    {nextLevel && (
                        <button
                            onClick={onNextLevel}
                            className="w-full sm:w-1/2 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md cursor-pointer"
                        >
                            {nextLevel === 'medium' && 'מעבר לרמה בינונית ⚡ ←'}
                            {nextLevel === 'hard' && 'מעבר לרמה מתקדמת 🔥 ←'}
                            {nextLevel === 'all' && 'מעבר למרתון שאלות 🎯 ←'}
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};

// Global assignment to window
// To ensure `app.js` recognizes the components for the various screens, 
// Explicit assign them to the `window` object at the bottom of the file
window.SummaryScreen = SummaryScreen;
