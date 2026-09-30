# Project Context: CS-Fundamentals-A (React & C# Quiz App)

## 🎯 Project Overview
A web-based React application (loaded via browser with Babel and Tailwind CSS) designed for high school students to practice C# programming fundamentals. The application features a teacher-controlled admin system to manage accessible content and syllabus progression per class.

## 📂 Project Directory Structure (Project Layout)
CS-Fundamentals-A/
│
├── screens/                  # Main application screen components
│   ├── Welcome.js            # Student registration and entry screen
│   ├── Topics.js             # Topic selection screen based on teacher-unlocked syllabus
│   ├── TeacherPanel.js       # Teacher admin dashboard to lock/unlock topics
│   ├── Quiz.js               # Interactive quiz screen with C# code questions
│   └── Summary.js            # Final score summary and Google Sheets submission
│
├── content/                  # Subject-specific learning content and questions
│   └── Input_Output_Variables/
│       ├── expert-questions.js
│       └── questions.js
│
├── app.js                    # Main application controller and screen router
├── config.js                 # System configurations and Google Sheets integration
├── topics-config.js          # Syllabus definition and teacher control states
├── utils.js                  # Helper utilities (Fisher-Yates question shuffling)
└── index.html                # Main entry point and script loader

📚 Syllabus / Topics (C# Fundamentals A)
Input / Output & Variables (Input_Output_Variables)

Basic Operators (Operators)

Special Operators (Special_Operators)

Conditions (Conditions_If)

Selection Statements (Selection)

Math Library Functions (Math_Library)

Counter Loops - For (Counter_Loop)

Conditional Loops - While (Conditional_Loop)

Nested Loops (Nested_Loops)

Arrays (Arrays)

📌 Current Status & Next Steps
Established the modular directory structure utilizing the screens/ folder and clean file naming conventions.

Configured the teacher control panel (TeacherPanel.js) and dynamic topic syllabus mapping (topics-config.js).

Next steps: Connecting specific questions from the content/ directories directly into the quiz engine based on teacher-enabled topics.

בבקשה, הנה העדכון של קובץ התיעוד (`README.md`) עם מבנה הפרויקט החדש והמסודר, ועם **הערות ותיאורים באנגלית בלבד** בדיוק כפי שביקשת:

```markdown
# Project Context: CS-Fundamentals-A (React & C# Quiz App)

## 🎯 Project Overview
A web-based React application (loaded via browser with Babel and Tailwind CSS) designed for high school students to practice C# programming fundamentals. The application features a teacher-controlled admin system to manage accessible content and syllabus progression per class.

## 📂 Project Directory Structure (Project Layout)
CS-Fundamentals-A/
│
├── screens/                  # Main application screen components
│   ├── Welcome.js            # Student registration and entry screen
│   ├── Topics.js             # Topic selection screen based on teacher-unlocked syllabus
│   ├── TeacherPanel.js       # Teacher admin dashboard to lock/unlock topics
│   ├── Quiz.js               # Interactive quiz screen with C# code questions
│   └── Summary.js            # Final score summary and Google Sheets submission
│
├── content/                  # Subject-specific learning content and questions
│   └── Input_Output_Variables/
│       ├── expert-questions.js
│       └── questions.js
│
├── app.js                    # Main application controller and screen router
├── config.js                 # System configurations and Google Sheets integration
├── topics-config.js          # Syllabus definition and teacher control states
├── utils.js                  # Helper utilities (Fisher-Yates question shuffling)
└── index.html                # Main entry point and script loader

```

## 📚 Syllabus / Topics (C# Fundamentals A)

1. Input / Output & Variables (`Input_Output_Variables`)
2. Basic Operators (`Operators`)
3. Special Operators (`Special_Operators`)
4. Conditions (`Conditions_If`)
5. Selection Statements (`Selection`)
6. Math Library Functions (`Math_Library`)
7. Counter Loops - For (`Counter_Loop`)
8. Conditional Loops - While (`Conditional_Loop`)
9. Nested Loops (`Nested_Loops`)
10. Arrays (`Arrays`)

## 📌 Current Status & Next Steps

* Established the modular directory structure utilizing the `screens/` folder and clean file naming conventions.
* Configured the teacher control panel (`TeacherPanel.js`) and dynamic topic syllabus mapping (`topics-config.js`).
* Next steps: Connecting specific questions from the `content/` directories directly into the quiz engine based on teacher-enabled topics.

```

שמרי את התוכן הזה בתוך קובץ ה־`README.md` בתיקיית הפרויקט שלך ב־VS Code (`Ctrl + S`), וכך תמיד תהיי מוכנה עם תיעוד נקי, מקצועי ובאנגלית מלאה!

```