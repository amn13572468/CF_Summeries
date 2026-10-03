# CS-Fundamentals-A

**Version 1.0.3** · Updated 2026-10-03
**Version v1.1.0-test-preparation**

## Overview
A browser-based React quiz application for practicing C# fundamentals. React and ReactDOM are loaded from a CDN, JSX is transpiled in the browser with Babel, and Tailwind CSS provides the interface styles.

Students enter their details, choose a difficulty, select an unlocked topic, answer shuffled questions, and review their score. Teachers can control topic access. Quiz results are sent to a configured Google Apps Script endpoint.

## Project Layout
```text
CS-Fundamentals-A/
├── content/
│   ├── Arrays/questions.js
│   ├── Conditions_If/questions.js
│   ├── Input_Output_Variables/
│   │   ├── basic-qs.js
│   │   └── prep-qs.js
│   └── Operators/
│       ├── basic-qs.js
│       ├── basic-prep-qs.js
│       ├── special-qs.js
│       └── special-prep-qs.js
├── screens/
│   ├── Quiz.js
│   ├── Summary.js
│   ├── TeacherPanel.js
│   ├── Topics.js
│   └── Welcome.js
├── utils/
│   ├── CSS/
│   ├── auth.js
│   └── utils.js
├── App.js
├── config.js
├── index.html
└── topics-config.js
```

## Quiz Flow
- `Welcome.js` collects student details and offers Easy, Medium, Hard, and Marathon (`all`). Marathon becomes available after the student completes the three standard difficulty levels.
- `Topics.js` shows syllabus topics the teacher has opened. For any topic where the teacher enables **Show test preparation**, it also offers a separate preparation activity when that topic's prep bank is loaded.
- `App.js` loads the selected topic's `questionsKey` for homework, or its `preparationQuestionsKey` for preparation. Homework keeps its difficulty filtering; preparation includes that topic's medium and hard questions and does not count toward homework-level completion or Marathon access. It shuffles question order and answer choices.
- `Quiz.js` displays RTL Hebrew text separately from LTR code/English and uses responsive question and answer layouts. Questions without code omit the code panel.
- `Summary.js` displays the score and answer review. Results are submitted to the configured Google Apps Script; preparation results are labeled separately from homework and Marathon.

The Marathon option retains its original all-level behavior. Test preparation is a separate practice activity for students preparing for a formal test outside the app.

## Question Banks
Question banks are loaded as browser scripts from `index.html` before the app screens. Each question includes an `id`, `level` (`easy`, `medium`, or `hard`), `question`, optional `code`, four `options`, the zero-based `answer` index, and an `explanation`.

To connect a topic to a bank, load its script in `index.html` and set the matching `questionsKey` or `preparationQuestionsKey` in `topics-config.js`. The bank array must be available under that configured key on `window`.

Active banks:
- Input/Output homework: `content/Input_Output_Variables/basic-qs.js`.
- Input/Output preparation: `content/Input_Output_Variables/prep-qs.js` (`allIOVPreparationQuestions`), with 30 medium/hard questions.
- Basic Operators homework/preparation: `content/Operators/basic-qs.js` and `basic-prep-qs.js`.
- Special Operators homework/preparation: `content/Operators/special-qs.js` and `special-prep-qs.js`.

The Operators homework banks contain 45 questions each. Each Operators preparation bank contains 30 questions, split between medium and hard. The active Operators homework scripts use the `-qs.js` filename suffix; the preparation banks are loaded separately.

The teacher panel controls preparation visibility per topic with **Show test preparation**. Its setting is stored in `localStorage` under `CSHARP_SYLLABUS_STATE`. Preparation is offered only when the corresponding bank contains questions.

## Configuration
- `CONFIG.SCRIPT_URL` in `config.js` is the Google Apps Script endpoint used to submit results.
- Each topic's `sheetName` in `topics-config.js` selects the destination sheet; `CONFIG.SHEET_NAME` is the fallback.
- Topic open/locked settings are controlled by the teacher panel and persisted in browser `localStorage`.