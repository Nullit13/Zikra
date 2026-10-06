# Contributing to Zikra

Thanks for taking an interest in Zikra.

## Before making changes

- Make sure you understand the existing extension structure.
- Keep changes focused on the feature or bug you are working on.
- Test the extension in Chrome before opening a pull request.

## Development

Zikra is a Manifest V3 Chrome extension using plain HTML, CSS, and JavaScript.

To test changes:

1. Open `chrome://extensions/`.
2. Enable **Developer mode**.
3. Load the project using **Load unpacked**.
4. After changing the extension files, reload Zikra from the extensions page.
5. Check the popup and test reminders on a few different webpages.

## Code style

- Keep the existing code style where possible.
- Use clear variable and function names.
- Avoid adding dependencies when a simple browser API or plain JavaScript solution is enough.
- Keep the extension lightweight.
- Do not add unrelated changes to a pull request.

## Pull requests

A pull request should include:

- A clear description of what changed.
- The reason for the change.
- Any relevant testing steps.
- Screenshots when a change affects the popup or visible reminder UI.

Please keep pull requests focused and easy to review.

## Issues

When reporting a bug, include:

- What you expected to happen.
- What actually happened.
- The browser and version you tested with.
- Steps to reproduce the issue.

For feature requests, explain the problem the feature would solve rather than only suggesting an implementation.
