# Shopping Cart

**Author:** Manoj Khanavalkar  
**Purpose:** A simple shopping cart application built for practice and learning purposes.  

---

## 🛒 Project Overview

This is a front-end only shopping cart app that allows users to:

- View a list of available products  
- Add products to the cart  
- Delete individual items from the cart  
- Persist the cart in **localStorage**, so that items remain even after page refresh  
- Checkout (which clears the cart)

It’s built using **HTML**, **CSS**, and **JavaScript** — no backend required.

---

## 📁 File Structure

Shopping-Cart/
├── index.html
├── style.css
└── script.js

markdown
Copy code

- `index.html` — the markup and structure  
- `style.css` — styling (dark theme, buttons, layout)  
- `script.js` — the logic for listing products, handling cart operations, and localStorage integration  

---

## 🚀 How to Run

1. Clone or download this repository.  
2. Open `index.html` in your browser (e.g. by double-clicking it or running via a simple HTTP server).  
3. You should see the list of products.  
4. Click **“Add to cart”** to add items.  
5. You can delete items from the cart.  
6. The cart contents persist across refreshes via `localStorage`.

---

## 🧠 Key Concepts Implemented

- **DOM Manipulation** — dynamically creating product and cart item elements  
- **Event Handling** — listening for button clicks to add/delete items  
- **localStorage** — storing the cart so that it survives page reloads  
- **Array operations** (`push`, `splice`, `findIndex`) for managing the cart array  
- **Conditional UI updates** — showing/hiding “empty cart” message or total section  

---

## 🎨 Potential Enhancements (Future Ideas)

- Add **quantity** for cart items (so multiple of the same product combine)  
- Improve styling, responsiveness, and layout  
- Add product images, descriptions  
- Add a total items count  
- Show subtotal + tax / shipping  
- Use a front-end framework (React, Vue, etc.)  
- Add backend / API to fetch products or store orders  

---

## ✅ Notes / Tips

- Make sure your browser allows `localStorage` (it should by default)  
- When testing deletion and checkout, open browser dev tools → Application tab → **Local Storage** to inspect stored data  
- Be mindful that using the same `id` for multiple delete buttons causes conflicts — better to use `class` + `data-id`  

---

Thank you for checking out my project!  
Built with ❤️ by **Manoj Khanavalkar**.  
Feel free to experiment, modify, or build upon this as a learning base. 
