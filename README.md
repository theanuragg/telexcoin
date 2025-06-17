# Telexcoin — Launching Soon Page

This is the **Telexcoin Launching Soon landing page**. Each page follows a consistent design system and is ready for future Figma design drop-ins.

## 🔧 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (no custom CSS)
- **Structure**: Component-based
- **Deployment**: Vercel (auto-deployed with GitHub integration)

---

## 🗂️ Repository Structure

```
/Telexcoin
|
├── pages/
│   ├── index.tsx
│   ├── about.tsx
│   └── faq.tsx
│
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
|
│── shared/
│       ├── Button.tsx
│       ├── Container.tsx
│       └── Layout.tsx
|
├── styles/
│   └── globals.css
│   └── tailwind.config.js
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧪 Getting Started

```bash
npm install
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## 🔍 SEO Implementation

This project implements comprehensive SEO practices using Next.js Head component for optimal search engine visibility. Below is an example of our SEO implementation:

```jsx
<Head>
  <title>title</title>
  <meta
    name="description"
    content="description"
  />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  {/* Canonical URL */}
  <link
    rel="canonical"
    href="https://domainname.earth/"
  />

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta
    property="og:title"
    content="title"
  />
  <meta
    property="og:description"
    content="description"
  />
  <meta
    property="og:url"
    content="https://domainname.earth/"
  />
  <meta
    property="og:type"
    content="website"
  />
  <meta
    property="og:image"
    content="https://domainname.earth/og-image.jpg"
  />

  {/* Twitter Card */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />
  <meta
    name="twitter:title"
    content="title"
  />
  <meta
    name="twitter:description"
    content="description"
  />
  <meta
    name="twitter:image"
    content="https://domainname.earth/og-image.jpg"
  />
</Head>
```

# ✔️ Checking Lint

```bash
npm run lint
```

## Prettier Rules

.prettierrc.json

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "auto",
  "jsxSingleQuote": false,
  "bracketSameLine": false,
  "singleAttributePerLine": true
}
```

## Lint Rules

.eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "react/no-unescaped-entities": "off"
  }
}
```

## 📄 License

MIT © 2025 Telexcoin
