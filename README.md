# Zikra

Zikra is a lightweight Chrome extension that gives you gentle athkar reminders while you browse.

The extension selects athkar based on the current time of day and displays a small reminder on the page. You can enable or disable reminders and choose how often they appear.

## Features

- Morning, evening, sleep, and general athkar
- Automatic selection based on the current time
- Configurable reminder interval
- Enable/disable reminders
- Small, unobtrusive on-page reminder
- Settings saved locally with Chrome Storage
- Manifest V3

## How it works

Zikra runs a content script on web pages and checks whether it is time to show a reminder.

The reminder category is selected using the current hour:

- 04:00–11:59 — morning
- 12:00–18:59 — evening
- 19:00–03:59 — sleep

General athkar can also be selected at any time.

The last reminder time is stored with `chrome.storage.local`, so opening or focusing a page does not immediately create another reminder when the selected interval has not passed.

## Installation

Zikra is currently intended to be loaded as an unpacked Chrome extension.

1. Clone or download this repository.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the Zikra project folder.
6. Open a normal webpage and wait for a reminder, or use the extension popup to change the settings.

## Project structure

```text
Zikra/
├── images/
│   └── icon.png
├── content.js
├── manifest.json
├── popup.html
├── popup.js
├── style.css
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── .gitignore
```

## Settings

The popup currently provides two settings:

- **Enabled** — turns reminders on or off.
- **Interval** — controls how frequently Zikra can display a reminder.

Available intervals are 1, 5, 10, 15, and 30 minutes.

## Privacy

Zikra does not require an account or a remote backend.

The extension uses Chrome's local storage to save its settings and the time of the last displayed reminder.

The content script is configured to run on all URLs because the reminder is designed to work while browsing different websites.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the basic contribution guidelines.

## License

Zikra is released under the MIT License. See [LICENSE](LICENSE) for details.