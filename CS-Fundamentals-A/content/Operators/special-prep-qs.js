// Register this topic's preparation bank for App.js to load by its configured key.
window.allSpecialOperatorsPreparationQuestions = [
    // ==================== MEDIUM (1-15) ====================
    // 1
    {
        id: 1, level: "medium",
        question: "מה תהיה התוצאה של ביצוע ההוראה Console.WriteLine(num++); עבור num = 10?",
        code: "int num = 10;\nConsole.WriteLine(num++);",
        options: ["10 מודפס, וערכו של num הופך ל-11", "11 מודפס, וערכו של num הופך ל-11", "10 מודפס, וערכו של num נשאר 10", "11 מודפס, וערכו של num נשאר 10"],
        answer: 0, explanation: "בפוסט-פיקסי הערך המקורי (10) מודפס ראשון, ורק לאחר מכן המשתנה num מוגדל ל-11."
    },
    // 2
    {
        id: 2, level: "medium",
        question: "מה תהיה התוצאה של ביצוע ההוראה Console.WriteLine(++num); עבור num = 10?",
        code: "int num = 10;\nConsole.WriteLine(++num);",
        options: ["11 מודפס, וערכו של num הופך ל-11", "10 מודפס, וערכו של num הופך ל-11", "11 מודפס, וערכו של num נשאר 10", "10 מודפס, וערכו של num נשאר 10"],
        answer: 0, explanation: "בפרה-פיקסי המשתנה num מוגדל תחילה ל-11, והערך המעודכן 11 מודפס למסך."
    },
    // 3
    {
        id: 3, level: "medium",
        question: "מה יהיה ערכו של x בסוף קטע הקוד הבא?",
        code: "int x = 10;\nx %= 3;\nx += 4;",
        options: ["5", "1", "4", "7"],
        answer: 0, explanation: "10 %= 3 מחשב שארית (10 % 3 = 1) ומעדכן ל-1. x += 4 מוסיף 4 ל-1 ומקבל 5."
    },
    // 4
    {
        id: 4, level: "medium",
        question: "מה יהיה התו c בסוף קטע הקוד הבא?",
        code: "char c = 'a';\nc += (char)2;",
        options: ["'c'", "'a2'", "'b'", "'99'"],
        answer: 0, explanation: "ערך ה-ASCII של 'a' הוא 97. הוספת 2 מניבה 99, שהוא קוד ה-ASCII של התו 'c'."
    },
    // 5
    {
        id: 5, level: "medium",
        question: "מה יהיה ערכו של המשתנה count לאחר שתי הוראות הפחתה ברציפות?",
        code: "int count = 3;\ncount--;\ncount--;",
        options: ["1", "2", "0", "3"],
        answer: 0, explanation: "כל הפחתה count-- מורידה את הערך ב-1: מ-3 ל-2, ומ-2 ל-1."
    },
    // 6
    {
        id: 6, level: "medium",
        question: "מה יהיה ערכו של a בסוף קטע הקוד הבא?",
        code: "int a = 8;\nint b = a / 2;\na %= b;",
        options: ["0", "4", "2", "8"],
        answer: 0, explanation: "b מקבל 8 / 2 = 4. a %= 4 מחשב 8 % 4 (שארית 0) ומעדכן את a ל-0."
    },
    // 7
    {
        id: 7, level: "medium",
        question: "מה תהיה תוצאת חישוב מחיר כולל מע\"מ (17%) בקוד הבא?",
        code: "double price = 100;\nprice *= 1.17;",
        options: ["117.0", "117", "17.0", "100.17"],
        answer: 0, explanation: "price *= 1.17 מכפיל את 100 ב-1.17 ומעדכן את price ל-117.0."
    },
    // 8
    {
        id: 8, level: "medium",
        question: "מה מחזירה הפעולה x -= x לכל ערך של x?",
        code: "",
        options: ["0", "x", "1", "שגיאת קומפילציה"],
        answer: 0, explanation: "x -= x שקול ל-x = x - x, שתוצאתו היא תמיד 0."
    },
    // 9
    {
        id: 9, level: "medium",
        question: "מה מחזירה הפעולה x *= x עבור x = 4?",
        code: "int x = 4;\nx *= x;",
        options: ["16", "8", "4", "1"],
        answer: 0, explanation: "x *= x מכפיל את המשתנה בעצמו (4 * 4 = 16)."
    },
    // 10
    {
        id: 10, level: "medium",
        question: "מה יכילו המשתנים x ו-y בסוף קטע הקוד הבא?",
        code: "int x = 10;\nint y = 20;\nx += y;\ny += x;",
        options: ["x = 30, y = 50", "x = 30, y = 30", "x = 10, y = 30", "x = 50, y = 50"],
        answer: 0, explanation: "x += y מעדכן את x ל-30 (10 + 20). לאחר מכן y += x מוסיף את x החדש (30) ל-y (20) ומעדכן ל-50."
    },
    // 11
    {
        id: 11, level: "medium",
        question: "מה יהיה הפלט של שרשור מחרוזת עם מספר באמצעות +=?",
        code: "string code = \"A\";\ncode += 1;",
        options: ["\"A1\"", "\"B\"", "\"66\"", "שגיאת קומפילציה"],
        answer: 0, explanation: "שרשור מחרוזת עם מספר ממיר את המספר לטקסט ומשרשר אותו בסוף המחרוזת לקבלת \"A1\"."
    },
    // 12
    {
        id: 12, level: "medium",
        question: "מה יהיה ערכו של x בסוף קטע הקוד הבא?",
        code: "int x = 15;\nx /= 2;\nx %= 3;",
        options: ["1", "7", "0", "2"],
        answer: 0, explanation: "x /= 2 מבצע חלוקה שלמה (15 / 2 = 7). x %= 3 מחשב שארית (7 % 3 = 1) ומעדכן ל-1."
    },
    // 13
    {
        id: 13, level: "medium",
        question: "מה יכילו המשתנים a, b ו-c בסוף הקוד?",
        code: "int a = 5;\nint b = ++a;\nint c = a++;",
        options: ["a = 7, b = 6, c = 6", "a = 7, b = 6, c = 7", "a = 6, b = 6, c = 6", "a = 7, b = 5, c = 6"],
        answer: 0, explanation: "++a מעלה את a ל-6 ומציב b=6. a++ מציב c=6 (ערך מקורי) ואז מעלה את a ל-7. לכן a=7, b=6, c=6."
    },
    // 14
    {
        id: 14, level: "medium",
        question: "מה יתרחש בהרצת הקוד הבא?",
        code: "int a = 10;\na /= 0;",
        options: ["תיזרק שגיאת בזמן הרצה DivideByZeroException", "a יקבל את הערך 0", "a יקבל את הערך infinity", "שגיאת קומפילציה"],
        answer: 0, explanation: "חלוקה ואיפוס באמצעות /= 0 על מספר שלם זורקת DivideByZeroException בזמן הרצה."
    },
    // 15
    {
        id: 15, level: "medium",
        question: "מה יהיה ערכו של המשתנה val בסוף קטע הקוד?",
        code: "int val = 100;\nval /= 10;\nval *= 2;",
        options: ["20", "10", "200", "5"],
        answer: 0, explanation: "val /= 10 מחלק ל-10 (100 / 10 = 10). val *= 2 מכפיל ב-2 ומעדכן ל-20."
    },

    // ==================== HARD (16-30) ====================
    // 16
    {
        id: 16, level: "hard",
        question: "מה יהיה ערכו של המשתנה x בסוף קטע הקוד הבא?",
        code: "int x = 2;\nx += x++ + ++x;",
        options: ["8", "7", "6", "9"],
        answer: 0, explanation: "x++ מחזיר 2 (x הופך ל-3). ++x מעלה את x ל-4 ומחזיר 4. סכומם 2 + 4 = 6. x += 6 מוסיף 6 ל-x המקורי (2) ומעדכן ל-8."
    },
    // 17
    {
        id: 17, level: "hard",
        question: "מה יהיו ערכי המשתנים a ו-b בסוף הקוד?",
        code: "int a = 5;\nint b = a++ * ++a;",
        options: ["a = 7, b = 35", "a = 7, b = 30", "a = 6, b = 36", "a = 7, b = 42"],
        answer: 0, explanation: "a++ מחזיר 5 (a הופך ל-6). ++a מעלה את a ל-7 ומחזיר 7. המכפלה 5 * 7 = 35 נשמרת ב-b, ו-a נשאר 7."
    },
    // 18
    {
        id: 18, level: "hard",
        question: "מה יהיה ערכו של המשתנה a בסוף קטע הקוד הבא?",
        code: "int a = 10;\na -= a++ - --a;",
        options: ["10", "0", "9", "11"],
        answer: 0, explanation: "a++ מחזיר 10 (a הופך ל-11). --a מוריד את a ל-10 ומחזיר 10. החיסור 10 - 10 = 0. אזי a -= 0 משאיר את a = 10."
    },
    // 19
    {
        id: 19, level: "hard",
        question: "מה יהיה ערכו של x בסוף קטע הקוד הבא?",
        code: "int x = 3;\nx *= x++ + 1;",
        options: ["12", "15", "9", "16"],
        answer: 0, explanation: "x++ מחזיר 3 (x הופך ל-4). 3 + 1 = 4. x *= 4 מכפיל את x המקורי (3) ב-4 ומעדכן ל-12."
    },
    // 20
    {
        id: 20, level: "hard",
        question: "מה יכילו המשתנים a ו-b בסוף קטע הקוד המדורג הבא?",
        code: "int a = 1;\nint b = 2;\na += b += 3;",
        options: ["a = 6, b = 5", "a = 5, b = 5", "a = 6, b = 2", "a = 3, b = 5"],
        answer: 0, explanation: "הביטוי מחושב מימין לשמאל: b += 3 מעדכן את b ל-5 (2 + 3). לאחר מכן a += 5 מוסיף 5 ל-a (1) ומעדכן את a ל-6."
    },
    // 21
    {
        id: 21, level: "hard",
        question: "מה יהיו ערכי המשתנים x ו-y בסוף קטע הקוד?",
        code: "int x = 7;\nint y = x-- % 4;",
        options: ["x = 6, y = 3", "x = 6, y = 2", "x = 7, y = 3", "x = 6, y = 0"],
        answer: 0, explanation: "x-- מחזיר את הערך המקורי 7 לקוד המודולו (7 % 4 = 3 שנשמר ב-y), ורק לאחר מכן x יורד ל-6."
    },
    // 22
    {
        id: 22, level: "hard",
        question: "מה יהיו ערכי המשתנים x ו-y בסוף קטע הקוד?",
        code: "int x = 7;\nint y = --x % 4;",
        options: ["x = 6, y = 2", "x = 6, y = 3", "x = 7, y = 2", "x = 6, y = 0"],
        answer: 0, explanation: "--x מוריד תחילה את x ל-6 ומחזיר 6 לקוד המודולו (6 % 4 = 2 שנשמר ב-y)."
    },
    // 23
    {
        id: 23, level: "hard",
        question: "מה יכיל המשתנה rev בקוד הבא המחשב היפוך מספר דו-ספרתי n=42 באמצעות אופרטורים מיוחדים?",
        code: "int n = 42;\nint rev = 0;\nrev += n % 10;\nrev *= 10;\nn /= 10;\nrev += n;",
        options: ["24", "42", "6", "240"],
        answer: 0, explanation: "rev += 2 (rev=2). rev *= 10 (rev=20). n /= 10 (n=4). rev += 4 (rev=24)."
    },
    // 24
    {
        id: 24, level: "hard",
        question: "מה יכיל המשתנה sum בקוד הבא המחשב סכום ספרות של n=58?",
        code: "int n = 58;\nint sum = 0;\nsum += n % 10;\nn /= 10;\nsum += n;",
        options: ["13", "58", "5", "8"],
        answer: 0, explanation: "sum += 8 (sum=8). n /= 10 (n=5). sum += 5 (sum=13)."
    },
    // 25
    {
        id: 25, level: "hard",
        question: "מה יהיה ערכו של x בסוף קטע הקוד הבא?",
        code: "int x = 10;\nx %= x /= 3;",
        options: ["1", "0", "3", "10"],
        answer: 0, explanation: "x /= 3 מחושב קודם ומעדכן את x ל-3 (וחוזר 3). לאחר מכן x %= 3 מחשב 10 % 3 = 1 ומעדכן את x ל-1."
    },
    // 26
    {
        id: 26, level: "hard",
        question: "מה יהיה התו ch בסוף קטע הקוד הבא?",
        code: "char ch = 'E';\nch -= (char)4;",
        options: ["'A'", "'E'", "'B'", "'C'"],
        answer: 0, explanation: "קוד ה-ASCII של 'E' הוא 69. חיסור 4 מניב 65, שהוא קוד ה-ASCII של התו 'A'."
    },
    // 27
    {
        id: 27, level: "hard",
        question: "מה יהיה ערכו של המשתנה x בסוף קטע הקוד הבא?",
        code: "int x = 2;\nx = ++x + x++ + ++x;",
        options: ["11", "9", "10", "12"],
        answer: 0, explanation: "++x ראשון מעלה את x ל-3 ומחזיר 3. x++ השני מחזיר 3 (ומעלה את x ל-4). ++x השלישי מעלה את x ל-5 ומחזיר 5. סכומם 3 + 3 + 5 = 11."
    },
    // 28
    {
        id: 28, level: "hard",
        question: "איזה מבין המשפטים הבאים מתאר נכונה את האופרטור x += y ב-C#?",
        code: "",
        options: ["הוא מבצע השמה עם המרה מרומזת של תוצאת החיבור לטיפוס המשתנה x", "הוא שקול ל-y = x + y", "הוא עובד אך ורק על מספרים שלמים", "הוא אינו משנה את ערכו של המשתנה x"],
        answer: 0, explanation: "האופרטור x += y מגן על טיפוס x ומבצע המרה מרומזת של תוצאת הביטוי בחזרה לטיפוס המקורי של x."
    },
    // 29
    {
        id: 29, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 5;\nConsole.WriteLine(a += a++);",
        options: ["10", "11", "5", "שגיאת קומפילציה"],
        answer: 0, explanation: "a++ מחזיר 5 (ומעלה את a ל-6). אופרטור ההשמה a += 5 מוסיף 5 לערך a המקורי (5) ומעדכן את a ל-10."
    },
    // 30
    {
        id: 30, level: "hard",
        question: "מה יכיל המשתנה num בסוף קטע הקוד הבא?",
        code: "int num = 100;\nnum /= 2 + 3 * 2;",
        options: ["12", "20", "25", "10"],
        answer: 0, explanation: "האגף הימני 2 + 3 * 2 מחושב קודם לפי קדימות: 3 * 2 = 6, ו-2 + 6 = 8. num /= 8 מניב חלוקה שלמה 100 / 8 = 12."
    }
];

