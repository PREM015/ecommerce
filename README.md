
<h1 align="center">🛍️ BharatCart</h1>
<p align="center">
  <b>A modern, AI-powered eCommerce platform built with Next.js 14, Tailwind CSS & Google Gemini API</b>
</p>

<p align="center">
  <img src="public/images/ui/placeholder.png" alt="BharatCart Banner" width="300" />
</p>


---

## 🚀 Live Demo

> Coming Soon...

---

## ✨ Features

- 💼 **Enterprise-level UI** with category-based product filtering
- 🎯 **Modular & optimized** with `App Router` and dynamic routing
- 🧠 **Real-time AI Chatbot** powered by Google Gemini
- 📱 **Fully responsive** design for mobile, tablet, and desktop
- 🖼️ **Smart image handling** with fallback placeholders
- 📦 Organized codebase: scalable, clean, and easy to maintain
- 🌐 SEO-ready with performance optimizations

---

## 📁 Folder Structure

```

/ecommerce
├── public/
│   ├── images/
│   │   ├── banners/
│   │   ├── categories/
│   │   └── ui/                # avatar-placeholder.png, cart-icon.svg, error.png, etc.
│
├── src/
│   ├── app/                   # App Router pages and layout
│   ├── components/
│   │   ├── common/            # Navbar, Footer, Chatbox
│   │   └── section/           # Homepage sections (Hero, Categories, New Arrivals)
│   ├── styles/                # Global styles & Tailwind config
│   └── utils/                 # API utilities, helper functions
│
├── .env.local                 # API Keys and secrets
└── README.md

````

---

## 🧠 AI Chatbot — BharatBot

> Location: `src/components/common/Chatbox.tsx`

- Appears bottom-right on homepage
- React + Lucide icons + Gemini API
- Instant replies to customer questions

🛠️ **Setup Gemini API**  
Sign up for a [Gemini API key](https://makersuite.google.com/app/apikey) and add this to `.env.local`:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key
````

---

## 📷 Image Strategy

* Product & category images stored under `public/images`
* Graceful fallback to `/images/ui/placeholder.png` if missing
* Optimized using Next.js `<Image />` component

---

## 🔧 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/bharatcart.git

# 2. Navigate to the project folder
cd bharatcart

# 3. Install dependencies
npm install

# 4. Create a .env.local file with your Gemini API Key
touch .env.local
# Add:
# NEXT_PUBLIC_GEMINI_API_KEY=your_key_here

# 5. Start development server
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🛒 Home Sections Included

* ✅ Hero Banner with rotating images
* ✅ Product Categories with hover effects
* ✅ New Arrivals & Trending Products
* ✅ Brand Showcase Slider
* ✅ Newsletter Sign-up
* ✅ Elegant Footer with quick links

---

## ⚙️ Built With

| Tech         | Usage                 |
| ------------ | --------------------- |
| Next.js 14   | App routing, SSR, SEO |
| React        | Component-based UI    |
| Tailwind CSS | Utility-first styling |
| TypeScript   | Type-safe development |
| Lucide Icons | Beautiful iconography |
| Gemini API   | AI-powered chatbot    |

---

## 📦 Future Enhancements

* 🛒 Cart & Checkout Pages
* 🔐 User Authentication
* 🔍 Search & Filter Logic
* 🧾 Order History
* 🌍 i18n Support

---

## 📬 Contact

Made with ❤️ by **Raj**
📧 \[[your-email@example.com](mailto:your-email@example.com)]
🔗 [LinkedIn](https://linkedin.com/in/your-profile) — [Portfolio](https://your-portfolio.com)

---

## 📝 License

This project is licensed under the **MIT License**.
