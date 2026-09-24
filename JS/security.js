// מניעת פתיחת תפריט קליק ימני (Right Click)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// חסימת מקשי קיצור לפתיחת כלי פיתוח וצפייה בקוד
document.addEventListener('keydown', function (e) {
    // F12 - פתיחת כלי פיתוח
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+I (Inspect) / Ctrl+Shift+J (Console) / Ctrl+Shift+C (Select Element)
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+U (View Source - הצגת קוד מקור)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }

    // Ctrl+S (שמירת הדף למחשב)
    if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }
});

// זיהוי והקפאת כלי פיתוח פתוחים
setInterval(function () {
    const startTime = performance.now();
    debugger; // ייקפץ וייעצר ברגע ש-DevTools פתוח
    const endTime = performance.now();

    // אם לקח יותר מ-100 מילי-שניות, כלי הפיתוח פתוחים!
    if (endTime - startTime > 100) {
        document.body.innerHTML = '<div style="text-align:center; padding:50px; font-family:sans-serif;"><h2>⚠️ חל איסור לפתוח את כלי הפיתוח במהלך המבחן.</h2><p>יש לסגור את כלי הפיתוח ולרענן את הדף.</p></div>';
    }
}, 200);


// Disable context menu and specific devtools keybindings
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.keyCode === 123 ||
        (event.ctrlKey && event.shiftKey && ['I', 'C', 'J'].includes(event.key)) ||
        (event.ctrlKey && event.key === 'u')) {
        event.preventDefault();
    }
});

/* C:\Users\Administrator\Documents\School\Network-Services\JS_Security.docx -->-->
TBD

*/