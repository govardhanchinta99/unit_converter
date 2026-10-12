# Unit Converter

A simple metric-to-imperial unit converter built with vanilla JavaScript and Vite.

Enter a value and select **Convert** to see conversions for:

- **Length:** meters and feet
- **Volume:** liters and gallons
- **Mass:** kilograms and pounds

Each result displays both directions of the conversion and is rounded to three decimal places.

## Getting started

### Prerequisites

- Node.js 20.19 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm start` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## How it works

The app uses the entered number as the input for all three conversion categories. Conversion results are calculated in `index.js` and rendered into the corresponding sections in `index.html`.

The conversion factors used are:

- `1 meter = 3.28084 feet`
- `1 liter = 0.264172 gallons`
- `1 kilogram = 2.20462 pounds`

## Project structure

```text
.
├── index.html   # Page structure and conversion sections
├── index.js     # Conversion logic and DOM updates
├── index.css    # Application styles
├── package.json  # Scripts and dependencies
└── vite.config.js
```

## Technology

- HTML
- CSS
- JavaScript
- Vite