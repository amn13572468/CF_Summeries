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

const sumAllIOVQuestions = [
    // ==================== EASY (1-15) ====================
    {
        id: 1, level: "easy",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int num = 15;\nConsole.WriteLine(num);",
        options: ["num", "15", "0", "שגיאת קומפילציה"],
        answer: 1, explanation: "הפקודה Console.WriteLine מציגה את הערך המאוחסן בתוך המשתנה num, שהוא 15."
    },
    {
        id: 2, level: "easy",
        question: "מה תדפיס התוכנית למסך?",
        code: "string name = \"אלכס\";\nConsole.Write(\"שלום \");\nConsole.Write(name);",
        options: ["שלום\nאלכס", " אלכס שלום", "שלוםname", "שגיאת הרצה"],
        answer: 1, explanation: "המתודה Write (בשונה מ-WriteLine) אינה יורדת שורה, ולכן שתי המחרוזות יודפסו ברצף באותה שורה."
    },
    {
        id: 3, level: "easy",
        question: "איזה טיפוס משתנה מתאים לאחסון מחיר מוצר כמו 19.90?",
        code: "___ price = 19.90;",
        options: ["int", "string", "double", "bool"],
        answer: 2, explanation: "טיפוס double מיועד לייצוג מספרים ממשיים (בעלי נקודה עשרונית)."
    },
    {
        id: 4, level: "easy",
        question: "מה יהיה הפלט של הקוד הבא?",
        code: "bool isPassed = true;\nConsole.WriteLine(isPassed);",
        options: ["true", "True", "1", "false"],
        answer: 1, explanation: "ב-C#, הדפסת משתנה בוליאני מציגה את הערך עם אות ראשונה גדולה (True/False)."
    },
    {
        id: 5, level: "easy",
        question: "כיצד מגדירים תו בודד (char) ב-C#?",
        code: "char letter = 'A';",
        options: ["עם גרשיים כפולים (\"A\")", "עם גרש בודד ('A')", "ללא מירכאות כלל", "עם סוגריים מרובעים [A]"],
        answer: 1, explanation: "משתנה מטיפוס char מוגדר תמיד באמצעות גרש בודד ('')."
    },
    {
        id: 6, level: "easy",
        question: "מה יהיה הציון שיודפס?",
        code: "int grade1 = 80;\nint grade2 = 90;\nConsole.WriteLine(grade1 + grade2);",
        options: ["8090", "170", "grade1 + grade2", "80 90"],
        answer: 1, explanation: "כאשר מחברים שני משתנים מספריים (int), האופרטור + מבצע חיבור אריתמטי (80+90=170)."
    },
    {
        id: 7, level: "easy",
        question: "מה מחזירה הפעולה Console.ReadLine()?",
        code: "string input = Console.ReadLine();",
        options: ["ערך מספרי (int)", "מחרוזת (string)", "ערך בוליאני (bool)", "תו בודד (char)"],
        answer: 1, explanation: "הפקודה Console.ReadLine() קוראת תמיד את הקלט מהמשתמש כערך מטיפוס string."
    },
    {
        id: 8, level: "easy",
        question: "מה יהיה ערכו של X בסוף הקוד?",
        code: "int x = 5;\nx = 10;\nConsole.WriteLine(x);",
        options: ["5", "10", "15", "שגיאה"],
        answer: 1, explanation: "השמה חדשה לתוך משתנה דורסת את הערך הקודם שהיה שמור בו."
    },
    {
        id: 9, level: "easy",
        question: "מה תפלוט התוכנית הבאה?",
        code: "string str1 = \"Cyber\";\nstring str2 = \"Room\";\nConsole.WriteLine(str1 + str2);",
        options: ["Cyber Room", "CyberRoom", "Cyber+Room", "שגיאת קומפילציה"],
        answer: 1, explanation: "חיבור מחרוזות (+) משרשר אותן זו לזו ללא רווח אוטומטי ביניהן."
    },
    {
        id: 10, level: "easy",
        question: "מה יקרה בעת ניסיון להריץ את הקוד הבא?",
        code: "int x;\nConsole.WriteLine(x);",
        options: ["יודפס 0", "יודפס null", "שגיאת קומפילציה (Unassigned variable)", "שגיאת הרצה בזמן אמת"],
        answer: 2, explanation: "ב-C# לא ניתן להשתמש במשתנה מקומי שלא אותחל בערך ראשוני."
    },
    {
        id: 11, level: "easy",
        question: "מה מבצע התו המיוחד n\\ בתוך מחרוזת פלט?",
        code: "Console.WriteLine(\"Hello\\nWorld\");",
        options: ["מוסיף רווח כפול", "יורד שורה חדשה", "מדפיס את התו n", "מוחק את המילה הקודמת"],
        answer: 1, explanation: "התו n\\ הוא תו מילוט (Escape Character) שמייצג ירידת שורה."
    },
    {
        id: 12, level: "easy",
        question: "מה יהיה ערך המשתנה count?",
        code: "int count = 1;\ncount = count + 3;\nConsole.WriteLine(count);",
        options: ["1", "3", "4", "13"],
        answer: 2, explanation: "הביטוי מימין מחושב קודם (1+3=4) ואז התוצאה 4 מושמת בחזרה ל-count."
    },
    {
        id: 13, level: "easy",
        question: "איזה מהמשתנים הבאים מוגדר באופן תקין?",
        code: "// Declaration options:\n1) int x = \"5\";\n2) string s = 5;\n3) double d = 5;\n4) bool b = \"true\";",
        options: ["אפשרות 1", "אפשרות 2", "אפשרות 3", "אפשרות 4"],
        answer: 2, explanation: "משתנה מסוג double יכול לקבל ערך שלם (5) המומר באופן משתמע ל-5.0."
    },
    {
        id: 14, level: "easy",
        question: "מה תהיה התוצאה של ההדפסה הבאה?",
        code: "string age = \"20\";\nConsole.WriteLine(age + 5);",
        options: ["25", "205", "שגיאת קומפילציה", "20 5"],
        answer: 1, explanation: "כאשר מחברים string עם int, המספר מומר למחרוזת והתוצאה היא שרשור: \"205\"."
    },
    {
        id: 15, level: "easy",
        question: "מה הדפסת הקוד תציג?",
        code: "bool active = false;\nConsole.WriteLine(!active);",
        options: ["false", "True", "False", "true"],
        answer: 1, explanation: "האופרטור ! הופך ערך בוליאני. היפוך של false הוא true, והדפסתו מציגה True."
    },
    {
        id: 150, level: "easy",
        question: "מה הדפסת הקוד תציג?",
        code: "bool active = false;\nConsole.WriteLine(!active);",
        options: ["false", "True", "False", "true"],
        answer: 1, explanation: "האופרטור ! הופך ערך בוליאני. היפוך של false הוא true, והדפסתו מציגה True."
    },

    // ==================== MEDIUM (16-30) ====================
    {
        id: 16, level: "medium",//1
        question: "מה יהיה הפלט אם המשתמש יקליד 10?",
        code: "string input = Console.ReadLine();\nint num = int.Parse(input);\nConsole.WriteLine(num + 5);",
        options: ["105", "15", "10 5", "שגיאת קומפילציה"],
        answer: 1, explanation: "הפעולה int.Parse ממירה את המחרוזת \"10\" למספר שלם 10, ואז 10+5 דורש חיבור מספרי = 15."
    },
    {
        id: 17, level: "medium",//2
        question: "מה תהיה תוצאת החילוק בקוד הבא?",
        code: "int a = 7;\nint b = 2;\nConsole.WriteLine(a / b);",
        options: ["3.5", "3", "4", "3.0"],
        answer: 1, explanation: "חילוק בין שני שלמים (int / int) ב-C# מחזיר תוצאה שלמה (קיטום החלק העשרוני), ולכן התוצאה היא 3."
    },
    {
        id: 18, level: "medium",//3 
        question: "מה מחושב באמצעות האופרטור %?",
        code: "int result = 10 % 3;\nConsole.WriteLine(result);",
        options: ["1", "3", "3.33", "0"],
        answer: 0, explanation: "האופרטור % מחזיר את שארית החילוק השלם. 10 לחלק ל-3 זה 3 עם שארית 1."
    },
    {
        id: 19, level: "medium",//4
        question: "מה תהיה התוצאה של הקוד הבא?",
        code: "double x = 7 / 2;\nConsole.WriteLine(x);",
        options: ["3.5", "3", "3.0", "שגיאת קומפילציה"],
        answer: 1, explanation: "הביטוי 7/2 מחושב קודם כחילוק שלמים שתוצאתו 3, ואז המספר 3 מושם ל-double ונעשה 3."
    },
    {
        id: 20, level: "medium",//5
        question: "כיצד נשיג חילוק עשרוני מדויק מתוך שני שלמים?",
        code: "double x = 7.0 / 2;\nConsole.WriteLine(x);",
        options: ["3", "3.5", "3.0", "שגיאה"],
        answer: 1, explanation: "מכיוון שאחד האופרנדים הוא double (7.0), החילוק מבוצע כחילוק עשרוני והתוצאה היא 3.5."
    },
    {
        id: 21, level: "medium",//6 - didn't teach yet special operators - change q.
        question: "מה תדפיס התוכנית בסדר הפעולות הבא?",
        code: "int x = 5;\nConsole.WriteLine(x++);\nConsole.WriteLine(x);",
        options: ["5 ואז 5", "6 ואז 6", "5 ואז 6", "6 ואז 5"],
        answer: 2, explanation: "האופרטור x++ (פוסט-קידום) מדפיס קודם את ערכו הנוכחי של x (5) ורק לאחר מכן מגדיל אותו ל-6."
    },
    {
        id: 22, level: "medium",//7 - didn't teach yet special operators - change q.
        question: "מה יורד למסך בקוד הבא?",
        code: "int x = 5;\nConsole.WriteLine(++x);",
        options: ["5", "6", "51", "שגיאת קומפילציה"],
        answer: 1, explanation: "האופרטור ++x (פרה-קידום) מגדיל את x ל-6 עוד לפני הדפסת הערך לביטוי."
    },
    {
        id: 23, level: "medium",//8
        question: "מה ייפלט בשימוש ב-String Interpolation?",
        code: "string user = \"Dana\";\nint points = 50;\nConsole.WriteLine($\"User {user} has {points + 10} pts\");",
        options: ["User Dana has 50 + 10 pts", "User Dana has 60 pts", "User {user} has {points} pts", "שגיאה"],
        answer: 1, explanation: "הסימן $ מאפשר לשלב ביטויים בתוך סוגריים מסולסלים {}, המחושבים ומשורשרים למחרוזת."
    },
    {
        id: 24, level: "medium",//9
        question: "מה תהיה תוצאת המרת הטיפוס המפורשת (Casting)?",
        code: "double val = 9.85;\nint rounded = (int)val;\nConsole.WriteLine(rounded);",
        options: ["9.85", "10", "9", "0"],
        answer: 2, explanation: "המרה מפורשת מ-double ל-int מקצצת את החלק העשרוני (אינה מעגלת!) ולכן התוצאה היא 9."
    },
    {
        id: 25, level: "medium",//10 - didn't teach yet Convert.ToInt32(s)
        question: "איזו המרה בטוחה יותר להמרת מחרוזת למספר?",
        code: "string s = \"123\";\nint n = Convert.ToInt32(s);",
        options: ["Convert.ToInt32 מטפלת גם ב-null ללא שגיאה", "int.Parse מהירה יותר תמיד", "אין הבדל כלל", "שניהם מחזירים double"],
        answer: 0, explanation: "Convert.ToInt32(null) מחזירה 0, בעוד int.Parse(null) תזרוק חריגת ArgumentNullException."
    },
    {
        id: 26, level: "medium",//11 - didn't teach yet special operators - change q.
        question: "מה תהיה התוצאה בסוף הפעולות?",
        code: "int x = 10;\nx += 5;\nx *= 2;\nConsole.WriteLine(x);",
        options: ["30", "25", "20", "15"],
        answer: 0, explanation: "תחילה x+=5 מעלה ל-15. לאחר מכן x*=2 מכפיל ב-2 ונותן 30."
    },
    {
        id: 27, level: "medium",//12 - didn't teach yet ASCII table.
        question: "מה תדפיס המרת ה-char ל-int?",
        code: "char letter = 'A';\nConsole.WriteLine((int)letter);",
        options: ["A", "65", "1", "שגיאת הרצה"],
        answer: 1, explanation: "המרה של תו ל-int מחזירה את קוד ה-ASCII/Unicode שלו (הקוד של 'A' הוא 65)."
    },
    {
        id: 28, level: "medium",//13 - didn't teach yet special operators - change q.
        question: "מה יהיו הערכים של a ו-b?",
        code: "int a = 4;\nint b = a++;\nConsole.WriteLine($\"{a},{b}\");",
        options: ["4,4", "5,4", "5,5", "4,5"],
        answer: 1, explanation: "הערך המקורי של a (4) מושם ל-b, ולאחר מכן a מוגדל ל-5. הפלט: 5,4."
    },
    {
        id: 29, level: "medium",//14 - didn't teach yet.??
        question: "איך מעגלים פלט מספרי לשתי ספרות אחרי הנקודה?",
        code: "double num = 12.3456;\nConsole.WriteLine($\"{num:F2}\");",
        options: ["12.34", "12.35", "12.3", "12"],
        answer: 1, explanation: "הפורמט F2 מעגל את המספר העשרוני בדיוק ל-2 ספרות לאחר הנקודה (12.35)."
    },
    {
        id: 30, level: "medium",
        question: "מה יקרה בהרצת הקוד הבא?",
        code: "string s = \"50\";\ndouble res = double.Parse(s) / 2;\nConsole.WriteLine(res);",
        options: ["25", "25.0", "502", "שגיאת קומפילציה"],
        answer: 0, explanation: "double.Parse ממירה את \"50\" ל-50.0. חילוק ב-2 נותן 25 (המוצג כ-25)."
    },

    // ==================== HARD (31-45) ====================
    {
        id: 31, level: "hard",//1 - didn't teach yet special operators - change q.
        question: "מה יהיה הפלט המדויק של קטע קוד מורכב זה?",
        code: "int x = 5;\nint y = x++ + ++x;\nConsole.WriteLine(y);",
        options: ["11", "12", "10", "13"],
        answer: 1, explanation: "x++ מחזיר 5 (x הופך ל-6). אופרנד ימין ++x מעלה את x ל-7 ומחזיר 7. התוצאה: 5 + 7 = 12."
    },
    {
        id: 32, level: "hard",//2 - didn't teach yet special operators + ASCII table - change q.
        question: "מה יקרה כשתקדם תו (char) ב-1?",
        code: "char ch = 'A';\nch++;\nConsole.WriteLine(ch);",
        options: ["A1", "66", "B", "שגיאת קומפילציה"],
        answer: 2, explanation: "קידום char ב-1 מקדם אותו לתו הבא בטבלת ה-ASCII, ולכן 'A' הופך ל-'B'."
    },
    {
        id: 33, level: "hard",//3 - didn't teach yet special operators - change q.
        question: "מה תהיה התוצאה של המרת טיפוס באמצע חישוב?",
        code: "int a = 10, b = 4;\ndouble res = (double)a / b;\nConsole.WriteLine(res);",
        options: ["2", "2.5", "2.0", "שגיאה"],
        answer: 1, explanation: "המרת a ל-double מתרחשת לפני החילוק, מה שהופך את כל הפעולה לחילוק עשרוני: 10.0 / 4 = 2.5."
    },
    {
        id: 34, level: "hard",//4 - didn't teach yet.
        question: "מה יקרה בזמן גלישת ערכים (Overflow) ללא בדיקה?",
        code: "int max = int.MaxValue;\nmax++;\nConsole.WriteLine(max);",
        options: ["2147483647", "שגיאת הרצה (OverflowException)", "-2147483648", "0"],
        answer: 2, explanation: "בהעדר בלוק checked, גלישת מספר שלם ב-C# עוברת לצד השני של התחום (Int32.MinValue)."
    },
    {
        id: 35, level: "hard",//5
        question: "איך מדפיסים מחרוזת המכילה מירכאות כפולות בתוכה?",
        code: "string text = \"He said \\\"Hello\\\"\";\nConsole.WriteLine(text);",
        options: ["He said \"Hello\"", "He said \\\"Hello\\\"", "He said Hello", "שגיאת קומפילציה"],
        answer: 0, explanation: "תו המילוט \\\" מאפשר להכניס תו מירכאות כחלק מתוכן המחרוזת."
    },
    {
        id: 36, level: "hard",//6
        question: "מה יהיה הפלט של ביטוי מורכב בתוך Interpolation?",
        code: "int a = 3;\nConsole.WriteLine($\"Result: {a + 2 * 4}\");",
        options: ["Result: 20", "Result: 11", "Result: 3+2*4", "שגיאה"],
        answer: 1, explanation: "קודם מבוצעת הכפלה (2*4=8) ואז חיבור (3+8=11). המילוי מושתל ישירות לתוך הפלט."
    },
    {
        id: 37, level: "hard",//7
        question: "מה מבצע קטע הקוד הבא על המשתנים a ו-b?",
        code: "int a = 5, b = 10;\na = a + b;\nb = a - b;\na = a - b;\nConsole.WriteLine($\"{a},{b}\");",
        options: ["5,10", "10,5", "15,10", "0,0"],
        answer: 1, explanation: "זהו אלגוריתם קלאסי להחלפת ערכים (Swap) בין שני משתנים מספריים ללא משתנה עזר."
    },
    {
        id: 38, level: "hard",//8 - didn't teach yet ASCII table - change q.
        question: "איך ממירים תו מספרי ('0'-'9') לערכו המספרי השלם?",
        code: "char digit = '7';\nint val = digit - '0';\nConsole.WriteLine(val);",
        options: ["55", "7", "0", "שגיאה"],
        answer: 1, explanation: "חיסור קוד ה-ASCII של התו '0' מקוד התו '7' מחזיר בדיוק את ההפרש המספרי השלם 7."
    },
    {
        id: 39, level: "hard",//9 -????
        question: "מה תהיה התוצאה של השוואת שברי נקודה צפה (Floating Point)?",
        code: "double d = 0.1 + 0.2;\nConsole.WriteLine(d == 0.3);",
        options: ["True", "False", "שגיאת קומפילציה", "null"],
        answer: 1, explanation: "אי-דיוק בייצוג בינארי של שברים עשרוניים גורם ל-0.1+0.2 להיות 0.30000000000000004, ולכן השוואה הישירה מחזירה False."
    },
    {
        id: 40, level: "hard",//10 - didn't teach yet conditions and this syntax is not allowed in school
        question: "מה יפלט בשימוש באופרטור התנאי הטרינרי?",
        code: "int x = 12;\nstring res = x % 2 == 0 ? \"Even\" : \"Odd\";\nConsole.WriteLine(res);",
        options: ["Even", "Odd", "True", "12"],
        answer: 0, explanation: "12%2 שווה 0 (שארית 0), התנאי מתקיים והחלק הראשון נבחר (\"Even\")."
    },
    {
        id: 41, level: "hard",//11 - didn't teach yet.
        question: "מה מחזיר אופרטור הזזת הביטים (Bitwise Shift)?",
        code: "int x = 8;\nConsole.WriteLine(x >> 1);",
        options: ["16", "4", "8", "1"],
        answer: 1, explanation: "הזזת ביטים ימינה ב-1 שקולה לחילוק שלם ב-2, ולכן התוצאה היא 4."
    },
    {
        id: 42, level: "hard",//12 - didn't teach yet.
        question: "מה תדפיס הגישה עם Null-Conditional והאופרטור ??",
        code: "string str = null;\nConsole.WriteLine(str?.Length ?? 0);",
        options: ["NullReferenceException", "null", "0", "-1"],
        answer: 2, explanation: "מכיוון ש-str הוא null, הביטוי str?.Length מחזיר null. האופרטור ?? מחליף את ה-null בערך ברירת המחדל 0."
    },
    {
        id: 43, level: "hard",//13 - didn't teach yet.
        question: "מה יקרה כאשר נשלב השמה תוך כדי חישוב?",
        code: "int x = 2;\nx *= x + 3;\nConsole.WriteLine(x);",
        options: ["7", "10", "8", "5"],
        answer: 1, explanation: "הביטוי x *= x + 3 שקול ל: x = x * (x + 3), כלומר 2 * (2 + 3) = 10."
    },
    {
        id: 44, level: "hard",//14 - \n is not really displayed in the answer.
        question: "מה תהיה התוצאה של שילוב תווי מילוט בודדים?",
        code: "Console.Write(\"A\\tB\\nC\");",
        options: ["A B C", "A    B\nC", "AB\nC", "שגיאה"],
        answer: 1, explanation: "t\\ מייצר רווח TAB בין A ל-B, ו-n\\ מוריד את ההדפסה של C לשורה חדשה."
    },
    {
        id: 45, level: "hard",//15 
        question: "מה תהיה תוצאת חישוב סדר הקדימויות המורכב הבא?",
        code: "int a = 2, b = 3;\nstring result = \"Ans: \" + a + b * 2;\nConsole.WriteLine(result);",
        options: ["Ans: 10", "Ans: 26", "Ans: 8", "Ans: 23"],
        answer: 1, explanation: "הכפל b*2 מבוצע קודם ל-6. לאחר מכן השרשור משמאל לימין: \"Ans: \" + 2 = \"Ans: 2\", ואז + 6 מחבר מחרוזות = \"Ans: 26\"."
    }
];