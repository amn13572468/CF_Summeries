/**
 * WelcomeScreen Component
 * Restores interactive level selection and sets teacher automatically behind the scenes.
 */
const WelcomeScreen = ({
    studentInfo,
    setStudentInfo,
    quizTopic,
    onStart
}) => {
    // Available difficulty options
    const levels = [
        { id: 'all', label: 'הכל (מרתון)', icon: '🎯', style: 'border-indigo-500 bg-indigo-50 text-indigo-900 font-bold' },
        { id: 'easy', label: 'רמה קלה', icon: '🌱', style: 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold' },
        { id: 'medium', label: 'רמה בינונית', icon: '⚡', style: 'border-amber-500 bg-amber-50 text-amber-900 font-bold' },
        { id: 'hard', label: 'רמה מתקדמת', icon: '🔥', style: 'border-rose-500 bg-rose-50 text-rose-900 font-bold' }
    ];

    // Handle text input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentInfo(prev => ({ ...prev, [name]: value }));
    };

    // Handle interactive level selection
    const handleLevelSelect = (levelId) => {
        setStudentInfo(prev => ({ ...prev, level: levelId }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (studentInfo.name?.trim()) {
            // Set default teacher behind the scenes if not defined
            setStudentInfo(prev => ({
                ...prev,
                teacher: prev.teacher || 'מורה',
                level: prev.level || 'all'
            }));
            onStart();
        }
    };

    const currentLevel = studentInfo.level || 'all';

    return (
        <div className="min-h-screen py-8 px-4 flex flex-col items-center justify-center bg-slate-100">
            <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">

                {/* Header & Practice Topic */}
                <div className="text-center">
                    <span className="inline-flex items-center bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                        📚 {quizTopic || 'תרגול C#'}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800">אתגר הקוד ב-#C</h1>
                    <p className="text-xs md:text-sm text-slate-500 mt-1">מלא/י פרטים ובחר/י רמת קושי להתחלת התרגול</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Student Name Input */}
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

                    {/* Class/Group Input */}
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

                    {/* Interactive Level Selection Grid */}
                    <div className="text-right">
                        <label className="block text-xs font-bold text-slate-700 mb-2">בחר/י רמת קושי לתרגול *</label>
                        <div className="grid grid-cols-2 gap-2">
                            {levels.map((lvl) => {
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

                    {/* Submit Button */}
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