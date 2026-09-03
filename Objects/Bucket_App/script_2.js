// Disable devtools
document.addEventListener('contextmenu', e => e.preventDefault());

// Navigation
function switchTab(tabId) {
    const tabs = ['tab-intro', 'tab-simulator', 'tab-theory', 'tab-bugs', 'tab-worksheet', 'tab-quiz'];
    tabs.forEach(t => {
        const el = document.getElementById(t);
        const navEl = document.getElementById('nav-' + t);
        if (el) el.classList.add('hidden');
        if (navEl) navEl.classList.remove('active-tab');
    });
    const targetEl = document.getElementById(tabId);
    const targetNavEl = document.getElementById('nav-' + tabId);
    if (targetEl) targetEl.classList.remove('hidden');
    if (targetNavEl) targetNavEl.classList.add('active-tab');

    if (tabId === 'tab-simulator') drawCanvas();
}

function checkThought(option) {
    const fb = document.getElementById('thought-feedback');
    fb.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-900', 'bg-rose-100', 'text-rose-900');
    if (option === 2) {
        fb.classList.add('bg-emerald-100', 'text-emerald-900');
        fb.innerHTML = "✅ <strong>נכון מאוד!</strong> דלי b2 קיבל 3 ליטר והתמלא. ב-b1 נותרו 2 ליטר מים!";
    } else {
        fb.classList.add('bg-rose-100', 'text-rose-900');
        fb.innerHTML = "❌ <strong>לא מדויק.</strong> זכור שדלי b2 יכול להכיל רק 3 ליטרים בתוכו.";
    }
}

// BUCKET ENGINE
class BucketInstance {
    constructor(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.currentAmount = 0;
        this.ramAddress = "0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(4, '0');
    }

    fill() { this.currentAmount = this.capacity; drawCanvas(); updateMemoryUI(); }
    empty() { this.currentAmount = 0; drawCanvas(); updateMemoryUI(); }
    addWater(amount) {
        this.currentAmount = Math.min(this.capacity, this.currentAmount + amount);
        drawCanvas(); updateMemoryUI();
    }
    pourInto(otherBucket) {
        const spaceLeft = otherBucket.capacity - otherBucket.currentAmount;
        const amountToPour = Math.min(this.currentAmount, spaceLeft);
        this.currentAmount -= amountToPour;
        otherBucket.currentAmount += amountToPour;
        drawCanvas(); updateMemoryUI();
    }
    isEmpty() { return this.currentAmount === 0; }
    isFull() { return this.currentAmount === this.capacity; }
    toString() { return `Cap:${this.capacity}, Water:${this.currentAmount}`; }
}

let buckets = { b1: null, b2: null };
const canvas = document.getElementById('bucketCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

function createBucket(id) {
    const cap = parseInt(document.getElementById('cap-' + id).value) || 5;
    buckets[id] = new BucketInstance(id, cap);
    drawCanvas();
    updateMemoryUI();
}

function runCommand(action) {
    const selectedId = document.getElementById('active-bucket-select').value;
    const b = buckets[selectedId];
    if (!b) { alert(`דלי ${selectedId} עדיין לא נוצר בזיכרון!`); return; }

    if (action === 'fill') b.fill();
    else if (action === 'empty') b.empty();
    else if (action === 'addWater') {
        const amt = parseInt(document.getElementById('input-amount').value) || 1;
        b.addWater(amt);
    }
}

function pourBucket(fromId, toId) {
    if (!buckets[fromId] || !buckets[toId]) {
        alert("שני הדליים חייבים להיות קיימים בזיכרון כדי לבצע מזיגה!");
        return;
    }
    buckets[fromId].pourInto(buckets[toId]);
}

function resetSimulator() {
    buckets = { b1: null, b2: null };
    drawCanvas();
    updateMemoryUI();
}

function runPresetScenario(type) {
    resetSimulator();
    if (type === 'diehard') {
        document.getElementById('cap-b1').value = 5;
        document.getElementById('cap-b2').value = 3;
        createBucket('b1'); createBucket('b2');
        buckets.b1.fill();
        setTimeout(() => buckets.b1.pourInto(buckets.b2), 600);
    } else if (type === 'aliasing') {
        createBucket('b1');
        buckets.b2 = buckets.b1;
        updateMemoryUI();
        alert("בוצעה ההשמה b2 = b1! שני המשתנים מצביעים על אותו דלי ב-Heap!");
    }
}

function drawCanvas() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Background Grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }

    if (buckets.b1) renderSingleBucket(buckets.b1, 140, 220, '#3b82f6');
    if (buckets.b2 && buckets.b2 !== buckets.b1) renderSingleBucket(buckets.b2, 360, 220, '#06b6d4');
}

