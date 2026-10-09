/**
 * Topics Component
 * Screen for selecting study units and C# syllabus topics.
 * Displays topics unlocked/locked by the teacher in CSHARP_SYLLABUS.
 */
const { useState, useEffect } = React;

// The Topics component receives student info and callbacks for topic selection and navigation.
// Add onBack and onOpenTeacherPanel props for navigation and teacher panel access.
const Topics = ({ studentInfo, onSelectTopic, onSelectPreparation, onBack, onOpenTeacherPanel }) => {
    const [syllabus, setSyllabus] = useState({});

    useEffect(() => {
        // Prefer saved teacher settings, then migrate legacy topic data, then use defaults.
        const savedSyllabus = localStorage.getItem('CSHARP_SYLLABUS_STATE');
        const savedTopics = localStorage.getItem('teacher_syllabus');
        if (savedSyllabus) {
            try {
                setSyllabus(JSON.parse(savedSyllabus));
            } catch (e) {
                console.error("Error parsing syllabus state", e);
                setSyllabus(window.CSHARP_SYLLABUS || {});
            }
        } else if (savedTopics) {
            try {
                setSyllabus({
                    ...(window.CSHARP_SYLLABUS || {}),
                    basicsA: {
                        ...window.CSHARP_SYLLABUS?.basicsA,
                        topics: JSON.parse(savedTopics)
                    }
                });
            } catch (e) {
                console.error("Error parsing saved topics", e);
                setSyllabus(window.CSHARP_SYLLABUS || {});
            }
        } else {
            setSyllabus(window.CSHARP_SYLLABUS || {});
        }
    }, []);

    // Use saved topics for teacher toggles, but keep category labels current from the bundled config.
    const savedCategory = syllabus.basicsA;
    const configuredCategory = window.CSHARP_SYLLABUS?.basicsA;
    const category = {
        ...(savedCategory || {}),
        ...(configuredCategory || {}),
        topics: savedCategory?.topics || configuredCategory?.topics || []
    };

    return (
        <div className="min-h-screen py-8 px-4 bg-slate-100 flex justify-center" dir="rtl">
            <div className="max-w-3xl w-full bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-sm text-right">
                
                {/* Header, student greeting, and navigation controls */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">📚 בחירת נושא לתרגול</h2>
                        <p className="text-xs text-slate-500 mt-1">
                            שלום <span className="font-bold text-slate-700">{studentInfo?.name || 'תלמיד/ה'}</span>, בחר/י נושא מתוך הנושאים הפתוחים:
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                        <button 
                            onClick={onOpenTeacherPanel} 
                            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold"
                        >
                            ⚙️ לוח מורה
                        </button>
                        <button 
                            onClick={onBack} 
                            className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold"
                        >
                            חזרה ←
                        </button>
                    </div>
                </div>

                {/* Render each topic as open for practice or locked by the teacher */}
                <div className="space-y-4">
                    <h3 className="font-bold text-slate-700 text-base flex items-center">
                        <span className="ml-2">{category.icon || '🌱'}</span> {category.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.topics && category.topics.map(topic => {
                            // Config supplies current labels and bank keys; saved state keeps teacher toggles.
                            const configuredTopic = window.CSHARP_SYLLABUS?.basicsA?.topics?.find(
                                configuredTopic => configuredTopic.id === topic.id
                            );
                            const currentTopic = {
                                ...topic,
                                ...(configuredTopic || {}),
                                isOpen: topic.isOpen ?? configuredTopic?.isOpen,
                                isTestPrepOpen: topic.isTestPrepOpen ?? configuredTopic?.isTestPrepOpen
                            };
                            const preparationQuestionsKey = currentTopic.preparationQuestionsKey;
                            // Only enable preparation when its separately loaded bank contains questions.
                            const hasPreparationQuestions = Array.isArray(window[preparationQuestionsKey])
                                && window[preparationQuestionsKey].length > 0;

                            return (
                                <div 
                                    key={topic.id}
                                    onClick={() => {
                                        if (currentTopic.isOpen) {
                                            onSelectTopic({
                                                id: currentTopic.id,
                                                title: currentTopic.title,
                                                sheetName: currentTopic.sheetName || currentTopic.id,
                                                questionsKey: currentTopic.questionsKey || 'allIOVQuestions'
                                            });
                                        }
                                    }}
                                    className={`p-4 rounded-xl border transition-all flex flex-col justify-between space-y-3 ${
                                        currentTopic.isOpen
                                            ? 'bg-white border-slate-200 hover:border-indigo-500 hover:shadow-md cursor-pointer' 
                                            : 'bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed'
                                    }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-slate-800 text-sm">{currentTopic.title}</h4>
                                        <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                                            currentTopic.isOpen
                                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                                                : 'bg-slate-200 text-slate-600'
                                        }`}>
                                            {currentTopic.isOpen ? 'פתוח לתרגול ✅' : 'נעול 🔒'}
                                        </span>
                                    </div>

                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        {currentTopic.desc}
                                    </p>

                                    <div className="pt-2 border-t border-slate-100 flex justify-end">
                                        <span className={`text-xs font-bold ${currentTopic.isOpen ? 'text-indigo-600' : 'text-slate-400'}`}>
                                            {currentTopic.isOpen ? 'התחל תרגול ←' : 'ממתין לפתיחה ע"י המורה'}
                                        </span>
                                    </div>
                                    {/* Teacher visibility and bank availability jointly control this activity. */}
                                    {currentTopic.isTestPrepOpen && (
                                        <div className="border-t border-slate-100 pt-2 space-y-1">
                                            {hasPreparationQuestions ? (
                                                <button
                                                    type="button"
                                                    onClick={event => {
                                                        // Keep this action from bubbling to the card's homework click handler.
                                                        event.stopPropagation();
                                                        onSelectPreparation({
                                                            id: currentTopic.id,
                                                            title: currentTopic.title,
                                                            sheetName: currentTopic.sheetName || currentTopic.id,
                                                            preparationQuestionsKey
                                                        });
                                                    }}
                                                    className="w-full rounded-lg bg-amber-100 px-3 py-2 text-xs font-bold text-amber-900 hover:bg-amber-200"
                                                >
                                                    הכנה למבחן
                                                </button>
                                            ) : (
                                                <>
                                                    <button
                                                        type="button"
                                                        disabled
                                                        title="מאגר שאלות ההכנה למבחן עדיין לא הוגדר"
                                                        className="w-full rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-400 cursor-not-allowed"
                                                    >
                                                        הכנה למבחן
                                                    </button>
                                                    <p className="text-[11px] text-slate-400">מאגר שאלות ההכנה עדיין לא נוסף.</p>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

// Expose the component globally for the browser-loaded application controller.
window.Topics = Topics;