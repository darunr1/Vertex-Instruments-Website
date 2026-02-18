# Vertex Instruments Website

Marketing website for **Vertex Instruments**, a startup focused on AI-enhanced TI-84 calculators and calculator program packs.

## Overview

This repository contains a static landing page that presents:

- Brand messaging for Vertex Instruments
- Product tiers for AI TI-84 calculators
- Program pack offerings and pricing
- Process, FAQ, and contact sections

## Tech Stack

- **HTML5** (`index.html`)
- **CSS3** (`styles.css`)
- **Vanilla JavaScript** (`script.js`)

No build tools or framework setup are required.

## Project Structure

```
.
├── assets/
│   └── vertex-logo.svg
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Product & Pricing Content

Current website content includes:

### AI Calculator Models

- **Vertex AI TI-84 Core** — **$300**
- **Vertex AI TI-84 Pro+** — **$400**

### Calculator Program Packs

- **Starter Pack** — **$29**
- **STEM Pack** — **$59**
- **Exam Prep Pack** — **$79**

## Run Locally

Because this is a static site, run any local web server from the repository root.

### Option 1: Python

```bash
python3 -m http.server 8000
```

Open: <http://localhost:8000>

### Option 2: Node

```bash
npx serve .
```

Then open the URL shown in your terminal.