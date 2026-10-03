// ==================== Input/Output Variables Questions ====================
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
        question: "איזה מבין הטיפוסים הבאים מתאים לאחסון מספר שלם בלבד?",
        code: "",
        options: ["double", "string", "int", "char"],
        answer: 2, explanation: "הטיפוס int משמש לייצוג מספרים שלמים ב-C#."
    },
    // 4
    {
        id: 4, level: "easy",
        question: "מה יהיה ערכו של המשתנה x לאחר ביצוע קטע הקוד הבא?",
        code: "int x = 10;\nx = x + 5;",
        options: ["10", "5", "15", "שגיאת קומפילציה"],
        answer: 2, explanation: "הביטוי x + 5 מחושב תחילה (10 + 5 = 15) והערך החדש 15 נשמר בחזרה בתוך המשתנה x."
    },
    // 5
    {
        id: 5, level: "easy",
        question: "מה מתרחש בעת ביצוע הפקודה Console.ReadLine()?",
        code: "string input = Console.ReadLine();",
        options: ["התכנית מדפיסה מחרוזת למסך", "התכנית ממתינה לקלט מהמשתמש ומחזירה אותו כערך מטיפוס string", "התכנית המירה קלט למספר שלם", "התכנית סוגרת את חלון ההרצה"],
        answer: 1, explanation: "Console.ReadLine ממתינה שהמשתמש יקליד קלט ויקיש Enter, ומחזירה את הטקסט שנקלט כטיפוס string."
    },
    // 6
    {
        id: 6, level: "easy",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 3;\nint b = 4;\nConsole.WriteLine(a + b);",
        options: ["a + b", "34", "7", "12"],
        answer: 2, explanation: "הביטוי a + b מחושב כחיבור מתמטי (3 + 4 = 7) והתוצאה 7 מודפסת למסך."
    },
    // 7
    {
        id: 7, level: "easy",
        question: "איזה טיפוס משתנה מתאים לאחסון תו בודד (כגון 'A' או '!')?",
        code: "",
        options: ["string", "char", "int", "bool"],
        answer: 1, explanation: "הטיפוס char מיועד לאחסון תו בודד ונכתב בתוך גרשיים בודדים (' ')."
    },
    // 8
    {
        id: 8, level: "easy",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "Console.WriteLine(\"5 + 3\");",
        options: ["8", "53", "5 + 3", "שגיאת קומפילציה"],
        answer: 2, explanation: "טקסט שנמצא בתוך גרשיים כפולים נחשב למחרוזת (literal) ולכן מודפס כפי שהוא בדיוק, ללא חישוב מתמטי."
    },
    // 9
    {
        id: 9, level: "easy",
        question: "כיצד ממירים קלט מטיפוס string למספר שלם מטיפוס int?",
        code: "",
        options: ["(int)Console.ReadLine()", "int.Parse(Console.ReadLine())", "Console.ReadLine().ToInt()", "Convert.StringToInt(Console.ReadLine())"],
        answer: 1, explanation: "המתודה int.Parse מקבלת מחרוזת וממירה אותה למספר שלם מטיפוס int."
    },
    // 10
    {
        id: 10, level: "easy",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 20;\nConsole.WriteLine(\"x = \" + x);",
        options: ["20", "x = x", "x = 20", "x = 20 בשתי שורות"],
        answer: 2, explanation: "שרשור מחרוזות באמצעות האופרטור + מחבר את המחרוזת \"x = \" עם הערך של x (20), ומתקבל הפלט \"x = 20\"."
    },
    // 11
    {
        id: 11, level: "easy",
        question: "איזו מההצהרות הבאות על משתנים ב-C# היא נכונה?",
        code: "",
        options: ["מותר להשתמש במשתנה לפני שמצהירים על הטיפוס שלו", "חובה להצהיר על טיפוס המשתנה לפני השימוש בו", "שם משתנה יכול להתחיל במספר (כגון 1num)", "שמות משתנים ב-C# אינם רגישים לאותיות גדולות/קטנות (case-insensitive)"],
        answer: 1, explanation: "C# היא שפה בעלת טיפוס חזק (strongly typed), ולכן חובה להצהיר על המשתנה ועל הטיפוס שלו לפני השימוש בו."
    },
    // 12
    {
        id: 12, level: "easy",
        question: "מה יהיה ערכו של המשתנה y לאחר הרצת הקוד הבא?",
        code: "double y = 5.5;\ny = y * 2;",
        options: ["5.52", "11", "11.0", "10.0"],
        answer: 2, explanation: "המכפלה של 5.5 ב-2 היא 11.0, והערך נשמר במשתנה מטיפוס double."
    },
    // 13
    {
        id: 13, level: "easy",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "Console.WriteLine(\"Hello\");\nConsole.WriteLine(\"World\");",
        options: ["HelloWorld", "Hello World", "Hello בשורה הראשונה ו-World בשורה השנייה", "שגיאת קומפילציה"],
        answer: 2, explanation: "המתודה Console.WriteLine מדפיסה את הטקסט ויורדת שורה, ולכן World תודפס בשורה נפרדת מתחת ל-Hello."
    },
    // 14
    {
        id: 14, level: "easy",
        question: "איזה מבין שמות המשתנים הבאים הוא שם חוקי ב-C#?",
        code: "",
        options: ["student Age", "2ndPlace", "student_age", "class"],
        answer: 2, explanation: "שם משתנה חוקי ב-C# יכול להכיל אותיות, מספרים ומקף תחתון, אינו יכול להתחיל במספר, אינו מכיל רווחים ואינו מילה שמורה (כמו class)."
    },
    // 15
    {
        id: 15, level: "easy",
        question: "מה יהיה ערכו של המשתנה isActive לאחר קטע הקוד הבא?",
        code: "bool isActive = true;",
        options: ["\"true\"", "1", "true", "שגיאת קומפילציה"],
        answer: 2, explanation: "משתנה מטיפוס bool (בוליאני) מקבל ערך אמת/שקר בוליאני: true או false (ללא גרשיים)."
    },

    // ==================== MEDIUM (16-30) ====================
    // 16
    {
        id: 16, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 7;\nint b = 2;\nConsole.WriteLine(a / b);",
        options: ["3.5", "3", "3.0", "4"],
        answer: 1, explanation: "חלוקה בין שני מספרים שלמים (int / int) מבצעת חלוקה שלמה, ולכן החלק השברי נחתך והתוצאה היא 3."
    },
    // 17
    {
        id: 17, level: "medium",
        question: "מה יהיה ערכו של המשתנה remainder לאחר הקוד הבא?",
        code: "int remainder = 17 % 5;",
        options: ["3", "3.4", "2", "1"],
        answer: 2, explanation: "האופרטור % מחזיר את שארית החלוקה. 17 לחלק ל-5 זה 3 עם שארית 2, ולכן התוצאה היא 2."
    },
    // 18
    {
        id: 18, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 5;\nint y = 10;\nConsole.WriteLine(\"Result: \" + x + y);",
        options: ["Result: 15", "Result: 510", "Result: 50", "שגיאת קומפילציה"],
        answer: 1, explanation: "מכיוון שהאופרטור + מחושב משמאל לימין, תחילה משורשרת המחרוזת עם x לקבלת \"Result: 5\", ואז משורשר y לקבלת \"Result: 510\"."
    },
    // 19
    {
        id: 19, level: "medium",
        question: "איך ניתן לקבל תוצאה מדויקת כולל חלק שברי (3.5) עבור חלוקה בין 7 ל-2?",
        code: "int a = 7;\nint b = 2;",
        options: ["double res = a / b;", "double res = (double)a / b;", "int res = (double)(a / b);", "double res = (int)a / (int)b;"],
        answer: 1, explanation: "המרה מפורשת (casting) של אחד האופרנדים ל-double גורמת לביצוע חלוקה ממשית (double division) במקום חלוקה שלמה."
    },
    // 20
    {
        id: 20, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int num1 = 4;\nint num2 = 6;\nConsole.WriteLine(\"Sum = \" + (num1 + num2));",
        options: ["Sum = 46", "Sum = 10", "Sum = 4 + 6", "שגיאת קומפילציה"],
        answer: 1, explanation: "סוגריים משנים את קדימות האופרטורים: החיבור המתמטי (num1 + num2) מחושב ראשון (10), ורק לאחר מכן מבוצע השרשור למחרוזת."
    },
    // 21
    {
        id: 21, level: "medium",
        question: "מה מטרת קטע הקוד הבא (בהנחה ש-a ו-b הם משתנים מטיפוס int)?",
        code: "int temp = a;\na = b;\nb = temp;",
        options: ["איפוס הערכים של a ו-b", "חישוב הממוצע של a ו-b", "החלפת הערכים בין המשתנים a ו-b", "בדיקה האם a שווה ל-b"],
        answer: 2, explanation: "שימוש במשתנה עזר (temp) מאפשר לשמור את ערכו המקורי של a לפני שדורסים אותו בערכו של b, ובכך לבצע החלפת ערכים (swap) מוצלחת."
    },
    // 22
    {
        id: 22, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "double price = double.Parse(\"12.5\");\nConsole.WriteLine(price * 2);",
        options: ["25", "25.0", "12.52", "שגיאת בזמן הרצה"],
        answer: 0, explanation: "המתודה double.Parse ממירה את המחרוזת \"12.5\" לערך נומרי 12.5, והכפלה ב-2 מניבה 25."
    },
    // 23
    {
        id: 23, level: "medium",
        question: "מה יקרה אם המשתמש יקליד \"abc\" בעת ביצוע קטע הקוד הבא?",
        code: "int age = int.Parse(Console.ReadLine());",
        options: ["המשתנה age יקבל את הערך 0", "תתרחש שגיאת בזמן הרצה (Exception)", "הקוד לא יעבור קומפילציה", "התוכנית תתעלם מהקלט ותמשיך"],
        answer: 1, explanation: "המתודה int.Parse אינה יכולה להמיר אותיות למספר שלם, ולכן תיזרק שגיאת בזמן הרצה (FormatException)."
    },
    // 24
    {
        id: 24, level: "medium",
        question: "מה יהיה ערכו של המשתנה x בסוף קטע הקוד הבא?",
        code: "int x = 10;\nx += 5;\nx *= 2;",
        options: ["20", "30", "25", "15"],
        answer: 1, explanation: "תחילה x += 5 מעדכן את x ל-15 (10 + 5). לאחר מכן x *= 2 מכפיל את 15 ב-2 לקבלת 30."
    },
    // 25
    {
        id: 25, level: "medium",
        question: "מה תדפיס התוכנית למסך?",
        code: "char ch = 'A';\nConsole.WriteLine(ch);\nConsole.WriteLine((int)ch);",
        options: ["A בשורה הראשונה ו-A בשורה השנייה", "A בשורה הראשונה והערך הנומרי ה-ASCII של 'A' (65) בשורה השנייה", "65 בשתי השורות", "שגיאת קומפילציה בעת המרה ל-int"],
        answer: 1, explanation: "הדפסת char מציגה את התו 'A'. המרה מפורשת (int)ch ממירה את התו לערכו המספרי בטבלת ASCII (שהוא 65)."
    },
    // 26
    {
        id: 26, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int p = 8;\nint q = 3;\nConsole.WriteLine(p + \" % \" + q + \" = \" + (p % q));",
        options: ["8 % 3 = 2", "8 % 3 = 2.66", "11 = 2", "8 % 3 = 0"],
        answer: 0, explanation: "הביטוי משרשר את ערכי p ו-q עם המחרוזות, כאשר 8 % 3 שווה 2 (שארית החלוקה), ולכן הפלט הוא \"8 % 3 = 2\"."
    },
    // 27
    {
        id: 27, level: "medium",
        question: "מה יהיה ערכו של המשתנה result?",
        code: "int result = 2 + 3 * 4;",
        options: ["20", "14", "24", "10"],
        answer: 1, explanation: "לפי קדימות אופרטורים חשבוניים, אופרטור הכפל (*) קודם לאופרטור החיבור (+). לכן 3 * 4 = 12, ו-12 + 2 = 14."
    },
    // 28
    {
        id: 28, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "string s1 = \"10\";\nstring s2 = \"20\";\nConsole.WriteLine(s1 + s2);",
        options: ["30", "1020", "10 20", "שגיאת קומפילציה"],
        answer: 1, explanation: "האופרטור + בין שתי מחרוזות מבצע שרשור (concatenation) ולא חיבור מתמטי, ולכן התוצאה היא \"1020\"."
    },
    // 29
    {
        id: 29, level: "medium",
        question: "איזו שגיאה קיימת בקטע הקוד הבא?",
        code: "const int MAX = 100;\nMAX = 200;",
        options: ["אין שגיאה בקוד", "שגיאת קומפילציה: לא ניתן לשנות ערך של קבוע (const)", "שגיאת הרצה בזמן שינוי הערך", "המשתנה MAX חייב להיות מטיפוס double"],
        answer: 1, explanation: "משתנה שהוגדר כ-const הוא קבוע שלא ניתן לשנות את ערכו לאחר ההצהרה והאתחול שלו."
    },
    // 30
    {
        id: 30, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 5;\nConsole.WriteLine(x++);\nConsole.WriteLine(x);",
        options: ["5 בשורה הראשונה ו-6 בשורה השנייה", "6 בשורה הראשונה ו-6 בשורה השנייה", "5 בשורה הראשונה ו-5 בשורה השנייה", "6 בשורה הראשונה ו-5 בשורה השנייה"],
        answer: 0, explanation: "אופרטור הקידום הפוסט-פיקסי (x++) מחזיר את ערכו המקורי של x (5) להדפסה, ורק לאחר מכן מקדם את x ל-6."
    },

    // ==================== HARD (31-45) ====================
    // 31
    {
        id: 31, level: "hard",
        question: "בצע מעקב אחר ערכי המשתנים. מה יהיה הפלט בסוף התוכנית?",
        code: "int a = 10;\nint b = 4;\na = a - b;\nb = a + b;\na = b - a;\nConsole.WriteLine(\"a=\" + a + \", b=\" + b);",
        options: ["a=10, b=4", "a=4, b=10", "a=6, b=10", "a=0, b=14"],
        answer: 1, explanation: "תחילה a=6 (10-4). לאחר מכן b=10 (6+4). לבסוף a=4 (10-6). קוד זה מבצע החלפת ערכים (swap) ללא משתנה עזר."
    },
    // 32
    {
        id: 32, level: "hard",
        question: "מה יהיה ערכו של המשתנה val לאחר קטע הקוד הבא?",
        code: "double val = (double)(15 / 2) + 1.5;",
        options: ["9.0", "8.5", "8.0", "7.5"],
        answer: 1, explanation: "הביטוי בסוגריים (15 / 2) מחושב קודם כחלוקה שלמה ונותן 7. הציטוט המפורש (double)7 נותן 7.0. בתוספת 1.5 התוצאה היא 8.5."
    },
    // 33
    {
        id: 33, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 12;\nint y = 5;\nint z = x % y * 3;\nConsole.WriteLine(z);",
        options: ["0", "6", "2", "1.2"],
        answer: 1, explanation: "לאופרטורים % ו-* יש אותה קדימות, והם מחושבים משמאל לימין: 12 % 5 שווה 2, ולאחר מכן 2 * 3 שווה 6."
    },
    // 34
    {
        id: 34, level: "hard",
        question: "מה יקרה בעת קומפילציה והרצה של קטע הקוד הבא?",
        code: "int n = 10;\ndouble d = n;\nint k = d;",
        options: ["הקוד יעבור קומפילציה ויפעל ללא שגיאות", "שגיאת קומפילציה בשורה int k = d כיוון שנדרשת המרה מפורשת (casting)", "שגיאת קומפילציה בשורה double d = n", "שגיאת בזמן הרצה בשורה השלישית"],
        answer: 1, explanation: "המרה מ-int ל-double היא המרה מורחבת (implicit), אך המרה מ-double ל-int היא המרה מוצרת שעלולה לאבד מידע, ולכן C# דורשת המרה מפורשת (int)d."
    },
    // 35
    {
        id: 35, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "Console.WriteLine(\"Line1\\nLine2\\tTabbed\");",
        options: ["Line1\\nLine2\\tTabbed כטקסט אחד", "Line1 בשורה הראשונה, ובלחיצה על Tab המילה Tabbed בשורה השנייה", "Line1 בשורה הראשונה, ובשורה השנייה Line2 ואז מרווח טאב והמילה Tabbed", "שגיאת קומפילציה בגלל התווים המיוחדים"],
        answer: 2, explanation: "התו n\\ מייצג ירידת שורה (newline) והתו t\\ מייצג מרווח טאב (tabulation)."
    },
    // 36
    {
        id: 36, level: "hard",
        question: "מה יהיה ערכו של המשתנה total בסוף קטע הקוד הבא?",
        code: "int total = 100;\nint count = 8;\ntotal /= count;",
        options: ["12.5", "12", "13", "12.0"],
        answer: 1, explanation: "האופרטור /= מבצע חלוקה והשמה. מכיוון שניהם int, מבוצעת חלוקה שלמה 100 / 8 = 12 שנשמרת ב-total."
    },
    // 37
    {
        id: 37, level: "hard",
        question: "מה תדפיס התוכנית למסך?",
        code: "int num = 3;\nnum = num + num * num;\nConsole.WriteLine(num);",
        options: ["18", "12", "36", "9"],
        answer: 1, explanation: "הכפל num * num מחושב תחילה (3 * 3 = 9). לאחר מכן מוסיפים את num (3 + 9 = 12), והערך 12 נשמר ב-num."
    },
    // 38
    {
        id: 38, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "char letter = 'A';\nletter++;\nConsole.WriteLine(letter);",
        options: ["A", "B", "66", "שגיאת קומפילציה"],
        answer: 1, explanation: "קידום משתנה מטיפוס char באמצעות ++ מעלה את ערך ה-ASCII שלו ב-1 ('A' שהוא 65 הופך ל-66, שהוא התו 'B')."
    },
    // 39
    {
        id: 39, level: "hard",
        question: "מה יהיה ערכו של המשתנה answer בסוף הקוד?",
        code: "double x = 10.8;\nint y = (int)x;\ndouble answer = x - y;",
        options: ["0.8", "0.0", "10.0", "0.8000000000000007 (או בקירוב 0.8)"],
        answer: 3, explanation: "ההמרה (int)x קוטמת את החלק השברי ונותנת y = 10. החיסור 10.8 - 10 נותן 0.8 (בחישוב נקודה צפה ב-C# מתקבל דיוק נקודה צפה זעיר בקירוב ל-0.8)."
    },
    // 40
    {
        id: 40, level: "hard",
        question: "נתון הקוד הבא המחשב ספרת אחדות ועשרות של מספר דו-ספרתי num. מה צריכים להיות הביטויים ב-X וב-Y?",
        code: "int num = 47;\nint units = X;\nint tens = Y;",
        options: ["X = num / 10; Y = num % 10;", "X = num % 10; Y = num / 10;", "X = num * 10; Y = num - 10;", "X = num % 100; Y = num / 100;"],
        answer: 1, explanation: "שארית החלוקה ב-10 (num % 10) מבודדת את ספרת האחדות (7), וחלוקה שלמה ב-10 (num / 10) מבודדת את ספרת העשרות (4)."
    },
    // 41
    {
        id: 41, level: "hard",
        question: "מה תהיה תוצאת ביצוע הקוד הבא?",
        code: "int a = 5;\nint b = 2;\ndouble avg = (a + b) / 2;\nConsole.WriteLine(avg);",
        options: ["3.5", "3.0", "3", "3.50"],
        answer: 1, explanation: "הסוגריים (a + b) נותנים 7 (int). החלוקה ב-2 (int) היא חלוקה שלמה שנותנת 3 (int). השמה ל-double המירה את 3 ל-3.0, ולכן הפלט הוא 3."
    },
    // 42
    {
        id: 42, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 1;\nx = x++ + ++x;\nConsole.WriteLine(x);",
        options: ["3", "4", "5", "תוצאה לא מוגדרת / שגיאה בשימוש כפול"],
        answer: 1, explanation: "x++ מניב 1 (ומקדם את x ל-2). ++x מקדם את x ל-3 ומניב 3. סכום הביטויים 1 + 3 = 4 ונשמר ב-x."
    },
    // 43
    {
        id: 43, level: "hard",
        question: "מה תהיה תוצאת ההרצה של הקוד הבא?",
        code: "string a = \"5\";\nint b = 3;\nConsole.WriteLine(a + b * 2);",
        options: ["16", "56", "532", "שגיאת קומפילציה"],
        answer: 1, explanation: "הכפל b * 2 מבוצע קודם לפי קדימות אופרטורים (3 * 2 = 6). לאחר מכן משורשרת המחרוזת \"5\" עם 6 לקבלת המחרוזת \"56\"."
    },
    // 44
    {
        id: 44, level: "hard",
        question: "מה מהבאים מתאר נכונה את ההבדל בין Console.Read() ל-Console.ReadLine()?",
        code: "",
        options: ["Console.Read קורא שורה שלמה, ו-Console.ReadLine קורא תו בודד", "Console.Read מחזיר את ערך ה-ASCII של התו הבא כ-int, בעוד Console.ReadLine מחזיר string", "אין שום הבדל ביניהן", "Console.Read עובד רק עם מספרים שלמים"],
        answer: 1, explanation: "Console.Read קורא את התו הבא מזרם הקלט ומחזיר את ייצוג ה-ASCII שלו כמספר שלם (int), בעוד Console.ReadLine קורא שורת טקסט שלמה ומחזיר string."
    },
    // 45
    {
        id: 45, level: "hard",
        question: "מה תהיה תוצאת ההרצה של הקוד הבא?",
        code: "int a = 15;\nint b = 6;\nConsole.WriteLine(\"{0} / {1} = {2}\", a, b, (double)a / b);",
        options: ["15 / 6 = 2.5", "{0} / {1} = {2}", "15 / 6 = 2", "שגיאת הרצה בזמן עיצוב המחרוזת"],
        answer: 0, explanation: "שימוש ב-string formatting ({0}, {1}, {2}) מחליף את המציינים בערכי הפרמטרים: a (15), b (6), והתוצאה הממשית (double)a / b שווה 2.5."
    }
];

