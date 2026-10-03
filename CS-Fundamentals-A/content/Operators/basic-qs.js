// Register the -qs bank on window so App.js can load it by its configured key.
window.allAssignmentAndOperatorsQuestions = [
    // ==================== EASY (1-15) ====================
    // 1
    {
        id: 1, level: "easy",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 10;\nint b = 20;\nConsole.WriteLine(a + b);",
        options: ["a + b", "1020", "30", "שגיאת קומפילציה"],
        answer: 2, explanation: "חיבור בין שני משתנים מטיפוס int מבצע פעולת חיבור חשבונית (10 + 20 = 30)."
    },
    // 2
    {
        id: 2, level: "easy",
        question: "מה מחשב אופרטור המודולו (%) ב-C#?",
        code: "",
        options: ["את אחוז המספר", "את שארית החלוקה השלמה בין שני מספרים", "את החלק השברי של חלוקה", "את החלק השלם של החלוקה"],
        answer: 1, explanation: "אופרטור המודולו (%) מחזיר את שארית החלוקה השלמה (למשל 10 % 3 מחזיר 1)."
    },
    // 3
    {
        id: 3, level: "easy",
        question: "מה יהיה ערכו של המשתנה res לאחר קטע הקוד הבא?",
        code: "int res = 10 / 4;",
        options: ["2.5", "2", "3", "2.0"],
        answer: 1, explanation: "חלוקה בין שני מספרים שלמים (int / int) היא חלוקה שלמה, ולכן החלק השברי נקטם והתוצאה היא 2."
    },
    // 4
    {
        id: 4, level: "easy",
        question: "מה יהיה ערכו של המשתנה remainder בסוף קטע הקוד?",
        code: "int remainder = 10 % 3;",
        options: ["3", "1", "0", "3.33"],
        answer: 1, explanation: "10 לחלק ל-3 זה 3 עם שארית 1, ולכן אופרטור המודולו מחזיר 1."
    },
    // 5
    {
        id: 5, level: "easy",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int x = 15;\nint y = 7;\nConsole.WriteLine(x - y);",
        options: ["8", "157", "x - y", "-8"],
        answer: 0, explanation: "מבוצע חיסור חשבוני פשוט: 15 - 7 = 8."
    },
    // 6
    {
        id: 6, level: "easy",
        question: "מה תהיה תוצאת הביטוי 12 % 4?",
        code: "",
        options: ["3", "0", "1", "4"],
        answer: 1, explanation: "מכיוון ש-12 מתחלק ב-4 ללא שארית, שארית החלוקה היא 0."
    },
    // 7
    {
        id: 7, level: "easy",
        question: "מה מטרת אופרטור ההשמה (=) ב-C#?",
        code: "int num = 5;",
        options: ["לבדוק האם המשתנה num שווה ל-5", "לאחסן את הערך 5 בתוך המשתנה num", "להשוות בין שני אגפים", "להדפיס 5 למסך"],
        answer: 1, explanation: "אופרטור ההשמה (=) מעתיק את הערך שבאגף ימין לתוך המשתנה שבאגף שמאל."
    },
    // 8
    {
        id: 8, level: "easy",
        question: "מה יהיה ערכו של ans לאחר ביצוע הקוד הבא?",
        code: "int ans = (2 + 3) * 4;",
        options: ["14", "20", "24", "10"],
        answer: 1, explanation: "סוגריים קודמים לכפל: תחילה מחושב החיבור (2 + 3 = 5), ואז הכפל ב-4 (5 * 4 = 20)."
    },
    // 9
    {
        id: 9, level: "easy",
        question: "מה יהיה ערכו של המשתנה x בעת בדיקת זוגיות באמצעות 7 % 2?",
        code: "int x = 7 % 2;",
        options: ["3", "3.5", "1", "0"],
        answer: 2, explanation: "שארית החלוקה של 7 ב-2 היא 1, מה שמעיד על כך ש-7 הוא מספר אי-זוגי."
    },
    // 10
    {
        id: 10, level: "easy",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "double d = 10.0 / 4.0;\nConsole.WriteLine(d);",
        options: ["2", "2.5", "2.0", "שגיאת קומפילציה"],
        answer: 1, explanation: "חלוקה בין טיפוסים מ ממשיים (double / double) מבצעת חלוקה ממשית מדויקת המניבה 2.5."
    },
    // 11
    {
        id: 11, level: "easy",
        question: "מה מיועד לבצע האופרטור * ב-C#?",
        code: "",
        options: ["חזקה", "כפל חשבוני", "שרשור מחרוזות", "חלוקה שלמה"],
        answer: 1, explanation: "התו * משמש כאופרטור הכפל החשבוני ב-C#."
    },
    // 12
    {
        id: 12, level: "easy",
        question: "מה יהיה ערכו של a בסוף קטע הקוד?",
        code: "int a = 5;\na = 10;\nConsole.WriteLine(a);",
        options: ["5", "10", "15", "510"],
        answer: 1, explanation: "פעולת ההשמה השנייה (a = 10) דורסת את הערך הקודם 5 ואוגרת 10 בתוך המשתנה."
    },
    // 13
    {
        id: 13, level: "easy",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "Console.WriteLine(\"Sum: \" + 5 + 5);",
        options: ["Sum: 10", "Sum: 55", "Sum: 5 + 5", "שגיאת קומפילציה"],
        answer: 1, explanation: "החיבור מבוצע משמאל לימין: המחרוזת משורשרת תחילה עם 5 הראשונה (\"Sum: 5\") ואז עם 5 השנייה (\"Sum: 55\")."
    },
    // 14
    {
        id: 14, level: "easy",
        question: "מה תהיה תוצאת החלוקה השלמה 7 / 2 ב-C#?",
        code: "",
        options: ["3.5", "3", "4", "3.0"],
        answer: 1, explanation: "בחלוקה שלמה של שני מספרים שלמים, החלק השברי נקטם והתוצאה היא 3."
    },
    // 15
    {
        id: 15, level: "easy",
        question: "איזה אופרטור משמש לחישוב סכום ב-C#?",
        code: "",
        options: ["&amp;", "+", "=", "sum"],
        answer: 1, explanation: "האופרטור + משמש לחיבור מספרים ב-C# (וכן לשרשור מחרוזות)."
    },

    // ==================== MEDIUM (16-30) ====================
    // 16
    {
        id: 16, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 3;\nint b = 10;\nConsole.WriteLine(a % b);",
        options: ["3", "0", "1", "3.33"],
        answer: 0, explanation: "כאשר המחולק (3) קטן מהמחלק (10), תוצאת החלוקה השלמה היא 0 והשארית היא המחולק עצמו (3)."
    },
    // 17
    {
        id: 17, level: "medium",
        question: "מה יהיה ערכו של המשתנה d בסוף קטע הקוד?",
        code: "double d = 7 / 2;",
        options: ["3.5", "3", "3.0", "4.0"],
        answer: 2, explanation: "הביטוי 7 / 2 מחושב תחילה כחלוקה שלמה בין שני int (שתוצאתה 3), ורק לאחר מכן הערך 3 מומר במשתנה d ל-3.0."
    },
    // 18
    {
        id: 18, level: "medium",
        question: "כיצד ניצק מפורשות את הביטוי כדי לקבל תוצאת חלוקה ממשית 3.5?",
        code: "int a = 7;\nint b = 2;",
        options: ["double d = (double)(a / b);", "double d = (double)a / b;", "double d = (int)a / b;", "double d = a / (int)b;"],
        answer: 1, explanation: "המרת a ל-(double) מבוצעת לפני החלוקה, מה שגורם לכל תרגיל החלוקה להתבצע כחלוקה ממשית (7.0 / 2 = 3.5)."
    },
    // 19
    {
        id: 19, level: "medium",
        question: "מה מדפיס הקוד הבא עבור חילוץ ספרת האחדות של המספר 147?",
        code: "int num = 147;\nConsole.WriteLine(num % 10);",
        options: ["14", "7", "1", "4.7"],
        answer: 1, explanation: "שארית חלוקה ב-10 של כל מספר שלם מבודדת תמיד את ספרת האחדות שלו (147 % 10 = 7)."
    },
    // 20
    {
        id: 20, level: "medium",
        question: "מה מדפיס הקוד הבא עבור הסרת ספרת האחדות של המספר 147?",
        code: "int num = 147;\nConsole.WriteLine(num / 10);",
        options: ["14.7", "7", "14", "1"],
        answer: 2, explanation: "חלוקה שלמה ב-10 של מספר שלם מורידה את ספרת האחדות ומחזירה את שאר המספר (147 / 10 = 14)."
    },
    // 21
    {
        id: 21, level: "medium",
        question: "מה יהיה ערכו של המשתנה res בסוף קטע הקוד?",
        code: "int res = 10 % 4 * 3;",
        options: ["0", "6", "2", "1.2"],
        answer: 1, explanation: "לאופרטורים % ו-* קדימות שווה והם מחושבים משמאל לימין: 10 % 4 שווה 2, ואז 2 * 3 שווה 6."
    },
    // 22
    {
        id: 22, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "double x = 5 + 2.5 * 2;\nConsole.WriteLine(x);",
        options: ["15", "10", "10.0", "15.0"],
        answer: 2, explanation: "הכפל קודם לחיבור: 2.5 * 2 = 5.0. לאחר מכן 5 + 5.0 = 10.0."
    },
    // 23
    {
        id: 23, level: "medium",
        question: "מה יהיה ערכו של המשתנה val בקוד הבא?",
        code: "int val = 20 - 4 * 3 + 2;",
        options: ["50", "10", "26", "14"],
        answer: 1, explanation: "הכפל מחושב ראשון (4 * 3 = 12). לאחר מכן חיסור וחיבור משמאל לימין: 20 - 12 = 8, ו-8 + 2 = 10."
    },
    // 24
    {
        id: 24, level: "medium",
        question: "מה מבודד הביטוי 1234 % 100?",
        code: "",
        options: ["ספרת האחדות (4)", "שתי הספרות האחרונות (34)", "ספרת המאות (2)", "שתי הספרות הראשונות (12)"],
        answer: 1, explanation: "שארית חלוקה ב-100 מבודדת את שתי הספרות הימניות (האחרונות) של המספר."
    },
    // 25
    {
        id: 25, level: "medium",
        question: "מה מבודד הביטוי 1234 / 100 ב-int?",
        code: "",
        options: ["34", "12", "12.34", "1"],
        answer: 1, explanation: "חלוקה שלמה ב-100 מורידה את שתי הספרות הימניות ומחזירה את שאר המספר (12)."
    },
    // 26
    {
        id: 26, level: "medium",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int sec = 130;\nint min = sec / 60;\nint rem = sec % 60;\nConsole.WriteLine(min + \"m \" + rem + \"s\");",
        options: ["2m 10s", "2.16m 0s", "1m 70s", "130m 0s"],
        answer: 0, explanation: "130 / 60 נותן 2 דקות שלמות. 130 % 60 נותן שארית של 10 שניות. הפלט מורכב ל-\"2m 10s\"."
    },
    // 27
    {
        id: 27, level: "medium",
        question: "מה יהיה ערכו של המשתנה x בסוף הקוד?",
        code: "int a = 8;\nint b = 3;\nint x = (a + b) % 4;",
        options: ["2", "3", "0", "11"],
        answer: 1, explanation: "תחילה מחושב הביטוי בסוגריים (8 + 3 = 11). לאחר מכן 11 % 4 מחזיר שארית 3."
    },
    // 28
    {
        id: 28, level: "medium",
        question: "מה תדפיס התוכנית למסך?",
        code: "int num1 = int.Parse(\"12\");\nint num2 = int.Parse(\"5\");\nConsole.WriteLine(num1 / num2);",
        options: ["2.4", "2", "2.0", "שגיאת הרצה"],
        answer: 1, explanation: "המחרוזות מומשות למספרים שלמים 12 ו-5. חלוקה שלמה בין int ל-int מניבה 2."
    },
    // 29
    {
        id: 29, level: "medium",
        question: "מה תהיה תוצאת הביטוי (double)(15 / 2)?",
        code: "",
        options: ["7.5", "7.0", "7", "8.0"],
        answer: 1, explanation: "הסוגריים מחושבים קודם כחלוקה שלמה (15 / 2 = 7). לאחר מכן המרה מפורשת ל-(double) הופכת את 7 ל-7.0."
    },
    // 30
    {
        id: 30, level: "medium",
        question: "מה תהיה התוצאה של 0 % 5?",
        code: "",
        options: ["5", "0", "שגיאת חלוקה באפס", "1"],
        answer: 1, explanation: "אפס לחלק לכל מספר שונה מאפס נותן 0 עם שארית 0."
    },

    // ==================== HARD (31-45) ====================
    // 31
    {
        id: 31, level: "hard",
        question: "נתון מספר תלת-ספרתי חיובי num. איזה ביטוי מבודד את ספרת העשרות שלו?",
        code: "int num = 358;",
        options: ["num % 10", "num / 100", "(num / 10) % 10", "(num % 10) / 10"],
        answer: 2, explanation: "num / 10 מוריד את ספרת האחדות ומחזיר 35. לאחר מכן 35 % 10 מבודד את ספרת האחדות של 35, שהיא ספרת העשרות המקורית (5)."
    },
    // 32
    {
        id: 32, level: "hard",
        question: "מה יהיה ערכו של המשתנה sum בסוף קטע הקוד המחשב סכום ספרות של מספר דו-ספרתי?",
        code: "int num = 49;\nint sum = (num / 10) + (num % 10);",
        options: ["13", "49", "4", "9"],
        answer: 0, explanation: "num / 10 מחלץ את ספרת העשרות (4). num % 10 מחלץ את ספרת האחדות (9). סכומם 4 + 9 = 13."
    },
    // 33
    {
        id: 33, level: "hard",
        question: "מה תהיה תוצאת הפיכת סדר הספרות של מספר דו-ספרתי בקטע הקוד הבא?",
        code: "int num = 37;\nint rev = (num % 10) * 10 + (num / 10);\nConsole.WriteLine(rev);",
        options: ["37", "73", "10", "703"],
        answer: 1, explanation: "(num % 10) מבודד את 7 ומכפיל ב-10 (70). (num / 10) מבודד את 3. סכומם 70 + 3 נותן 73."
    },
    // 34
    {
        id: 34, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא המדמה שעות בשעון בן 12 שעות?",
        code: "int currentHour = 10;\nint hoursToAdd = 5;\nint newHour = (currentHour + hoursToAdd) % 12;\nConsole.WriteLine(newHour);",
        options: ["15", "3", "2", "0"],
        answer: 1, explanation: "10 + 5 = 15. חשבון מודולו 12 (15 % 12) מחזיר 3 (השעה 3 בצהריים/בלילה)."
    },
    // 35
    {
        id: 35, level: "hard",
        question: "מה יהיה ערכו של המשתנה res לאחר חישוב הקוד הבא?",
        code: "int res = 15 - (3 + 2) * 2 + 18 % 4;",
        options: ["7", "12", "22", "3"],
        answer: 0, explanation: "סוגריים: (3 + 2) = 5. כפל ומודולו: 5 * 2 = 10, ו-18 % 4 = 2. חיסור וחיבור: 15 - 10 + 2 = 7."
    },
    // 36
    {
        id: 36, level: "hard",
        question: "מה יהיה ערכו של המשתנה x בסוף קטע הקוד?",
        code: "double x = 17 / 5 + 17 % 5;",
        options: ["5.4", "5.0", "5", "3.4"],
        answer: 1, explanation: "17 / 5 בחלוקה שלמה מניב 3. 17 % 5 במודולו מניב 2. הסכום 3 + 2 = 5, ובהשמה ל-double מומר ל-5.0."
    },
    // 37
    {
        id: 37, level: "hard",
        question: "מה תהיה התוצאה של חישוב מחיר לאחר הנחה באחוזים בקוד הבא?",
        code: "int price = 200;\nint discountPercent = 15;\nint finalPrice = price - (price * discountPercent / 100);\nConsole.WriteLine(finalPrice);",
        options: ["170", "185", "30", "170.0"],
        answer: 0, explanation: "חישוב גובה ההנחה: 200 * 15 / 100 = 3000 / 100 = 30. המחיר הסופי: 200 - 30 = 170."
    },
    // 38
    {
        id: 38, level: "hard",
        question: "מה יכיל המשתנה isEven בעת בדיקת זוגיות של מספר num?",
        code: "int num = 42;\nbool isEven = (num % 2 == 0);",
        options: ["0", "42", "True", "False"],
        answer: 2, explanation: "42 % 2 שווה 0. ההשוואה 0 == 0 היא אמת ולכן נשמר הערך הבוליאני True."
    },
    // 39
    {
        id: 39, level: "hard",
        question: "נתון מספר כולל של שניות totalSec = 3665. מה יהיו ערכי השעות, הדקות והשניות בקוד הבא?",
        code: "int totalSec = 3665;\nint h = totalSec / 3600;\nint m = (totalSec % 3600) / 60;\nint s = totalSec % 60;",
        options: ["h=1, m=1, s=5", "h=1, m=65, s=5", "h=1, m=1, s=65", "h=1, m=0, s=65"],
        answer: 0, explanation: "3665 / 3600 = 1 שעה. שארית 65 שניות: 65 / 60 = 1 דקה. 65 % 60 = 5 שניות. לכן h=1, m=1, s=5."
    },
    // 40
    {
        id: 40, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא המבצע המרת טמפרטורה מצלזיוס לפנהייט?",
        code: "int celsius = 25;\ndouble fahrenheit = celsius * 9.0 / 5 + 32;\nConsole.WriteLine(fahrenheit);",
        options: ["77.0", "77", "45.0", "90.0"],
        answer: 0, explanation: "25 * 9.0 = 225.0. חלוקה ב-5 נותנת 45.0. תוספת 32 נותנת 77.0."
    },
    // 41
    {
        id: 41, level: "hard",
        question: "איזה מבין הביטויים הבאים יבצע חלוקה שלמה של a ב-b גם אם המשתנים הם מטיפוס double?",
        code: "double a = 9.7, b = 2.3;",
        options: ["(int)a / (int)b", "(int)(a / b)", "a % b", "(double)((int)a / b)"],
        answer: 0, explanation: "המרת שני האופרנדים ל-(int) לפני החלוקה קוטמת את חלקם השברי (9 ו-2) ומבצעת חלוקה שלמה (9 / 2 = 4)."
    },
    // 42
    {
        id: 42, level: "hard",
        question: "מה יהיה הפלט של קטע הקוד הבא?",
        code: "int a = 5;\nint b = 2;\nint c = a + (b = a * 2);\nConsole.WriteLine(\"a=\" + a + \", b=\" + b + \", c=\" + c);",
        options: ["a=5, b=10, c=15", "a=5, b=2, c=15", "a=10, b=10, c=15", "שגיאת קומפילציה"],
        answer: 0, explanation: "השמה בתוך סוגריים (b = a * 2) מעדכנת את b ל-10 ומחזירה 10. החיבור 5 + 10 קובע את c ל-15. a נשאר 5."
    },
    // 43
    {
        id: 43, level: "hard",
        question: "מה יהיה הפלט בסוף קטע הקוד הבא?",
        code: "int num = 8;\nint result = num / 3 * 3 + num % 3;\nConsole.WriteLine(result);",
        options: ["8", "6", "2", "9"],
        answer: 0, explanation: "num / 3 * 3 נותן 2 * 3 = 6 (החלק המתחלק השלם). בתוספת שארית החלוקה num % 3 (שהיא 2), מקבלים בחזרה את המספר המקורי 8."
    },
    // 44
    {
        id: 44, level: "hard",
        question: "איזה ביטוי משלב שני מספרים דו-ספרתיים a=12 ו-b=34 למספר ארבע-ספרתי אחד 1234?",
        code: "int a = 12, b = 34;",
        options: ["a * 100 + b", "a + b * 100", "(a + b) * 100", "a * 10 + b"],
        answer: 0, explanation: "הכפלת a ב-100 מזיזה אותו שתי ספרות שמאלה (1200), וחיבור b מוסיף את שתי הספרות הימניות לקבלת 1234."
    },
    // 45
    {
        id: 45, level: "hard",
        question: "מה יהיה ערכו של המשתנה val בקוד הבא?",
        code: "int val = (int)(5.7 + 2.8) - ((int)5.7 + (int)2.8);",
        options: ["1", "0", "0.5", "8"],
        answer: 0, explanation: "5.7 + 2.8 = 8.5, והמרה ל-int קוטמת ל-8. לעומת זאת (int)5.7=5 ו-(int)2.8=2, סכומם 7. ההפרש 8 - 7 נותן 1."
    }
];
