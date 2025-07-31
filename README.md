
# 🛒 BharatCart – A Modern E-Commerce Platform

**BharatCart** is a full-featured, modern e-commerce website built using **Next.js**, **TypeScript**, and **Tailwind CSS**. It supports dynamic product categories, image banners, a professional UI, and an integrated AI chatbot (powered by Google Gemini) for instant customer support.

---

## 🚀 Features

- ✅ Sleek & responsive UI with Tailwind CSS
- 🧭 Intuitive Navbar with dynamic categories
- 🖼️ Banner support for various product sections (fashion, beauty, electronics, etc.)
- 📦 Organized product listing with image placeholders
- 🤖 AI Chatbot using Google Gemini API
- 📁 Clean folder structure with separation of concerns
- ⚙️ Optimized performance using Next.js App Router
- 🧠 Built with scalability and maintainability in mind

---

## 📂 Project Structure

```

D:\code\projects\ecommerce
├── public/
│   ├── images/
│   │   ├── banners/
│   │   ├── categories/
│   │   └── ui/              # avatar-placeholder.png, cart-icon.svg, placeholder.png
├── src/
│   ├── app/                 # Routing (app router)
│   ├── components/
│   │   ├── common/          # Navbar, Footer
│   │   └── section/         # Homepage sections
│   ├── utils/               # API logic, helpers
│   └── styles/              # Tailwind config, global styles
├── .env.local               # Environment variables (e.g., Gemini API key)
└── README.md

````

---

## 🧠 AI Chatbot (Gemini)

> Located in: `src/components/common/Chatbox.tsx`

- Chat interface appears at the bottom-right of the site.
- Integrates with **Google Gemini API** via HTTPS.
- Replies instantly to user queries using natural language.

📌 To enable:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key
````

---

## 🖼️ Assets

* Product images stored under: `public/images/products/...`
* UI assets: `public/images/ui/`
* Banner images: `public/images/banners/`

Image fallback handled with:

```tsx
<Image
  src={product.image || "/images/ui/placeholder.png"}
  ...
/>
```

---

## 🛠️ Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment**
   Create `.env.local`:

   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key
   ```

3. **Run the dev server**

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` to browse the site.

---

## 📦 Tech Stack

* **Frontend**: Next.js (App Router), React, Tailwind CSS
* **AI**: Google Gemini Pro via REST API
* **Icons**: lucide-react
* **Hosting**: Vercel / Any Next.js-compatible platform

---

## 📸 Screenshots

> *Add screenshots here from the homepage, product page, chatbot, etc.*

---

## 📬 Contact

Feel free to reach out if you’d like to collaborate or need help integrating AI in your apps.

> Made with ❤️ by Raj
> © 2025 BharatCart

