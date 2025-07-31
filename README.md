
<h1 align="center">🛍️ BharatCart</h1>
<p align="center"><b>A high-performance, AI-powered eCommerce platform built with Next.js 14, Tailwind CSS, and Google Gemini API</b></p>

<p align="center">
  <img src="public/images/ui/placeholder.png" alt="BharatCart Banner" width="300" />
</p>

---

## 🚀 Live Preview

> **Coming Soon** – Stay tuned!

---

## ✨ Key Features

- ⚡️ **Fast & modern UI** with optimized routing (Next.js App Router)
- 🧠 **Built-in AI chatbot** powered by Google Gemini API
- 📱 **Mobile-first design** with seamless responsiveness
- 🖼️ **Smart image handling** with graceful fallbacks
- 🎯 **Modular architecture** with scalable file structure
- 🔍 SEO-friendly, performant & accessible
- 🧹 **Clean, maintainable codebase** ideal for production

---

## 📁 Project Structure

```

/bharatcart
├── public/
│   └── images/
│       ├── banners/
│       ├── categories/
│       └── ui/                  # Placeholder images, cart icons, etc.
│
├── src/
│   ├── app/                     # Routing, layouts, and pages
│   ├── components/
│   │   ├── common/              # Shared components (Navbar, Footer, Chatbox)
│   │   └── section/             # Homepage sections
│   ├── styles/                  # Tailwind config and global styles
│   └── utils/                   # Helper functions, API handlers
│
├── .env.local                   # Environment variables (API keys)
└── README.md

````

---

## 🤖 BharatBot – AI Chat Support

> Located in: `src/components/common/Chatbox.tsx`

A floating chatbot powered by **Google Gemini API** offering real-time assistance to users.

### Setup Instructions

1. Get your free API key at [makersuite.google.com](https://makersuite.google.com/app/apikey)
2. Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key
````

---

## 🖼️ Image Strategy

* All product/category banners are stored in `/public/images`
* Uses Next.js `<Image />` for optimization
* Automatic fallback to `/images/ui/placeholder.png` when image is missing

---

## 🛠️ Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/bharatcart.git

# 2. Go to the project folder
cd bharatcart

# 3. Install dependencies
npm install

# 4. Add your Gemini API Key
touch .env.local
# Add:
# NEXT_PUBLIC_GEMINI_API_KEY=your_key_here

# 5. Start development server
npm run dev
```

➡️ Visit: [http://localhost:3000](http://localhost:3000)

---

## 🏠 Homepage Sections

* ✅ Hero Banner (rotating promotional images)
* ✅ Product Categories (interactive with hover)
* ✅ Trending & New Arrivals
* ✅ Brand Slider
* ✅ Newsletter Signup
* ✅ Footer with helpful links & branding

---

## ⚙️ Tech Stack

| Tool                  | Purpose                              |
| --------------------- | ------------------------------------ |
| **Next.js 14**        | App routing, SSR, image optimization |
| **React**             | UI components and state management   |
| **Tailwind CSS**      | Utility-first styling system         |
| **TypeScript**        | Strong typing for scalable code      |
| **Lucide Icons**      | Elegant, consistent icons            |
| **Google Gemini API** | AI Chatbot integration               |

---

## 🌟 Upcoming Features

* 🛒 Cart & Checkout pages
* 🔐 User authentication (Sign in/up)
* 🔍 Search, filter & sorting
* 🧾 Order history tracking
* 🌐 Multilingual (i18n) support

---

## 📬 Contact

> Made with ❤️ by [Raj](https://linkedin.com/in/your-profile)

📧 [your-email@example.com](mailto:your-email@example.com)
🔗 [LinkedIn](https://linkedin.com/in/your-profile)
🌐 [Portfolio](https://your-portfolio.com)

---

## 📝 License

Licensed under the [MIT License](LICENSE).

---

