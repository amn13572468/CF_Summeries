/* mooved to app.js
const handleResetProgress = () => {
    localStorage.removeItem('completedLevels');
    window.location.reload(); // רענון הדף כדי לעדכן את המצב ב-React
};

// בתוך ה-JSX (למשל מתחת לטופס):
<button
    type="button"
    onClick={handleResetProgress}
    className="text-xs text-slate-400 hover:text-rose-500 underline mt-4 block mx-auto cursor-pointer"
>
    🔄 איפוס התקדמות (לבדיקות)
</button>
*/

const WelcomeScreen = ({
    studentInfo,
    setStudentInfo,
    quizTopic,
    onStart,
    completedLevels = []
}) => {
    // רשימת הרמות
    const levels = [
        { id: 'easy', label: 'רמה קלה', icon: '🌱', style: 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold' },
        { id: 'medium', label: 'רמה בינונית', icon: '⚡', style: 'border-amber-500 bg-amber-50 text-amber-900 font-bold' },
        { id: 'hard', label: 'רמה מתקדמת', icon: '🔥', style: 'border-rose-500 bg-rose-50 text-rose-900 font-bold' },
        { id: 'all', label: 'הכל (מרתון)', icon: '🎯', style: 'border-indigo-500 bg-indigo-50 text-indigo-900 font-bold' }
    ];

    // בדיקה האם כל 3 הרמות הושלמו
    //const hasCompletedAllThree = ['easy', 'medium', 'hard'].every(lvl => completedLevels.includes(lvl));//Bug
    // In welcome-screen.js - check if the user has completed all three levels (easy, medium, hard)
    const hasCompletedAllThree = ['easy', 'medium', 'hard'].every(requiredLvl =>
        (completedLevels || []).some(userLvl => String(userLvl).trim().toLowerCase() === requiredLvl)
    );

    // סינון: כפתור המרתון 'all' יופיע אך ורק אם hasCompletedAllThree הוא true
    const visibleLevels = levels.filter(lvl => {
        if (lvl.id === 'all') return hasCompletedAllThree;
        return true;
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleLevelSelect = (levelId) => {
        setStudentInfo(prev => ({ ...prev, level: levelId }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (studentInfo.name?.trim()) {
            const selectedLevel = (studentInfo.level === 'all' && !hasCompletedAllThree)
                ? 'easy'
                : (studentInfo.level || 'easy');

            setStudentInfo(prev => ({
                ...prev,
                teacher: prev.teacher || 'מורה',
                level: selectedLevel
            }));

            onStart(selectedLevel);
        }
    };

    const currentLevel = (studentInfo.level === 'all' && !hasCompletedAllThree)
        ? 'easy'
        : (studentInfo.level || 'easy');

    return (
        <div className="min-h-screen py-8 px-4 flex flex-col items-center justify-center bg-slate-100">
            <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">

                <div className="text-center">
                    <span className="inline-flex items-center bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                        📚 {quizTopic || 'תרגול C#'}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800">אתגר הקוד ב-#C</h1>
                    <p className="text-xs md:text-sm text-slate-500 mt-1">מלא/י פרטים ובחר/י רמת קושי להתחלת התרגול</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="text-right">
                        <label className="block text-xs font-bold text-slate-700 mb-1">שם פרטי ומשפחה *</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={studentInfo.name || ''}
                            onChange={handleChange}
                            placeholder="הכנס/י שם מלא"
                            className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="text-right">
                        <label className="block text-xs font-bold text-slate-700 mb-1">כיתה / קבוצה</label>
                        <input
                            type="text"
                            name="classGroup"
                            value={studentInfo.classGroup || ''}
                            onChange={handleChange}
                            placeholder="לדוגמה: י'2"
                            className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="text-right">
                        <label className="block text-xs font-bold text-slate-700 mb-2">בחר/י רמת קושי לתרגול *</label>
                        <div className="grid grid-cols-2 gap-2">
                            {visibleLevels.map((lvl) => {
                                const isSelected = currentLevel === lvl.id;
                                return (
                                    <button
                                        key={lvl.id}
                                        type="button"
                                        onClick={() => handleLevelSelect(lvl.id)}
                                        className={`p-3 rounded-xl border-2 text-xs transition-all flex items-center justify-center space-x-1.5 space-x-reverse cursor-pointer ${isSelected
                                            ? `${lvl.style} shadow-sm ring-2 ring-indigo-400/20`
                                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                                            }`}
                                    >
                                        <span>{lvl.icon}</span>
                                        <span>{lvl.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all shadow-md mt-2 cursor-pointer"
                    >
                        התחלת תרגול 🚀
                    </button>
                </form>

            </div>
        </div>
    );
};

// To ensure `app.js` recognizes the components for the various screens,
// Explicit assign them to the `window` object at the bottom of the file
window.WelcomeScreen = WelcomeScreen;
