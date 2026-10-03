// content/Input_Output_Variables/preparation-questions.js
// using const is for local scope, but if the script is reloaded, it will result in a 
// "SyntaxError: Identifier 'allIOVPreparationQuestions' has already been declared" 
// if the script is reloaded, so we use window.allIOVPreparationQuestions to make it 
// global and avoid redeclaration errors.
window.allIOVPreparationQuestions = [
    // ==================== MEDIUM (1-15) ====================
    // 1
    {
        id: 1, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 20;\nint y = 3;\nConsole.WriteLine(x % (y + 1));",
        options: ["2", "0", "6", "שגיאת בזמן הרצה"],
        answer: 1, explanation: "תחילה מחושב הביטוי בסוגריים (y + 1 = 4). לאחר מכן מחושבת שארית החלוקה 20 % 4, שהיא 0 כיוון ש-20 מתחלק ב-4 ללא שארית."
    },
    // 2
    {
        id: 2, level: "medium",
        question: "מה יהיה ערכו של המשתנה n בסיום קטע הקוד הבא?",
        code: "string str = \"100\";\nint n = int.Parse(str) + 50;",
        options: ["10050", "150", "100", "שגיאת קומפילציה"],
        answer: 1, explanation: "המתודה int.Parse ממירה את המחרוזת \"100\" למספר השלם 100, ולאחר מכן מבוצע חיבור מתמטי עם 50 שנותן 150."
    },
    // 3
    {
        id: 3, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "double d = 10;\nConsole.WriteLine(d / 4);",
        options: ["2", "2.5", "2.0", "שגיאת קומפילציה"],
        answer: 1, explanation: "מכיוון שהמשתנה d הוא מטיפוס double, החלוקה d / 4 מבוצעת כחלוקה ממשית (double division) והתוצאה היא 2.5."
    },
    // 4
    {
        id: 4, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 5;\nint y = x++;\nConsole.WriteLine(x + \" \" + y);",
        options: ["5 5", "6 5", "6 6", "5 6"],
        answer: 1, explanation: "אופרטור הקידום הפוסט-פיקסי (x++) מעתיק קודם את הערך המקורי 5 ל-y, ורק לאחר מכן מקדם את x ל-6. לכן x=6 ו-y=5."
    },
    // 5
    {
        id: 5, level: "medium",
        question: "מה תדפיס התוכנית למסך?",
        code: "string firstName = \"דני\";\nstring lastName = \"כהן\";\nConsole.WriteLine(firstName + \" \" + lastName);",
        options: ["דניכהן", "דני כהן", "firstName lastName", "שגיאת הרצה"],
        answer: 1, explanation: "האופרטור + משרשר את המחרוזת הראשונה, מחרוזת המכילה רווח \" \", והמחרוזת השנייה, ליצירת הפלט \"דני כהן\"."
    },
    // 6
    {
        id: 6, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "char c = 'C';\nConsole.WriteLine((char)(c + 2));",
        options: ["C2", "67", "E", "D"],
        answer: 2, explanation: "ערך ה-ASCII של 'C' הוא 67. הוספת 2 מניבה 69, והמרה מפורשת (char)69 מחזירה את התו 'E'."
    },
    // 7
    {
        id: 7, level: "medium",
        question: "איזה מבין הביטויים הבאים יחשב ממוצע מדויק (כולל חלק שברי) של 3 מספרים שלמים a, b, c?",
        code: "int a = 10, b = 10, c = 11;",
        options: ["double avg = (a + b + c) / 3;", "double avg = (a + b + c) / 3.0;", "int avg = (a + b + c) / 3.0;", "double avg = (int)(a + b + c) / 3;"],
        answer: 1, explanation: "חלוקה במספר הממשי 3.0 (מטיפוס double) גורמת לכל הביטוי להיות מחושב כחלוקה ממשית ולא כחלוקה שלמה."
    },
    // 8
    {
        id: 8, level: "medium",
        question: "מה יהיה ערכו של המשתנה a בסוף קטע הקוד הבא?",
        code: "int a = 15;\na %= 4;",
        options: ["3", "3.75", "0", "11"],
        answer: 0, explanation: "האופרטור a %= 4 שקול ל-a = a % 4. שארית החלוקה של 15 ב-4 היא 3 (כיוון ש-12 מתחלק ב-4 ללא שארית)."
    },
    // 9
    {
        id: 9, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "Console.WriteLine(\"C# is \\\"Great\\\"\");",
        options: ["C# is \"Great\"", "C# is \\\"Great\\\"", "C# is Great", "שגיאת קומפילציה"],
        answer: 0, explanation: "תו המילוט \\\" מאפשר להכניס תו גרשיים כפולים כחלק מהמחרוזת מבלי לסיים אותה."
    },
    // 10
    {
        id: 10, level: "medium",
        question: "מה יהיה ערכו של המשתנה x לאחר ביצוע השורה הבאה?",
        code: "int x = 8;\nx *= x + 2;",
        options: ["66", "80", "18", "64"],
        answer: 1, explanation: "הביטוי x *= x + 2 שקול ל-x = x * (x + 2). תחילה מחושב אגף ימין: 8 + 2 = 10, ולאחר מכן 8 * 10 = 80."
    },
    // 11
    {
        id: 11, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "bool check = (10 / 3 == 3);\nConsole.WriteLine(check);",
        options: ["True", "False", "3", "שגיאת קומפילציה"],
        answer: 0, explanation: "חלוקה שלמה של 10 ב-3 מניבה 3. ההשוואה 3 == 3 מחזירה אמת (True), והערך הבוליאני מודפס כ-True."
    },
    // 12
    {
        id: 12, level: "medium",
        question: "מה יוחזר על ידי הפקודה Console.ReadLine() במידה והמשתמש לא הקליד דבר ורק לחץ על מקש Enter?",
        code: "",
        options: ["null", "מחרוזת ריקה \"\"", "0", "שגיאת בזמן הרצה"],
        answer: 1, explanation: "לחיצה על Enter ללא הקלדת תוים מחזירה מחרוזת ריקה (String.Empty או \"\"), ולא null או שגיאה."
    },
    // 13
    {
        id: 13, level: "medium",
        question: "מה יהיה ערכו של המשתנה sum בסוף קטע הקוד הבא?",
        code: "double a = 2.5;\ndouble b = 3.5;\nint sum = (int)(a + b);",
        options: ["5", "6", "5.0", "6.0"],
        answer: 1, explanation: "תחילה מחושב הסכום בסוגריים (2.5 + 3.5 = 6.0). המרה מפורשת ל-int המירה את 6.0 למספר השלם 6."
    },
    // 14
    {
        id: 14, level: "medium",
        question: "מה יהיה ערכו של x בסוף קטע הקוד הבא?",
        code: "int x = 10;\nx -= 3 * 2;",
        options: ["14", "4", "12", "0"],
        answer: 1, explanation: "לפי קדימות אופרטורים, תחילה מחושב הכפל 3 * 2 = 6. לאחר מכן מבוצעת ההשמה המקוצרת x -= 6 (כלומר 10 - 6 = 4)."
    },
    // 15
    {
        id: 15, level: "medium",
        question: "מה תדפיס התוכנית למסך?",
        code: "Console.Write(\"A\");\nConsole.WriteLine(\"B\");\nConsole.Write(\"C\");",
        options: ["AB בשורה הראשונה ו-C בשורה השנייה", "A בשורה הראשונה, B בשנייה ו-C בשלישית", "ABC באותה שורה", "A בשורה הראשונה ו-BC בשורה השנייה"],
        answer: 0, explanation: "Write(\"A\") מדפיס A ללא ירידת שורה. WriteLine(\"B\") מדפיס B בצמוד ל-A ויורד שורה. Write(\"C\") מדפיס C בשורה החדשה."
    },

    // ==================== HARD (16-30) ====================
    // 16
    {
        id: 16, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא המבצע הזזה מחזורית בין שלושה משתנים?",
        code: "int a = 1, b = 2, c = 3;\nint t = a;\na = b;\nb = c;\nc = t;\nConsole.WriteLine($\"a={a}, b={b}, c={c}\");",
        options: ["a=2, b=3, c=1", "a=1, b=2, c=3", "a=3, b=2, c=1", "a=2, b=1, c=3"],
        answer: 0, explanation: "המשתנה t שומר את 1 (ערך a). a מקבל את ערך b (2), b מקבל את ערך c (3), ו-c מקבל את t (1). לכן a=2, b=3, c=1."
    },
    // 17
    {
        id: 17, level: "hard",
        question: "מה יהיה ערכו של המשתנה b בסוף קטע הקוד הבא?",
        code: "int a = 5;\nint b = a-- - --a;\nConsole.WriteLine(b);",
        options: ["0", "2", "1", "-1"],
        answer: 1, explanation: "הביטוי a-- מחזיר 5 (ומפחית את a ל-4). הביטוי --a מפחית את a ל-3 ומחזיר 3. החיסור 5 - 3 נותן 2."
    },
    // 18
    {
        id: 18, level: "hard",
        question: "מה מבודד הביטוי הבא עבור מספר תלת-ספרתי חיובי num?",
        code: "int num = 258;\nint result = (num / 10) % 10;",
        options: ["ספרת האחדות (8)", "ספרת העשרות (5)", "ספרת המאות (2)", "סכום הספרות (15)"],
        answer: 1, explanation: "החלוקה השלמה num / 10 מורידה את ספרת האחדות ומחזירה 25. שארית החלוקה ב-10 (25 % 10) מבודדת את ספרת העשרות, שהיא 5."
    },
    // 19
    {
        id: 19, level: "hard",
        question: "מה יהיה ערכו של המשתנה res בסוף קטע הקוד הבא?",
        code: "int x = 2, y = 3, z = 4;\nint res = x + y * z / x;",
        options: ["10", "8", "14", "7"],
        answer: 1, explanation: "כפל וחילוק קודמים לחיבור ומחושבים משמאל לימין: 3 * 4 = 12, ואז 12 / 2 = 6. לבסוף מתווסף x (כלומר 2 + 6 = 8)."
    },
    // 20
    {
        id: 20, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "double d = Convert.ToDouble(\"7.99\");\nint i = (int)d;\nConsole.WriteLine(i);",
        options: ["8", "7", "7.99", "שגיאת הרצה בזמן ההמרה"],
        answer: 1, explanation: "המרה מפורשת (int)d אינה מעגלת את המספר, אלא קוטמת (truncates) את החלק השברי, ולכן התוצאה היא 7."
    },
    // 21
    {
        id: 21, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא הכולל עיצוב רווחים במחרוזת?",
        code: "int val = 42;\nConsole.WriteLine(\"[{0,5}]\", val);",
        options: ["[42]", "[   42]", "[42   ]", "[00042]"],
        answer: 1, explanation: "הציון {0,5} מורה להדפיס את הפרמטר הראשון ברוחב כולל של 5 תווים עם יישור לימין, ולכן נופלים 3 רווחים לפני המספר 42."
    },
    // 22
    {
        id: 22, level: "hard",
        question: "מה תהיה תוצאת ההרצה של הקוד הבא?",
        code: "char ch1 = '5';\nchar ch2 = '3';\nConsole.WriteLine(ch1 + ch2);",
        options: ["8", "53", "104", "שגיאת קומפילציה"],
        answer: 2, explanation: "אופרטור החיבור + בין שני תווים (char) מקדם אותם ל-int ומחבר את ערכי ה-ASCII שלהם: '5' (53) + '3' (51) = 104."
    },
    // 23
    {
        id: 23, level: "hard",
        question: "מה יהיה ערכו של המשתנה x בסוף קטע הקוד הבא ב-C#?",
        code: "int x = 10;\nx = x++;\nConsole.WriteLine(x);",
        options: ["11", "10", "0", "שגיאת קומפילציה"],
        answer: 1, explanation: "בביטוי x = x++, אופרטור הקידום הפוסט-פיקסי שומר את הערך המקורי (10) בצד, מקדם את x ל-11, ואז פעולת ההשמה (=) דורסת את x בחזרה בערך המקורי שנשמר (10)."
    },
    // 24
    {
        id: 24, level: "hard",
        question: "מה תהיה תוצאת ההרצה של קטע הקוד הבא?",
        code: "byte b = 250;\nb = (byte)(b + 10);\nConsole.WriteLine(b);",
        options: ["260", "4", "255", "שגיאת בזמן הרצה בגלל גלישה"],
        answer: 1, explanation: "הטיפוס byte מוכבל בטווח 0-255. חיבור 250 + 10 מניב 260. בעת המרה מפורשת (byte), גלישה (overflow) ברירת מחדל ב-C# חותכת את הביטים והתוצאה היא 260 % 256 = 4."
    },
    // 25
    {
        id: 25, level: "hard",
        question: "מה תדפיס התוכנית למסך?",
        code: "char c = 'a';\nc = (char)(c - 32);\nConsole.WriteLine(c);",
        options: ["a", "A", "65", "שגיאת קומפילציה"],
        answer: 1, explanation: "בטבלת ASCII ההפרש בין אות קטנה לאות גדולה מקבילה הוא 32. החיסור 97 ('a') פחות 32 מניב 65, וההמרה ל-char מחזירה את התו 'A'."
    },
    // 26
    {
        id: 26, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא המחשב זמן דקות כולל?",
        code: "int h = int.Parse(\"2\");\nint m = int.Parse(\"30\");\nint totalMinutes = h * 60 + m;\nConsole.WriteLine(totalMinutes);",
        options: ["230", "150", "120", "שגיאת קומפילציה"],
        answer: 1, explanation: "המרת המחרוזות מחזירה 2 ו-30. החישוב 2 * 60 + 30 מניב 120 + 30 = 150."
    },
    // 27
    {
        id: 27, level: "hard",
        question: "מה תדפיס התוכנית למסך?",
        code: "double x = 0.1 + 0.2;\nConsole.WriteLine(x == 0.3);",
        options: ["True", "False", "0.3", "שגיאת קומפילציה"],
        answer: 1, explanation: "בחישוב נקודה צפה (double), לייצוג הבינארי של 0.1 ו-0.2 יש אי-דיוק זעיר. 0.1 + 0.2 שווה ל-0.30000000000000004, ולכן ההשוואה ל-0.3 מחזירה False."
    },
    // 28
    {
        id: 28, level: "hard",
        question: "מה יתרחש בעת ביצוע קטע הקוד הבא?",
        code: "int a = 7;\nint b = 0;\nint c = a / b;",
        options: ["המשתנה c יקבל את הערך 0", "המשתנה c יקבל את הערך infinity", "תיזרק שגיאת בזמן הרצה (DivideByZeroException)", "הקוד לא יעבור קומפילציה"],
        answer: 2, explanation: "חלוקת מספר שלם ב-0 ב-C# זורקת חריגה בזמן הרצה מסוג DivideByZeroException."
    },
    // 29
    {
        id: 29, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "string s = null;\nConsole.WriteLine(s + \"Test\");",
        options: ["Test", "nullTest", "תיזרק שגיאת NullReferenceException", "שגיאת קומפילציה"],
        answer: 0, explanation: "בשרשור מחרוזות באמצעות האופרטור +, C# מתייחסת לערך null כמחרוזת ריקה (\"\"), ולכן התוצאה היא \"Test\" ללא שגיאה."
    },
    // 30
    {
        id: 30, level: "hard",
        question: "מה מטרת האלגוריתם המתמטי בקטע הקוד הבא עבור מספר דו-ספרתי חיובי n?",
        code: "int n = 38;\nint rev = (n % 10) * 10 + (n / 10);\nConsole.WriteLine(rev);",
        options: ["חישוב סכום הספרות (11)", "הפיכת סדר הספרות (הדפסת 83)", "הכפלת המספר ב-10", "בדיקה האם המספר זוגי"],
        answer: 1, explanation: "n % 10 מחזיר את ספרת האחדות (8) ומכפיל ב-10 (80). n / 10 מחזיר את ספרת העשרות (3). סכומם 80 + 3 נותן 83 - המספר ההפוך."
    }
];
