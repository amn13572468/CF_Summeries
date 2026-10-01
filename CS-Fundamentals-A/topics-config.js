/**
 * Topics and Syllabus Configuration for C# Fundamentals A
 * Managed by the teacher (Admin control for active class content).
 */
const CSHARP_SYLLABUS = {
    // Each category groups topics that can be independently opened for practice.
    basicsA: {
        id: "basicsA",
        title: "יסודות א' ב-#C",
        description: "Core concepts of C# programming managed by teacher syllabus",
        icon: "🌱",
        // isOpen controls student access; sheetName identifies the related results sheet.
        topics: [
            {
                id: "Input_Output_Variables",
                title: "קלט / פלט ומשתנים",
                desc: "Console.Write, Console.WriteLine, int, double, string",
                isOpen: true,
                sheetName: "Variables_I/O"
            },
            {
                id: "Operators",
                title: "אופרטורים בסיסיים",
                desc: "Arithmetic operations, division, and modulo",
                isOpen: false,
                sheetName: "Basic_Operators",
                // Names the question-bank array registered by the Operators script.
                questionsKey: "allOperatorsQuestions"
            },
            {
                id: "Special_Operators",
                title: "אופרטורים מיוחדים",
                desc: "Shortcuts, ++, --, +=, -=",
                isOpen: false,
                sheetName: "Special_Operators"
            },
            {
                id: "Conditions_If",
                title: "הוראות תנאי",
                desc: "if, else, and nested conditions",
                isOpen: false,
                sheetName: "Conditions_If"
            },
            {
                id: "Selection",
                title: "הוראות בחירה",
                desc: "Switch-case statements",
                isOpen: false,
                sheetName: "Selection"
            },
            {
                id: "Math_Library",
                title: "פונקציות ספריית Math",
                desc: "Math.Pow, Math.Sqrt, Math.Abs",
                isOpen: false,
                sheetName: "Math_Library"
            },
            {
                id: "Counter_Loop",
                title: "לולאת מונה (For)",
                desc: "Counter-controlled iteration",
                isOpen: false,
                sheetName: "Counter_Loop"
            },
            {
                id: "Conditional_Loop",
                title: "לולאת תנאי (While)",
                desc: "Condition-controlled iteration",
                isOpen: false,
                sheetName: "Conditional_Loop"
            },
            {
                id: "Nested_Loops",
                title: "לולאות מקוננות",
                desc: "Loops inside loops",
                isOpen: false,
                sheetName: "Nested_Loops"
            },
            {
                id: "Arrays",
                title: "מערכים",
                desc: "Introduction to arrays and storage",
                isOpen: false,
                sheetName: "Arrays"
            }
        ]
    }
};

// Make the syllabus available to browser-loaded screens and scripts.
window.CSHARP_SYLLABUS = CSHARP_SYLLABUS;