/**
 * Authentication & Password Hashing Utilities
 */

// Convert a password to its hexadecimal SHA-256 digest using the Web Crypto API.
async function hashPassword(password) {
    if (!password) return '';
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Compare the entered password digest with the teacher hash stored in CONFIG.
async function verifyTeacherPassword(enteredPassword) {
    const configObj = typeof CONFIG !== 'undefined' ? CONFIG : (window.CONFIG || {});

    if (!configObj.TEACHER_HASH) {
        console.error("CONFIG.TEACHER_HASH אינו מוגדר!");
        return false;
    }

    const enteredHash = await hashPassword(enteredPassword);
    return enteredHash.toLowerCase() === configObj.TEACHER_HASH.toLowerCase();
}

// Expose both helpers to the browser-loaded screens and scripts.
window.hashPassword = hashPassword;
window.verifyTeacherPassword = verifyTeacherPassword;

// Run this in the browser console to create a digest for a configured password:
// (async () => { const password = prompt("Enter password to hash:");
// const hash = await hashPassword(password); console.log("SHA-256:", hash); });
// TeacherPanel.js awaits this boolean result before opening the teacher controls:
// const isValid = await verifyTeacherPassword(enteredPassword);
// if (isValid) { /* proceed */ } else { /* show error */ }

// await hashPassword("MySecretPassword123");
// await hashPassword("teachersPass23178");-->215d6a14a14ac3299846c648fbaf84654c7dee08a36b988a76949d2cbb2810a2