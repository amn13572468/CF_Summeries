/**
 * SummaryScreen Component
 * Displays student info, final score percentage, submission status,
 * and a full breakdown of all answered questions with errors, correct answers, and explanations.
 */
const SummaryScreen = ({ studentInfo, finalScore, userAnswers, isSending, sendSuccess, onReset }) => {
    return (
        <div className="min-h-screen py-10 px-4 bg-slate-100 flex justify-center items-start">
            <div className="max-w-3xl w-full bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-sm">

                {/* Submission Status Alert Banner */}
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl font-bold text-center">
                    {isSending ? 'שולח תוצאות למורה...' : sendSuccess ? 'התוצאות נשלחו בהצלחה למורה! 🚀' : 'התרגול הסתיים 🎉'}
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-slate-800">סיכום האתגר</h2>
                </div>

                {/* Student Summary Info & Score Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-right space-y-2">
                        <h3 className="font-bold text-slate-700 text-sm border-b pb-2">פרטי התלמיד/ה</h3>
                        <div><span className="text-xs text-slate-500">שם מלא: </span><strong>{studentInfo.name}</strong></div>
                        <div><span className="text-xs text-slate-500">כיתה: </span><strong>{studentInfo.classGroup}</strong></div>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 flex flex-col items-center justify-center text-center">
                        <span className="text-xs font-bold text-indigo-600 uppercase">ציון סופי</span>
                        <div className="text-5xl font-black text-indigo-600 mt-1">{finalScore}%</div>
                    </div>
                </div>

                {/* Detailed Questions & Explanations Review */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                    <h3 className="text-lg font-bold text-slate-800 text-right">פירוט התשובות והסברים:</h3>

                    <div className="space-y-4">
                        {userAnswers.map((item, idx) => (
                            <div
                                key={idx}
                                className={`p-5 rounded-xl border text-right transition-all ${item.isCorrect
                                        ? 'bg-emerald-50/40 border-emerald-200'
                                        : 'bg-rose-50/40 border-rose-200'
                                    }`}
                            >
                                {/* Question Header (Badge & Index) */}
                                <div className="flex justify-between items-center mb-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                        }`}>
                                        {item.isCorrect ? '✓ תשובה נכונה' : '✗ תשובה שגויה'}
                                    </span>
                                    <span className="text-xs font-bold text-slate-500">שאלה {idx + 1}</span>
                                </div>

                                {/* Question Text */}
                                <h4 className="font-bold text-slate-800 text-base mb-2">{item.question}</h4>

                                {/* C# Code Snippet (If Present) */}
                                {item.code && (
                                    <div className="mb-3 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 p-3 text-xs">
                                        <pre className="code-font text-emerald-400 overflow-x-auto whitespace-pre-wrap">{item.code}</pre>
                                    </div>
                                )}

                                {/* Selected Option vs Correct Answer */}
                                <div className="text-xs md:text-sm space-y-1 mb-3">
                                    <div>
                                        <span className="font-semibold text-slate-600">תשובתך: </span>
                                        <span className={`code-font ltr-content font-bold ${item.isCorrect ? 'text-emerald-700' : 'text-rose-600'}`}>
                                            {item.options[item.selectedOption]}
                                        </span>
                                    </div>
                                    {!item.isCorrect && (
                                        <div>
                                            <span className="font-semibold text-slate-600">התשובה הנכונה: </span>
                                            <span className="code-font ltr-content font-bold text-emerald-700">
                                                {item.options[item.answer]}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Detailed Explanation Box */}
                                <div className="bg-white/80 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                                    <strong className="block mb-0.5 text-slate-800">💡 הסבר:</strong>
                                    {item.explanation}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Restart Button */}
                <button
                    onClick={onReset}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md"
                >
                    חזרה למסך הראשי 🔄
                </button>
            </div>
        </div>
    );
};