function renderSingleBucket(b, x, y, color) {
    const width = 90;
    const height = 140;

    // Draw Water Level
    const waterHeight = (b.currentAmount / b.capacity) * height;
    ctx.fillStyle = color;
    ctx.fillRect(x - width / 2 + 4, y - waterHeight, width - 8, waterHeight);

    // Draw Bucket Outline
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.strokeRect(x - width / 2, y - height, width, height);

    // Text Info
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px Rubik, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${b.id} (${b.currentAmount}L / ${b.capacity}L)`, x, y + 20);
}

function updateMemoryUI() {
    ['b1', 'b2'].forEach(id => {
        const b = buckets[id];
        const card = document.getElementById('card-mem-' + id);
        if (!b) {
            card.classList.add('opacity-50');
            document.getElementById(`mem-addr-${id}`).innerText = 'null';
            document.getElementById(`${id}-tostring`).innerText = '-';
            document.getElementById(`${id}-capacity`).innerText = '-';
            document.getElementById(`${id}-amount`).innerText = '-';
            document.getElementById(`${id}-empty`).innerText = '-';
            document.getElementById(`${id}-full`).innerText = '-';
        } else {
            card.classList.remove('opacity-50');
            document.getElementById(`mem-addr-${id}`).innerText = b.ramAddress;
            document.getElementById(`${id}-tostring`).innerText = b.toString();
            document.getElementById(`${id}-capacity`).innerText = b.capacity;
            document.getElementById(`${id}-amount`).innerText = b.currentAmount;
            document.getElementById(`${id}-empty`).innerText = b.isEmpty();
            document.getElementById(`${id}-full`).innerText = b.isFull();
        }
    });
}

// BUG MODAL LOGIC
const bugDetails = {
    1: { title: "NullReferenceException (חריגת הצבעה ריקה)", content: "<p>הנסיונות להפעיל פעולות כמו <span class='code-font code-ltr'>b1.Fill()</span> לפני ביצוע <span class='code-font code-ltr'>new Bucket(...)</span> קורסים מכיוון שהמשתנה b1 מציב ערך null ב-Stack ולא מפנה לשום עצם ב-Heap.</p>" },
    2: { title: "Overflow Error (חריגה מקיבולת)", content: "<p>אם תוסיף מים ללא בדיקת תנאי של הקיבולת המקסימלית, הדלי יכיל כמות מים לא מציאותית. יש להשתמש ב-Math.Min או בתנאי if.</p>" },
    3: { title: "Aliasing Bug (כפילות הפניות)", content: "<p>בביצוע <span class='code-font code-ltr'>b2 = b1</span>, לא מועתק עצם חדש! שני המשתנים מצביעים לאותה כתובת בזיכרון Heap, ושינוי ב-b2 ישפיע ישירות על b1.</p>" },
    4: { title: "Private Field Violation", content: "<p>ניסיון לחטיפת שדות פרטיים <span class='code-font code-ltr'>b1.currentAmount = 10</span> יוכשל על ידי הקומפיילר עקב עקרון הכמוס (Encapsulation).</p>" }
};

function openBugModal(id) {
    document.getElementById('modalBugTitle').innerHTML = "🔍 " + bugDetails[id].title;
    document.getElementById('modalBugContent').innerHTML = bugDetails[id].content;
    document.getElementById('bugModal').classList.remove('hidden');
}
function closeBugModal() { document.getElementById('bugModal').classList.add('hidden'); }

function initQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = quizQuestions.map((q, idx) => `
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                        <h4 class="font-bold text-slate-900 text-sm">${idx + 1}. ${q.q}</h4>
                        <div class="space-y-1.5">
                            ${q.a.map((opt, oIdx) => `
                                <label class="flex items-center gap-2 text-xs text-slate-700 cursor-pointer bg-white p-2 rounded border border-slate-200 hover:bg-sky-50">
                                    <input type="radio" name="q_${idx}" value="${oIdx}" class="text-sky-600">
                                    <span>${opt}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `).join('');
}

window.onload = function () {
    initQuiz();
    createBucket('b1');
};
// TASK WORKSHEET ENGINE
let currentTaskId = 1;

const taskDefinitions = {
    1: {
        title: "משימה 1: קל (מדידת 2 ליטר)",
        desc: "נתונים שני דליים: <strong>b5</strong> (קיבולת 5) ו-<strong>b3</strong> (קיבולת 3). כתוב קוד שמביא את הדלי <strong>b5</strong> להכיל בדיוק <strong>2 ליטר מים</strong>.",
        initialCode: "Bucket b5 = new Bucket(5);\nBucket b3 = new Bucket(3);\n\n// כתוב את הפתרון שלך כאן\nb5.Fill();\n",
        solution: "b5.Fill();\nb5.PourInto(b3);",
        validate: (b5, b3) => b5.currentAmount === 2
    },
    2: {
        title: "משימה 2: בינוני (מדידת 4 ליטר)",
        desc: "נתונים שני דליים: <strong>b5</strong> (קיבולת 5) ו-<strong>b3</strong> (קיבולת 3). כתוב קוד שמביא את הדלי <strong>b5</strong> להכיל בדיוק <strong>4 ליטר מים</strong>.",
        initialCode: "Bucket b5 = new Bucket(5);\nBucket b3 = new Bucket(3);\n\n// כתוב את הפתרון שלך כאן\nb5.Fill();\n",
        solution: "b5.Fill();\nb5.PourInto(b3);\nb3.Empty();\nb5.PourInto(b3);\nb5.Fill();\nb5.PourInto(b3);",
        validate: (b5, b3) => b5.currentAmount === 4
    },
    3: {
        title: "משימה 3: קשה (מדידת 1 ליטר)",
        desc: "נתונים שני דליים: <strong>b7</strong> (קיבולת 7) ו-<strong>b4</strong> (קיבולת 4). כתוב קוד שמביא את הדלי <strong>b7</strong> להכיל בדיוק <strong>1 ליטר מים</strong>.",
        initialCode: "Bucket b7 = new Bucket(7);\nBucket b4 = new Bucket(4);\n\n// כתוב את הפתרון שלך כאן\nb7.Fill();\n",
        solution: "b7.Fill();\nb7.PourInto(b4);\nb4.Empty();\nb7.PourInto(b4);",
        validate: (b7, b4) => b7.currentAmount === 1
    }
};

function selectTask(id) {
    currentTaskId = id;
    for (let i = 1; i <= 3; i++) {
        const btn = document.getElementById(`task-btn-${i}`);
        if (i === id) {
            btn.className = "px-4 py-2 rounded-lg text-xs font-bold bg-sky-600 text-white transition-all shadow-sm";
        } else {
            btn.className = "px-4 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all";
        }
    }

    const task = taskDefinitions[id];
    document.getElementById('task-description-box').innerHTML = `
                <h3 class="font-bold text-slate-900 text-base">${task.title}</h3>
                <p class="text-sm text-slate-600 leading-relaxed">${task.desc}</p>
            `;
    document.getElementById('student-code').value = task.initialCode;
    document.getElementById('solution-code').innerText = task.solution;
    document.getElementById('solution-box').classList.add('hidden');
    document.getElementById('toggle-sol-btn').innerText = "💡 הצג פתרון";
    document.getElementById('execution-feedback').innerHTML = '<p class="text-slate-400 italic">לחץ על "בדוק פתרון" כדי להריץ את הקוד שלך...</p>';
}

function resetTaskCode() {
    document.getElementById('student-code').value = taskDefinitions[currentTaskId].initialCode;
}

function toggleSolution() {
    const solBox = document.getElementById('solution-box');
    const btn = document.getElementById('toggle-sol-btn');
    if (solBox.classList.contains('hidden')) {
        solBox.classList.remove('hidden');
        btn.innerText = "🙈 הסתר פתרון";
    } else {
        solBox.classList.add('hidden');
        btn.innerText = "💡 הצג פתרון";
    }
}

function testStudentCode() {
    const code = document.getElementById('student-code').value;
    const feedbackEl = document.getElementById('execution-feedback');

    let logs = [];
    let b1, b2;

    if (currentTaskId === 3) {
        b1 = new BucketInstance('b7', 7);
        b2 = new BucketInstance('b4', 4);
    } else {
        b1 = new BucketInstance('b5', 5);
        b2 = new BucketInstance('b3', 3);
    }

    const lines = code.split('\n');
    let hasError = false;

    lines.forEach((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('Bucket')) return;

        try {
            if (trimmed.includes('.Fill()')) {
                const target = trimmed.startsWith('b7') || trimmed.startsWith('b5') ? b1 : b2;
                target.fill();
                logs.push(`שורה ${idx + 1}: מילוי ${target.id} 🟢 (מצב: ${b1.id}=${b1.currentAmount}, ${b2.id}=${b2.currentAmount})`);
            } else if (trimmed.includes('.Empty()')) {
                const target = trimmed.startsWith('b7') || trimmed.startsWith('b5') ? b1 : b2;
                target.empty();
                logs.push(`שורה ${idx + 1}: ריקון ${target.id} 🔴 (מצב: ${b1.id}=${b1.currentAmount}, ${b2.id}=${b2.currentAmount})`);
            } else if (trimmed.includes('.PourInto(')) {
                if (trimmed.startsWith(b1.id)) {
                    b1.pourInto(b2);
                } else {
                    b2.pourInto(b1);
                }
                logs.push(`שורה ${idx + 1}: מזיגה ${b1.id} ↔ ${b2.id} 💧 (מצב: ${b1.id}=${b1.currentAmount}, ${b2.id}=${b2.currentAmount})`);
            }
        } catch (e) {
            hasError = true;
            logs.push(`❌ שגיאה בשורה ${idx + 1}: לא ניתן לפענח את הפקודה`);
        }
    });

    const task = taskDefinitions[currentTaskId];
    const isSuccess = task.validate(b1, b2);

    let resultHtml = `<div class="font-bold text-xs ${isSuccess ? 'text-emerald-700 bg-emerald-50' : 'text-rose-700 bg-rose-50'} p-2.5 rounded-lg border ${isSuccess ? 'border-emerald-200' : 'border-rose-200'} mb-2">`;
    if (isSuccess) {
        resultHtml += `🎉 כל הכבוד! הפתרון נכון מאוד! (${b1.id} מכיל בדיוק ${b1.currentAmount} ליטר)`;
    } else {
        resultHtml += `❌ הפתרון עדיין אינו נכון. כרגע ב-${b1.id} יש ${b1.currentAmount} ליטרים. נסה שוב!`;
    }
    resultHtml += `</div>`;

    resultHtml += `<div class="space-y-1 text-[11px] code-font text-slate-600 max-h-36 overflow-y-auto pt-1">`;
    logs.forEach(log => {
        resultHtml += `<div class="border-b border-slate-100 pb-0.5">${log}</div>`;
    });
    resultHtml += `</div>`;

    feedbackEl.innerHTML = resultHtml;
}

