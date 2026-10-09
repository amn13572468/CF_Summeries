// content/Input_Output_Variables/preparation-questions.js
// using const is for local scope, but if the script is reloaded, it will result in a 
// "SyntaxError: Identifier 'allIOVPreparationQuestions' has already been declared" 
// if the script is reloaded, so we use window.allIOVPreparationQuestions to make it 
// global and avoid redeclaration errors.
//
//
window.allIOVPreparationQuestions = [
    // ==================== MEDIUM (1-15) ====================
    // 1
    {
        id: 1, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 20;\nint y = 3;\nConsole.WriteLine(x / (y + 1));",
        options: ["5", "6", "6.66", "שגיאת קומפילציה"],
        answer: 0, explanation: "תחילה מחושב הביטוי בסוגריים (y + 1 = 4). לאחר מכן מבוצעת חלוקה שלמה 20 / 4, שהתוצאה שלה היא 5."
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
        code: "int x = 5;\nint y = x + 3;\nx = y * 2;\nConsole.WriteLine(x + \" \" + y);",
        options: ["16 8", "10 8", "16 5", "8 8"],
        answer: 0, explanation: "המשתנה x מתחיל ב-5. המשתנה y מקבל 5 + 3 = 8. לאחר מכן x מעודכן ל-y * 2 (כלומר 8 * 2 = 16). הפלט המודפס הוא \"16 8\"."
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
        code: "int x = 5;\nint y = 10;\nConsole.WriteLine(\"Result: \" + (x + y));",
        options: ["Result: 15", "Result: 510", "Result: x + y", "שגיאת קומפילציה"],
        answer: 0, explanation: "תחילה מחושב הביטוי בסוגריים החשבוניים (5 + 10 = 15). לאחר מכן מבוצע שרשור למחרוזת \"Result: \", והפלט המתקבל הוא \"Result: 15\"."
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
        question: "מה יהיה ערכו של המשתנה average בסוף קטע הקוד הבא?",
        code: "int a = 10;\nint b = 15;\ndouble average = (a + b) / 2;",
        options: ["12.5", "12.0", "12", "13.0"],
        answer: 1, explanation: "הביטוי בסוגריים (a + b) מחושב ראשון ונותן 25. החלוקה ב-2 מבוצעת בין שני מספרים שלמים (int / int), ולכן זו חלוקה שלמה שתוצאתה 12. בעת השמירה במשתנה מטיפוס double, הערך השלם 12 מומר ל-12.0."
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
        question: "מה יהיה ערכו של המשתנה c בסוף קטע הקוד הבא?",
        code: "int a = 4;\nint b = 2;\nint c = a + b * 3;",
        options: ["10", "18", "14", "8"],
        answer: 0, explanation: "לפי קדימות אופרטורים חשבוניים, הכפל מחושב קודם: 2 * 3 = 6. לאחר מכן מבוצע החיבור a + 6 (כלומר 4 + 6 = 10)."
    },
    // 11
    {
        id: 11, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 10;\nint b = a;\na = 20;\nConsole.WriteLine(a + \" \" + b);",
        options: ["20 10", "20 20", "10 10", "10 20"],
        answer: 0, explanation: "בהשמה b = a מועתק הערך 10 לתוך המשתנה b. שינוי מאוחר יותר של המשתנה a ל-20 אינו משפיע על b, ולכן הפלט המודפס הוא \"20 10\"."
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
        question: "מה יהיה ערכו של המשתנה x בסוף קטע הקוד הבא?",
        code: "int x = 10;\nx = x - 3 * 2;",
        options: ["14", "4", "12", "0"],
        answer: 1, explanation: "לפי קדימות אופרטורים חשבוניים, מחושב תחילה הכפל 3 * 2 = 6. לאחר מכן מבוצע החיסור x - 6 (כלומר 10 - 6 = 4) והתוצאה 4 נשמרת בחזרה בתוך המשתנה x."
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
        question: "מה יהיה ערכו של המשתנה result בסוף קטע הקוד הבא?",
        code: "int a = 17;\nint b = 4;\ndouble result = (double)(a / b) + (double)a / b;",
        options: ["8.25", "6.25", "8.0", "7.75"],
        answer: 0, explanation: "הביטוי הראשון (a / b) מחושב בסוגריים כחלוקה שלמה (17 / 4 = 4), וההמרה ל-(double) הופכת אותו ל-4.0. הביטוי השני (double)a / b ממיר מפורשות את a ל-17.0 לפני החלוקה ולכן מבוצעת חלוקה ממשית (17.0 / 4 = 4.25). סכומם 4.0 + 4.25 מניב 8.25."
    },
    // 18
    {
        id: 18, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "double width = 4.0;\ndouble length = 5.5;\ndouble area = width * length;\ndouble perimeter = 2 * (width + length);\nConsole.WriteLine(area + perimeter);",
        options: ["41", "41.0", "22.0", "19.0"],
        answer: 1, explanation: "שטח המלבן הוא 4.0 * 5.5 = 22.0. היקף המלבן הוא 2 * (4.0 + 5.5) = 2 * 9.5 = 19.0. סכומם 22.0 + 19.0 מניב את הערך הממשי 41.0."
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
        options: ["", "[   42]", "[42   ]", ""],
        answer: 1, explanation: "הציון {0,5} מורה להדפיס את הפרמטר הראשון ברוחב כולל של 5 תווים עם יישור לימין, ולכן נופלים 3 רווחים לפני המספר 42."
    },
    // 22
    {
        id: 22, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 15;\nint b = 4;\ndouble result = a / b + (double)a / b;\nConsole.WriteLine(result);",
        options: ["6.75", "7.5", "6.0", "3.75"],
        answer: 0, explanation: "החלק הראשון a / b מבוצע כחלוקה שלמה בין שני int שתוצאתה 3. החלק השני (double)a / b כולל המרה מפורשת ל-double ולכן מבוצע כחלוקה ממשית שתוצאתה 3.75. סכומם 3 + 3.75 מניב 6.75."
    },
    // 23
    {
        id: 23, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "string s1 = \"10\";\nstring s2 = \"20\";\nint num1 = int.Parse(s1);\nint num2 = int.Parse(s2);\nConsole.WriteLine(s1 + s2 + (num1 + num2));",
        options: ["102030", "3030", "10201020", "שגיאת קומפילציה"],
        answer: 0, explanation: "הביטוי (num1 + num2) שבסוגריים מחושב ראשון כחיבור מספרי (10 + 20 = 30). לאחר מכן מבוצע שרשור מחרוזות משמאל לימין: \"10\" + \"20\" = \"1020\", ושרשור עם 30 נותן \"102030\"."
    },
    // 24
    {
        id: 24, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int num = 15;\ndouble half = num / 2;\nstring result = \"Half is: \" + (int)half;\nConsole.WriteLine(result);",
        options: ["Half is: 7", "Half is: 7.5", "Half is: 7.0", "Half is: 8"],
        answer: 0, explanation: "החלוקה num / 2 מבוצעת בין שני מספרים שלמים (int / int), ולכן היא חלוקה שלמה שתוצאתה 7. הערך 7 נשמר במשתנה half כ-7.0. המרה מפורשת (int)half המירה את 7.0 בחזרה למספר השלם 7, ושרשור למחרוזת מניב \"Half is: 7\"."
    },
    // 25
    {
        id: 25, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 10;\nint y = 4;\ndouble result = x / y;\nConsole.WriteLine(\"Result: \" + result);",
        options: ["Result: 2.5", "Result: 2", "Result: 2.0", "Result: 2.50"],
        answer: 2, explanation: "החלוקה x / y מבוצעת בין שני מספרים שלמים (int / int), ולכן זו חלוקה שלמה שתוצאתה 2. בעת השמירה במשתנה result מטיפוס double, הערך 2 מומר ל-2.0, ולכן השרשור מניב \"Result: 2.0\"."
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
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "string val1 = \"5\";\nstring val2 = \"10\";\nint sum = int.Parse(val1) + int.Parse(val2);\nstring output = val1 + val2 + \"=\" + sum;\nConsole.WriteLine(output);",
        options: ["510=15", "15=15", "510=510", "שגיאת קומפילציה"],
        answer: 0, explanation: "המשתנה sum מחשב סכום מספרי (5 + 10 = 15). בבניית המחרוזת output, הביטוי val1 + val2 משרשר את המחרוזות \"5\" ו-\"10\" ל-\"510\", ולכן הפלט התקבל הוא \"510=15\"."
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
        question: "מה יהיה הפלט של קטע הקוד הבא הממיר שניות לדקות ושניות?",
        code: "int totalSeconds = 125;\nint minutes = totalSeconds / 60;\nint seconds = totalSeconds - (minutes * 60);\nConsole.WriteLine(minutes + \"m \" + seconds + \"s\");",
        options: ["2m 5s", "2m 0s", "1m 65s", "125m 0s"],
        answer: 0, explanation: "החלוקה השלמה 125 / 60 מחזירה 2 דקות. חישוב השניות הנותרות מבוצע על ידי הפחתת הדקות שהומרו בשניות: 125 - (2 * 60) = 125 - 120 = 5 שניות. הפלט המתקבל הוא \"2m 5s\"."
    }
];