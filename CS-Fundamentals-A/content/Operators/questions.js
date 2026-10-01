window.allOperatorsQuestions = [
    // ==================== EASY (1-15) ====================
    {
        id: 1,
        level: "easy",
        question: "מה התוצאה של 5 + 3?",
        code: "Console.WriteLine(5 + 3);",
        options: ["2", "8", "15", "53"],
        answer: 1,
        explanation: "האופרטור + מחבר את שני המספרים לקבלת 8."
    },
    {
        id: 2,
        level: "easy",
        question: "מה יהיה הפלט של חיסור המספרים הבא?",
        code: "Console.WriteLine(10 - 4);",
        options: ["6", "14", "-6", "40"],
        answer: 0,
        explanation: "האופרטור - מחסר את המספר הימני מהשמאלי: 10 - 4 = 6."
    },
    {
        id: 3,
        level: "easy",
        question: "מה התוצאה של מפעיל הכפל בקוד הבא?",
        code: "Console.WriteLine(4 * 3);",
        options: ["7", "12", "1", "43"],
        answer: 1,
        explanation: "האופרטור * מבצע כפל אריתמטי: 4 * 3 = 12."
    },
    {
        id: 4,
        level: "easy",
        question: "מה תהיה תוצאת החילוק של 20 ב-5?",
        code: "Console.WriteLine(20 / 5);",
        options: ["4", "100", "15", "0"],
        answer: 0,
        explanation: "האופרטור / מחלק 20 ב-5 והתוצאה היא 4."
    },
    {
        id: 5,
        level: "easy",
        question: "מה מחזיר האופרטור מודולו (%)?",
        code: "Console.WriteLine(7 % 3);",
        options: ["2", "1", "2.33", "0"],
        answer: 1,
        explanation: "האופרטור % מחזיר את שארית החילוק השלם. 7 לחלק ל-3 הוא 2 עם שארית 1."
    },
    {
        id: 6,
        level: "easy",
        question: "מה עושה האופרטור ++ בקוד הבא?",
        code: "int x = 5;\nx++;\nConsole.WriteLine(x);",
        options: ["5", "6", "4", "55"],
        answer: 1,
        explanation: "האופרטור ++ (Increment) מעלה את ערך המשתנה ב-1."
    },
    {
        id: 7,
        level: "easy",
        question: "מה עושה האופרטור -- בקוד הבא?",
        code: "int y = 8;\ny--;\nConsole.WriteLine(y);",
        options: ["8", "9", "7", "0"],
        answer: 2,
        explanation: "האופרטור -- (Decrement) מוריד את ערך המשתנה ב-1."
    },
    {
        id: 8,
        level: "easy",
        question: "מה תהיה שארית החילוק של 10 ב-2?",
        code: "Console.WriteLine(10 % 2);",
        options: ["5", "0", "1", "2"],
        answer: 1,
        explanation: "מכיוון ש-10 מתחלק ב-2 ללא שארית, התוצאה של 10 % 2 היא 0."
    },
    {
        id: 9,
        level: "easy",
        question: "מה יהיה ערכו של המשתנה a בסוף הקוד?",
        code: "int a = 3;\na += 4;\nConsole.WriteLine(a);",
        options: ["3", "4", "7", "34"],
        answer: 2,
        explanation: "האופרטור += מוסיף 4 לערכו הקיים של a (3 + 4 = 7)."
    },
    {
        id: 10,
        level: "easy",
        question: "מה יהיה הפלט של חיבור מחרוזת ומספר?",
        code: "Console.WriteLine(\"Num: \" + 5);",
        options: ["Num: 5", "5", "שגיאה", "Num:5"],
        answer: 0,
        explanation: "כאשר אופרטור + משמש בין מחרוזת למספר, המספר מומר למחרוזת ומתבצע שרשור."
    },
    {
        id: 11,
        level: "easy",
        question: "מה יהיה ערך המשתנה x לאחר ההשמה המקוצרת?",
        code: "int x = 10;\nx -= 3;\nConsole.WriteLine(x);",
        options: ["10", "3", "7", "-3"],
        answer: 2,
        explanation: "הביטוי x -= 3 שקול ל- x = x - 3, ולכן התוצאה היא 7."
    },
    {
        id: 12,
        level: "easy",
        question: "מה תהיה תוצאת הכפל המקוצר בקוד הבא?",
        code: "int a = 5;\na *= 2;\nConsole.WriteLine(a);",
        options: ["5", "2", "10", "25"],
        answer: 2,
        explanation: "הביטוי a *= 2 מכפיל את הערך הקיים ב-2, כלומר 5 * 2 = 10."
    },
    {
        id: 13,
        level: "easy",
        question: "מה יהיה הפלט של חיבור שתי מחרוזות?",
        code: "string first = \"Hello \";\nstring second = \"World\";\nConsole.WriteLine(first + second);",
        options: ["HelloWorld", "Hello World", "Hello+World", "שגיאת קומפילציה"],
        answer: 1,
        explanation: "האופרטור + משרשר את שתי המחרוזות יחד באותה שורה."
    },
    {
        id: 14,
        level: "easy",
        question: "מה מחזיר הביטוי 15 % 4?",
        code: "int res = 15 % 4;\nConsole.WriteLine(res);",
        options: ["3", "3.75", "1", "0"],
        answer: 0,
        explanation: "15 לחלק ל-4 זה 3 שלמים (12) והשארית שנשארת היא 3."
    },
    {
        id: 15,
        level: "easy",
        question: "מה יתרחש לאחר ביצוע הפעולה בחילוק מקוצר?",
        code: "int num = 20;\nnum /= 4;\nConsole.WriteLine(num);",
        options: ["20", "80", "5", "4"],
        answer: 2,
        explanation: "הביטוי num /= 4 מחלק את num ב-4 ושומר בתוכו את התוצאה 5."
    },

    // ==================== MEDIUM (16-30) ====================
    {
        id: 16,
        level: "medium",
        question: "מה יהיה הפלט של הקוד הבא לפי סדר פעולות החשבון?",
        code: "Console.WriteLine(2 + 3 * 4);",
        options: ["20", "14", "24", "10"],
        answer: 1,
        explanation: "לפי סדר קדימויות חשבון, כפל מבוצע לפני חיבור: (3 * 4 = 12) ואז (2 + 12 = 14)."
    },
    {
        id: 17,
        level: "medium",
        question: "מה תהיה תוצאת החילוק של שני מספרים שלמים ב-C#?",
        code: "int a = 9;\nint b = 2;\nConsole.WriteLine(a / b);",
        options: ["4.5", "4", "5", "4.0"],
        answer: 1,
        explanation: "חילוק בין שני שלמים (int / int) מוחזק כחילוק שלם ומקצץ את החלק העשרוני."
    },
    {
        id: 18,
        level: "medium",
        question: "מה תהיה התוצאה כאשר אחד האופרנדים הוא מסוג double?",
        code: "double a = 9.0;\nint b = 2;\nConsole.WriteLine(a / b);",
        options: ["4.5", "4", "4.0", "שגיאת קומפילציה"],
        answer: 0,
        explanation: "כאשר אחד האופרנדים הוא double, החילוק מבוצע כחילוק עשרוני והתוצאה היא 4.5."
    },
    {
        id: 19,
        level: "medium",
        question: "מהו ההבדל בין Postfix ל-Prefix בקוד הבא (מה יודפס)?",
        code: "int x = 5;\nConsole.WriteLine(x++);",
        options: ["5", "6", "4", "שגיאה"],
        answer: 0,
        explanation: "האופרטור x++ (Postfix) מחזיר קודם את הערך הנוכחי (5) להדפסה, ורק לאחר מכן מעלה אותו ל-6."
    },
    {
        id: 20,
        level: "medium",
        question: "מה יודפס כאשר משתמשים באופרטור ++x (Prefix)?",
        code: "int x = 5;\nConsole.WriteLine(++x);",
        options: ["5", "6", "4", "שגיאה"],
        answer: 1,
        explanation: "האופרטור ++x (Prefix) מעלה את הערך ב-1 **לפני** העברתו להדפסה, ולכן מודפס 6."
    },
    {
        id: 21,
        level: "medium",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int a = 10;\nint b = 3;\nConsole.WriteLine(a % b + 2);",
        options: ["3", "5", "1", "0"],
        answer: 0,
        explanation: "10 % 3 מחזיר שארית 1. לאחר מכן 1 + 2 = 3."
    },
    {
        id: 22,
        level: "medium",
        question: "מה תהיה תוצאת הביטוי עם סוגריים?",
        code: "Console.WriteLine((2 + 3) * 4);",
        options: ["14", "20", "24", "10"],
        answer: 1,
        explanation: "הסוגריים משנים את קדימות הפעולות: (2 + 3 = 5), ואז (5 * 4 = 20)."
    },
    {
        id: 23,
        level: "medium",
        question: "מה יהיה הפלט של שרשור מחרוזות ומספרים משמאל לימין?",
        code: "Console.WriteLine(\"Result: \" + 5 + 5);",
        options: ["Result: 10", "Result: 55", "Result: 5+5", "שגיאה"],
        answer: 1,
        explanation: "הפעולה מבוצעת משמאל לימין: \"Result: \" + 5 הופך ל-\"Result: 5\", ואז + 5 משרשר שוב לקבלת \"Result: 55\"."
    },
    {
        id: 24,
        level: "medium",
        question: "כיצד הסוגריים משפיעים על שרשור וחיבור במחרוזת?",
        code: "Console.WriteLine(\"Result: \" + (5 + 5));",
        options: ["Result: 10", "Result: 55", "Result: 5+5", "שגיאה"],
        answer: 0,
        explanation: "הסוגריים מורים לבצע קודם את החיבור המתמטי (5 + 5 = 10) ורק אז לשרשר לקבלת \"Result: 10\"."
    },
    {
        id: 25,
        level: "medium",
        question: "מה תהיה התוצאה של מודולו מקוצר?",
        code: "int x = 17;\nx %= 5;\nConsole.WriteLine(x);",
        options: ["2", "3", "3.4", "0"],
        answer: 0,
        explanation: "הביטוי x %= 5 שקול ל- x = 17 % 5. השארית מחלוקת 17 ב-5 היא 2."
    },
    {
        id: 26,
        level: "medium",
        question: "מה יהיה ערכו של המשתנה b בסוף הקוד?",
        code: "int a = 4;\nint b = a++;\nConsole.WriteLine(b);",
        options: ["4", "5", "3", "0"],
        answer: 0,
        explanation: "בגלל שזה Postfix (a++), הערך המקורי של a (4) מושם קודם ל-b, ורק אז a גדל ל-5."
    },
    {
        id: 27,
        level: "medium",
        question: "מה יהיה ערכו של המשתנה b בקוד הבא?",
        code: "int a = 4;\nint b = ++a;\nConsole.WriteLine(b);",
        options: ["4", "5", "3", "0"],
        answer: 1,
        explanation: "בגלל שזה Prefix (++a), a גדל קודם ל-5, והערך החדש (5) מושם לתוך b."
    },
    {
        id: 28,
        level: "medium",
        question: "מה תהיה התוצאה של החילוק הבא?",
        code: "double x = 7 / 2;\nConsole.WriteLine(x);",
        options: ["3.5", "3", "3.0", "שגיאת קומפילציה"],
        answer: 1,
        explanation: "7 / 2 מחושב קודם בין שלמים ולכן שווה ל-3. השמת התוצאה 3 ל-double מציגה 3 (או 3.0)."
    },
    {
        id: 29,
        level: "medium",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int x = 10;\nx += x * 2;\nConsole.WriteLine(x);",
        options: ["20", "30", "40", "10"],
        answer: 1,
        explanation: "האגף הימני מחושב קודם: x * 2 = 20. לאחר מכן x += 20 מתווסף ל-10 המקורי לקבלת 30."
    },
    {
        id: 30,
        level: "medium",
        question: "מה מחזיר מודולו כאשר המספר השמאלי קטן מהימני?",
        code: "Console.WriteLine(3 % 7);",
        options: ["3", "7", "0", "2.33"],
        answer: 0,
        explanation: "כאשר המספר השמאלי (3) קטן מהמספר המחלק (7), החילוק השלם הוא 0 והשארית היא המספר השמאלי עצמו (3)."
    },

    // ==================== HARD (31-45) ====================
    {
        id: 31,
        level: "hard",
        question: "מה יהיה הפלט של הקוד המורכב הבא?",
        code: "int a = 5;\nint b = a++ + ++a;\nConsole.WriteLine(b);",
        options: ["10", "11", "12", "13"],
        answer: 2,
        explanation: "a++ משתמש ב-5 ומעלה את a ל-6. אז ++a מעלה את a ל-7 ומשתמש ב-7. התוצאה: 5 + 7 = 12."
    },
    {
        id: 32,
        level: "hard",
        question: "מה יהיו ערכי המשתנים x ו-y בסוף התוכנית?",
        code: "int x = 3;\nint y = ++x * 3 + x--;\nConsole.WriteLine($\"{x},{y}\");",
        options: ["3,15", "4,16", "3,16", "4,15"],
        answer: 2,
        explanation: "++x מעלה את x ל-4. (4 * 3 = 12). x-- משתמש ב-4 (כלומר 12 + 4 = 16 ל-y) ואז מוריד את x בחזרה ל-3."
    },
    {
        id: 33,
        level: "hard",
        question: "מה תהיה התוצאה של שילוב חילוק שלמים ואימירי (Casting)?",
        code: "int x = 5, y = 2;\ndouble avg = (double)x / y;\nConsole.WriteLine(avg);",
        options: ["2.5", "2", "2.0", "שגיאת קומפילציה"],
        answer: 0,
        explanation: "ההמרה (double)x הופכת את 5 ל-5.0. חילוק 5.0 ב-2 מניב חילוק עשרוני מדויק: 2.5."
    },
    {
        id: 34,
        level: "hard",
        question: "מה תהיה התוצאה אם ההמרה תהיה על הסוגריים בלבד?",
        code: "int x = 5, y = 2;\ndouble avg = (double)(x / y);\nConsole.WriteLine(avg);",
        options: ["2.5", "2", "2.0", "שגיאת קומפילציה"],
        answer: 2,
        explanation: "(x / y) מחושב קודם בין שלמים ונותן 2. רק לאחר מכן ה-Casting ממיר את התוצאה 2 ל-double, כלומר 2.0."
    },
    {
        id: 35,
        level: "hard",
        question: "מה יהיה פלט הקוד הבא המשלב מודולו וחילוק?",
        code: "int a = 19, b = 5;\nint res = a / b + a % b;\nConsole.WriteLine(res);",
        options: ["7", "3", "4", "7.8"],
        answer: 0,
        explanation: "19 / 5 בחילוק שלמים נותן 3. 19 % 5 מחזיר שארית 4. החיבור 3 + 4 נותן 7."
    },
    {
        id: 36,
        level: "hard",
        question: "מה יהיה הסימן של תוצאת המודולו עבור מספר שלילי ב-C#?",
        code: "int res = -13 % 5;\nConsole.WriteLine(res);",
        options: ["-3", "3", "-2", "2"],
        answer: 0,
        explanation: "ב-C#, סימן תוצאת המודולו נקבע תמיד לפי האופרנד השמאלי. -13 % 5 נותן -3."
    },
    {
        id: 37,
        level: "hard",
        question: "מה תהיה התוצאה של ביטוי השמה מורכב?",
        code: "int x = 4;\nint y = 3;\nx *= y + 2;\nConsole.WriteLine(x);",
        options: ["14", "20", "11", "24"],
        answer: 1,
        explanation: "האגף הימני מחושב קודם באופן מלא: y + 2 = 5. לאחר מכן x *= 5 מביא ל-4 * 5 = 20."
    },
    {
        id: 38,
        level: "hard",
        question: "מה יהיה הפלט של הביטוי הבא?",
        code: "int a = 2, b = 3;\nstring result = \"Ans: \" + a + b * 2;\nConsole.WriteLine(result);",
        options: ["Ans: 10", "Ans: 26", "Ans: 8", "Ans: 23"],
        answer: 1,
        explanation: "הכפל b * 2 מבוצע קודם (3 * 2 = 6). אז השרשור משמאל לימין: \"Ans: \" + 2 = \"Ans: 2\", ואז + 6 נותן \"Ans: 26\"."
    },
    {
        id: 39,
        level: "hard",
        question: "מה יהיה הפלט של חיסור וחיבור Prefix ו-Postfix משולב?",
        code: "int x = 10;\nint y = 3;\nint z = x-- - --y;\nConsole.WriteLine($\"{x},{y},{z}\");",
        options: ["9,2,8", "10,2,7", "9,3,7", "9,2,7"],
        answer: 0,
        explanation: "x-- משתמש ב-10 ואז מוריד את x ל-9. --y מוריד את y ל-2 ומשתמש ב-2. z = 10 - 2 = 8. לכן: 9,2,8."
    },
    {
        id: 40,
        level: "hard",
        question: "מה תהיה התוצאה של שרשור תו (char) ומספר?",
        code: "char c = 'A';\nConsole.WriteLine(c + 1);",
        options: ["B", "A1", "66", "שגיאת קומפילציה"],
        answer: 2,
        explanation: "האופרטור + על char ומספר מבצע המרה אריתמטית לערך ה-ASCII. הערך של 'A' הוא 65, ולכן 65 + 1 = 66."
    },
    {
        id: 41,
        level: "hard",
        question: "איך ממירים בחזרה את תוצאת האריתמטיקה של תו לתו חדש?",
        code: "char c = 'A';\nConsole.WriteLine((char)(c + 1));",
        options: ["B", "A1", "66", "שגיאה"],
        answer: 0,
        explanation: "הביטוי (c + 1) נותן 66, וההמרה המפורשת (char)66 ממירה את ערך ה-ASCII בחזרה לתו 'B'."
    },
    {
        id: 42,
        level: "hard",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int a = 10;\nint b = a++;\nint c = ++a;\nConsole.WriteLine(a + b + c);",
        options: ["34", "33", "32", "35"],
        answer: 0,
        explanation: "b מקבל 10 ו-a הופך ל-11. c מעלה את a ל-12 ומקבל 12. סך הכל: a (12) + b (10) + c (12) = 34."
    },
    {
        id: 43,
        level: "hard",
        question: "מה תהיה תוצאת החילוק והכפל ברצף?",
        code: "double res = 10 / 4 * 2.0;\nConsole.WriteLine(res);",
        options: ["5.0", "4.0", "5", "4"],
        answer: 1,
        explanation: "משמאל לימין: 10 / 4 מחושב קודם בין שלמים ונותן 2. לאחר מכן 2 * 2.0 מניב 4.0."
    },
    {
        id: 44,
        level: "hard",
        question: "מה יקרה אם נבצע מודולו ב-0?",
        code: "int x = 10 % 0;",
        options: ["0", "10", "שגיאת הרצה (DivideByZeroException)", "שגיאת קומפילציה"],
        answer: 2,
        explanation: "בדיוק כמו חילוק באפס, ביצוע פעולת מודולו (%) ב-0 נזקרת שגיאת הרצה בזמן אמת (DivideByZeroException)."
    },
    {
        id: 45,
        level: "hard",
        question: "מה יהיה הפלט של הביטוי המורכב הבא?",
        code: "int a = 1, b = 2, c = 3;\nConsole.WriteLine(a + b + \" = \" + (a + b));",
        options: ["12 = 3", "3 = 3", "3 = 12", "12 = 12"],
        answer: 1,
        explanation: "משמאל לימין: a + b מחושבים אריתמטית ל-3. מתווספת המחרוזת \" = \", והסוגריים בסוף מחושבים קודם ל-3. התוצאה: \"3 = 3\"."
    }
];