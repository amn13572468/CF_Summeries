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
                // This teacher toggle controls preparation visibility independently of homework access.
                isTestPrepOpen: false,
                sheetName: "Variables_I/O",
                // Connect this topic to its separate preparation-question bank.
                preparationQuestionsKey: "allIOVPreparationQuestions"
            },
            {
                id: "Assignment And Operators",
                title: "השמה ואופרטורים בסיסיים",
                desc: "Arithmetic operations, division, and modulo",
                isOpen: true,
                isTestPrepOpen: false,
                sheetName: "Basic_Operators",
                // Names the question-bank array registered by the Operators script.
                questionsKey: "allAssignmentAndOperatorsQuestions",
                // Keep test-prep questions separate from the topic's homework bank.
                preparationQuestionsKey: "allAssignmentAndOperatorsPreparationQuestions"
            },
            {
                id: "Special_Operators",
                title: "אופרטורים מיוחדים",
                desc: "Shortcuts, ++, --, +=, -=",
                isOpen: false,
                isTestPrepOpen: false,
                sheetName: "Special_Operators",
                // Map this topic to its dedicated -qs question bank.
                questionsKey: "allSpecialOperatorsQuestions",
                // This key selects only the special-operators preparation bank.
                preparationQuestionsKey: "allSpecialOperatorsPreparationQuestions"
            },
            {
                id: "Conditions_If",
                title: "הוראות תנאי",
                desc: "if, else, and nested conditions",
                isOpen: false,
                isTestPrepOpen: false,
                sheetName: "Conditions_If"
            },
            {
                id: "Selection",
                title: "הוראות בחירה",
                desc: "Switch-case statements",
                isOpen: false,
                isTestPrepOpen: false,
                sheetName: "Selection"
            },
            {
                id: "Math_Library",
                title: "פונקציות ספריית Math",
                desc: "Math.Pow, Math.Sqrt, Math.Abs",
                isOpen: false,
                isTestPrepOpen: false,
                sheetName: "Math_Library"
            },
            {
                id: "Counter_Loop",
                title: "לולאת מונה (For)",
                desc: "Counter-controlled iteration",
                isOpen: false,
                isTestPrepOpen: false,
                sheetName: "Counter_Loop"
            },
            {
                id: "Conditional_Loop",
                title: "לולאת תנאי (While)",
                desc: "Condition-controlled iteration",
                isOpen: false,
                isTestPrepOpen: false,
                sheetName: "Conditional_Loop"
            },
            {
                id: "Nested_Loops",
                title: "לולאות מקוננות",
                desc: "Loops inside loops",
                isOpen: false,
                isTestPrepOpen: false,
                sheetName: "Nested_Loops"
            },
            {
                id: "Arrays",
                title: "מערכים",
                desc: "Introduction to arrays and storage",
                isOpen: false,
                isTestPrepOpen: false,
                sheetName: "Arrays"
            }
        ]
    }
};

// Make the syllabus available to browser-loaded screens and scripts.
window.CSHARP_SYLLABUS = CSHARP_SYLLABUS;

/* Run in Console when needed to reset the state:
localStorage.removeItem('CSHARP_SYLLABUS_STATE');
localStorage.removeItem('teacher_syllabus');
location.reload(); */