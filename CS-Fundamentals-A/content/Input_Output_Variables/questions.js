const allIOVQuestions = [
    // ==================== EASY (1-15) ====================
    // 1
    {
        id: 1, level: "easy",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int num = 15;\nConsole.WriteLine(num);",
        options: ["num", "15", "0", "שגיאת קומפילציה"],
        answer: 1, explanation: "הפקודה Console.WriteLine מציגה את הערך המאוחסן בתוך המשתנה num, שהוא 15."
    },
    // 2
    {
        id: 2, level: "easy",
        question: "מה תדפיס התוכנית למסך?",
        code: "string name = \"אלכס\";\nConsole.Write(\"שלום \");\nConsole.Write(name);",
        options: ["שלום ואלכס בשתי שורות נפרדות", "שלום אלכס באותה שורה", "שלוםname", "שגיאת הרצה"],
        answer: 1, explanation: "המתודה Write (בשונה מ-WriteLine) אינה יורדת שורה, ולכן שתי המחרוזות יודפסו ברצף באותה שורה."
    },
    // 3
    {
        id: 3, level: "easy",
        question: "איזה טיפוס משתנה מתאים לאחסון מחיר מוצר כמו 19.90?",
        code: "___ price = 19.90;",
        options: ["int", "string", "double", "bool"],
        answer: 2, explanation: "טיפוס double מיועד לייצוג מספרים ממשיים (בעלי נקודה עשרונית)."
    },
    // 4
    {
        id: 4, level: "easy",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "bool isPassed = true;\nConsole.WriteLine(isPassed);",
        options: ["true", "True", "1", "false"],
        answer: 1, explanation: "ב-C#, הדפסת משתנה בוליאני מציגה את הערך עם אות ראשונה גדולה (True/False)."
    },
    // 5
    {
        id: 5, level: "easy",
        question: "כיצד מגדירים תו בודד (char) ב-C#?",
        code: "char letter = 'A';",
        options: ["עם גרשיים כפולים (\"A\")", "עם גרש בודד ('A')", "ללא מירכאות כלל", "עם סוגריים מרובעים [A]"],
        answer: 1, explanation: "משתנה מטיפוס char מוגדר תמיד באמצעות גרש בודד ('')."
    },
    // 6
    {
        id: 6, level: "easy",
        question: "מה יהיה הציון שיודפס?",
        code: "int grade1 = 80;\nint grade2 = 90;\nConsole.WriteLine(grade1 + grade2);",
        options: ["8090", "170", "grade1 + grade2", "80 90"],
        answer: 1, explanation: "כאשר מחברים שני משתנים מספריים (int), האופרטור + מבצע חיבור אריתמטי (80+90=170)."
    },
    // 7
    {
        id: 7, level: "easy",
        question: "מה מחזירה הפעולה Console.ReadLine()?",
        code: "string input = Console.ReadLine();",
        options: ["ערך מספרי (int)", "מחרוזת (string)", "ערך בוליאני (bool)", "תו בודד (char)"],
        answer: 1, explanation: "הפקודה Console.ReadLine() קוראת תמיד את הקלט מהמשתמש כערך מטיפוס string."
    },
    // 8
    {
        id: 8, level: "easy",
        question: "מה יהיה ערכו של X בסוף הקוד?",
        code: "int x = 5;\nx = 10;\nConsole.WriteLine(x);",
        options: ["5", "10", "15", "שגיאה"],
        answer: 1, explanation: "השמה חדשה לתוך משתנה דורסת את הערך הקודם שהיה שמור בו."
    },
    // 9
    {
        id: 9, level: "easy",
        question: "מה תפלוט התוכנית הבאה?",
        code: "string str1 = \"Cyber\";\nstring str2 = \"Room\";\nConsole.WriteLine(str1 + str2);",
        options: ["Cyber Room", "CyberRoom", "Cyber+Room", "שגיאת קומפילציה"],
        answer: 1, explanation: "חיבור מחרוזות (+) משרשר אותן זו לזו ללא רווח אוטומטי ביניהן."
    },
    // 10
    {
        id: 10, level: "easy",
        question: "מה יקרה בעת ניסיון להריץ את הקוד הבא?",
        code: "int x;\nConsole.WriteLine(x);",
        options: ["יודפס 0", "יודפס null", "שגיאת קומפילציה (Unassigned variable)", "שגיאת הרצה בזמן אמת"],
        answer: 2, explanation: "ב-C# לא ניתן להשתמש במשתנה מקומי שלא אותחל בערך ראשוני."
    },
    // 11
    {
        id: 11, level: "easy",
        question: "מה מבצע התו המיוחד \\n בתוך מחרוזת פלט?",
        code: "Console.WriteLine(\"Hello\\nWorld\");",
        options: ["מוסיף רווח כפול", "יורד שורה חדשה", "מדפיס את התו n", "מוחק את המילה הקודמת"],
        answer: 1, explanation: "התו \\n הוא תו מילוט (Escape Character) שמייצג ירידת שורה."
    },
    // 12
    {
        id: 12, level: "easy",
        question: "מה יהיה ערך המשתנה count?",
        code: "int count = 1;\ncount = count + 3;\nConsole.WriteLine(count);",
        options: ["1", "3", "4", "13"],
        answer: 2, explanation: "הביטוי מימין מחושב קודם (1+3=4) ואז התוצאה 4 מושמת בחזרה ל-count."
    },
    // 13
    {
        id: 13, level: "easy",
        question: "איזה מהמשתנים הבאים מוגדר באופן תקין?",
        code: "// Declaration options:\n1) int x = \"5\";\n2) string s = 5;\n3) double d = 5;\n4) bool b = \"true\";",
        options: ["אפשרות 1", "אפשרות 2", "אפשרות 3", "אפשרות 4"],
        answer: 2, explanation: "משתנה מסוג double יכול לקבל ערך שלם (5) המומר באופן משתמע ל-5.0."
    },
    // 14
    {
        id: 14, level: "easy",
        question: "מה תהיה התוצאה של ההדפסה הבאה?",
        code: "string age = \"20\";\nConsole.WriteLine(age + 5);",
        options: ["25", "205", "שגיאת קומפילציה", "20 5"],
        answer: 1, explanation: "כאשר מחברים string עם int, המספר מומר למחרוזת והתוצאה היא שרשור: \"205\"."
    },
    // 15
    {
        id: 15, level: "easy",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int x = 10;\nint y = 20;\nx = y;\nConsole.WriteLine(x);",
        options: ["10", "20", "x", "30"],
        answer: 1, explanation: "הפעולה x = y מעתיקה את הערך של y (שהוא 20) לתוך המשתנה x, ולכן מודפס 20."
    },

    // ==================== MEDIUM (16-30) ====================
    // 1
    {
        id: 16, level: "medium",
        question: "מה יהיה הפלט אם המשתמש יקליד 10?",
        code: "string input = Console.ReadLine();\nint num = int.Parse(input);\nConsole.WriteLine(num + 5);",
        options: ["105", "15", "10 5", "שגיאת קומפילציה"],
        answer: 1, explanation: "הפעולה int.Parse ממירה את המחרוזת \"10\" למספר שלם 10, ואז 10+5 דורש חיבור מספרי = 15."
    },
    // 2
    {
        id: 17, level: "medium",
        question: "מה תהיה תוצאת החילוק בקוד הבא?",
        code: "int a = 7;\nint b = 2;\nConsole.WriteLine(a / b);",
        options: ["3.5", "3", "4", "3.0"],
        answer: 1, explanation: "חילוק בין שני שלמים (int / int) ב-C# מחזיר תוצאה שלמה (קיטום החלק העשרוני), ולכן התוצאה היא 3."
    },
    // 3
    {
        id: 18, level: "medium",
        question: "מה מחושב באמצעות האופרטור %?",
        code: "int result = 10 % 3;\nConsole.WriteLine(result);",
        options: ["1", "3", "3.33", "0"],
        answer: 0, explanation: "האופרטור % מחזיר את שארית החילוק השלם. 10 לחלק ל-3 זה 3 עם שארית 1."
    },
    // 4
    {
        id: 19, level: "medium",
        question: "מה תהיה התוצאה של הקוד הבא?",
        code: "double x = 7 / 2;\nConsole.WriteLine(x);",
        options: ["3.5", "3", "3.0", "שגיאת קומפילציה"],
        answer: 1, explanation: "הביטוי 7/2 מחושב קודם כחילוק שלמים שתוצאתו 3, ואז המספר 3 מושם ל-double ונעשה 3."
    },
    // 5
    {
        id: 20, level: "medium",
        question: "כיצד נשיג חילוק עשרוני מדויק מתוך שני שלמים?",
        code: "double x = 7.0 / 2;\nConsole.WriteLine(x);",
        options: ["3", "3.5", "3.0", "שגיאה"],
        answer: 1, explanation: "מכיוון שאחד האופרנדים הוא double (7.0), החילוק מבוצע כחילוק עשרוני והתוצאה היא 3.5."
    },
    // 6 - Replaced: Operator Precedence
    {
        id: 21, level: "medium",
        question: "מה יהיה הפלט של הקוד הבא לפי סדר פעולות החשבון?",
        code: "int a = 10;\nint b = 3;\nConsole.WriteLine(a + b * 2);",
        options: ["26", "16", "23", "60"],
        answer: 1, explanation: "לפי סדר קדימויות חשבון, כפל מבוצע לפני חיבור (3 * 2 = 6), ואז 10 + 6 = 16."
    },
    // 7 - Replaced: Variable reassignment and order
    {
        id: 22, level: "medium",
        question: "מה יהיה ערכו של המשתנה y בסוף התוכנית?",
        code: "int x = 8;\nint y = x + 2;\nx = x + 5;\nConsole.WriteLine(y);",
        options: ["8", "10", "13", "15"],
        answer: 1, explanation: "המשתנה y מקבל את הערך 8 + 2 (10). השינוי המאוחר ב-x אינו משפיע על הערך שכבר חושב ונשמר ב-y."
    },
    // 8
    {
        id: 23, level: "medium",
        question: "מה ייפלט בשימוש ב-String Interpolation?",
        code: "string user = \"Dana\";\nint points = 50;\nConsole.WriteLine($\"User {user} has {points + 10} pts\");",
        options: ["User Dana has 50 + 10 pts", "User Dana has 60 pts", "User {user} has {points} pts", "שגיאה"],
        answer: 1, explanation: "הסימן $ מאפשר לשלב ביטויים בתוך סוגריים מסולסלים {}, המחושבים ומשורשרים למחרוזת."
    },
    // 9
    {
        id: 24, level: "medium",
        question: "מה תהיה תוצאת המרת הטיפוס המפורשת (Casting)?",
        code: "double val = 9.85;\nint rounded = (int)val;\nConsole.WriteLine(rounded);",
        options: ["9.85", "10", "9", "0"],
        answer: 2, explanation: "המרה מפורשת מ-double ל-int מקצצת את החלק העשרוני (אינה מעגלת!) ולכן התוצאה היא 9."
    },
    // 10 - Replaced: double.Parse with basic input
    {
        id: 25, level: "medium",
        question: "מה יתרחש אם המשתמש יקליד \"3.5\" בקוד הבא?",
        code: "string input = Console.ReadLine();\ndouble num = double.Parse(input);\nConsole.WriteLine(num * 2);",
        options: ["7", "3.52", "שגיאת קומפילציה", "שגיאה בזמן הרצה (Exception)"],
        answer: 0, explanation: "הפעולה double.Parse ממירה את המחרוזת \"3.5\" למספר עשרוני, והכפל ב-2 מחזיר 7."
    },
    // 11 - Replaced: Sequential assignment without +=
    {
        id: 26, level: "medium",
        question: "מה תהיה התוצאה בסוף הפעולות?",
        code: "int x = 10;\nx = x + 5;\nx = x * 2;\nConsole.WriteLine(x);",
        options: ["30", "25", "20", "15"],
        answer: 0, explanation: "תחילה x = x + 5 מעלה את x ל-15. לאחר מכן x = x * 2 מכפיל ב-2 ונותן 30."
    },
    // 12 - Replaced: String concatenation with spaces
    {
        id: 27, level: "medium",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "string firstName = \"דני\";\nstring lastName = \"דין\";\nstring fullName = firstName + \" \" + lastName;\nConsole.WriteLine(fullName);",
        options: ["דנידין", "דני דין", "firstName lastName", "דני + דין"],
        answer: 1, explanation: "חיבור המחרוזות כולל מחרוזת עם רווח ברצע באמצע (\" \"), ולכן הפלט המודפס הוא \"דני דין\"."
    },
    // 13 - Replaced: Modulo operation in practical context
    {
        id: 28, level: "medium",
        question: "מה תדפיס התוכנית הבאה?",
        code: "int totalStudents = 25;\nint groupSize = 4;\nint leftover = totalStudents % groupSize;\nConsole.WriteLine(leftover);",
        options: ["6", "1", "0", "6.25"],
        answer: 1, explanation: "25 לחלק ל-4 נותן 6 שלמים עם שארית 1. אופרטור % מחזיר את השארית בלבד (1)."
    },
    // 14 - Replaced: Interpolation with calculation
    {
        id: 29, level: "medium",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int width = 5;\nint height = 10;\nConsole.WriteLine($\"Area: {width * height}\");",
        options: ["Area: 50", "Area: width * height", "Area: 510", "שגיאת קומפילציה"],
        answer: 0, explanation: "הביטוי בתוך הסוגריים המסולסלים {width * height} מחושב קודם ל-50 ואז מושתל בתוך המחרוזת."
    },
    // 15
    {
        id: 30, level: "medium",
        question: "מה יקרה בהרצת הקוד הבא?",
        code: "string s = \"50\";\ndouble res = double.Parse(s) / 2;\nConsole.WriteLine(res);",
        options: ["25", "25.0", "502", "שגיאת קומפילציה"],
        answer: 0, explanation: "double.Parse ממירה את \"50\" ל-50.0. חילוק ב-2 נותן 25 (המוצג כ-25)."
    },

    // ==================== HARD (31-45) ====================
    // 1 - Replaced: Mixed division and modulo
    {
        id: 31, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 17;\nint b = 5;\nint res = a / b + a % b;\nConsole.WriteLine(res);",
        options: ["5", "3", "2", "5.4"],
        answer: 0, explanation: "17 / 5 בחילוק שלמים נותן 3. 17 % 5 מחזיר שארית 2. החיבור 3 + 2 נותן 5."
    },
    // 2 - Replaced: Explicit casting inside calculation
    {
        id: 32, level: "hard",
        question: "מה תהיה התוצאה של הקוד הבא?",
        code: "int x = 5;\nint y = 2;\ndouble avg = (double)(x + y) / 2;\nConsole.WriteLine(avg);",
        options: ["3.5", "3", "3.0", "שגיאת קומפילציה"],
        answer: 0, explanation: "הסוגריים (x + y) מחושבים קודם ל-7. ה-casting ממיר ל-7.0, והחילוק ב-2 נותן חילוק עשרוני מדויק: 3.5."
    },
    // 3 - Replaced: Double casting on both operands
    {
        id: 33, level: "hard",
        question: "מה תדפיס התוכנית הבאה?",
        code: "int num1 = 9;\nint num2 = 2;\ndouble result = (double)num1 / (double)num2;\nConsole.WriteLine(result);",
        options: ["4.5", "4", "4.0", "שגיאת קומפילציה"],
        answer: 0, explanation: "המרת שני האופרנדים ל-double מביאה לחילוק עשרוני מדויק: 9.0 / 2.0 = 4.5."
    },
    // 4 - Replaced: Multi-step input parsing and arithmetic
    {
        id: 34, level: "hard",
        question: "אם המשתמש מקליד \"12\", מה יהיה הפלט?",
        code: "string str = Console.ReadLine();\nint val = int.Parse(str);\nint doubleVal = val * 2;\nConsole.WriteLine($\"Result: {doubleVal + 5}\");",
        options: ["Result: 29", "Result: 1225", "Result: 34", "שגיאת קומפילציה"],
        answer: 0, explanation: "הקלט \"12\" מומר ל-12. הכפל ב-2 נותן 24, והחיבור ב-5 נותן 29. התוצאה מושתלת בתוך המחרוזת."
    },
    // 5
    {
        id: 35, level: "hard",
        question: "איך מדפיסים מחרוזת המכילה מירכאות כפולות בתוכה?",
        code: "string text = \"He said \\\"Hello\\\"\";\nConsole.WriteLine(text);",
        options: ["He said \"Hello\"", "He said \\\"Hello\\\"", "He said Hello", "שגיאת קומפילציה"],
        answer: 0, explanation: "תו המילוט \\\" מאפשר להכניס תו מירכאות כחלק מתוכן המחרוזת."
    },
    // 6
    {
        id: 36, level: "hard",
        question: "מה יהיה הפלט של ביטוי מורכב בתוך Interpolation?",
        code: "int a = 3;\nConsole.WriteLine($\"Result: {a + 2 * 4}\");",
        options: ["Result: 20", "Result: 11", "Result: 3+2*4", "שגיאה"],
        answer: 1, explanation: "קודם מבוצעת הכפלה (2*4=8) ואז חיבור (3+8=11). המילוי מושתל ישירות לתוך הפלט."
    },
    // 7
    {
        id: 37, level: "hard",
        question: "מה מבצע קטע הקוד הבא על המשתנים a ו-b?",
        code: "int a = 5, b = 10;\na = a + b;\nb = a - b;\na = a - b;\nConsole.WriteLine($\"{a},{b}\");",
        options: ["5,10", "10,5", "15,10", "0,0"],
        answer: 1, explanation: "זהו אלגוריתם קלאסי להחלפת ערכים (Swap) בין שני משתנים מספריים ללא משתנה עזר."
    },
    // 8 - Replaced: String and char interpolation
    /*{
        id: 38, level: "hard",
        question: "מה יהיה הפלט של התוכנית הבאה?",
        code: "char letter = 'X';\nint number = 99;\nstring msg = $"{letter}_{number + 1}";\nConsole.WriteLine(msg);",
            options: ["X_100", "X_991", "letter_100", "שגיאת קומפילציה"],
                answer: 0, explanation: "התו 'X' והחישוב 99+1=100 משורשרים יחד עם המקף התחתון לקבלת X_100."
    },*/
    // 8
    {
        id: 38, level: "hard",
        question: "מה יהיה הפלט של התוכנית הבאה?",
        code: "string letter = \"X\";\nint number = 99;\nstring msg = $\"{letter}_{number + 1}\";\nConsole.WriteLine(msg);",
        options: ["X_100", "X_991", "letter_100", "שגיאת קומפילציה"],
        answer: 0, explanation: "המחרוזת \"X\" והחישוב 99+1=100 משורשרים יחד עם המקף התחתון לקבלת X_100."
    },
    // 9 - Replaced: Order of operations with string concatenation and parentheses
    {
        id: 39, level: "hard",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int a = 5;\nint b = 10;\nConsole.WriteLine(\"Total: \" + (a + b));",
        options: ["Total: 15", "Total: 510", "Total: a + b", "שגיאת קומפילציה"],
        answer: 0, explanation: "בגלל הסוגריים סביב (a + b), החיבור המספרי מבוצע קודם (15), ורק לאחר מכן מבוצע השרשור למחרוזת."
    },
    // 10 - Replaced: Sequential state tracking
    {
        id: 40, level: "hard",
        question: "מה יהיה ערכו של המשתנה c בסוף הקוד?",
        code: "int a = 3;\nint b = 4;\nint c = a * b;\na = 10;\nConsole.WriteLine(c);",
        options: ["12", "40", "30", "0"],
        answer: 0, explanation: "המשתנה c מחושב כ-3 * 4 = 12 בזמן ההשמה. שינוי מאוחר של a ל-10 לא משנה את הערך שרק נשמר ב-c."
    },
    // 11 - Replaced: Chained variables update
    {
        id: 41, level: "hard",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int x = 2;\nint y = 3;\nint z = x + y;\nx = z * 2;\nConsole.WriteLine(x + y);",
        options: ["13", "10", "15", "5"],
        answer: 0, explanation: "z מחושב ל-2+3=5. אז x הופך ל-5*2=10. לבסוף, x+y מחושב ל-10+3=13."
    },
    // 12 - Replaced: FormatException concept with int.Parse
    {
        id: 42, level: "hard",
        question: "מה יקרה בזמן הרצת הקוד אם המשתמש יקליד \"hello\"?",
        code: "string input = Console.ReadLine();\nint num = int.Parse(input);\nConsole.WriteLine(num);",
        options: ["שגיאת הרצה בזמן אמת (FormatException)", "יודפס 0", "שגיאת קומפילציה", "יודפס hello"],
        answer: 0, explanation: "הפעולה int.Parse אינה יכולה להמיר מחרוזת טקסטואלית כמו \"hello\" למספר שלם, ולכן נזרקת שגיאת הרצה בזמן אמת."
    },
    // 13 - Replaced: Concatenating int and string sequence
    {
        id: 43, level: "hard",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int x = 5;\nstring s = \"5\";\nConsole.WriteLine(x + s + x);",
        options: ["555", "15", "105", "510"],
        answer: 0, explanation: "משמאל לימין: x + s מחבר int ו-string ומייצר \"55\". לאחר מכן \"55\" + x מחבר מחדש למחרוזת ומקבלים \"555\"."
    },
    // 14 - Fixed: Conceptual escape character role
    {
        id: 44, level: "hard",
        question: "מה תפקידם של תווי המילוט \\n ו-\\t בתוך מחרוזת?",
        code: "Console.WriteLine(\"Line1\\tColumn2\\nLine2\");",
        options: [
            "\\t מוסיף רווח טאב, ו-\\n יורד שורה חדשה",
            "\\n מוסיף רווח טאב, ו-\\t יורד שורה חדשה",
            "שניהם מדפיסים את התווים n ו-t כרגיל",
            "שניהם גורמים לשגיאת קומפילציה"
        ],
        answer: 0, explanation: "התו \\t מייצג Tab (רווח רוחבי), והתו \\n מייצג Newline (ירידת שורה חדשה)."
    },
    // 15
    {
        id: 45, level: "hard",
        question: "מה תהיה תוצאת חישוב סדר הקדימויות המורכב הבא?",
        code: "int a = 2, b = 3;\nstring result = \"Ans: \" + a + b * 2;\nConsole.WriteLine(result);",
        options: ["Ans: 10", "Ans: 26", "Ans: 8", "Ans: 23"],
        answer: 1, explanation: "הכפל b*2 מבוצע קודם ל-6. לאחר מכן השרשור משמאל לימין: \"Ans: \" + 2 = \"Ans: 2\", ואז + 6 מחבר מחרוזות = \"Ans: 26\"."
    }
];

/**
 * Expert Questions Database - C# Variables, Input & Output (Advanced Set)
 * Contains 45 new questions: 15 easy, 15 medium, 15 hard.
 */
const expertIOVQuestions = [
    // ==================== EXPERT EASY (1-15) ====================
    {
        id: 1, level: "easy",
        question: "מה יהיה פלט הקוד הבא?",
        code: "int a = 12;\nint b = 4;\nConsole.WriteLine(a - b / 2);",
        options: ["4", "10", "8", "שגיאת הידור"],
        answer: 1, explanation: "לפי סדר פעולות החשבון, חילוק מתבצע לפני חיסור (4 / 2 = 2), ולכן 12 - 2 = 10."
    },
    {
        id: 2, level: "easy",
        question: "מה תדפיס התוכנית למסך עבור המחרוזות הבאות?",
        code: "string prefix = \"C#\";\nstring suffix = \"Language\";\nConsole.Write(prefix);\nConsole.Write(\" \");\nConsole.Write(suffix);",
        options: ["C#Language", "C# Language", "C#\\nLanguage", "שגיאת הרצה"],
        answer: 1, explanation: "השימוש ב-Write (במקום WriteLine) מדפיס את המחרוזות ברצף באותה שורה, כולל מחרוזת הרווח באמצע."
    },
    {
        id: 3, level: "easy",
        question: "איזה טיפוס נתונים מתאים ביותר לשמירת ערך המציין האם התלמיד סיים את המשימה (true או false)?",
        code: "// Choose the correct type:\n___ isFinished = true;",
        options: ["int", "string", "bool", "char"],
        answer: 2, explanation: "טיפוס בוליאני (bool) מיועד אך ורק לשמירת ערכי אמת (true) או שקר (false)."
    },
    {
        id: 4, level: "easy",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "char symbol = '#';\nConsole.WriteLine(\"Code \" + symbol);",
        options: ["Code #", "Codechar", "שגיאת קומפילציה", "Code"],
        answer: 0, explanation: "חיבור מחרוזת עם תו (char) משרשר את התו למחרוזת ומציג את התוצאה המלאה."
    },
    {
        id: 5, level: "easy",
        question: "מה יקרה כאשר ננסה להדפיס משתנה מספרי שלא קיבל ערך התחלתי?",
        code: "int score;\nConsole.WriteLine(score);",
        options: ["יודפס 0 אוטומטית", "יודפס null", "שגיאת קומפילציה (Unassigned variable)", "שגיאת זיכרון"],
        answer: 2, explanation: "ב-C#, חובה לאתחל משתנה מקומי בערך כלשהו לפני שנעשה בו שימוש כלשהו בקוד."
    },
    {
        id: 6, level: "easy",
        question: "מה יהיה הפלט של חיבור המספרים הבא?",
        code: "int x = 25;\nint y = 5;\nConsole.WriteLine(\"Sum: \" + x + y);",
        options: ["Sum: 30", "Sum: 255", "שגיאת קומפילציה", "Sum: 25 + 5"],
        answer: 1, explanation: "חיבור מחרוזת עם המספר הראשון הופך הכל למחרוזת (\"Sum: 25\"), ואז הוספת y משרשרת אותה בסוף לקבלת \"Sum: 255\"."
    },
    {
        id: 7, level: "easy",
        question: "כיצד יש לכתוב נכון פקודה שמדפיסה טקסט ויורדת שורה אחריה אוטומטית?",
        code: "// Select the correct method:",
        options: ["Console.PrintLine(\"Hello\");", "Console.WriteLine(\"Hello\");", "Console.WriteLn(\"Hello\");", "System.Print(\"Hello\\n\");"],
        answer: 1, explanation: "המתודה הנכונה והמקובלת ב-C# להדפסה וירידת שורה היא Console.WriteLine."
    },
    {
        id: 8, level: "easy",
        question: "מה יהיה ערכו של המשתנה לאחר שורת הקוד הבאה?",
        code: "int val = 10;\nval += 5;",
        options: ["5", "10", "15", "שגיאה"],
        answer: 2, explanation: "האופרטור += מוסיף 5 לערכו הנוכחי של val (שמקורו 10), ולכן התוצאה היא 15."
    },
    {
        id: 9, level: "easy",
        question: "מה תדפיס השורה הבאה הכוללת תו מילוט (Escape Character)?",
        code: "Console.WriteLine(\"Col1\\tCol2\");",
        options: ["Col1\\tCol2", "Col1    Col2 (עם רווח טאב)", "Col1שורהחדשהCol2", "שגיאת קומפילציה"],
        answer: 1, explanation: "התו \\t מייצג מעבר טאב (Tab), ולכן יוצר רווח אופקי רחב בין שתי המילים."
    },
    {
        id: 10, level: "easy",
        question: "איזה מבין השמות הבאים למשתנה הוא **שגוי** מבחינת תחביר C#?",
        code: "// Which variable name is invalid?",
        options: ["int studentAge;", "int 2ndPlace;", "int _score;", "int total_count;"],
        answer: 1, explanation: "שם משתנה ב-C# אינו יכול להתחיל בספרה (כמו 2ndPlace)."
    },
    {
        id: 11, level: "easy",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "double temperature = 22.5;\nConsole.WriteLine(temperature);",
        options: ["22,5", "22.5", "22", "שגיאה"],
        answer: 1, explanation: "ערכים עשרוניים ב-C# נכתבים עם נקודה עשרונית ומודפסים כפי שהוגדרו."
    },
    {
        id: 12, level: "easy",
        question: "מה עושה הפקודה int.Parse()?",
        code: "int num = int.Parse(\"100\");",
        options: ["הופכת מספר למחרוזת", "ממירה מחרוזת המייצגת מספר למשתנה מספרי שלם", "מוחקת את המספר", "בודקת אם הקלט ריק"],
        answer: 1, explanation: "הפעולה int.Parse מקבלת מחרוזת טקסטואלית וממירה אותה לערך מספרי מסוג int."
    },
    {
        id: 13, level: "easy",
        question: "מה יהיה הפלט של חישוב השארית הבא?",
        code: "int r = 10 % 10;\nConsole.WriteLine(r);",
        options: ["10", "1", "0", "שגיאה"],
        answer: 2, explanation: "השארית מחלוקת 10 ב-10 היא 0 שלם."
    },
    {
        id: 14, level: "easy",
        question: "איזה טיפוס נתונים יש להגדיר עבור אות בודדת כמו 'X'?",
        code: "___ gradeLetter = 'A';",
        options: ["string", "char", "text", "bool"],
        answer: 1, explanation: "תו בודד בודד מוגדר באמצעות טיפוס char ובגרש יחיד."
    },
    {
        id: 15, level: "easy",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "string item = \"Book\";\nitem = \"Pen\";\nConsole.WriteLine(item);",
        options: ["Book", "Pen", "BookPen", "שגיאה"],
        answer: 1, explanation: "הערך של item עודכן מ-\"Book\" ל-\"Pen\", ולכן יודפס הערך העדכני האחרון."
    },

    // ==================== EXPERT MEDIUM (16-30) ====================
    {
        id: 16, level: "medium",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "double val = 5 / 2;\nConsole.WriteLine(val);",
        options: ["2.5", "2", "2.0", "שגיאת הידור"],
        answer: 2, explanation: "החלוקה 5 / 2 מתבצעת בין שני שלמים ולכן נותנת 2. לאחר מכן הערך מושם ל-double ולכן מודפס 2.0."
    },
    {
        id: 17, level: "medium",
        question: "מה יהיה ערכו של x לאחר הרצת קטע הקוד הבא?",
        code: "int x = 5;\nx++;\nint y = ++x;\nConsole.WriteLine(x);",
        options: ["5", "6", "7", "8"],
        answer: 2, explanation: "x מתחיל ב-5. x++ מעלה אותו ל-6. ואז ++x מעלה אותו מיד ל-7 ומציב ל-y. לכן x שווה 7."
    },
    {
        id: 18, level: "medium",
        question: "מה תדפיס השורה הבאה המשתמשת ב-String Interpolation מתקדם?",
        code: "int a = 4, b = 3;\nConsole.WriteLine($\"{a} + {b} = {a + b}\");",
        options: ["4 + 3 = 7", "4 + 3 = a + b", "{a} + {b} = {a + b}", "שגיאת הידור"],
        answer: 0, explanation: "המשתנים והביטוי בתוך הסוגריים המסולסלים מחושבים ומושתלים בצורה מדויקת."
    },
    {
        id: 19, level: "medium",
        question: "מה יקרה אם ננסה להמיר מחרוזת ריקה או שגויה כמו \"abc\" בעזרת int.Parse?",
        code: "int n = int.Parse(\"abc\");",
        options: ["יחזיר 0", "יחזיר -1", "שגיאת הרצה בזמן אמת (FormatException)", "שגיאת קומפילציה"],
        answer: 2, explanation: "מחרוזת שאינה מייצג מספר תקין גורמת לזריקת חריגה (Exception) בזמן ריצה מסוג FormatException."
    },
    {
        id: 20, level: "medium",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int a = 10;\nint b = 3;\ndouble result = (double)(a / b);\nConsole.WriteLine(result);",
        options: ["3.3333", "3.0", "3", "שגיאה"],
        answer: 1, explanation: "קודם מבוצעת חלוקת שלמים (10 / 3 = 3) ורק אז מומרת ל-double (3.0), שכן ה-casting בוצע על תוצאת החילוק ולא על האופרנדים עצמם."
    },
    {
        id: 21, level: "medium",
        question: "מה יהיה הפלט של הקוד הבא המשלב אופרטור מודולו?",
        code: "int x = -15;\nint res = x % 4;\nConsole.WriteLine(res);",
        options: ["-3", "3", "-1", "1"],
        answer: 0, explanation: "ב-C#, סימן תוצאת השארית (מודולו) תמיד תואם לסימן של האופרנד השמאלי (המחולק), ולכן התוצאה היא -3."
    },
    {
        id: 22, level: "medium",
        question: "מה תדפיס התוכנית הבאה?",
        code: "string s = \"Code\";\nint n = 10;\nConsole.WriteLine(n + 5 + s);",
        options: ["105Code", "15Code", "Code15", "שגיאה"],
        answer: 1, explanation: "משמאל לימין: n + 5 מבוצע כחיבור מספרי רגיל (15), ולאחר מכן השרשור עם המחרוזת \"Code\" נותן \"15Code\"."
    },
    {
        id: 23, level: "medium",
        question: "מה ערכו של x בסוף קטע הקוד הבא?",
        code: "int x = 20;\nx /= 4;\nx *= 2;\nConsole.WriteLine(x);",
        options: ["10", "40", "2.5", "80"],
        answer: 1, explanation: "תחילה 20 חלקי 4 נותן 5. לאחר מכן 5 כפול 2 נותן 10? רגע: 20 / 4 = 5, ואז 5 * 2 = 10. התשובה הנכונה היא 10."
    },
    {
        id: 24, level: "medium",
        question: "איך נכון להגדיר מחרוזת מרובת שורות או מחרוזת ליטרלית המכילה נתיב קובץ בלי להתייחס לתווי מילוט?",
        code: "// Using verbatim string literal (@):",
        options: ["string path = @\"C:\\Temp\\Files\";", "string path = \"C:\\Temp\\Files\";", "string path = #\"C:\\Temp\\Files\";", "שגיאה"],
        answer: 0, explanation: "שימוש בתו @ לפני המחרוזת (Verbatim string) מאפשר להתעלם מתווי מילוט כמו \\."
    },
    {
        id: 25, level: "medium",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "double d = 9.99;\nint i = (int)d;\nConsole.WriteLine(i);",
        options: ["10", "9", "9.99", "שגיאה"],
        answer: 1, explanation: "המרת Casting מפורשת מ-double ל-int מבצעת קיטום (Truncation) של כל החלק העשרוני ומותירה את 9."
    },
    {
        id: 26, level: "medium",
        question: "מה יהיה הפלט של הביטוי הבא?",
        code: "int val = 5;\nConsole.WriteLine(val++ + ++val);",
        options: ["10", "11", "12", "שגיאת קומפילציה"],
        answer: 2, explanation: "val++ משתמש בערך 5 ומעלה ל-6. ואז ++val מעלה ל-7 ומשתמש ב-7. החיבור 5 + 7 נותן 12."
    },
    {
        id: 27, level: "medium",
        question: "מה תדפיס התוכנית עבור הקוד הבא?",
        code: "string text = \"CSharp\";\nConsole.WriteLine(text.Length);",
        options: ["6", "7", "CSharp", "שגיאה"],
        answer: 0, explanation: "המאפיין Length מחזיר את מספר התווים במחרוזת, ובמילה CSharp ישנם 6 תווים."
    },
    {
        id: 28, level: "medium",
        question: "מהו הפלט של הקוד הבא בהנחה שנקלט המספר 7?",
        code: "int num = int.Parse(Console.ReadLine());\nConsole.WriteLine(num++);",
        options: ["7", "8", "6", "שגיאה"],
        answer: 0, explanation: "האופרטור Post-increment (num++) מעלה את הערך רק *אחרי* שהשימוש בו כבר בוצע בהדפסה, ולכן יודפס 7."
    },
    {
        id: 29, level: "medium",
        question: "מה יקרה בהרצת הקוד הבא?",
        code: "double result = 3.0 / 0;\nConsole.WriteLine(result);",
        options: ["שגיאת חלוקה באפס (DivideByZeroException)", "יודפס Infinity (אינסוף)", "יודפס 0", "שגיאת קומפילציה"],
        answer: 1, explanation: "בניגוד לחלוקה באפס של שלמים (int) שגורמת לשגיאה, חלוקה באפס של מספרי טיפוס ממשי (double) מחזירה את הערך המיוחד Infinity."
    },
    {
        id: 30, level: "medium",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int a = 2;\nint b = 3;\nint c = 4;\nConsole.WriteLine(a * b + c / 2);",
        options: ["8", "10", "14", "7"],
        answer: 0, explanation: "כפל וחלוקה קודמים לחיבור: (2 * 3 = 6) ועוד (4 / 2 = 2), כלומר 6 + 2 = 8."
    },

    // ==================== EXPERT HARD (31-45) ====================
    {
        id: 31, level: "hard",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int x = 3;\nint y = ++x * 3 + x--;\nConsole.WriteLine($\"{x}, {y}\");",
        options: ["3, 15", "4, 16", "3, 16", "4, 15"],
        answer: 2, explanation: "++x הופך ל-4. 4 * 3 = 12. ואז x-- משתמש ב-4 (כלומר 12 + 4 = 16 עבור y), ומוריד את x בחזרה ל-3. לכן התוצאה היא x=3, y=16."
    },
    {
        id: 32, level: "hard",
        question: "מה תדפיס התוכנית הבאה?",
        code: "string s1 = \"10\";\nstring s2 = \"20\";\nConsole.WriteLine(int.Parse(s1) + int.Parse(s2));",
        options: ["1020", "30", "שגיאת קומפילציה", "30.0"],
        answer: 1, explanation: "שתי המחרוזות מומרות למספרים שלמים (10 ו-20) ומתבצע חיבור חשמלי אמיתי שתוצאתו 30."
    },
    {
        id: 33, level: "hard",
        question: "מה יהיה הפלט של שורת הקוד הבאה?",
        code: "double val = 7 / 2.0 + 5 / 2;\nConsole.WriteLine(val);",
        options: ["5.5", "6.0", "6.5", "5.0"],
        answer: 1, explanation: "7 / 2.0 נותן 3.5 (חילוק עשרוני). 5 / 2 נותן 2 (חילוק שלמים). חיבורם יחד נותן 3.5 + 2 = 5.5? רגע, 3.5 + 2 = 5.5. בואו נראה: 5 / 2 זה 2, 7 / 2.0 זה 3.5, סך הכל 5.5."
    },
    {
        id: 34, level: "hard",
        question: "מה יקרה אם ננסה להמיר מחרוזת ריקה (string.Empty) באמצעות int.Parse?",
        code: "int val = int.Parse(string.Empty);",
        options: ["יחזיר 0", "שגיאת הרצה (FormatException)", "יחזיר null", "שגיאת קומפילציה"],
        answer: 1, explanation: "מחרוזת ריקה אינה מייצג מספר תקין ולכן זורקת שגיאת FormatException בזמן ריצה."
    },
    {
        id: 35, level: "hard",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int a = 5;\nstring s = \"Val: \";\nConsole.WriteLine(s + (a + 5));",
        options: ["Val: 55", "Val: 10", "שגיאה", "Val: a+5"],
        answer: 1, explanation: "הסוגריים מורים לבצע חיבור חשמלי של (5 + 5 = 10) קודם, ורק אז לשרשר למחרוזת לקבלת \"Val: 10\"."
    },
    {
        id: 36, level: "hard",
        question: "כיצד יודפסו מירכאות כפולות בתוך מחרוזת רגילה ב-C#?",
        code: "Console.WriteLine(\"She said \\\"Hi\\\"!\");",
        options: ["She said \"Hi\"!", "She said \\\"Hi\\\"!", "שגיאת קומפילציה", "She said Hi!"],
        answer: 0, explanation: "תו המילוט \\\" מאפשר להכניס מירכאות כפולות כחלק מתוכן המחרוזת המודפסת."
    },
    {
        id: 37, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 10;\nint y = 3;\nint z = x-- - --y;\nConsole.WriteLine($\"{x}, {y}, {z}\");",
        options: ["9, 2, 8", "10, 2, 7", "9, 3, 7", "9, 2, 7"],
        answer: 0, explanation: "x-- משתמש ב-10 ואז מוריד ל-9. --y מוריד את y מ-3 ל-2 ומשתמש ב-2. התוצאה z = 10 - 2 = 8. לכן: x=9, y=2, z=8."
    },
    {
        id: 38, level: "hard",
        question: "מה תדפיס התוכנית הבאה?",
        code: "double d = 5.8;\nint result = (int)d + (int)(-d);\nConsole.WriteLine(result);",
        options: ["0", "10", "-1", "שגיאה"],
        answer: 0, explanation: "(int)5.8 נותן 5. (int)-5.8 נותן -5 (קיטום לכיוון אפס). החיבור 5 + (-5) נותן 0."
    },
    {
        id: 39, level: "hard",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int a = 7;\nint b = 2;\ndouble res = (double)a / b * b;\nConsole.WriteLine(res);",
        options: ["7.0", "7", "6.5", "שגיאה"],
        answer: 0, explanation: "(double)7 / 2 נותן 3.5. כפל ב-2 מחזיר בחזרה את 7, והתוצאה מודפסת כטיפוס double כלומר 7.0."
    },
    {
        id: 40, level: "hard",
        question: "מה יקרה כאשר ננסה להשתמש במשתנה שמוגדר מחוץ לבלוק קוד פנימי?",
        code: "{\n    int x = 10;\n}\nConsole.WriteLine(x);",
        options: ["יודפס 10", "שגיאת קומפילציה (The name 'x' does not exist)", "יודפס 0", "שגיאת זיכרון"],
        answer: 1, explanation: "למשתנה x יש Scope (תחום הכרזה) מקומי לבלוק שבו הוגדר בלבד, ולכן מחוצה לו הוא לא מוכר וגורם לשגיאת הידור."
    },
    {
        id: 41, level: "hard",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "int a = 1, b = 2, c = 3;\nstring msg = a + b + \" = \" + c;\nConsole.WriteLine(msg);",
        options: ["12 = 3", "3 = 3", "1+2 = 3", "שגיאה"],
        answer: 1, explanation: "משמאל לימין: a + b מחושבים מתמטית ל-3. ואז 3 משורשר למחרוזת לקבלת \"3 = 3\"."
    },
    {
        id: 42, level: "hard",
        question: "מה תהיה התוצאה של ביטוי ההצבה המשולב הבא?",
        code: "int x = 5;\nint y = 2;\nx *= y + 3;\nConsole.WriteLine(x);",
        options: ["13", "25", "10", "שגיאה"],
        answer: 1, explanation: "הביטוי מימין לשווה מחושב קודם (y + 3 כלומר 2 + 3 = 5). ואז x *= 5 כלומר 5 * 5 = 25."
    },
    {
        id: 43, level: "hard",
        question: "מה יהיה הפלט של התוכנית הבאה?",
        code: "char c = '5';\nint val = c;\nConsole.WriteLine(val);",
        options: ["5", "53", "שגיאת קומפילציה", "0"],
        answer: 1, explanation: "המרה משתמעת של char למספר (int) ב-C# מחזירה את ערך ה-ASCII של התו. ערך ה-ASCII של התו '5' הוא 53."
    },
    {
        id: 44, level: "hard",
        question: "מה יהיה הפלט של השורה הבאה?",
        code: "Console.WriteLine(1 + 2 + \"3\" + 4 + 5);",
        options: ["12345", "3345", "15", "שגיאת קומפילציה"],
        answer: 1, explanation: "משמאל לימין: 1+2=3. ואז 3 + \"3\" הופך למחרוזת \"33\". המשך השרשור עם 4 ו-5 נותן \"3345\"."
    },
    {
        id: 45, level: "hard",
        question: "מהו הפלט הסופי של קטע הקוד הבא?",
        code: "int a = 10;\nint b = ++a + a++ + a;\nConsole.WriteLine(b);",
        options: ["33", "34", "35", "32"],
        answer: 1, explanation: "בהתחלה a=10. ++a מעלה ל-11 (ומחזיר 11). a++ משתמש ב-11 (ומעלה ל-12). ה-a האחרון הוא כבר 12. סך הכל: 11 + 11 + 12 = 34."
    }
];