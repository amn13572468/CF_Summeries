// Prevent the browser context menu from opening on the page.
document.addEventListener('contextmenu', event => event.preventDefault());
/*document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
*/
// Prevent copying page content through the standard copy event.
document.addEventListener('copy', (e) => {
    e.preventDefault();
    // An optional alert can be shown here when copying is blocked.
    alert('Copying content from this site is not permitted.');
});

// Block selected keyboard shortcuts commonly used to open developer tools or view source.
document.addEventListener('keydown', function (e) {
    // F12 opens developer tools.
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+I (Inspect) / Ctrl+Shift+J (Console) / Ctrl+Shift+C (Select Element)
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+U opens the page source.
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }

    // Ctrl+S opens the browser's save-page action.
    if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }
});

// Replace the page if a debugger pause indicates that developer tools are open.
setInterval(function () {
    const startTime = performance.now();
    debugger; // Execution pauses here when developer tools are attached.
    const endTime = performance.now();

    // A long pause is treated as an indication that the debugger stopped execution.
    if (endTime - startTime > 100) {
        document.body.innerHTML = '<div style="text-align:center; padding:50px; font-family:sans-serif;"><h2>⚠️ חל איסור לפתוח את כלי הפיתוח במהלך המבחן.</h2><p>יש לסגור את כלי הפיתוח ולרענן את הדף.</p></div>';
    }
}, 200);


// Repeat the context-menu and shortcut restrictions with modern key names.
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.keyCode === 123 ||
        (event.ctrlKey && event.shiftKey && ['I', 'C', 'J'].includes(event.key)) ||
        (event.ctrlKey && event.key === 'u')) {
        event.preventDefault();
    }
});

/* Further security notes were originally planned for a separate document. */