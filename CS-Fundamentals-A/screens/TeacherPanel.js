/**
 * TeacherPanel Component
 * Admin dashboard allowing the teacher to unlock/lock specific syllabus topics for students.
 */
const { useState, useEffect } = React;

const TeacherPanel = ({ onBackToWelcome }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [syllabusState, setSyllabusState] = useState(null);

    // Load syllabus configuration and check local storage overrides on mount
    useEffect(() => {
        const baseSyllabus = window.CSHARP_SYLLABUS || {};
        try {
            const savedTopicsConfig = localStorage.getItem('teacher_syllabus_config');
            if (savedTopicsConfig) {
                const parsed = JSON.parse(savedTopicsConfig);
                setSyllabusState(parsed);
            } else {
                setSyllabusState(baseSyllabus);
            }
        } catch (e) {
            console.error("Error loading saved teacher config:", e);
            setSyllabusState(baseSyllabus);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple password for teacher access (can be configured or changed)
        if (passwordInput === 'avivah2026' || passwordInput === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('סיסמת מורה שגויה. נסי שנית.');
        }
    };

    const handleToggleTopic = (unitId, topicId) => {
        if (!syllabusState) return;

        const updated = { ...syllabusState };
        if (updated[unitId] && updated[unitId].topics) {
            updated[unitId].topics = updated[unitId].topics.map(t => {
                if (t.id === topicId) {
                    return { ...t, isOpen: !t.isOpen };
                }
                return t;
            });
        }

        setSyllabusState(updated);
        try {
            localStorage.setItem('teacher_syllabus_config', JSON.stringify(updated));
        } catch (e) {
            console.error("Error saving to localStorage:", e);
        }
    };

    // If not authenticated, show password prompt
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen py-10 px-4 flex flex-col items-center justify-center bg-slate-900 text-slate-100" dir="rtl">
                <div className="max-w-md w-full bg-slate-800 rounded-2xl border border-slate-700 shadow-xl p-6 md:p-8 space-y-6">
                    <div className="text-center">
                        <span className="text-3xl mb-2 block">🔒</span>
                        <h2 className="text-2xl font-extrabold text-white">כניסת מורה (Admin)</h2>
                        <p className="text-xs text-slate-400 mt-1">הקלידי סיסמת ניהול לשליטה בסילבוס ובנושאים הפתוחים</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1">סיסמת ניהול</label>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                placeholder="הכנס סיסמה..."
                                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500"
                                autoFocus
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all cursor-pointer shadow-md"
                        >
                            כניסה ללוח בקרה 🔓
                        </button>
                    </form>

                    <div className="text-center pt-2 border-t border-slate-700">
                        <button
                            onClick={onBackToWelcome}
                            className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                        >
                            ← חזרה למסך הראשי
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const unitData = syllabusState?.basicsA;

    return (
        <div className="min-h-screen py-8 px-4 flex flex-col items-center justify-start bg-slate-100" dir="rtl">
            <div className="max-w-2xl w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">

                {/* Header */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                    <div>
                        <span className="inline-flex items-center bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold mb-1">
                            🛠️ לוח בקרה למורה
                        </span>
                        <h1 className="text-xl md:text-2xl font-extrabold text-slate-800">ניהול נושאים ופתיחת תכנים</h1>
                    </div>
                    <button
                        onClick={onBackToWelcome}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                        יציאה מהמערכת 🚪
                    </button>
                </div>

                <p className="text-xs text-slate-500">
                    כאן באפשרותך לסמן אילו נושאים פתוחים כרגע לתרגול עבור התלמידים. נושאים מסומנים בירוק (פתוח) יוצגו לתלמידים, ונושאים באפור (נעול) יהיו מוסתרים. השינויים נשמרים אוטומטית.
                </p>

                {/* Topics control list */}
                <div className="space-y-2 max-h-[400px] overflow-y-auto p-1">
                    {unitData?.topics?.map((topic) => {
                        return (
                            <div
                                key={topic.id}
                                className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                                    topic.isOpen 
                                        ? 'border-emerald-200 bg-emerald-50/40 text-emerald-900' 
                                        : 'border-slate-200 bg-slate-50 text-slate-500 opacity-75'
                                }`}
                            >
                                <div className="space-y-0.5 flex-1 pr-2">
                                    <div className="flex items-center space-x-2 space-x-reverse">
                                        <span className="text-base">{topic.isOpen ? '🟢' : '🔒'}</span>
                                        <h3 className="font-bold text-sm text-slate-800">{topic.title}</h3>
                                    </div>
                                    <p className="text-xs text-slate-500 pr-6">{topic.desc}</p>
                                </div>

                                <button
                                    onClick={() => handleToggleTopic('basicsA', topic.id)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer shrink-0 ${
                                        topic.isOpen
                                            ? 'bg-rose-500 hover:bg-rose-600 text-white'
                                            : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                    }`}
                                >
                                    {topic.isOpen ? 'נעילת נושא 🔒' : 'פתיחת נושא לתלמידים 🔓'}
                                </button>
                            </div>
                        );
                    })}
                </div>

                <div className="pt-2 border-t border-slate-100 text-center">
                    <span className="text-[11px] text-slate-400">הגדרות אלו נשמרות בדפדפן המקומי עבור הכיתה הנוכחית</span>
                </div>

            </div>
        </div>
    );
};

// Export to window object
window.TeacherPanel = TeacherPanel;