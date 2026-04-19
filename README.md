# Food Delivery Application (Zomato Clone)

This repository contains a full-stack, end-to-line Food Delivery Application inspired by Zomato. It is divided into three main components: a User-facing Frontend (`/frontend`), an Admin Dashboard (`/admin`), and a Node.js API Backend (`/backend`).

## 🚀 Features

### Frontend (Customer Portal)
- Browse a diverse menu of food items categorized for easy filtering.
- Dynamic shopping cart with real-time updates.
- Secure user authentication (Login/Register).
- Seamless checkout process featuring both **Stripe Payments** and **Cash on Delivery**.
- A dedicated "My Orders" page showing active orders and historical purchases.
- Animated toast notifications and auto-updating delivery statuses.

### Admin Dashboard
- Secured behind an Admin login.
- Easily add new menu items (supports image uploads).
- View and manage the entire food inventory.
- Track all incoming orders globally and update their delivery statuses (e.g., "Food Processing" -> "Out for delivery" -> "Delivered").

### Backend
- Built on **Node.js** and **Express.js**.
- Stores data securely in **MongoDB** using Mongoose.
- Protects user passwords with **bcrypt** and manages sessions with **JWT**.
- Integrates with the **Stripe API** for secure, reliable payment processing.

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd zomato-clone--main
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory with your credentials:
   ```env
   MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/zomato-clone
   PORT=4000
   JWT_SECRET=your_super_secret_key
   SALT=10
   STRIPE_SECRET_KEY=sk_test_your_stripe_key
   FRONTEND_URL=http://localhost:5173
   ```
   Start the backend server:
   ```bash
   npm run server
   ```

3. **Setup Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will run at `http://localhost:5173/`.

4. **Setup Admin Dashboard:**
   ```bash
   cd admin
   npm install
   npm run dev
   ```
   The admin panel will run at `http://localhost:5174/`.

## 🤝 Contribution
Feel free to submit issues or pull requests. Contributions are always welcome!