// Initialize task on load
const originalOnLoad = window.onload;
window.onload = function () {
    if (originalOnLoad) originalOnLoad();
    selectTask(1);
};
/* ** TAB 6 ****************************************************************************** */
// QUIZ DATA WITH EXPLANATIONS
const quizQuestions = [
    {
        q: "מה מייצג הטיפוס (Class) Bucket בקוד?",
        a: ["א. מתכון / תבנית ליצירת דליים בזיכרון", "ב. דלי ספציפי בעל 5 ליטר", "ג. משתנה מספרי פשוט", "ד. פעולת מזיגה בלבד"],
        c: 0,
        explanation: "המחלקה (Class) היא רק התבנית/המתכון המגדיר אילו שדות ופעולות יהיו לדלי. המופעים (Objects) שנוצרים ממנה בעזרת new הם הדליים הפיזיים בזיכרון."
    },
    {
        q: "מה קורה בזיכרון בעת ביצוע הפקודה Bucket b = new Bucket(4)?",
        a: ["א. נוצר מופע חדש בערימה (Heap) וההפניה נשמרת ב-Stack", "ב. נוצר משתנה בערימה בלבד", "ג. הקוד לא מתקמפל", "ד. הדלי מתמלא אוטומטית במים"],
        c: 0,
        explanation: "הפקודה new מקצה מקום בזיכרון ה-Heap עבור האובייקט החדש, בעוד המשתנה b השמור ב-Stack מחזיק רק את הכתובת (ההפניה/Reference) אל האובייקט הזה."
    },
    {
        q: "אם נבצע b1.PourInto(b2) כש-b2 מלא לגמרי, מה יקרה?",
        a: ["א. המים ב-b1 לא ישתנו", "ב. b2 יעלה על גדותיו ויקרוס", "ג. b1 יתרוקן כליל", "ד. תזרק שגיאת ריצה"],
        c: 0,
        explanation: "הפעולה PourInto בודקת כמה מקום נותר ב-b2. מכיוון ש-b2 מלא לגמרי (נשאר 0 מקום פנוי), לא יועברו מים בכלל וכמות המים ב-b1 תישאר ללא שינוי."
    },
    {
        q: "מהי מטרת עקרון הקימוס (Encapsulation) במחלקת הדלי?",
        a: ["א. למנוע שינוי לא חוקי של כמות המים שלא דרך פעולות המחלקה", "ב. לגרום לקוד לרוץ מהר יותר", "ג. לאפשר לכל קלאס לשנות את currentAmount", "ד. לבטל את הצורך ב constructors"],
        c: 0,
        explanation: "הסתרת השדות (private) מבטיחה שאף גורם חיצוני לא יוכל להכניס את הדלי למצב לא תקין (כמו כמות מים שלילית או גדולה מהקיבולת) אלא רק דרך מתודות מבוקרות."
    },
    {
        q: "מה יחזיר הביטוי b.IsEmpty() בדלי שנוצר כרגע (new Bucket(5))?",
        a: ["א. true", "ב. false", "ג. null", "ד. 0"],
        c: 0,
        explanation: "בעת יצירת דלי חדש בבנאי (Constructor), כמות המים ההתחלתית (currentAmount) מתאפסת ל-0, ולכן הפעולה IsEmpty מחזירה אמת (true)."
    }
];

