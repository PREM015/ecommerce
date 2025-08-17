
# 🛒 BharatCart – Fullstack E-Commerce Website

BharatCart is a modern fullstack **E-Commerce platform** built with **Next.js 14 (App Router)**, **Prisma ORM**, and **Supabase (Postgres)**.  
It supports user authentication, product management, cart, orders, and an admin panel to manage the store.

🚀 **Live Demo:** [bharatcart-ten.vercel.app](https://bharatcart-ten.vercel.app/)

---

## ✨ Features

### 👤 User Features
- User authentication (login / register)
- Browse products with categories
- Product details with images, ratings, and reviews
- Add to cart & update quantities
- Checkout flow with orders
- Responsive & mobile-friendly UI

### 🛠 Admin Features
- Add / Edit / Delete products
- Manage categories
- Manage orders & users
- Dashboard view for analytics

---

## 🏗 Tech Stack

- **Frontend:** [Next.js 14](https://nextjs.org/), React, TypeScript, TailwindCSS, shadcn/ui  
- **Backend:** Next.js API routes, Prisma ORM  
- **Database:** Supabase (Postgres)  
- **Authentication:** NextAuth.js (with JWT)  
- **Deployment:** [Vercel](https://vercel.com/)  

---

## 📂 Project Structure

```

src/
│── app/                  # Next.js App Router
│   ├── api/              # API routes
│   │   ├── products/     # Product APIs
│   │   ├── categories/   # Category APIs
│   │   ├── cart/         # Cart APIs
│   │   ├── orders/       # Order APIs
│   │   └── users/        # User APIs
│   └── (pages)/          # UI pages (login, register, cart, product, admin etc.)
│
│── lib/                  # Core backend logic
│   ├── controllers/      # Request controllers
│   ├── models/           # Prisma database models
│   ├── validators/       # Zod validators
│   ├── middleware/       # Middlewares (e.g., input validation)
│   └── db.ts             # Prisma client instance
│
│── constants/            # Static data (e.g., avatars, config)
│── types/                # TypeScript types

````

---

## ⚙️ Setup Instructions (Local)

1. **Clone repository**
   ```bash
   git clone https://github.com/your-username/bharatcart.git
   cd bharatcart
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**
   Create a `.env` file in the root:

   ```env
   DATABASE_URL="your-supabase-postgres-url"
   NEXTAUTH_SECRET="your-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Run Prisma migrations**

   ```bash
   npx prisma migrate dev
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. Visit: `http://localhost:3000`

---

## 🚀 Deployment (Vercel)

* Push your code to GitHub
* Connect the repo on [Vercel](https://vercel.com)
* Add environment variables in Vercel Dashboard
* Vercel auto-builds and deploys the app 🎉

---

## 🤝 Contributing

Feel free to fork and create PRs.
Suggestions & improvements are welcome!

---

## 📜 License

MIT License © 2025 BharatCart



