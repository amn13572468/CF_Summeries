window.allPreparationQuestions = [
    {
        id: 1, 
        level: "medium",
        category: "Input/Output and Variables",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "char c = 'C';\nConsole.WriteLine((char)(c + 2));",
        options: ["C2", "67", "E", "D"],
        answer: 2, explanation: "ערך ה-ASCII של 'C' הוא 67. הוספת 2 מניבה 69, והמרה מפורשת (char)69 מחזירה את התו 'E'."
    },
    // 2
    {
        id: 2, level: "medium",
        category: "Input/Output and Variables",
        question: "מה יהיה ערכו של x בסוף קטע הקוד הבא?",
        code: "int x = 10;\nx -= 3 * 2;",
        options: ["14", "4", "12", "0"],
        answer: 1, explanation: "לפי קדימות אופרטורים, תחילה מחושב הכפל 3 * 2 = 6. לאחר מכן מבוצעת ההשמה המקוצרת x -= 6 (כלומר 10 - 6 = 4)."
    },
    // 3
    {
        id: 3, level: "medium",
        category: "Input/Output and Variables",
        question: "מה יהיה ערכו של המשתנה a בסוף קטע הקוד הבא?",
        code: "int a = 15;\na %= 4;",
        options: ["3", "3.75", "0", "11"],
        answer: 0, explanation: "האופרטור a %= 4 שקול ל-a = a % 4. שארית החלוקה של 15 ב-4 היא 3 (כיוון ש-12 מתחלק ב-4 ללא שארית)."
    },
    // 4
    {
        id: 4, level: "medium",
        category: "Input/Output and Variables",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 20;\nint y = 3;\nConsole.WriteLine(x % (y + 1));",
        options: ["2", "0", "6", "שגיאת בזמן הרצה"],
        answer: 1, explanation: "תחילה מחושב הביטוי בסוגריים (y + 1 = 4). לאחר מכן מחושבת שארית החלוקה 20 % 4, שהיא 0 כיוון ש-20 מתחלק ב-4 ללא שארית."
    },
    // 6
    {
        id: 6, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "char c = 'C';\nConsole.WriteLine((char)(c + 2));",
        options: ["C2", "67", "E", "D"],
        answer: 2, explanation: "ערך ה-ASCII של 'C' הוא 67. הוספת 2 מניבה 69, והמרה מפורשת (char)69 מחזירה את התו 'E'."
    },
    // 17
    {
        id: 17, level: "hard",
        category: "Input/Output and Variables",
        question: "מה יהיה ערכו של המשתנה b בסוף קטע הקוד הבא?",
        code: "int a = 5;\nint b = a-- - --a;\nConsole.WriteLine(b);",
        options: ["0", "2", "1", "-1"],
        answer: 1, explanation: "הביטוי a-- מחזיר 5 (ומפחית את a ל-4). הביטוי --a מפחית את a ל-3 ומחזיר 3. החיסור 5 - 3 נותן 2."
    },
    // 22
    {
        id: 22, level: "hard",
        category: "Input/Output and Variables",
        question: "מה תהיה תוצאת ההרצה של הקוד הבא?",
        code: "char ch1 = '5';\nchar ch2 = '3';\nConsole.WriteLine(ch1 + ch2);",
        options: ["8", "53", "104", "שגיאת קומפילציה"],
        answer: 2, explanation: "אופרטור החיבור + בין שני תווים (char) מקדם אותם ל-int ומחבר את ערכי ה-ASCII שלהם: '5' (53) + '3' (51) = 104."
    },
];