// --- Navigation Logic ---
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
    const feedback = document.getElementById('thought-feedback');
    feedback.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-900', 'bg-rose-100', 'text-rose-900');
    if (option === 1) {
        feedback.classList.add('bg-emerald-100', 'text-emerald-900');
        feedback.innerHTML = "✅ <strong>נכון מאוד!</strong> t1 ו-t2 הם עצמים נפרדים בזיכרון.";
    } else {
        feedback.classList.add('bg-rose-100', 'text-rose-900');
        feedback.innerHTML = "❌ <strong>לא מדויק.</strong> לכל עצם זיכרון נפרד.";
    }
}

// --- Turtle Engine Architecture ---
const canvas = document.getElementById('turtleCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

let turtles = { t1: null, t2: null };

class TurtleInstance {
    constructor(id, color, startX, startY) {
        this.id = id;
        this.x = startX;
        this.y = startY;
        this.angle = 270;
        this.tailColor = color;
        this.tailDown = false;
        this.isVisible = true;
        this.path = [];
        this.ramAddress = "0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(4, '0');
    }

    moveForward(distance) {
        const rad = (this.angle * Math.PI) / 180;
        const newX = this.x + distance * Math.cos(rad);
        const newY = this.y + distance * Math.sin(rad);

        if (this.tailDown) {
            this.path.push({
                startX: this.x,
                startY: this.y,
                endX: newX,
                endY: newY,
                color: this.tailColor
            });
        }
        this.x = Math.max(15, Math.min(canvas.width - 15, newX));
        this.y = Math.max(15, Math.min(canvas.height - 15, newY));
        drawCanvas();
        updateMemoryUI();
    }

    moveBackward(distance) {
        this.moveForward(-distance);
    }

    turnRight(deg) {
        this.angle = (this.angle + deg) % 360;
        drawCanvas();
        updateMemoryUI();
    }

    turnLeft(deg) {
        this.angle = (this.angle - deg + 360) % 360;
        drawCanvas();
        updateMemoryUI();
    }

    toString() {
        return `${Math.round(this.x)},${Math.round(this.y)}`;
    }
}

function createTurtle(id) {
    if (id === 't1') turtles.t1 = new TurtleInstance('t1', '#ef4444', 200, 170);
    if (id === 't2') turtles.t2 = new TurtleInstance('t2', '#3b82f6', 350, 170);
    drawCanvas();
    updateMemoryUI();
}

function runCommand(action, param) {
    const selectedId = document.getElementById('active-turtle-select').value;
    const targetTurtle = turtles[selectedId];
    if (!targetTurtle) {
        alert(`העצם ${selectedId} עדיין לא נוצר בזיכרון! לחץ קודם על "צור ${selectedId}".`);
        return;
    }

    const stepsVal = parseInt(document.getElementById('input-steps').value) || 50;
    const degreesVal = parseInt(document.getElementById('input-degrees').value) || 90;

    if (action === 'moveForward') targetTurtle.moveForward(stepsVal);
    else if (action === 'moveBackward') targetTurtle.moveBackward(stepsVal);
    else if (action === 'turnRight') targetTurtle.turnRight(degreesVal);
    else if (action === 'turnLeft') targetTurtle.turnLeft(degreesVal);
    else if (action === 'tailDown') { targetTurtle.tailDown = true; drawCanvas(); updateMemoryUI(); }
    else if (action === 'tailUp') { targetTurtle.tailDown = false; drawCanvas(); updateMemoryUI(); }
    else if (action === 'setTailColor') { targetTurtle.tailColor = param; drawCanvas(); updateMemoryUI(); }
    else if (action === 'toggleVisible') { targetTurtle.isVisible = !targetTurtle.isVisible; drawCanvas(); updateMemoryUI(); }
    else if (action === 'callToString') {
        alert(`תוצאת הקריאה ל- ${selectedId}.ToString():\n"${targetTurtle.toString()}"`);
    }
}

function resetSimulator() {
    turtles = { t1: null, t2: null };
    drawCanvas();
    updateMemoryUI();
}

function runPresetScenario(type) {
    resetSimulator();
    createTurtle('t1');
    const t1 = turtles.t1;
    if (type === 'presentation') {
        t1.tailDown = true;
        t1.moveForward(80);
        t1.turnRight(90);
        t1.moveForward(80);
    } else if (type === 'aliasing') {
        createTurtle('t2');
        turtles.t1 = turtles.t2;
        updateMemoryUI();
        alert("בוצעה ההשמה t1 = t2! שני המשתנים מצביעים על אותו עצם ב-Heap!");
    }
}

function drawCanvas() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    const activeTurtles = [];
    if (turtles.t1) activeTurtles.push(turtles.t1);
    if (turtles.t2 && turtles.t2 !== turtles.t1) activeTurtles.push(turtles.t2);

    activeTurtles.forEach(t => {
        t.path.forEach(segment => {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = segment.color;
            ctx.moveTo(segment.startX, segment.startY);
            ctx.lineTo(segment.endX, segment.endY);
            ctx.stroke();
        });
    });

    activeTurtles.forEach(t => {
        if (t.isVisible) drawTurtleBody(t);
    });
}

