# Project Idea: Food Delivery App (Zomato Clone)

## Overview
This project is a comprehensive, full-stack food delivery application inspired by platforms like Zomato and Swiggy. It connects hungry customers with a wide variety of food items while providing restaurant owners/admins with a robust dashboard to manage their inventory and track incoming orders.

## Core Features

### Customer Facing (Frontend App)
1. **Browse & Search:** Customers can explore a diverse menu, filter by categories (Salads, Rolls, Deserts, etc.), and view detailed food cards.
2. **Cart Management:** A dynamic cart system that calculates subtotals, applies delivery fees, and shows real-time item counts.
3. **Authentication:** Secure user registration and login system with JWT tokens.
4. **Checkout & Payment:** 
   - Integration with **Stripe** for secure credit/debit card payments.
   - Support for **Cash on Delivery (COD)**.
5. **Order Tracking:** A dedicated "My Orders" section displaying active orders and order history, featuring automated delivery status updates and toast notifications.

### Admin Facing (Admin Dashboard)
1. **Secure Access:** Dedicated admin login to protect sensitive business operations.
2. **Inventory Management:** Add new food items (with image uploads), view the list of existing items, and remove discontinued items.
3. **Order Fulfillment:** View all incoming orders globally, check delivery addresses, and update order statuses (e.g., "Food Processing", "Out for delivery", "Delivered") in real-time.

## Technology Stack
- **Frontend:** React.js, Vite, Context API for state management, CSS for styling.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (Atlas) & Mongoose ODM.
- **Authentication:** JSON Web Tokens (JWT) & bcrypt for password hashing.
- **Payment Gateway:** Stripe.
- **File Storage:** Multer (for handling image uploads).