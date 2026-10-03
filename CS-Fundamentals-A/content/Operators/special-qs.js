// Register the -qs bank on window so App.js can load it by its configured key.
window.allSpecialOperatorsQuestions = [
    // ==================== EASY (1-15) ====================
    // 1
    {
        id: 1, level: "easy",
        question: "מה עושה האופרטור ++ ב-C#?",
        code: "x++;",
        options: ["מכפיל את ערך המשתנה ב-2", "מקדם את ערך המשתנה ב-1", "מפחית את ערך המשתנה ב-1", "מוסיף 2 למשתנה"],
        answer: 1, explanation: "האופרטור ++ מקדם (מעלה) את ערכו של המשתנה ב-1."
    },
    // 2
    {
        id: 2, level: "easy",
        question: "מה עושה האופרטור -- ב-C#?",
        code: "x--;",
        options: ["מפחית את ערך המשתנה ב-1", "מקדם את ערך המשתנה ב-1", "מחלק את המשתנה ב-2", "מאפס את המשתנה"],
        answer: 0, explanation: "האופרטור -- מפחית (מוריד) את ערכו של המשתנה ב-1."
    },
    // 3
    {
        id: 3, level: "easy",
        question: "למה שקול הביטוי x += 5?",
        code: "",
        options: ["x = 5;", "x = x + 5;", "x = x * 5;", "5 = x + 5;"],
        answer: 1, explanation: "אופרטור ההשמה המקוצרת += מוסיף את אגף ימין לערכו הנוכחי של המשתנה."
    },
    // 4
    {
        id: 4, level: "easy",
        question: "למה שקול הביטוי x -= 3?",
        code: "",
        options: ["x = x - 3;", "x = 3 - x;", "x = 3;", "x - 3 = x;"],
        answer: 0, explanation: "אופרטור ההשמה המקוצרת -= מחסר את אגף ימין מהמשתנה שבאגף שמאל."
    },
    // 5
    {
        id: 5, level: "easy",
        question: "מה יהיה ערכו של המשתנה x בסוף קטע הקוד?",
        code: "int x = 5;\nx++;\nConsole.WriteLine(x);",
        options: ["5", "6", "4", "51"],
        answer: 1, explanation: "הפקודה x++ מעלה את 5 ל-6."
    },
    // 6
    {
        id: 6, level: "easy",
        question: "מה יהיה ערכו של המשתנה y בסוף קטע הקוד?",
        code: "int y = 10;\ny--;\nConsole.WriteLine(y);",
        options: ["10", "9", "11", "0"],
        answer: 1, explanation: "הפקודה y-- מורידה את 10 ל-9."
    },
    // 7
    {
        id: 7, level: "easy",
        question: "למה שקול הביטוי x *= 2?",
        code: "",
        options: ["x = x * 2;", "x = x + 2;", "x = 2;", "x = x / 2;"],
        answer: 0, explanation: "אופרטור *= מכפיל את המשתנה בערך שבאגף ימין ושומר את התוצאה במשתנה."
    },
    // 8
    {
        id: 8, level: "easy",
        question: "מה יהיה ערכו של המשתנה a בסוף קטע הקוד?",
        code: "int a = 4;\na += 6;",
        options: ["4", "6", "10", "24"],
        answer: 2, explanation: "a += 6 מוסף 6 לערך הקיים 4, ולכן a הופך ל-10."
    },
    // 9
    {
        id: 9, level: "easy",
        question: "מה יהיה ערכו של המשתנה b בסוף קטע הקוד?",
        code: "int b = 20;\nb -= 5;",
        options: ["15", "20", "5", "25"],
        answer: 0, explanation: "b -= 5 מחסר 5 מ-20, ולכן b הופך ל-15."
    },
    // 10
    {
        id: 10, level: "easy",
        question: "מה יהיה ערכו של המשתנה c בסוף קטע הקוד?",
        code: "int c = 3;\nc *= 4;",
        options: ["7", "12", "34", "3"],
        answer: 1, explanation: "c *= 4 מכפיל את 3 ב-4 ומעדכן את c ל-12."
    },
    // 11
    {
        id: 11, level: "easy",
        question: "מה יהיה ערכו של המשתנה d בסוף קטע הקוד?",
        code: "int d = 16;\nd /= 2;",
        options: ["8", "14", "32", "162"],
        answer: 0, explanation: "d /= 2 מחלק את 16 ב-2 ומעדכן את d ל-8."
    },
    // 12
    {
        id: 12, level: "easy",
        question: "מה יהיה ערכו של המשתנה e בסוף קטע הקוד?",
        code: "int e = 17;\ne %= 5;",
        options: ["3", "2", "17", "5"],
        answer: 1, explanation: "e %= 5 מחשב 17 % 5 (שארית 2) ואוגר אותה ב-e."
    },
    // 13
    {
        id: 13, level: "easy",
        question: "למה שקול הביטוי x /= 4?",
        code: "",
        options: ["x = x / 4;", "x = 4 / x;", "x = x - 4;", "x = 4;"],
        answer: 0, explanation: "אופרטור /= מחלק את המשתנה באגף ימין ושומר את התוצאה."
    },
    // 14
    {
        id: 14, level: "easy",
        question: "למה שקול הביטוי x %= 3?",
        code: "",
        options: ["x = x % 3;", "x = 3 % x;", "x = x / 3;", "x = 3;"],
        answer: 0, explanation: "אופרטור %= מחשב את שארית החלוקה ב-3 ושומר אותה במשתנה."
    },
    // 15
    {
        id: 15, level: "easy",
        question: "האם כפקודה נפרדת בשורה משלה existe הבדל בתוצאה בין ++x לבין x++?",
        code: "x++;\n++x;",
        options: ["אין שום הבדל בערך הסופי של x", "x++ מגדיל ב-2 ו-++x ב-1", "++x עובד רק עם double", "x++ אינו חוקי ב-C#"],
        answer: 0, explanation: "כפקודה נפרדת שעומדת בפני עצמה בשורה, שתי הצורות מגדילות את x בדיוק ב-1."
    },

    // ==================== MEDIUM (16-30) ====================
    // 16
    {
        id: 16, level: "medium",
        question: "מה יכילו המשתנים x ו-y בסוף קטע הקוד (אופרטור פוסט-פיקסי)?",
        code: "int x = 5;\nint y = x++;",
        options: ["x = 6, y = 5", "x = 6, y = 6", "x = 5, y = 5", "x = 5, y = 6"],
        answer: 0, explanation: "באופרטור פוסט-פיקסי (x++), הערך המקורי של x (5) מועבר ל-y, ורק לאחר מכן x מוגדל ל-6."
    },
    // 17
    {
        id: 17, level: "medium",
        question: "מה יכילו המשתנים x ו-y בסוף קטע הקוד (אופרטור פרה-פיקסי)?",
        code: "int x = 5;\nint y = ++x;",
        options: ["x = 6, y = 6", "x = 6, y = 5", "x = 5, y = 6", "x = 5, y = 5"],
        answer: 0, explanation: "באופרטור פרה-פיקסי (++x), x מוגדל תחילה ל-6, וערכו החדש (6) מועבר ל-y."
    },
    // 18
    {
        id: 18, level: "medium",
        question: "מה יהיו ערכי x ו-y בסוף קטע הקוד הבא?",
        code: "int x = 10;\nint y = x--;",
        options: ["x = 9, y = 10", "x = 9, y = 9", "x = 10, y = 9", "x = 10, y = 10"],
        answer: 0, explanation: "ב-x-- הערך המקורי 10 מושם ל-y, ורק לאחר מכן x יורד ל-9."
    },
    // 19
    {
        id: 19, level: "medium",
        question: "מה יהיו ערכי x ו-y בסוף קטע הקוד הבא?",
        code: "int x = 10;\nint y = --x;",
        options: ["x = 9, y = 9", "x = 9, y = 10", "x = 10, y = 9", "x = 8, y = 9"],
        answer: 0, explanation: "ב---x המשתנה x מופחת תחילה ל-9, וערכו החדש 9 מושם ל-y."
    },
    // 20
    {
        id: 20, level: "medium",
        question: "מה יהיה ערכו של המשתנה x בסוף קטע הקוד הבא?",
        code: "int x = 5;\nx *= 2 + 3;",
        options: ["25", "13", "10", "15"],
        answer: 0, explanation: "אופרטור השמה מקוצרת מכסה את כל הביטוי שמימינו בסוגריים מרומזים: x = x * (2 + 3) -&gt; 5 * 5 = 25."
    },
    // 21
    {
        id: 21, level: "medium",
        question: "מה יהיה ערכו של המשתנה a בסוף קטע הקוד?",
        code: "int a = 2;\na += 3;\na *= 4;",
        options: ["20", "14", "10", "24"],
        answer: 0, explanation: "תחילה a += 3 מעדכן את a ל-5 (2 + 3). לאחר מכן a *= 4 מכפיל את 5 ב-4 ומעדכן ל-20."
    },
    // 22
    {
        id: 22, level: "medium",
        question: "מה מודפס למסך בקטע הקוד הבא?",
        code: "int x = 7;\nConsole.WriteLine(x++);",
        options: ["7", "8", "6", "שגיאת קומפילציה"],
        answer: 0, explanation: "אופרטור הפוסט-פיקסי x++ מחזיר להדפסה את הערך המקורי 7, ורק לאחר ההדפסה מקדם את x ל-8."
    },
    // 23
    {
        id: 23, level: "medium",
        question: "מה מודפס למסך בקטע הקוד הבא?",
        code: "int x = 7;\nConsole.WriteLine(++x);",
        options: ["8", "7", "6", "9"],
        answer: 0, explanation: "אופרטור הפרה-פיקסי ++x מקדם תחילה את x ל-8, ולאחר מכן מדפיס את הערך המעודכן 8."
    },
    // 24
    {
        id: 24, level: "medium",
        question: "מה יהיה התו המאוחסן ב-c בסוף קטע הקוד?",
        code: "char c = 'A';\nc++;",
        options: ["'B'", "'A'", "'66'", "'A1'"],
        answer: 0, explanation: "קידום c++ על תו מקדם את קוד ה-ASCII שלו מ-65 ('A') ל-66 ('B')."
    },
    // 25
    {
        id: 25, level: "medium",
        question: "מה יהיה ערכו של a בסוף הרצף הבא?",
        code: "int a = 1;\na++;\n++a;\na++;",
        options: ["4", "3", "5", "1"],
        answer: 0, explanation: "המשתנה a מתחיל ב-1 ומקודם 3 פעמים ברציפות, ולכן ערכו הסופי הוא 4."
    },
    // 26
    {
        id: 26, level: "medium",
        question: "מה יהיה תוכן המחרוזת s בסוף קטע הקוד?",
        code: "string s = \"Hello\";\ns += \" World\";",
        options: ["\"Hello World\"", "\"HelloWorld\"", "\" World\"", "\"Hello\""],
        answer: 0, explanation: "האופרטור += על מחרוזת משרשר את המחרוזת החדשה לסוף המחרוזת הקיימת."
    },
    // 27
    {
        id: 27, level: "medium",
        question: "מה יהיה ערכו של d בסוף קטע הקוד?",
        code: "double d = 4.5;\nd += 1.5;",
        options: ["6.0", "5.5", "4.51.5", "6"],
        answer: 0, explanation: "4.5 + 1.5 = 6.0, והערך נשמר בתוך המשתנה d מטיפוס double."
    },
    // 28
    {
        id: 28, level: "medium",
        question: "מה יהיה ערכו של המשתנה k בסוף קטע הקוד?",
        code: "int k = 27;\nk /= 4;",
        options: ["6", "6.75", "6.0", "7"],
        answer: 0, explanation: "27 /= 4 מבצע חלוקה שלמה של 27 ב-4 שתוצאתה 6."
    },
    // 29
    {
        id: 29, level: "medium",
        question: "מה יהיה ערכו של x בסוף קטע הקוד הבא?",
        code: "int x = 10;\nx -= 2 + 3;",
        options: ["5", "11", "15", "8"],
        answer: 0, explanation: "x -= (2 + 3) שקול ל-x = 10 - 5 = 5."
    },
    // 30
    {
        id: 30, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int num = 5;\nConsole.WriteLine(num--);\nConsole.WriteLine(num);",
        options: ["5 בשורה הראשונה ו-4 בשורה השנייה", "4 בשורה הראשונה ו-4 בשורה השנייה", "5 בשורה הראשונה ו-5 בשורה השנייה", "4 בשורה הראשונה ו-5 בשורה השנייה"],
        answer: 0, explanation: "הפקודה הראשונה מדפיסה את num המקורי (5) ואז מורידה ל-4. הפקודה השנייה מדפיסה את num המעודכן (4)."
    },

    // ==================== HARD (31-45) ====================
    // 31
    {
        id: 31, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 5;\nint res = x++ + ++x;\nConsole.WriteLine(res);",
        options: ["12", "11", "10", "13"],
        answer: 0, explanation: "x++ מניב 5 (ומעלה את x ל-6). ++x מעלה את x ל-7 ומניב 7. סכומם 5 + 7 = 12."
    },
    // 32
    {
        id: 32, level: "hard",
        question: "מה יהיה ערכו של המשתנה b בסוף קטע הקוד?",
        code: "int a = 10;\nint b = --a + a++;\nConsole.WriteLine(b);",
        options: ["18", "19", "20", "17"],
        answer: 0, explanation: "--a מוריד את a ל-9 ומניב 9. a++ מניב את הערך הנוכחי 9 (ומעלה את a ל-10). סכומם 9 + 9 = 18."
    },
    // 33
    {
        id: 33, level: "hard",
        question: "מה יהיה ערכו של x בסוף קטע הקוד הבא ב-C#?",
        code: "int x = 5;\nx = x++;\nConsole.WriteLine(x);",
        options: ["5", "6", "0", "שגיאת קומפילציה"],
        answer: 0, explanation: "x++ מחזיר את הערך המקורי 5 בצד ומקדם את x ל-6. פעולת ההשמה (=) שוקעת מיד ודורסת את x בחזרה ב-5 המקורי."
    },
    // 34
    {
        id: 34, level: "hard",
        question: "מה יכילו המשתנים a ו-b בסוף קטע הקוד הבא?",
        code: "int a = 4;\nint b = 3;\na += b *= 2;",
        options: ["a = 10, b = 6", "a = 10, b = 3", "a = 8, b = 6", "a = 14, b = 6"],
        answer: 0, explanation: "הביטוי מחושב מימין לשמאל: b *= 2 מעדכן את b ל-6. לאחר מכן a += 6 מוסיף 6 ל-4 ומעדכן את a ל-10."
    },
    // 35
    {
        id: 35, level: "hard",
        question: "מה יהיה ערכו של המשתנה x בסוף קטע הקוד?",
        code: "int x = 35;\nx %= 8;\nx *= 3;\nx++;",
        options: ["10", "9", "12", "11"],
        answer: 0, explanation: "x %= 8 מניב 3 (35 % 8). x *= 3 מניב 9 (3 * 3). x++ מקדם את 9 ל-10."
    },
    // 36
    {
        id: 36, level: "hard",
        question: "מה יכילו המשתנים a ו-b בסוף הקוד?",
        code: "int a = 3;\nint b = a++ * 2;",
        options: ["a = 4, b = 6", "a = 4, b = 8", "a = 3, b = 6", "a = 4, b = 4"],
        answer: 0, explanation: "a++ מחזיר את הערך המקורי 3 לביטוי הכפל (3 * 2 = 6 שנשמר ב-b), ורק לאחר מכן a מוגדל ל-4."
    },
    // 37
    {
        id: 37, level: "hard",
        question: "מה יכילו המשתנים a ו-b בסוף הקוד?",
        code: "int a = 3;\nint b = ++a * 2;",
        options: ["a = 4, b = 8", "a = 4, b = 6", "a = 3, b = 8", "a = 4, b = 7"],
        answer: 0, explanation: "++a מקדם תחילה את a ל-4 ומחזיר 4 לביטוי הכפל (4 * 2 = 8 שנשמר ב-b)."
    },
    // 38
    {
        id: 38, level: "hard",
        question: "מה יהיה ערכו של x בסוף קטע הקוד הבא?",
        code: "int x = 20;\nx -= 4 - 2;",
        options: ["18", "14", "22", "16"],
        answer: 0, explanation: "4 - 2 מחושב ראשון (2). x -= 2 מחסר 2 מ-20 ומעדכן את x ל-18."
    },
    // 39
    {
        id: 39, level: "hard",
        question: "מה יהיה ערכו של המשתנה y בסוף קטע הקוד?",
        code: "int x = 2;\nint y = x++ + x++ + x++;",
        options: ["9", "6", "12", "7"],
        answer: 0, explanation: "החישוב משמאל לימין: x++ הראשון מחזיר 2 (x הופך ל-3). x++ השני מחזיר 3 (x הופך ל-4). x++ השלישי מחזיר 4. סכומם 2 + 3 + 4 = 9."
    },
    // 40
    {
        id: 40, level: "hard",
        question: "מה יהיה ערכו של d בסוף קטע הקוד?",
        code: "double d = 12.5;\nd %= 5;",
        options: ["2.5", "2", "0.5", "2.50"],
        answer: 0, explanation: "12.5 % 5 מחזיר שארית ממשית 2.5 ונשמר ב-d."
    },
    // 41
    {
        id: 41, level: "hard",
        question: "מה יהיו ערכי x ו-y בסוף קטע הקוד הבא?",
        code: "int x = 5;\nint y = ++x - x--;",
        options: ["x = 5, y = 0", "x = 6, y = 0", "x = 5, y = 1", "x = 6, y = 1"],
        answer: 0, explanation: "++x מעלה את x ל-6 ומחזיר 6. x-- מחזיר 6 (ומוריד את x ל-5). החיסור 6 - 6 מניב y = 0, ו-x נשאר 5."
    },
    // 42
    {
        id: 42, level: "hard",
        question: "מה יהיה ערכו של a בסוף קטע הקוד הבא?",
        code: "int a = 2, b = 3;\na += a++ + ++b;",
        options: ["8", "7", "9", "6"],
        answer: 0, explanation: "a++ מחזיר 2 (a הופך ל-3). ++b מעלה את b ל-4 ומחזיר 4. סכומם 2 + 4 = 6. לבסוף a += 6 מוסיף 6 ל-a המקורי (2) ומקבל 8."
    },
    // 43
    {
        id: 43, level: "hard",
        question: "מה יכיל המשתנה s בסוף קטע הקוד הבא?",
        code: "int x = 5;\nstring s = \"Val: \";\ns += x *= 2;",
        options: ["\"Val: 10\"", "\"Val: 52\"", "\"Val: 5\"", "שגיאת קומפילציה"],
        answer: 0, explanation: "x *= 2 מעדכן את x ל-10 ומחזיר 10. ס += 10 משרשר את 10 למחרוזת \"Val: \" ומניב \"Val: 10\"."
    },
    // 44
    {
        id: 44, level: "hard",
        question: "מה יהיה התו ch בסוף קטע הקוד הבא?",
        code: "char ch = '0';\nch += (char)5;",
        options: ["'5'", "'05'", "'53'", "'50'"],
        answer: 0, explanation: "ערך ה-ASCII של '0' הוא 48. הוספת 5 מניבה 53, שהוא קוד ה-ASCII של התו '5'."
    },
    // 45
    {
        id: 45, level: "hard",
        question: "מה יהיה ערכו של x בסוף קטע הקוד הבא?",
        code: "int x = 10;\nx /= x - 5;",
        options: ["2", "1", "0", "5"],
        answer: 0, explanation: "x - 5 מחושב ראשון בתוך האגף הימני המורמז (10 - 5 = 5). x /= 5 מחלק את 10 ב-5 ומעדכן את x ל-2."
    }
];

