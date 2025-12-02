# 🚀 AI Email Sequence Generator (Doodax)

<div align="center">

![Project Banner](https://img.shields.io/badge/Status-Live-success?style=for-the-badge&color=8B5CF6)
[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-doodax.com-blueviolet?style=for-the-badge&logo=google-chrome&logoColor=white)](https://doodax.com)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

<p align="center">
  <strong>Create High-Converting 3-Part Email Sequences in Seconds with Google Gemini AI.</strong>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-blue?style=flat-square&logo=tailwindcss">
  <img alt="Gemini API" src="https://img.shields.io/badge/Google_Gemini-PRO-blue?style=flat-square&logo=google-gemini">
</p>

</div>

---

## 📖 Introduction

**AI Email Sequence Generator** (hosted at [doodax.com](https://doodax.com)) is a professional-grade tool designed for marketers, entrepreneurs, and content creators. It eliminates the dreaded "blank page syndrome" by utilizing the advanced capabilities of the **Google Gemini 2.5 Flash** model to generate structured, persuasive, and brand-aligned email marketing sequences.

Whether you are launching a new product, welcoming newsletter subscribers, or nurturing leads, this tool provides a robust foundation for your email marketing strategy.

## ✨ Key Features

*   **⚡ Instant Generation:** Get a complete 3-email sequence (Welcome, Nurture, Conversion) in under 10 seconds.
*   **🌌 Immersive Galaxy UI:** Features a stunning, animated galaxy background with starfields and nebula effects using CSS animations.
*   **💎 Glassmorphism Design:** Modern, friendly interface using backdrop blurs and translucency for a premium feel.
*   **🎯 SEO Optimized:** Built with full SEO best practices, including JSON-LD Schema, meta tags, semantic HTML, and a comprehensive 3500-word on-page guide.
*   **📱 Fully Responsive:** Works flawlessly on desktop, tablet, and mobile devices.
*   **🎨 Themeable:** Includes Dark/Light mode toggle (defaults to Dark/Galaxy mode).
*   **📋 One-Click Copy:** Easily copy subject lines and bodies to your clipboard.
*   **ℹ️ Integrated Information:** Modals for Privacy Policy, Terms, and Guides keep the user on the page.

## 📂 Project Structure

```bash
├── public/              # Static assets
│   ├── favicon.svg      # Vector Brand Icon
│   ├── robots.txt       # SEO Crawler Directives
│   └── sitemap.xml      # SEO Page Index
├── index.html           # Main entry HTML with SEO meta & Galaxy CSS
├── src/
│   ├── components/      # React Components
│   │   ├── BlogPost.tsx # Massive SEO Article Component with Read More Logic
│   │   ├── InputPanel.tsx # Glassmorphism Input Form
│   │   ├── Modal.tsx    # Reusable Modal System for Static Content
│   │   ├── OutputPanel.tsx # Tabbed Email Output Display
│   │   ├── SettingsBar.tsx # Control Bar for Tone/Theme/Generate
│   │   └── Icons.tsx    # SVG Icon set
│   ├── services/        # API Logic
│   │   └── geminiService.ts # Google GenAI SDK Implementation
│   ├── types.ts         # TypeScript Interfaces
│   ├── constants.ts     # Default Values
│   ├── App.tsx          # Main Application Logic & Layout
│   └── index.tsx        # React Root
├── package.json
└── README.md
```

## 🛠️ Technology Stack

*   **Frontend Library:** React 19
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Custom Config for Colors/Glassmorphism/Animations)
*   **AI Backend:** Google Gemini API (`@google/genai` SDK)
*   **Build Tool:** Vite

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/ai-email-sequencer.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add your Google Gemini API Key.
    **Security Warning:** Do not commit this file to GitHub.
    ```bash
    API_KEY=your_gemini_api_key_here
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 📄 License

This project is open-source and available under the MIT License.

## 👨‍💻 Author

Developed by **[Hsini Mohamed](https://github.com/hsinidev)**.
*   **Website:** [doodax.com](https://doodax.com)
*   **Email:** hsini.web@gmail.com

---
<div align="center">
  <sub>Powered by HSINI MOHAMED</sub>
</div>