/**
 * Application Configuration Settings
 * Contains API endpoints and Google Sheets integration details
 */
/*const CONFIG = {
    TEACHER_EMAIL: "avivah@kdror.co.il",
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwik0I7veNHs467zq36h9z112HhNBgApZscDLjPigCVKGLUEFqZzOniZ2qclDjjS6SfPw/exec",
    SHEET_NAME: "Variables_Input_Output"
};*/
const CONFIG = {
    TEACHER_EMAIL: "avivah@kdror.co.il",
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwik0I7veNHs467zq36h9z112HhNBgApZscDLjPigCVKGLUEFqZzOniZ2qclDjjS6SfPw/exec",
    // שליפת שם הגיליון מ-localStorage או שימוש בברירת מחדל
    get SHEET_NAME() {
        return localStorage.getItem('teacher_sheet_name') || "Variables_Input_Output";
    }
};