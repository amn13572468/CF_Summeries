// Register this topic's preparation bank for App.js to load by its configured key.
window.allAssignmentAndOperatorsPreparationQuestions = [
    // ==================== MEDIUM (1-15) ====================
    // 1
    {
        id: 1, level: "medium",
        question: "מה תהיה תוצאת הביטוי 4 % 7 ב-C#?",
        code: "",
        options: ["4", "0", "3", "7"],
        answer: 0, explanation: "כאשר המחולק קטן מהמחלק (4 &lt; 7), תוצאת החלוקה השלמה היא 0 והשארית היא המספר הקטן עצמו (4)."
    },
    // 2
    {
        id: 2, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 17;\nint b = 5;\nConsole.WriteLine($\"{a} / {b} = {a / b}, R={a % b}\");",
        options: ["17 / 5 = 3, R=2", "17 / 5 = 3.4, R=2", "17 / 5 = 3, R=0", "17 / 5 = 3.4, R=0"],
        answer: 0, explanation: "17 / 5 מניב חלוקה שלמה 3, ו-17 % 5 מניב שארית 2."
    },
    // 3
    {
        id: 3, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "Console.WriteLine(10 + 20 + \"30\");",
        options: ["3030", "102030", "60", "10 20 30"],
        answer: 0, explanation: "10 + 20 מחושב קודם כחיבור מספרי (30). לאחר מכן 30 משורשר למחרוזת \"30\" לקבלת \"3030\"."
    },
    // 4
    {
        id: 4, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "Console.WriteLine(\"10\" + 20 + 30);",
        options: ["102030", "3030", "1050", "60"],
        answer: 0, explanation: "החיבור מתחיל במחרוזת \"10\", ולכן כל הפעולות הבאות מבוצעות כשרשור מחרוזות (\"1020\" ואז \"102030\")."
    },
    // 5
    {
        id: 5, level: "medium",
        question: "מה מחזיר הביטוי num % 1 עבור כל מספר שלם num?",
        code: "",
        options: ["0", "1", "num", "שגיאה"],
        answer: 0, explanation: "כל מספר שלם מתחלק ב-1 ללא שארית, ולכן התוצאה היא תמיד 0."
    },
    // 6
    {
        id: 6, level: "medium",
        question: "מה מחזיר הביטוי num / 1 עבור כל מספר שלם num?",
        code: "",
        options: ["num", "1", "0", "שגיאה"],
        answer: 0, explanation: "חלוקת מספר ב-1 מחזירה את המספר עצמו ללא שינוי."
    },
    // 7
    {
        id: 7, level: "medium",
        question: "מה יהיה ערכו של המשתנה res בקוד הבא?",
        code: "int res = 12 / 3 * 2 % 5;",
        options: ["3", "0", "8", "1"],
        answer: 0, explanation: "החישוב משמאל לימין: 12 / 3 = 4, ואז 4 * 2 = 8. לבסוף 8 % 5 מחזיר שארית 3."
    },
    // 8
    {
        id: 8, level: "medium",
        question: "מה תהיה תוצאת החישוב 15.5 % 5 ב-C#?",
        code: "",
        options: ["0.5", "3", "0", "3.1"],
        answer: 0, explanation: "ב-C# אופרטור המודולו עובד גם על טיפוסים ממשים: 15.5 לחלק ל-5 נכנס 3 פעמים מלאות (15.0) והשארית היא 0.5."
    },
    // 9
    {
        id: 9, level: "medium",
        question: "מה תהיה תוצאת המרת ימים לשבועות וימים עודפים עבור 17 ימים?",
        code: "int days = 17;\nint weeks = days / 7;\nint remDays = days % 7;",
        options: ["weeks=2, remDays=3", "weeks=2, remDays=4", "weeks=2.4, remDays=3", "weeks=3, remDays=0"],
        answer: 0, explanation: "17 / 7 נותן 2 שבועות שלמים. 17 % 7 נותן שארית של 3 ימים עודפים."
    },
    // 10
    {
        id: 10, level: "medium",
        question: "מה יהיה ערכו של המשתנה ans עבור a=5 ו-b=3?",
        code: "int a = 5, b = 3;\nint ans = (a + b) * (a - b);",
        options: ["16", "8", "2", "15"],
        answer: 0, explanation: "(5 + 3) = 8. (5 - 3) = 2. המכפלה 8 * 2 מניבה 16."
    },
    // 11
    {
        id: 11, level: "medium",
        question: "מה מבודד הביטוי 582 % 100?",
        code: "",
        options: ["82", "5", "8", "2"],
        answer: 0, explanation: "מודולו 100 מבודד את שתי הספרות הימניות של המספר (82)."
    },
    // 12
    {
        id: 12, level: "medium",
        question: "מה מבודד הביטוי 582 / 100 ב-int?",
        code: "",
        options: ["5", "58", "82", "5.82"],
        answer: 0, explanation: "חלוקה שלמה ב-100 מבודדת את ספרת המאות במספר תלת-ספרתי (5)."
    },
    // 13
    {
        id: 13, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "double x = 7;\nx = x / 2;\nConsole.WriteLine(x);",
        options: ["3.5", "3", "3.0", "4"],
        answer: 0, explanation: "מכיוון ש-x הוא double, הביטוי x / 2 מקדם את החלוקה ל-double ומניב 3.5."
    },
    // 14
    {
        id: 14, level: "medium",
        question: "מה תהיה התוצאה של (10 + 2 * 3) / 4?",
        code: "",
        options: ["4", "3", "4.0", "2"],
        answer: 0, explanation: "הכפל בסוגריים: 2 * 3 = 6. החיבור בסוגריים: 10 + 6 = 16. החלוקה ב-4: 16 / 4 = 4."
    },
    // 15
    {
        id: 15, level: "medium",
        question: "איזה מבין הטיפוסים הבאים יקבל את תוצאת החיסור 10.5 - 3 ללא שגיאה?",
        code: "",
        options: ["double", "int", "char", "string"],
        answer: 0, explanation: "חיסור הכולל מספר ממשי (10.5) מחזיר תוצאה מטיפוס double."
    },

    // ==================== HARD (16-30) ====================
    // 16
    {
        id: 16, level: "hard",
        question: "נתון מספר חמש-ספרתי num = 12345. איזה ביטוי מבודד את הספרה האמצעית (3)?",
        code: "int num = 12345;",
        options: ["(num / 100) % 10", "num % 100", "num / 1000", "(num % 1000) / 100"],
        answer: 0, explanation: "12345 / 100 מוריד שתי ספרות ימניות ומחזיר 123. לאחר מכן 123 % 10 מבודד את ספרת האחדות שלו, שהיא 3."
    },
    // 17
    {
        id: 17, level: "hard",
        question: "מה תהיה תוצאת ההרצה של קטע הקוד הבא המחשב עודף במטבעות של 10 ו-1?",
        code: "int change = 47;\nint tens = change / 10;\nint ones = change % 10;\nConsole.WriteLine(tens + \" tens, \" + ones + \" ones\");",
        options: ["4 tens, 7 ones", "4.7 tens, 0 ones", "7 tens, 4 ones", "40 tens, 7 ones"],
        answer: 0, explanation: "47 / 10 נותן 4 מטבעות של עשר. 47 % 10 נותן 7 מטבעות של שקל אחד."
    },
    // 18
    {
        id: 18, level: "hard",
        question: "מה יהיה ערכו של המשתנה x בסוף קטע הקוד הבא?",
        code: "int x = 10 + 5 * 2 - 8 / 4 + 7 % 3;",
        options: ["19", "21", "15", "18"],
        answer: 0, explanation: "כפל, חילוק ומודולו ראשונים: 5*2=10, 8/4=2, 7%3=1. לאחר מכן חיבור וחיסור משמאל לימין: 10 + 10 - 2 + 1 = 19."
    },
    // 19
    {
        id: 19, level: "hard",
        question: "איזה ביטוי הופך סדר ספרות של מספר תלת-ספרתי num (למשל 123 הופך ל-321)?",
        code: "int num = 123;",
        options: ["(num % 10) * 100 + ((num / 10) % 10) * 10 + (num / 100)", "(num % 10) + (num / 10) + (num / 100)", "(num / 100) * 100 + (num % 10)", "(num % 100) * 10 + (num / 100)"],
        answer: 0, explanation: "ספרת האחדות מוכפלת ב-100 (300), ספרת העשרות מוכפלת ב-10 (20), וספרת המאות מתווספת (1). סכומם 321."
    },
    // 20
    {
        id: 20, level: "hard",
        question: "מה יהיה ערכו של המשתנה z בסוף קטע הקוד הבא?",
        code: "int x = 5;\nint y = 2;\ndouble z = (x / y) + (double)(x % y) / y;",
        options: ["2.5", "2.0", "2", "3.0"],
        answer: 0, explanation: "(x / y) בחלוקה שלמה נותן 2. (x % y) נותן 1. המרה ל-double וחלוקה ב-2 נותנת 0.5. סכומם 2 + 0.5 = 2.5."
    },
    // 21
    {
        id: 21, level: "hard",
        question: "איזה תנאי מתמטי בודק האם מספר תלת-ספרתי num הוא פלינדרום (ספרת המאות שווה לספרת האחדות)?",
        code: "int num = 121;",
        options: ["(num / 100) == (num % 10)", "(num / 10) == (num % 10)", "(num / 100) == (num / 10)", "(num % 100) == (num / 100)"],
        answer: 0, explanation: "num / 100 מבודד את ספרת המאות. num % 10 מבודד את ספרת האחדות. השוואה ביניהם בודקת פלינדרום תלת-ספרתי."
    },
    // 22
    {
        id: 22, level: "hard",
        question: "מה מחושב עבור ימי שבוע בלולאה מעגלית (0=ראשון, 6=שבת) לאחר שעברו N ימים?",
        code: "int startDay = 5;\nint daysPassed = 10;\nint nextDay = (startDay + daysPassed) % 7;",
        options: ["1 (יום שני)", "15", "2 (יום שלישי)", "0 (יום ראשון)"],
        answer: 0, explanation: "5 + 10 = 15. 15 % 7 מחזיר 1, שמיצג את יום שני."
    },
    // 23
    {
        id: 23, level: "hard",
        question: "מה מחושב בביטוי חישוב מספר עמודים נדרש עבור N פריטים כאשר בכל עמוד נכנסים P פריטים?",
        code: "int items = 25, pageSize = 10;\nint pages = (items + pageSize - 1) / pageSize;",
        options: ["3", "2", "2.5", "3.0"],
        answer: 0, explanation: "(25 + 10 - 1) / 10 = 34 / 10 = 3 עמודים (טכניקת עיגול למעלה בחלוקה שלמה)."
    },
    // 24
    {
        id: 24, level: "hard",
        question: "מה יהיה ערכו של המשתנה answer בקוד הבא?",
        code: "int a = 10, b = 3;\ndouble answer = (double)a / b - a / b;",
        options: ["0.33333333333333337", "0", "3.3333333333333335", "3"],
        answer: 0, explanation: "(double)a / b מחזיר 3.33333... אולם a / b בחלוקה שלמה מחזיר 3. החיסור מניב את החלק השברי בלבד (0.3333...)."
    },
    // 25
    {
        id: 25, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 100;\nint y = 0;\nConsole.WriteLine(x % 2 == y);",
        options: ["True", "False", "0", "שגיאת קומפילציה"],
        answer: 0, explanation: "100 % 2 שווה 0. y שווה 0. ההשוואה 0 == 0 היא אמת ולכן מודפס True."
    },
    // 26
    {
        id: 26, level: "hard",
        question: "מה מטרת הקוד הבא המשתמש באופרטור %?",
        code: "int n = 14;\nbool flag = (n % 2 != 0);",
        options: ["בדיקה האם המספר אי-זוגי", "בדיקה האם המספר זוגי", "חלוקת המספר ב-2", "איפוס המספר"],
        answer: 0, explanation: "אם שארית החלוקה ב-2 שונה מ-0, המספר הוא אי-זוגי ולכן flag יקבל True."
    },
    // 27
    {
        id: 27, level: "hard",
        question: "מה תהיה התוצאה של (15 % 4) % 2?",
        code: "",
        options: ["1", "3", "0", "2"],
        answer: 0, explanation: "15 % 4 נותן שארית 3. לאחר מכן 3 % 2 נותן שארית 1."
    },
    // 28
    {
        id: 28, level: "hard",
        question: "איזה ביטוי מחשב את המרחק החיובי בין שתי נקודות על ציר X ללא שימוש ב-Math.Abs?",
        code: "int x1 = 12, x2 = 5;",
        options: ["(x1 &gt; x2) ? (x1 - x2) : (x2 - x1)", "x1 - x2", "x2 - x1", "(x1 + x2) / 2"],
        answer: 0, explanation: "הביטוי המותנה מחסר תמיד את המספר הקטן מהמספר הגדול כדי להבטיח מרחק חיובי."
    },
    // 29
    {
        id: 29, level: "hard",
        question: "מה יקרה בעת ביצוע הביטוי 5.0 % 0.0 ב-C#?",
        code: "",
        options: ["NaN (Not a Number)", "שגיאת DivideByZeroException", "0", "Infinity"],
        answer: 0, explanation: "בחישוב מודולו של נקודה צפה (double) עם 0.0, התוצאה היא NaN ולא נזרקת חריגה."
    },
    // 30
    {
        id: 30, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 7, b = 3;\nConsole.WriteLine(a - a / b * b);",
        options: ["1", "0", "7", "3"],
        answer: 0, explanation: "הביטוי a - (a / b * b) שקול זהותית ל-a % b (שארית החלוקה). 7 % 3 מחזיר 1."
    }
];
