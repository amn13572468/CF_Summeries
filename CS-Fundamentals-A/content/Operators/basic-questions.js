/**
* Questions Database - C# Basic Operators, Modulo & Assignment Statements
* Includes 45 questions: 15 Easy, 15 Medium, 15 Hard.
*/

// Basic operators and assignment statements for C# programming, including arithmetic operations, modulo, and variable assignments.
//window.allAssignmentAndOperatorsQuestions = [
const allAssignmentAndOperatorsQuestions = [
    // ==================== EASY (1-15) ====================
    {
        id: 1, level: "easy",
        question: "מה יהיה ערכו של X לאחר ביצוע הוראת ההשמה הבאה?",
        code: "int x = 10;\nx = 25;",
        options: ["10", "25", "35", "שגיאת קומפילציה"],
        answer: 1, explanation: "הוראת השמה (=) דורסת את הערך הקודם במשתנה ומציבה בו את הערך החדש (25)."
    },
    {
        id: 2, level: "easy",
        question: "מה תדפיס התוכנית למסך?",
        code: "int num1 = 12;\nint num2 = 4;\nConsole.WriteLine(num1 + num2);",
        options: ["124", "16", "124", "שגיאת הרצה"],
        answer: 1, explanation: "חיבור בין שני משתנים מספריים (int) מבצע חיבור אריתמטי רגיל: 12 + 4 = 16."
    },
    {
        id: 3, level: "easy",
        question: "מה מחזיר אופרטור המודולו (%) ב-C#?",
        code: "int result = 9 % 2;",
        options: ["את תוצאת החילוק", "את שארית החילוק השלם", "את אחוז המספר", "את החלק העשרוני של החילוק"],
        answer: 1, explanation: "האופרטור % מחזיר את שארית החילוק השלם (במקרה זה, השארית של 9 לחלק ל-2 היא 1)."
    },
    {
        id: 4, level: "easy",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int a = 15;\nint b = 3;\nConsole.WriteLine(a / b);",
        options: ["5", "3", "0", "45"],
        answer: 0, explanation: "אופרטור החילוק (/) מחלק את 15 ב-3, והתוצאה היא 5."
    },
    {
        id: 5, level: "easy",
        question: "מה יהיה ערכו של המשתנה count בסוף הביצוע?",
        code: "int count = 5;\ncount = count + 1;",
        options: ["5", "1", "6", "51"],
        answer: 2, explanation: "תחילה מחושב הביטוי מימין (5 + 1 = 6) ולאחר מכן התוצאה מושמת בחזרה ל-count."
    },
    {
        id: 6, level: "easy",
        question: "מה יהיה הפלט של חישוב השארית הבא?",
        code: "int r = 10 % 5;\nConsole.WriteLine(r);",
        options: ["2", "0", "5", "10"],
        answer: 1, explanation: "10 מתחלק ב-5 ללא שארית, ולכן שארית החילוק היא 0."
    },
    {
        id: 7, level: "easy",
        question: "מה תדפיס התוכנית הבאה?",
        code: "int x = 4;\nint y = x;\nConsole.WriteLine(y);",
        options: ["4", "x", "y", "0"],
        answer: 0, explanation: "הוראת ההשמה y = x מעתיקה את הערך 4 שהיה שמור ב-x לתוך y."
    },
    {
        id: 8, level: "easy",
        question: "מה יהיה הפלט לפי סדר פעולות החשבון?",
        code: "int result = 2 + 3 * 4;\nConsole.WriteLine(result);",
        options: ["20", "14", "24", "9"],
        answer: 1, explanation: "לפי קדימות אופרטורים, כפל מבוצע לפני חיבור (3 * 4 = 12), ואז 2 + 12 = 14."
    },
    {
        id: 9, level: "easy",
        question: "מה תהיה התוצאה של כפל משתנים?",
        code: "int width = 5;\nint height = 4;\nConsole.WriteLine(width * height);",
        options: ["9", "54", "20", "1"],
        answer: 2, explanation: "אופרטור הכפל (*) מכפיל 5 ב-4 והתוצאה היא 20."
    },
    {
        id: 10, level: "easy",
        question: "מה יהיה הפלט של חילוק 7 ב-2 כאשר שני האופרנדים הם int?",
        code: "int a = 7;\nint b = 2;\nConsole.WriteLine(a / b);",
        options: ["3.5", "3", "4", "3.0"],
        answer: 1, explanation: "חילוק שלמים (int / int) מקצץ את החלק העשרוני, ולכן 7 / 2 יחזיר 3 בלבד."
    },
    {
        id: 11, level: "easy",
        question: "מה יהיה ערכו של x בסוף הקוד?",
        code: "int x = 20;\nx = x - 8;",
        options: ["20", "8", "12", "-8"],
        answer: 2, explanation: "20 - 8 מחושב ל-12 והתוצאה מושמת בחזרה למשתנה x."
    },
    {
        id: 12, level: "easy",
        question: "מה תדפיס התוכנית עבור הפעולה הבאה?",
        code: "int a = 8;\nint b = 3;\nConsole.WriteLine(a % b);",
        options: ["2", "1", "2.66", "0"],
        answer: 1, explanation: "8 לחלק ל-3 נותן 2 שלמים עם שארית 1. האופרטור % מחזיר את השארית 1."
    },
    {
        id: 13, level: "easy",
        question: "מה יקרה בהרצת הוראת ההשמה הבאה?",
        code: "int a = 5;\nint b = 10;\na = b;\nConsole.WriteLine(a);",
        options: ["5", "10", "15", "שגיאת קומפילציה"],
        answer: 1, explanation: "הוראת ההשמה מציבה את ערכו של b (10) לתוך a, ולכן a הופך ל-10."
    },
    {
        id: 14, level: "easy",
        question: "מה תהיה התוצאה של החישוב עם סוגריים?",
        code: "int result = (2 + 3) * 4;\nConsole.WriteLine(result);",
        options: ["14", "20", "24", "11"],
        answer: 1, explanation: "סוגריים משנים את סדר הקדימויות: קודם מבוצע החיבור (2 + 3 = 5), ואז הכפל ב-4 נותן 20."
    },
    {
        id: 15, level: "easy",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int x = 10 % 10;\nConsole.WriteLine(x);",
        options: ["10", "1", "0", "100"],
        answer: 2, explanation: "10 לחלק ל-10 נותן 1 שלם ללא שארית, ולכן השארית היא 0."
    },

    // ==================== MEDIUM (16-30) ====================
    {
        id: 16, level: "medium",
        question: "מה תהיה תוצאת החילוק כאשר אחד האופרנדים הוא ממשי (double)?",
        code: "double res = 7.0 / 2;\nConsole.WriteLine(res);",
        options: ["3", "3.5", "3.0", "שגיאת קומפילציה"],
        answer: 1, explanation: "מכיוון שאחד המשתנים הוא מסוג double (7.0), מבוצע חילוק עשרוני מדויק והתוצאה היא 3.5."
    },
    {
        id: 17, level: "medium",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "double x = 7 / 2;\nConsole.WriteLine(x);",
        options: ["3.5", "3", "3.0", "שגיאה"],
        answer: 1, explanation: "הביטוי 7/2 מחושב קודם כחילוק שלמים שתוצאתו 3, ואז המספר 3 מושם ל-double ומוצג כ-3."
    },
    {
        id: 18, level: "medium",
        question: "מה יהיה ערכו של y בסוף התוכנית?",
        code: "int x = 8;\nint y = x + 2;\nx = x + 5;\nConsole.WriteLine(y);",
        options: ["8", "10", "13", "15"],
        answer: 1, explanation: "y מקבל את הערך 8 + 2 (10). השינוי המאוחר ב-x אינו משפיע על הערך שכבר חושב ונשמר ב-y."
    },
    {
        id: 19, level: "medium",
        question: "מה תדפיס התוכנית הבאה השודקת שארית חלוקה בקבוצות?",
        code: "int totalStudents = 25;\nint groupSize = 4;\nint leftover = totalStudents % groupSize;\nConsole.WriteLine(leftover);",
        options: ["6", "1", "0", "6.25"],
        answer: 1, explanation: "25 לחלק ל-4 נותן 6 שלמים עם שארית 1. אופרטור % מחזיר את השארית בלבד (1)."
    },
    {
        id: 20, level: "medium",
        question: "מה יהיה הפלט בסוף שרשרת ההשמות הבאה?",
        code: "int a = 5;\nint b = 2;\nint c = a;\na = b;\nb = c;\nConsole.WriteLine(a + \",\" + b);",
        options: ["5,2", "2,5", "5,5", "2,2"],
        answer: 1, explanation: "זהו אלגוריתם החלפת ערכים (Swap) בעזרת משתנה עזר c, ולכן ערכי a ו-b מתחלפים ל-2,5."
    },
    {
        id: 21, level: "medium",
        question: "מה תהיה התוצאה לפי סדר קדימויות האופרטורים?",
        code: "int a = 10;\nint b = 3;\nConsole.WriteLine(a + b * 2);",
        options: ["26", "16", "23", "60"],
        answer: 1, explanation: "כפל קודם לחיבור: 3 * 2 = 6, ולאחר מכן 10 + 6 = 16."
    },
    {
        id: 22, level: "medium",
        question: "מה יהיה ערכו של x בסוף שרשרת הפעולות?",
        code: "int x = 10;\nx = x + 5;\nx = x * 2;\nConsole.WriteLine(x);",
        options: ["30", "25", "20", "15"],
        answer: 0, explanation: "תחילה x הופך ל-10 + 5 = 15. בשורה השנייה x הופך ל-15 * 2 = 30."
    },
    {
        id: 23, level: "medium",
        question: "מה יהיה הפלט של הביטוי המשולב הבא?",
        code: "int a = 14;\nint b = 5;\nConsole.WriteLine(a / b + a % b);",
        options: ["6", "4", "2", "2.8"],
        answer: 0, explanation: "14 / 5 בחילוק שלמים נותן 2. 14 % 5 נותן שארית 4. החיבור 2 + 4 נותן 6."
    },
    {
        id: 24, level: "medium",
        question: "מה תהיה התוצאה של המרת המשתנים לפני החילוק?",
        code: "int x = 5;\nint y = 2;\ndouble avg = (double)x / y;\nConsole.WriteLine(avg);",
        options: ["2", "2.5", "2.0", "שגיאת קומפילציה"],
        answer: 1, explanation: "ההמרה המפורשת (double)x הופכת את 5 ל-5.0, ולכן החילוק ב-2 מבוצע כחילוק עשרוני שמחזיר 2.5."
    },
    {
        id: 25, level: "medium",
        question: "מה תדפיס התוכנית הבאה עבור חילוק וחיבור?",
        code: "int num = 18;\nint result = num / 4 + num % 4;\nConsole.WriteLine(result);",
        options: ["6", "4", "2", "4.5"],
        answer: 0, explanation: "18 / 4 בחילוק שלמים שווה 4. 18 % 4 נותן שארית 2. החיבור 4 + 2 שווה 6."
    },
    {
        id: 26, level: "medium",
        question: "מה יהיה ערך המשתנה p בסוף הקוד?",
        code: "int p = 3;\np = p * p;\np = p + p;\nConsole.WriteLine(p);",
        options: ["9", "18", "12", "81"],
        answer: 1, explanation: "p * p מחושב ל-3 * 3 = 9. בשורה הבאה p + p מחושב ל-9 + 9 = 18."
    },
    {
        id: 27, level: "medium",
        question: "מה תדפיס התוכנית עם אופרטור מודולו על מספר שווה?",
        code: "int x = 12;\nConsole.WriteLine(x % 12);",
        options: ["12", "1", "0", "שגיאת הרצה"],
        answer: 2, explanation: "כל מספר שלם לחלק לעצמו נותן שארית 0."
    },
    {
        id: 28, level: "medium",
        question: "מה יהיה הפלט לפי סדר פעולות מורכב?",
        code: "int a = 2, b = 3, c = 4;\nConsole.WriteLine(a * b + c / 2);",
        options: ["8", "10", "14", "7"],
        answer: 0, explanation: "כפל וחילוק קודמים לחיבור: (2 * 3 = 6) ועוד (4 / 2 = 2) נותן 6 + 2 = 8."
    },
    {
        id: 29, level: "medium",
        question: "מה יהיה הפלט של חישוב השארית כאשר המחולק קטן מהמחלק?",
        code: "int a = 3;\nint b = 7;\nConsole.WriteLine(a % b);",
        options: ["0", "3", "7", "2.33"],
        answer: 1, explanation: "כאשר המספר השמאלי קטן מהמספר הימני, החילוק השלם הוא 0 והשארית היא המספר השמאלי עצמו (3)."
    },
    {
        id: 30, level: "medium",
        question: "מה תהיה התוצאה של הקוד הבא?",
        code: "int x = 20;\nint y = 6;\nint z = x - (x % y);\nConsole.WriteLine(z);",
        options: ["18", "20", "2", "12"],
        answer: 0, explanation: "20 % 6 מחזיר שארית 2. לאחר מכן 20 - 2 מחזיר 18."
    },

    // ==================== HARD (31-45) ====================
    {
        id: 31, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 17;\nint b = 5;\nint res = a / b + a % b;\nConsole.WriteLine(res);",
        options: ["5", "3", "2", "5.4"],
        answer: 0, explanation: "17 / 5 בחילוק שלמים נותן 3. 17 % 5 מחזיר שארית 2. החיבור 3 + 2 נותן 5."
    },
    {
        id: 32, level: "hard",
        question: "מה תהיה התוצאה של הקוד הבא?",
        code: "int x = 5;\nint y = 2;\ndouble avg = (double)(x + y) / 2;\nConsole.WriteLine(avg);",
        options: ["3.5", "3", "3.0", "שגיאת קומפילציה"],
        answer: 0, explanation: "הסוגריים (x + y) מחושבים ל-7. ה-casting ממיר ל-7.0, והחילוק ב-2 נותן חילוק עשרוני מדויק: 3.5."
    },
    {
        id: 33, level: "hard",
        question: "מה תדפיס התוכנית הבאה?",
        code: "int num1 = 9;\nint num2 = 2;\ndouble result = (double)num1 / (double)num2;\nConsole.WriteLine(result);",
        options: ["4.5", "4", "4.0", "שגיאת קומפילציה"],
        answer: 0, explanation: "המרת שני האופרנדים ל-double מביאה לחילוק עשרוני מדויק: 9.0 / 2.0 = 4.5."
    },
    {
        id: 34, level: "hard",
        question: "מה מבצע קטע הקוד הבא על המשתנים a ו-b ללא משתנה עזר?",
        code: "int a = 5, b = 10;\na = a + b;\nb = a - b;\na = a - b;\nConsole.WriteLine(a + \",\" + b);",
        options: ["5,10", "10,5", "15,10", "0,0"],
        answer: 1, explanation: "זהו אלגוריתם קלאסי להחלפת ערכים (Swap) בין שני משתנים מספריים ללא משתנה עזר. התוצאה היא a=10, b=5."
    },
    {
        id: 35, level: "hard",
        question: "מה יהיה ערכו של המשתנה c בסוף הקוד?",
        code: "int a = 3;\nint b = 4;\nint c = a * b;\na = 10;\nConsole.WriteLine(c);",
        options: ["12", "40", "30", "0"],
        answer: 0, explanation: "המשתנה c מחושב כ-3 * 4 = 12 בזמן ההשמה. שינוי מאוחר של a ל-10 לא משנה את הערך שרק נשמר ב-c."
    },
    {
        id: 36, level: "hard",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int x = 2;\nint y = 3;\nint z = x + y;\nx = z * 2;\nConsole.WriteLine(x + y);",
        options: ["13", "10", "15", "5"],
        answer: 0, explanation: "z מחושב ל-2 + 3 = 5. אז x הופך ל-5 * 2 = 10. לבסוף, x + y מחושב ל-10 + 3 = 13."
    },
    {
        id: 37, level: "hard",
        question: "מה תהיה תוצאת חישוב סדר הקדימויות המורכב הבא?",
        code: "int a = 10, b = 3, c = 2;\nint res = a - b * c + a % b;\nConsole.WriteLine(res);",
        options: ["5", "15", "8", "3"],
        answer: 0, explanation: "כפל ומודולו מחושבים קודם משמאל לימין: b * c = 6, ו-a % b = 1. הביטוי מביא ל: 10 - 6 + 1 = 5."
    },
    {
        id: 38, level: "hard",
        question: "מה יהיה הפלט של הקוד הבא המשלב חילוק ומודולו?",
        code: "int total = 47;\nint tens = total / 10;\nint units = total % 10;\nConsole.WriteLine(units * 10 + tens);",
        options: ["47", "74", "11", "28"],
        answer: 1, explanation: "tens = 4, units = 7. החישוב units * 10 + tens נותן 7 * 10 + 4 = 74 (הפיכת ספרות המספר)."
    },
    {
        id: 39, level: "hard",
        question: "מה תהיה התוצאה של חישוב השארית עבור מספר שלילי ב-C#?",
        code: "int x = -15;\nint res = x % 4;\nConsole.WriteLine(res);",
        options: ["-3", "3", "-1", "1"],
        answer: 0, explanation: "ב-C#, סימן תוצאת השארית (מודולו) תמיד תואם לסימן של המחולק (האופרנד השמאלי), ולכן -15 % 4 נותן -3."
    },
    {
        id: 40, level: "hard",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int a = 10;\nint b = 3;\ndouble result = (double)(a / b);\nConsole.WriteLine(result);",
        options: ["3.3333", "3.0", "3", "שגיאה"],
        answer: 1, explanation: "קודם מבוצעת חלוקת שלמים (10 / 3 = 3) ורק אז המתוצאה מומרת ל-double (3.0), שכן ה-casting מבוצע על התוצאה ולא על האופרנדים."
    },
    {
        id: 41, level: "hard",
        question: "מה יהיה הפלט של הביטוי הבא?",
        code: "int a = 10, b = 4;\nint c = a - (a / b) * b;\nConsole.WriteLine(c);",
        options: ["2", "0", "10", "4"],
        answer: 0, explanation: "a / b בחילוק שלמים נותן 2. 2 * b נותן 8. 10 - 8 נותן 2 (זהו למעשה שחזור של אופרטור מודולו %)."
    },
    {
        id: 42, level: "hard",
        question: "מה תהיה התוצאה של קטע הקוד הבא?",
        code: "int a = 20;\nint b = 7;\nint res = (a / b) * (a % b);\nConsole.WriteLine(res);",
        options: ["12", "14", "6", "0"],
        answer: 0, explanation: "20 / 7 בחילוק שלמים שווה 2. 20 % 7 נותן שארית 6. המכפלה 2 * 6 שווה 12."
    },
    {
        id: 43, level: "hard",
        question: "מה יהיה ערכו של x בסוף שרשרת ההשמות המורכבת?",
        code: "int x = 5;\nint y = 10;\nx = x + y;\ny = x - y;\nx = x - y;\nConsole.WriteLine(x * 2);",
        options: ["20", "10", "30", "5"],
        answer: 0, explanation: "שרשרת ההשמות מבצעת Swap בין x ל-y, כך ש-x הופך ל-10. לאחר מכן x * 2 מחזיר 20."
    },
    {
        id: 44, level: "hard",
        question: "מה תדפיס התוכנית הבאה?",
        code: "double d = 7 / 2 + 7.0 / 2;\nConsole.WriteLine(d);",
        options: ["6.5", "7.0", "6", "3.5"],
        answer: 0, explanation: "7 / 2 נותן 3 (חילוק שלמים). 7.0 / 2 נותן 3.5 (חילוק עשרוני). חיבורם 3 + 3.5 נותן 6.5."
    },
    {
        id: 45, level: "hard",
        question: "מהו הפלט הסופי של הביטוי הבא?",
        code: "int num = 123;\nint sum = (num / 100) + (num / 10 % 10) + (num % 10);\nConsole.WriteLine(sum);",
        options: ["6", "123", "321", "12"],
        answer: 0, explanation: "num / 100 מחלץ את ספרת המאות (1). num / 10 % 10 מחלץ את ספרת העשרות (2). num % 10 מחלץ את ספרת האחדות (3). סכומן: 1 + 2 + 3 = 6."
    }
];