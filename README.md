# Zero Copy Labs Test 
---
# Part 1: Automation Script

This repository contains UI automated tests built with **Node.js**, **JavaScript**, **Playwright**, and **Allure Reports**.  
This is a **test project**, not an application, and its purpose is to execute automated browser tests using the Page Object Model (POM).

## 📁 Project Structure

```
ZCL/
│
├── allure-report/          # Generated HTML report (created after running "npm run report")
├── allure-results/         # Raw Allure test result files (created automatically)
├── data/                   # Optional data folder (if used for fixtures or test data)
├── node_modules/
├── test-results/           # Playwright test artifacts (screenshots, traces)
│
├── tests/
│   ├── pages/              # Page Object Model (POM) files
│   │   ├── BasePage.js
│   │   ├── LoginPage.js
│   │   └── SecureAreaPage.js
│   │
│   └── specs/              # Test files
│       └── login.spec.js
│
├── .env                    # Private environment variables (NOT committed)
├── .env.example            # Template for environment variables (safe to commit)
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── package.json
├── playwright.config.js
└── README.md
```

## 🔧 Requirements

Before installing and running the tests, ensure you have:

- Node.js (LTS recommended)  
- npm  
- Git  
- **Allure Commandline** (required)

Install Allure globally:

```bash
npm install -g allure-commandline
```

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/barbaraalozada/ZCL.git
cd ZCL
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## 🔧 Environment Variables

Create a `.env` file from the example template:

```bash
cp .env.example .env
```

Add your values:

```env
USERNAME=testUser
PASSWORD=testPassword
```

Your code loads these variables using **dotenv**.

## ▶️ Running Tests

Run both browsers (Chromium + Firefox):

```bash
npm run all
```

Run Chromium only:

```bash
npm run chrome
```

Run Firefox only:

```bash
npm run firefox
```

## 🧪 Allure Report

This project **requires Allure** to visualize test results.

Clean previous report results:

```bash
npm run clean.report.results
```

Generate and open the Allure report:

```bash
npm run report
```

This will:

- Generate the HTML report from `allure-results/`
- Output into `allure-report/`
- Open the report in your browser

## 🧹 Linting (Optional)

Check code style:

```bash
npm run lint
```

Auto-fix issues:

```bash
npm run lint.fix
```

## 📚 Technologies Used

- Playwright – UI automation  
- JavaScript (ES Modules)  
- Node.js  
- Dotenv – environment variable management  
- Allure Playwright – test reporting  
- ESLint – code quality  

## 🙋 Support

If you need help or want to report an issue:  
👉 https://github.com/barbaraalozada/ZCL/issues

---

# Part 2: Spot the Differences
This script compares two images and generates a visual diff image highlighting the differences between them using Resemble.js.

It automatically handles:

- Creating the output folder if it does not exist.
- Validating that the input image files exist.
- Handling errors clearly if reading images or saving the diff fails.

This script is designed as a standalone, easy-to-use tool for visually highlighting differences between images.

## 🔧 Requirements

### ⚙️ Core Dependencies

- Node.js v16+
- npm
  Libraries:
```bash
npm install resemblejs fs-extra
```
⚠️ ⚠️ Resemble.js requires the canvas library for Node.js support. Because canvas relies on native code, you must install system dependencies before running npm install canvas.

### 🍎 macOS Instructions
On macOS, use Homebrew to install the necessary dependencies (cairo, pango, etc.):
```bash
brew install pkg-config cairo pango libpng jpeg giflib librsvg
npm install canvas
```
### 🌍 Other Operating Systems (Linux/Windows)
For detailed instructions on installing the system dependencies required for Linux (e.g., Debian, Fedora) and Windows, please refer to the official node-canvas documentation:

System Dependencies Guide: https://github.com/Automattic/node-canvas/wiki

## 📁 Project Structure

```
ZCL/
imageComparison/
├─ images/              # Folder containing images to compare
│   ├─ Image1.jpg
│   └─ Image2.jpg
├─ output/              # Folder where the diff image will be saved (auto-created)
│   └─ diff.jpg
├─ comments.txt         # Visual observation (Please, read it)
└─ compare.js           # Main comparison script
```

## 💡 Usage

+ Place the images you want to compare inside the `images/` folder.

+ Update ```compare.js``` with the paths to your images and the desired output path:
```js
import { compareImages } from "./compareImages.js";

compareImages(
  "images/img1.png",
  "images/img2.png",
  "output/diff.png"
);
```
+ Run the script in the terminal:
```bash
npm run compare
```
+ After running, the ```diff.png``` image will be generated in the `output/` folder, showing the visual differences between the two images.

## 🔎 Manual execution

The visual differences I found between the two images are documented in the `comments.txt` file.

---