let quizChartInstance = null;

function submitQuiz() {
    let score = 0;
    const tableBody = document.getElementById('quiz-table-body');
    tableBody.innerHTML = '';

    quizQuestions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q_${idx}"]:checked`);
        const userChoice = selected ? parseInt(selected.value) : -1;
        const isCorrect = userChoice === q.c;

        if (isCorrect) score++;

        const userText = userChoice !== -1 ? q.a[userChoice] : "לא נענה";
        const correctText = q.a[q.c];

        const row = document.createElement('tr');
        row.className = isCorrect ? 'bg-emerald-50/50' : 'bg-rose-50/50';
        row.innerHTML = `
                    <td class="p-3 border-r border-slate-200 font-bold text-center">${idx + 1}</td>
                    <td class="p-3 border-r border-slate-200 font-medium">${q.q}</td>
                    <td class="p-3 border-r border-slate-200 ${isCorrect ? 'text-emerald-700 font-semibold' : 'text-rose-700 font-semibold'}">${userText}</td>
                    <td class="p-3 border-r border-slate-200 text-emerald-800 font-bold">${correctText}</td>
                    <td class="p-3 border-r border-slate-200 text-center text-sm">${isCorrect ? '✅' : '❌'}</td>
                    <td class="p-3 text-slate-600 leading-relaxed">${q.explanation}</td>
                `;
        tableBody.appendChild(row);
    });

    // Toggle visibility
    document.getElementById('quiz-placeholder-left').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    document.getElementById('quiz-table-wrapper').classList.remove('hidden');

    // Score Banner Text
    document.getElementById('quiz-score-text').innerHTML = `
                <div class="text-xs text-sky-700 font-normal mb-1">הציון הסופי שלך:</div>
                <div class="text-3xl font-bold">${Math.round(score / quizQuestions.length * 100)} / 100</div>
                <div class="text-xs text-slate-600 mt-1">ענית נכון על ${score} מתוך ${quizQuestions.length} שאלות</div>
            `;

    // Render Chart
    const ctxChart = document.getElementById('quizChart').getContext('2d');
    if (quizChartInstance) quizChartInstance.destroy();

    quizChartInstance = new Chart(ctxChart, {
        type: 'doughnut',
        data: {
            labels: ['תשובות נכונות', 'תשובות שגויות'],
            datasets: [{
                data: [score, quizQuestions.length - score],
                backgroundColor: ['#10b981', '#f43f5e'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}


/* ** TAB 6 ****************************************************************************** */