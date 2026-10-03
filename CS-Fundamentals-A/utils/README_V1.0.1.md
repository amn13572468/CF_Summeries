# Project Context: CS-Fundamentals-A (React & C# Quiz App)

## 🎯 Project Overview
A web-based React application (loaded via browser with Babel and Tailwind CSS) designed for high school students to practice C# programming fundamentals. The application features a teacher-controlled admin system to manage accessible content, syllabus progression per class, and custom Google Sheets logging parameters.

## 📂 Project Directory Structure (Project Layout)
CS-Fundamentals-A/
│
├── screens/                  # Main application screen components
│   ├── Welcome.js            # Student registration and entry screen
│   ├── Topics.js             # Topic selection screen based on teacher-unlocked syllabus
│   ├── TeacherPanel.js       # Teacher admin dashboard (topic locking & sheet config)
│   ├── Quiz.js               # Interactive quiz screen with C# code questions
│   └── Summary.js            # Final score summary and Google Sheets submission
│
├── content/                  # Subject-specific learning content and questions
│   └── Input_Output_Variables/
│       ├── expert-questions.js
│       └── questions.js
│
├── App.js                    # Main application controller and screen router
├── config.js                 # System configurations and Google Sheets integration parameters
├── topics-config.js          # Syllabus definition and teacher control states
├── utils/                    # Helper utilities (Fisher-Yates shuffling, security)
└── index.html                # Main entry point and script loader

## ⚙️ Configuration & Google Sheets Parameters
- **`CONFIG.SCRIPT_URL`**: Google Apps Script web app URL for data logging.
- **`CONFIG.SHEET_NAME`**: Dynamic Excel/Google Sheet tab parameter managed via config/teacher panel to route quiz submissions per topic or class.

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

## 📌 Current Status & Pending Code Updates
- **Current Status**: Modular UI structure setup (`screens/`), base quiz engine working for `Input_Output_Variables`, Google Sheets payload configured with dynamic sheet naming.
- **Pending Integration**:
  - Update **`App.js`** to include `Topics.js` navigation flow (`Welcome` -> `Topics` -> `Quiz`).
  - Wire **`TeacherPanel.js`** to control `CONFIG.SHEET_NAME` and topic locking states stored in `localStorage`.
  - Connect external question files under `content/` dynamically based on selected syllabus topics.

  ## ⚙️ Configuration & Dynamic Excel Export
- **Dynamic Sheet Name Configuration**: The active Google Sheets tab/worksheet name is dynamically managed via `CONFIG.SHEET_NAME` in `config.js`.
- **Teacher Panel Control**: Teachers can update and save the target worksheet name (`saveSheetName`) directly from `TeacherPanel.js`, updating local persistence and session routing.

## 📌 Next Steps & Remaining Tasks
1. **Routing Integration in `App.js`**: Connect `Topics.js` into the main `App.js` router to enable topic selection between `Welcome` and `Quiz`.
2. **Multi-Topic Content Support**: Expand question loading beyond `Input_Output_Variables` to load matching question sets based on the selected syllabus topic.
3. **End-to-End Testing**: Test student flow (Welcome -> Topic Selection -> Quiz -> Summary/Sheets Submission) and verify Sheet Name saving in `TeacherPanel.js`.

## 📌 Current Status & Configuration
* Established the modular directory structure utilizing the `screens/` folder and clean file naming conventions.
* Configured the teacher control panel (`TeacherPanel.js`) with dynamic Excel target sheet parameter management.
* Next steps: Connecting specific questions from the `content/` directories directly into the quiz engine based on teacher-enabled topics.