<h1>📝 To-Do List – Chrome Extension</h1>

A simple and fast Chrome extension that lets you add, manage, and delete tasks directly from your browser.
Lightweight, clean UI, and instantly accessible from the toolbar!

🚀 Features

➕ Add new tasks

❌ Delete tasks

⌨️ Press Enter to add tasks

🎨 Clean UI inside a popup

📌 Extension icon visible on Chrome toolbar

⚡ Instant load, no refresh needed

<h1>📂 Folder Structure</h1>
TODO LIST/
│
├── assets/
    ├── icon.png
    ├── logo3.png
├── index.html
├── manifest.json
├── README.md
│___script.js
└── style.css

<h1>⚙️ How It Works</h1>
1. Click the extension icon

This opens your popup.html.

2. Add a task

Type in the input box → press Enter or click the add button.

3. Delete a task

Every task comes with a delete icon/button.

<h1>📦 Installation (For Developers)</h1>

Download or clone this repository

Go to chrome://extensions/

Turn on Developer Mode

Click Load Unpacked

Select the extension folder

Done — the extension icon will appear in your toolbar!

<h1>🛠️ Technologies Used</h1>

HTML

CSS

JavaScript

Chrome Extensions API (Manifest V3)

📄 manifest.json (Example)
{
  "name": "To-do-list",
  "version": "0.0.1",
  "manifest_version": 3,

  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "128": "assets/icon.png"
    }
  },

  "icons": {
    "128": "assets/icon.png",
  },

  "permissions": ["activeTab"]
}

<h1>🎯 Future Improvements</h1>

✔ Add dark mode

✔ Add local storage support

✔ Add "Mark as Completed"

✔ Sync tasks across devices

<h1>🤝 Contributing</h1>

Pull requests are welcome!
Feel free to open issues for suggestions or improvements.

<h1>📜 License</h1>

This project is free and open-source.