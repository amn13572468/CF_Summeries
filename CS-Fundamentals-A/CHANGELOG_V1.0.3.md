# Change Log — Version 1.0.3

**Updated:** 2026-10-03

This document records the application changes in version 1.0.2 as before-and-after comparisons.

## How to Read This Document

Each section describes the behavior before this update, followed by the behavior after it. The **After** description is the current implementation. File paths identify where the behavior is configured or displayed. This document records changes; it does not replace the project README or the source code.

## Question Banks

**Before**
- Input/Output and Operators questions used the older shared `questions.js` files.
- Topics selected a homework bank through `questionsKey`; there was no separate preparation bank for each topic.

**After**
- Input/Output homework questions are in `content/Input_Output_Variables/basic-qs.js`; its separate 30-question preparation bank is in `content/Input_Output_Variables/prep-qs.js`.
- Basic Operators homework questions are in `content/Operators/basic-qs.js`; Special Operators homework questions are in `content/Operators/special-qs.js`.
- Each Operators homework bank has 45 questions. Their separate preparation banks, `basic-prep-qs.js` and `special-prep-qs.js`, contain 30 questions each: 15 medium and 15 hard.
- The extensionless Special Operators prep file was renamed to `special-prep-qs.js` so it can be loaded as a browser script.
- `index.html` loads the active question-bank scripts before the React screens. The Operators banks register arrays on `window`, and `topics-config.js` maps each topic to its homework and preparation bank keys.

## Student Preparation Flow

**Before**
- Students used the existing homework difficulty levels and Marathon. Preparation for a formal test was not a separate activity.

**After**
- The teacher can enable **Show test preparation** independently for each topic.
- The topic screen shows **Prepare for the test** only when the teacher enables it and that topic's preparation bank is loaded.
- Preparation uses that topic's medium and hard questions. It does not change the selected homework level, mark a homework level complete, or unlock Marathon.

**Main files:** `screens/TeacherPanel.js`, `screens/Topics.js`, `topics-config.js`, and `App.js`.

## Teacher Settings and Results

**Before**
- The teacher panel controlled whether topics were open for homework practice.
- The quiz summary used the same general label for all activities.

**After**
- The teacher panel has a separate preparation checkbox for each topic. Its `isTestPrepOpen` value is saved with the syllabus in `localStorage` under `CSHARP_SYLLABUS_STATE`.
- Preparation results are submitted with the activity label `הכנה למבחן`, separate from homework levels and Marathon.
- The summary title identifies preparation runs as **Summary of test preparation**.

**Main files:** `screens/TeacherPanel.js`, `App.js`, and `screens/Summary.js`.

## Quiz Display

**Before**
- Hebrew question content and answer choices did not consistently use RTL text direction and Hebrew-friendly typography.
- The quiz layout used less explicit sizing for question, answer, and feedback areas; a no-code question could leave an empty code area in some layout revisions.

**After**
- Hebrew prompts, choices, and explanations use RTL direction and the Assistant font. English and code remain LTR, with code in Fira Code.
- Answer rows and feedback use responsive sizing. The feedback panel is smaller, and long explanations can scroll inside it.
- The code panel appears only when a question includes a code sample, so no-code questions do not reserve a blank block.

**Main files:** `screens/Quiz.js` and `utils/CSS/tailwind.css`.

## Verification Notes

- The three Operators homework banks and their preparation banks were verified as loaded by the browser; the prep banks each contain 30 questions.
- The responsive quiz was checked at a 390 px mobile viewport, including Hebrew text direction, answer layout, and feedback behavior.
- `npm run build:css` regenerates the Tailwind stylesheet after utility-class changes.
