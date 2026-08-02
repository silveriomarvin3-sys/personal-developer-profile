# Personal Developer Profile

## Overview
This is my personal portfolio website introducing myself, my skills, projects, and contact information.
Built starting from plain HTML, progressively upgraded through multiple CSS revisions, and finished with real JavaScript interactivity.
This project was built as part of my Tech VA Journey roadmap — Project 01.

---

## Technologies Used
- HTML5
- CSS3 (Flexbox, CSS Variables, Transitions, Keyframe Animations, Google Fonts)
- Vanilla JavaScript (DOM manipulation, event handling, form validation)

---

## Features
- Styled navigation menu with smooth scroll and hover states
- Modern hero section with tag badges and dual call-to-action buttons
- Skills section presented as interactive icon cards
- Projects section with a styled, animated project card
- Fully validated contact form:
  - Native HTML validation (`required`, `type="email"`) combined with custom JS logic
  - Custom minimum-length check on the message field
  - Inline success/error messaging (no browser alerts)
  - Animated message entrance (fade + slide, replays on every submission)
  - Button loading state ("Sending...") with disabled state during submission
  - Auto-scroll to the result message, sequenced to not conflict with the fade animation
  - Form reset after successful submission
- Custom typography using Google Fonts (Poppins + Inter)
- Modern, minimal color palette using CSS variables

---

## Folder Structure

Project 01 - Personal Profile
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshots
├── before.png
└── final (as of 08-01-2026) with js.png


---

## Screenshots

### Before (HTML only)
![Before screenshot](Assets/Screenshots/01-start.png)

### After (Fully styled, v3)
![After screenshot](Assets/Screenshots/05-withcss.png)

---

## What I Learned

**From the HTML phase:**
- Basic HTML document structure
- Headings, paragraphs, navigation links, lists, and forms
- Organizing a webpage into semantic sections

**From the CSS phase (v1 → v3):**
- Linking an external stylesheet and using CSS variables for consistent, easily-updatable theming
- The Box Model and spacing fundamentals
- Styling with classes over raw tags for scalability
- Flexbox for layout — navigation, skill cards, forms, and hero buttons
- Hover and focus states for interactivity and accessibility
- Building reusable components (project cards, button variants using base + modifier classes)
- Typography using Google Fonts to shift the site from "default browser look" to a modern, professional feel
- Iterative design thinking — revising a working page multiple times based on structured feedback, rather than treating v1 as final

**JavaScript:**
- DOM selection (`querySelector`) and event listeners
- Form validation logic, and understanding when to rely on native HTML validation vs. custom JS
- `event.preventDefault()` and controlling form submission behavior
- Async-feeling UX with `setTimeout` (loading states, simulated delays)
- Debugging real animation timing issues — discovering how competing browser behaviors (scroll vs. CSS transition) can visually cancel each other out, and fixing it with `requestAnimationFrame` and sequenced delays
- The difference between a CSS *transition* (works once, can silently skip on repeat triggers) and a CSS *animation* with keyframes (more reliably replayable via JS)

---

## Reflection
This project took me from writing my very first HTML tag to building a fully interactive, validated, animated contact form — debugging real, non-obvious bugs along the way, including timing conflicts between browser behaviors that aren't obvious even when the code "looks correct."
The biggest lesson from the JavaScript phase wasn't syntax — it was learning to actually observe what the browser is doing versus what I assumed it was doing, and testing hypotheses one variable at a time instead of guessing.
This project is now complete for HTML/CSS/JS fundamentals.

---

## Status
✅ Complete