function drawTurtleBody(t) {
    ctx.save();
    ctx.translate(t.x, t.y);
    ctx.rotate((t.angle * Math.PI) / 180);

    ctx.fillStyle = t.tailColor;
    ctx.beginPath(); ctx.ellipse(8, -12, 7, 3, Math.PI / 4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(8, 12, 7, 3, -Math.PI / 4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(-10, -10, 5, 2.5, -Math.PI / 4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(-10, 10, 5, 2.5, Math.PI / 4, 0, Math.PI * 2); ctx.fill();

    ctx.beginPath();
    ctx.moveTo(-12, 0); ctx.lineTo(-18, -3); ctx.lineTo(-18, 3);
    ctx.closePath(); ctx.fill();

    ctx.beginPath(); ctx.arc(14, 0, 7, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(16, -3, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(16, 3, 2, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.beginPath(); ctx.arc(17, -3, 1, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(17, 3, 1, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = t.tailColor;
    ctx.beginPath(); ctx.ellipse(0, 0, 14, 11, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1.5; ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(0, 0, 6, 0, Math.PI * 2); ctx.stroke();

    ctx.restore();

    ctx.font = 'bold 12px Rubik, sans-serif';
    ctx.fillStyle = t.tailColor;
    ctx.fillText(t.id, t.x - 7, t.y - 20);
}

function updateMemoryUI() {
    ['t1', 't2'].forEach(id => {
        const t = turtles[id];
        const card = document.getElementById(`card-mem-${id}`);
        if (!card) return;
        if (t) {
            card.classList.remove('opacity-50');
            document.getElementById(`mem-addr-${id}`).innerText = t.ramAddress;
            document.getElementById(`${id}-tostring`).innerText = t.toString();
            document.getElementById(`${id}-pos`).innerText = `(${Math.round(t.x)},${Math.round(t.y)})`;
            document.getElementById(`${id}-angle`).innerText = `${t.angle}°`;
            document.getElementById(`${id}-tail`).innerText = t.tailDown ? 'true' : 'false';
            document.getElementById(`${id}-color`).innerText = t.tailColor;
        } else {
            card.classList.add('opacity-50');
            document.getElementById(`mem-addr-${id}`).innerText = 'null';
            document.getElementById(`${id}-tostring`).innerText = '-';
            document.getElementById(`${id}-pos`).innerText = '-';
            document.getElementById(`${id}-angle`).innerText = '-';
            document.getElementById(`${id}-tail`).innerText = '-';
            document.getElementById(`${id}-color`).innerText = '-';
        }
    });
}

// --- Bug Hunter Explanations ---
function showBugExplanation(caseNum) {
    const modal = document.getElementById('bugModal');
    const title = document.getElementById('modalBugTitle');
    const content = document.getElementById('modalBugContent');

    const explanations = {
        1: {
            title: "🚨 מלכודת #1: שכחת המילה new",
            text: `<p><strong>תיאור התקלה:</strong> כתיבת <span class="code-font code-ltr bg-slate-100 px-1 rounded">Turtle t1;</span> מצהירה בלבד על משתנה הפניה, אך <strong>אינה מקצה זיכרון</strong> ולא בונה עצם ב-Heap.</p>
                   <p><strong>תוצאה:</strong> המשתנה מכיל <span class="code-font code-ltr text-rose-600 font-bold">null</span>.</p>`
        },
        2: {
            title: "🚨 מלכודת #2: פנייה לטיפוס במקום לעצם",
            text: `<p><strong>תיאור התקלה:</strong> פנייה ישירה לשם הטיפוס <span class="code-font code-ltr bg-slate-100 px-1 rounded">Turtle.MoveForward(50);</span>.</p>`
        },
        3: {
            title: "🚨 מלכודת #3: שכחת הורדת הזנב (TailDown)",
            text: `<p><strong>תיאור התקלה:</strong> תנועה ללא הורדת זנב. הצב יזז אך לא ישאיר עקבות.</p>`
        },
        4: {
            title: "🚨 מלכודת #4: פנייה למשתנה Null",
            text: `<p><strong>תיאור התקלה:</strong> קריאה לפעולה על משתנה null תגרום ל-<span class="code-font code-ltr text-rose-600 font-bold">NullReferenceException</span>.</p>`
        },
        5: {
            title: "🚨 מלכודת #5: דריסת הפניה (Aliasing)",
            text: `<p><strong>תיאור התקלה:</strong> השמה <span class="code-font code-ltr bg-slate-100 px-1 rounded">t1 = t2;</span> מעתיקה את הכתובת בזיכרון בלבד.</p>`
        }
    };

    if (explanations[caseNum]) {
        title.innerHTML = explanations[caseNum].title;
        content.innerHTML = explanations[caseNum].text;
        modal.classList.remove('hidden');
    }
}

function closeBugModal() {
    document.getElementById('bugModal').classList.add('hidden');
}

// --- Worksheet Logic ---
function runWorksheetTask(taskType) {
    switchTab('tab-simulator');
    resetSimulator();
    createTurtle('t1');
    const t1 = turtles.t1;

    if (taskType === 'square') {
        t1.tailDown = true;
        for (let i = 0; i < 4; i++) {
            t1.moveForward(100);
            t1.turnRight(90);
        }
    } else if (taskType === 'stairs') {
        t1.tailDown = true;
        for (let i = 0; i < 3; i++) {
            t1.moveForward(35);
            t1.turnRight(90);
            t1.moveForward(35);
            t1.turnLeft(90);
        }
    } else if (taskType === 'house') {
        createTurtle('t2');
        const t2 = turtles.t2;
        t1.tailColor = '#ef4444';
        t1.tailDown = true;
        for (let i = 0; i < 4; i++) {
            t1.moveForward(80);
            t1.turnRight(90);
        }
        t2.tailColor = '#3b82f6';
        t2.tailDown = true;
        t2.turnRight(30);
        t2.moveForward(80);
        t2.turnRight(120);
        t2.moveForward(80);
    }
}

function checkFillBlanks() {
    const b1 = document.getElementById('blank-1').value.trim();
    const b2 = document.getElementById('blank-2').value.trim();
    const b3 = document.getElementById('blank-3').value.trim();
    const feedback = document.getElementById('blanks-feedback');

    feedback.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-900', 'bg-rose-100', 'text-rose-900');

    if (b1.toLowerCase() === 'new' && b2.toLowerCase() === 'taildown' && (b3.toLowerCase() === 'color.red' || b3.toLowerCase() === 'red')) {
        feedback.classList.add('bg-emerald-100', 'text-emerald-900');
        feedback.innerText = "✅ כל הכבוד! התשובות נכונות.";
    } else {
        feedback.classList.add('bg-rose-100', 'text-rose-900');
        feedback.innerText = "❌ חלק מהתשובות אינן מדויקות. נסו שוב!";
    }
}

function checkTask4Challenge() {
    const feedback = document.getElementById('t-challenge-feedback');
    feedback.classList.remove('hidden');
    feedback.classList.add('bg-indigo-50', 'border-indigo-200', 'text-indigo-900');
    feedback.innerHTML = "🎯 <strong>פתרון לדוגמה:</strong><br><code class='code-font code-ltr'>t1.TailDown();<br>t1.MoveForward(100);<br>t1.TurnRight(90);<br>t1.MoveForward(30);<br>t1.MoveBackward(60);</code>";
}

// --- Quiz Logic ---
/*function switchLevel(level) {
    ['easy', 'medium', 'hard'].forEach(l => {
        document.getElementById(`level-${l}`).classList.add('hidden');
        document.getElementById(`btn-${l}`).classList.replace('text-indigo-600', 'text-slate-500');
        document.getElementById(`btn-${l}`).classList.replace('border-indigo-600', 'border-transparent');
    });

    document.getElementById(`level-${level}`).classList.remove('hidden');
    document.getElementById(`btn-${level}`).classList.replace('text-slate-500', 'text-indigo-600');
    document.getElementById(`btn-${level}`).classList.replace('border-transparent', 'border-indigo-600');
}

function submitQuiz() {
    document.getElementById('score-display').innerText = "85 / 100";
    document.getElementById('score-feedback').innerText = "עבודה מצוינת! שליטה טובה בחומר.";
}
*/
// --- Student Code Interpreter ---

// Load code templates with English comments
function loadTemplate(type) {
    const textarea = document.getElementById('user-code-input');
    if (type === 'square') {
        textarea.value = `// Draw a square using t1\nt1.TailDown();\nt1.MoveForward(100);\nt1.TurnRight(90);\nt1.MoveForward(100);\nt1.TurnRight(90);\nt1.MoveForward(100);\nt1.TurnRight(90);\nt1.MoveForward(100);`;
    } else if (type === 'stairs') {
        textarea.value = `// Draw stairs\nt1.TailDown();\nt1.MoveForward(40);\nt1.TurnRight(90);\nt1.MoveForward(40);\nt1.TurnLeft(90);\nt1.MoveForward(40);\nt1.TurnRight(90);\nt1.MoveForward(40);`;
    }
}

function clearEditor() {
    document.getElementById('user-code-input').value = '';
    const feedback = document.getElementById('user-code-feedback');
    if (feedback) feedback.classList.add('hidden');
}

// Run student's custom code
function runUserCustomCode() {
    const rawCode = document.getElementById('user-code-input').value;
    const feedback = document.getElementById('user-code-feedback');

    if (!rawCode.trim()) {
        alert("Please enter some code before running!");
        return;
    }

    // Switch to simulator tab and reset canvas
    switchTab('tab-simulator');
    resetSimulator();

    // Parse code line by line
    const lines = rawCode.split('\n');
    let executedLinesCount = 0;
    let hasError = false;

    lines.forEach((line, index) => {
        let cleanLine = line.trim();

        // Ignore empty lines or comments
        if (!cleanLine || cleanLine.startsWith('//')) return;
        if (cleanLine.endsWith(';')) cleanLine = cleanLine.slice(0, -1);

        try {
            if (cleanLine.includes('new Turtle()')) {
                if (cleanLine.includes('t1')) createTurtle('t1');
                else if (cleanLine.includes('t2')) createTurtle('t2');
                executedLinesCount++;
                return;
            }

            let targetId = null;
            if (cleanLine.startsWith('t1.')) targetId = 't1';
            else if (cleanLine.startsWith('t2.')) targetId = 't2';

            if (!targetId) {
                if (!turtles.t1) createTurtle('t1');
                targetId = 't1';
            } else {
                if (!turtles[targetId]) createTurtle(targetId);
            }

            const turtle = turtles[targetId];
            const commandPart = cleanLine.replace(/^(t1|t2)\./, '');

            if (commandPart.startsWith('MoveForward')) {
                turtle.moveForward(parseArgument(commandPart, 50));
            } else if (commandPart.startsWith('MoveBackward')) {
                turtle.moveBackward(parseArgument(commandPart, 50));
            } else if (commandPart.startsWith('TurnRight')) {
                turtle.turnRight(parseArgument(commandPart, 90));
            } else if (commandPart.startsWith('TurnLeft')) {
                turtle.turnLeft(parseArgument(commandPart, 90));
            } else if (commandPart.startsWith('TailDown')) {
                turtle.tailDown = true;
            } else if (commandPart.startsWith('TailUp')) {
                turtle.tailDown = false;
            } else if (commandPart.startsWith('SetTailColor')) {
                if (commandPart.includes('Red')) turtle.tailColor = '#ef4444';
                else if (commandPart.includes('Blue')) turtle.tailColor = '#3b82f6';
                else if (commandPart.includes('Green')) turtle.tailColor = '#10b981';
                else if (commandPart.includes('Yellow')) turtle.tailColor = '#f59e0b';
                else if (commandPart.includes('Purple')) turtle.tailColor = '#8b5cf6';
            }

            executedLinesCount++;
        } catch (e) {
            console.error(`Error at line ${index + 1}:`, e);
            hasError = true;
        }
    });

    drawCanvas();
    updateMemoryUI();

    if (feedback) {
        feedback.classList.remove('hidden', 'bg-rose-100', 'text-rose-800', 'bg-emerald-100', 'text-emerald-800');
        if (hasError) {
            feedback.classList.add('bg-rose-100', 'text-rose-800');
            feedback.innerText = "⚠️ Some lines could not be parsed.";
        } else {
            feedback.classList.add('bg-emerald-100', 'text-emerald-800');
            feedback.innerText = `✅ Successfully executed ${executedLinesCount} commands!`;
        }
    }
}

function parseArgument(commandStr, defaultValue) {
    const match = commandStr.match(/\(([^)]+)\)/);
    if (match && match[1]) {
        const num = parseInt(match[1].trim());
        return isNaN(num) ? defaultValue : num;
    }
    return defaultValue;
}
/* ************ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  ************* */

// Global level tracking
// Current active level identifier
let currentLevel = 'easy';

// Initialize the chart canvas when DOM loading completes
document.addEventListener("DOMContentLoaded", () => {
    initQuizChart(null);
});

// Switch active difficulty level tab
function switchLevel(level) {
    currentLevel = level;

    // Toggle level visibility
    document.querySelectorAll('.quiz-level-group').forEach(el => el.classList.add('hidden'));
    document.getElementById(`level-${level}`).classList.remove('hidden');

    // Update tab styling
    ['easy', 'medium', 'hard'].forEach(l => {
        const btn = document.getElementById(`btn-${l}`);
        btn.className = "py-2 px-4 font-bold text-sm border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition-all";
    });
    document.getElementById(`btn-${level}`).className = "py-2 px-4 font-bold text-sm border-b-2 border-indigo-600 text-indigo-600 transition-all";

    // Reset scores and chart view
    document.getElementById('score-display').innerText = '-- / 100';
    document.getElementById('score-feedback').innerText = 'בחרו רמה, ענו על השאלות ולחצו לבדיקה';
    document.getElementById('score-feedback').className = 'text-xs text-slate-500';
    initQuizChart(null);
}

// Calculate score based on user answers across the 3 categories
function submitQuiz() {
    const prefix = currentLevel.charAt(0); // Level prefix: 'e', 'm', or 'h'

    // Validate that all 15 questions in the current tab are selected
    for (let i = 1; i <= 15; i++) {
        const selected = document.querySelector(`input[name="${prefix}${i}"]:checked`);
        if (!selected) {
            alert(`אנא ענה על שאלה מספר ${i} ברמה זו.`);
            return;
        }
    }

    // Count correct answers per category (Option 'a' is correct for all)
    let cat1 = 0, cat2 = 0, cat3 = 0;

    for (let i = 1; i <= 5; i++) {
        if (document.querySelector(`input[name="${prefix}${i}"]:checked`).value === 'a') cat1++;
    }
    for (let i = 6; i <= 10; i++) {
        if (document.querySelector(`input[name="${prefix}${i}"]:checked`).value === 'a') cat2++;
    }
    for (let i = 11; i <= 15; i++) {
        if (document.querySelector(`input[name="${prefix}${i}"]:checked`).value === 'a') cat3++;
    }

    // Format scores as percentages (5 questions = 20% each)
    const categoryScores = [
        { label: 'new Concept', value: cat1 * 20 },
        { label: 'Memory', value: cat2 * 20 },
        { label: 'Methods', value: cat3 * 20 }
    ];

    const totalScore = Math.round(((cat1 + cat2 + cat3) / 15) * 100);

    // Display total percentage
    document.getElementById('score-display').innerText = totalScore + ' / 100';
    const feedback = document.getElementById('score-feedback');

    if (totalScore === 100) {
        feedback.innerText = "🏆 שליטה מושלמת ברמה זו!";
        feedback.className = "text-xs font-bold text-emerald-600";
    } else if (totalScore >= 70) {
        feedback.innerText = "👍 תוצאה טובה! ניתן לשפר את הנושאים הנמוכים בגרף.";
        feedback.className = "text-xs font-bold text-amber-600";
    } else {
        feedback.innerText = "💡 מומלץ לחזור על הקורס ולנסות שוב.";
        feedback.className = "text-xs font-bold text-rose-600";
    }

    // Render bar chart with calculated values
    initQuizChart(categoryScores);
}

// Render dynamic HTML5 Canvas Bar Chart
function initQuizChart(data) {
    const canvas = document.getElementById('quizChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Clear canvas before redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const categories = data || [
        { label: 'new Concept', value: 0 },
        { label: 'Memory', value: 0 },
        { label: 'Methods', value: 0 }
    ];

    const paddingLeft = 35;
    const paddingBottom = 30;
    const chartWidth = canvas.width - paddingLeft - 10;
    const chartHeight = canvas.height - paddingBottom - 20;

    // Draw horizontal grid lines and Y-axis numeric labels
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#e2e8f0';
    ctx.fillStyle = '#64748b';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'right';

    for (let i = 0; i <= 5; i++) {
        const val = i * 20;
        const y = (canvas.height - paddingBottom) - (i * (chartHeight / 5));

        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(canvas.width - 10, y);
        ctx.stroke();

        ctx.fillText(val.toString(), paddingLeft - 5, y + 3);
    }

    // Render category bars and X-axis text labels
    const barSpace = chartWidth / categories.length;

    categories.forEach((cat, index) => {
        const x = paddingLeft + (index * barSpace);
        const centerX = x + (barSpace / 2);
        const barWidth = 30;
        const barX = centerX - (barWidth / 2);

        if (data !== null) {
            const barHeight = (cat.value / 100) * chartHeight;
            const barY = (canvas.height - paddingBottom) - barHeight;

            ctx.fillStyle = '#6366f1';
            if (barHeight > 0) {
                ctx.fillRect(barX, barY, barWidth, barHeight);
            }
        }

        // Render X-axis category label
        ctx.fillStyle = '#334155';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(cat.label, centerX, canvas.height - 10);
    });
}

/* ************ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  ************* */
