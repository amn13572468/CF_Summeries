/**
 * Application configuration for teacher authentication and Google Sheets submission.
 */
/*const CONFIG = {
    TEACHER_EMAIL: "avivah@kdror.co.il",
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwik0I7veNHs467zq36h9z112HhNBgApZscDLjPigCVKGLUEFqZzOniZ2qclDjjS6SfPw/exec",
    SHEET_NAME: "Variables_Input_Output"
};*/
const CONFIG = {
    // Contact information and the endpoint that receives submitted quiz results.
    TEACHER_EMAIL: "avivah@kdror.co.il",
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwik0I7veNHs467zq36h9z112HhNBgApZscDLjPigCVKGLUEFqZzOniZ2qclDjjS6SfPw/exec",

    // Get the sheet name from localStorage or use default
    get SHEET_NAME() {
        return localStorage.getItem('teacher_sheet_name') || "Variables_I/O";
    },

    // SHA-256 digest used by the client-side teacher password check.
    TEACHER_HASH: "215d6a14a14ac3299846c648fbaf84654c7dee08a36b988a76949d2cbb2810a2"
};