/**
 * TeacherPanel Component
 * Admin controls for unlocking/locking syllabus topics and setting access rules.
 */
const { useState, useEffect } = React;

const TeacherPanel = ({ onBack }) => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [topics, setTopics] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        // Restore the saved syllabus, supporting the older array-only storage format.
        const savedSyllabus = localStorage.getItem('CSHARP_SYLLABUS_STATE');
        const savedTopics = localStorage.getItem('teacher_syllabus');
        if (savedSyllabus) {
            setTopics(JSON.parse(savedSyllabus).basicsA?.topics || []);
        } else if (savedTopics) {
            setTopics(JSON.parse(savedTopics));
        } else if (window.CSHARP_SYLLABUS?.basicsA?.topics) {
            setTopics(window.CSHARP_SYLLABUS.basicsA.topics);
        }
    }, []);

    /*const handleLogin = (e) => {
        e.preventDefault();
        // Temporary hard-coded password used during testing.
        if (password === 'XXXX') { // החלף ב-1234 או סיסמה אחרת
            setIsAuthenticated(true);
            setErrorMsg('');
        } else {
            setErrorMsg('סיסמה שגויה, נסה שוב.');
        }
    };*/
    /*const handleLogin = async () => {
        const isValid = await verifyTeacherPassword(inputPassword);
        if (isValid) {
            setIsLoggedIn(true);
            localStorage.setItem('isTeacherLoggedIn', 'true');
        } else {
            alert("סיסמה שגויה!");
        }
    };*/
    const handleLogin = async (e) => {
        e.preventDefault();

        const isValid = await verifyTeacherPassword(password);

        if (isValid) {
            setIsAuthenticated(true);
            setErrorMsg('');
            localStorage.setItem('isTeacherLoggedIn', 'true');
        } else {
            setErrorMsg('סיסמה שגויה, נסה שוב.');
        }
    };
    const toggleTopicLock = (topicId) => {
        // Toggle one topic and persist the full syllabus object for the student screen.
        const updatedTopics = topics.map(t =>
            t.id === topicId ? { ...t, isOpen: !t.isOpen } : t
        );
        setTopics(updatedTopics);
        const syllabus = JSON.parse(localStorage.getItem('CSHARP_SYLLABUS_STATE')) || window.CSHARP_SYLLABUS || {};
        localStorage.setItem('CSHARP_SYLLABUS_STATE', JSON.stringify({
            ...syllabus,
            basicsA: {
                ...syllabus.basicsA,
                topics: updatedTopics
            }
        }));
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4" dir="rtl">
                <div className="max-w-md w-full bg-white rounded-2xl p-6 shadow-md border border-slate-200 text-right space-y-4">
                    <div className="text-center">
                        <span className="text-4xl">🔐</span>
                        <h2 className="text-xl font-bold text-slate-800 mt-2">כניסת מורה / מנהל</h2>
                        <p className="text-xs text-slate-500 mt-1">הכנס סיסמה לניהול נעילת הנושאים</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-3">
                        <input
                            type="password"
                            placeholder="הכנס סיסמה (ברירת מחדל: 1234)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded-xl text-left font-mono text-sm focus:outline-none focus:border-indigo-500"
                        />
                        {errorMsg && <p className="text-xs text-rose-600 font-bold">{errorMsg}</p>}

                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm cursor-pointer"
                        >
                            כניסה ללוח הבקרה
                        </button>
                    </form>

                    <button
                        onClick={onBack}
                        className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-bold"
                    >
                        ← חזרה
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 p-4 md:p-8" dir="rtl">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
                {/* Panel title and return navigation */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h2 className="text-2xl font-black text-slate-800">👩‍🏫 לוח בקרת מורה</h2>
                        <p className="text-xs text-slate-500">נעילה ושחרור נושאים לתלמידים בסילבוס</p>
                    </div>
                    <button
                        onClick={onBack}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold"
                    >
                        חזרה לאפליקציה ↵
                    </button>
                </div>

                {/* Topic access controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topics.map((topic) => (
                        <div
                            key={topic.id}
                            className={`p-4 rounded-xl border flex items-center justify-between transition-all ${topic.isOpen ? 'bg-emerald-50/50 border-emerald-200' : 'bg-slate-50 border-slate-200'
                                }`}
                        >
                            <div className="space-y-1">
                                <div className="font-bold text-slate-800 text-sm">{topic.title}</div>
                                <div className="text-xs text-slate-500">{topic.desc}</div>
                            </div>

                            <button
                                onClick={() => toggleTopicLock(topic.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${topic.isOpen
                                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                    : 'bg-rose-100 text-rose-700 hover:bg-rose-200 border border-rose-300'
                                    }`}
                            >
                                {topic.isOpen ? '🔓 פתוח לתלמיד' : '🔒 נעול לתרגול'}
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

window.TeacherPanel = TeacherPanel;