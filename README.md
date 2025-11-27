# Zero Copy Labs Test
- This repository contains UI and API automated tests built with Node.js, JavaScript, Playwright, and Allure Reports. This is a test project, not an application, and its purpose is to execute automated browser tests using the Page Object Model (POM) as well as API tests for validating backend functionality.
---

## 📁 Project Structure

```
ZCL/
│
├── allure-report/                         # Generated HTML report (created after running "npm run report")
├── allure-result/                         # Raw Allure test result files (created automatically)
├── data/                                  # Test data folder
│   └── images/                            # Folder containing images to compare
│
├── imageComparison/
│   └── Observations.md                    # My observation of the image comparison task
│
├── node_modules/
├── output/                                # Folder where the diff image will be saved (auto-created)
├── test-results/                          # Playwright test artifacts (screenshots, traces)
│
├── tests/
│   ├── pages/                             # Page Object Model (POM) files
│   │   ├── BasePage.js
│   │   ├── LoginPage.js
│   │   └── SecureAreaPage.js
│   
│   └── specs/                             # Test files
│   │   ├── api                            # Part 3: API Testing task
│   │   │   └── api.spec.js
│   │   │ 
│   │   ├── ui                             # Part 1: Automation Script
│   │   │   └── login.spec.js
│   │   │
│   │   ├── visual                         # Part 2: Spot the Differences
│   │   │   └── imageComparison.spec.js
│
├── .env                                   # Private environment variables (NOT committed)
├── .env.example                           # Template for environment variables (safe to commit)
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── package.json
├── playwright.config.js
└── README.md
```
## 📚 Technologies Used

- Playwright – UI automation  
- JavaScript (ES Modules)  
- Node.js  
- Dotenv – environment variable management  
- Allure Playwright – test reporting  
- ESLint – code quality  
- Resemble.js – to handle image comparison  
---
# Part 1: Automation Script

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
npm run part1
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
⚠️ Resemble.js requires the canvas library for Node.js support. Because canvas relies on native code, you must install system dependencies before running npm install canvas.

### 🍎 macOS Instructions
On macOS, use Homebrew to install the necessary dependencies (cairo, pango, etc.):
```bash
brew install pkg-config cairo pango libpng jpeg giflib librsvg
npm install canvas
```
### 🌍 Other Operating Systems (Linux/Windows)
For detailed instructions on installing the system dependencies required for Linux (e.g., Debian, Fedora) and Windows, please refer to the official node-canvas documentation:

System Dependencies Guide: https://github.com/Automattic/node-canvas/wiki

## 💡 Usage

+ Place the images you want to compare inside the `data/images/` folder.

+ Update `imageComparison.spec.js` with the paths to your images and the desired output path:
```js
const img1 = 'data/images/Image1.jpg';
const img2 = 'data/images/Image2.jpg';
```
+ Run the script in the terminal:
```bash
npm run part2
```
+ After running, the `diff.jpg` image will be generated in the `output/` folder, showing the visual differences between the two images.

## 🔎 Manual execution

The visual differences I found between the two images are documented in the [Observations](imageComparison/Observations.md) file.

---

# Part 3: API Testing Task
This section of the project contains automated API tests using Playwright’s request fixture.
The goal is to validate the behavior of the API hosted at:
```
https://reqres.in/api
```
## ▶️ Running API test only

To execute only the API project:
```bash
npm run part3
```
---
# ▶️ Running and Generate Report of All Tests

Run all tests:
```bash
npm run all
```
Clean test results:
```bash
npm run clean.report.results
```
Generate test report:

```bash
npm run report
```
