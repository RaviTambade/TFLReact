
# 🧱 E-Commerce React Folder Structure (Feature-Oriented)

Below is a **production-ready, mentor-approved React folder structure** for your **E-Commerce application**, directly mapped from the **UI components and features** we discussed.


```
src/
│
├── app/
│   ├── App.jsx
│   ├── routes.jsx
│   └── store.js                # Redux / Context setup
│
├── components/                 # Reusable UI components
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── MainLayout.jsx
│   │
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Loader.jsx
│   │   └── ErrorMessage.jsx
│   │
│   ├── navigation/
│   │   ├── SearchBar.jsx
│   │   ├── CategoryMenu.jsx
│   │   └── UserMenu.jsx
│   │
│   └── product/
│       ├── ProductCard.jsx
│       ├── ProductList.jsx
│       └── ImageGallery.jsx
│
├── pages/                      # Route-level components
│   ├── HomePage.jsx
│   │
│   ├── product/
│   │   ├── ProductCatalogPage.jsx
│   │   └── ProductDetailsPage.jsx
│   │
│   ├── cart/
│   │   └── CartPage.jsx
│   │
│   ├── checkout/
│   │   └── CheckoutPage.jsx
│   │
│   ├── auth/
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   │
│   └── orders/
│       ├── OrdersPage.jsx
│       └── OrderDetailsPage.jsx
│
├── features/                   # Business feature modules
│   ├── product/
│   │   ├── productSlice.js
│   │   ├── productService.js
│   │   └── productApi.js
│   │
│   ├── cart/
│   │   ├── cartSlice.js
│   │   └── cartService.js
│   │
│   ├── auth/
│   │   ├── authSlice.js
│   │   ├── authService.js
│   │   └── authApi.js
│   │
│   ├── order/
│   │   ├── orderSlice.js
│   │   └── orderService.js
│   │
│   └── payment/
│       └── paymentService.js
│
├── hooks/                      # Custom React hooks
│   ├── useAuth.js
│   ├── useCart.js
│   └── useFetch.js
│
├── services/                   # Cross-feature services
│   ├── apiClient.js            # axios / fetch wrapper
│   ├── storageService.js       # localStorage/sessionStorage
│   └── authTokenService.js
│
├── utils/
│   ├── constants.js
│   ├── validators.js
│   └── formatters.js
│
├── styles/
│   ├── global.css
│   └── theme.css
│
├── assets/
│   ├── images/
│   └── icons/
│
└── index.js
```


# 🧠 How This Maps to Your E-Commerce Features

## 🛍 Product Catalog

```
pages/product/ProductCatalogPage.jsx
components/product/ProductList.jsx
features/product/productService.js
```

## 🛒 Shopping Cart

```
pages/cart/CartPage.jsx
features/cart/cartSlice.js
hooks/useCart.js
```

## 🔐 Authentication

```
pages/auth/LoginPage.jsx
features/auth/authService.js
services/authTokenService.js
```
## 💳 Payment Processing

```
pages/checkout/CheckoutPage.jsx
features/payment/paymentService.js
```

## 🚚 Shipment & Order Tracking

```
pages/orders/OrderDetailsPage.jsx
features/order/orderService.js
```


# 🎯 Folder Responsibility Rule (Golden Rule for Students)

| Folder        | Responsibility                |
| ------------- | ----------------------------- |
| `pages/`      | Routing + page composition    |
| `components/` | Pure UI (no API calls)        |
| `features/`   | Business logic + state        |
| `services/`   | Infrastructure (API, storage) |
| `hooks/`      | Reusable logic                |
| `utils/`      | Helpers only                  |


# ⚠️ Common Mistakes to Warn Students About

❌ API calls inside UI components
❌ Business logic in `pages/`
❌ Using `localStorage` directly everywhere
❌ One giant `components` folder
❌ No separation between UI and state


# 1️⃣ Create Base React App (Vite + JSX)

  Let’s **combine the Vite React app** setup with the **e-commerce folder structure** we designed with  **CLI commands + folder creation steps** so you can directly scaffold the project.

This will be **ready for JSX components**, React Router, and future state management (Redux / Context).



```bash
# Create React project
npm create vite@latest ecommerce-ui -- --template react

# Move into project
cd ecommerce-ui

# Install dependencies
npm install

# Optional: Install React Router for navigation
npm install react-router-dom

# Optional: Install Redux Toolkit if planning to use
npm install @reduxjs/toolkit react-redux

# Start development server
npm run dev
```


# 2️⃣ Scaffold E-Commerce Folder Structure

From the `src/` folder, create the following folders and files:

```bash
# Windows Machine Core app folder
cd src

:: Core app folder
mkdir app
type nul > app\App.jsx
type nul > app\routes.jsx
type nul > app\store.js

:: Pages
mkdir pages
mkdir pages\product pages\cart pages\checkout pages\auth pages\orders

type nul > pages\HomePage.jsx
type nul > pages\product\ProductCatalogPage.jsx
type nul > pages\product\ProductDetailsPage.jsx
type nul > pages\cart\CartPage.jsx
type nul > pages\checkout\CheckoutPage.jsx
type nul > pages\auth\LoginPage.jsx
type nul > pages\auth\RegisterPage.jsx
type nul > pages\orders\OrdersPage.jsx
type nul > pages\orders\OrderDetailsPage.jsx

:: Components
mkdir components
mkdir components\layout components\common components\navigation components\product

type nul > components\layout\Header.jsx
type nul > components\layout\Footer.jsx
type nul > components\layout\MainLayout.jsx

type nul > components\common\Button.jsx
type nul > components\common\Input.jsx
type nul > components\common\Modal.jsx
type nul > components\common\Loader.jsx
type nul > components\common\ErrorMessage.jsx

type nul > components\navigation\SearchBar.jsx
type nul > components\navigation\CategoryMenu.jsx
type nul > components\navigation\UserMenu.jsx

type nul > components\product\ProductCard.jsx
type nul > components\product\ProductList.jsx
type nul > components\product\ImageGallery.jsx

:: Features (business logic + state)
mkdir features
mkdir features\product features\cart features\auth features\order features\payment

type nul > features\product\productSlice.js
type nul > features\product\productService.js
type nul > features\product\productApi.js

type nul > features\cart\cartSlice.js
type nul > features\cart\cartService.js

type nul > features\auth\authSlice.js
type nul > features\auth\authService.js
type nul > features\auth\authApi.js

type nul > features\order\orderSlice.js
type nul > features\order\orderService.js

type nul > features\payment\paymentService.js

:: Hooks
mkdir hooks
type nul > hooks\useAuth.js
type nul > hooks\useCart.js
type nul > hooks\useFetch.js

:: Services (API / storage)
mkdir services
type nul > services\apiClient.js
type nul > services\storageService.js
type nul > services\authTokenService.js

:: Utils
mkdir utils
type nul > utils\constants.js
type nul > utils\validators.js
type nul > utils\formatters.js

:: Styles
mkdir styles
type nul > styles\global.css
type nul > styles\theme.css

:: Assets
mkdir assets
mkdir assets\images assets\icons


# Linux Machine Core app folder
cd src

# Core app folder
mkdir app
touch app/App.jsx
touch app/routes.jsx
touch app/store.js

# Pages
mkdir pages
mkdir pages/product pages/cart pages/checkout pages/auth pages/orders

touch pages/HomePage.jsx
touch pages/product/ProductCatalogPage.jsx
touch pages/product/ProductDetailsPage.jsx
touch pages/cart/CartPage.jsx
touch pages/checkout/CheckoutPage.jsx
touch pages/auth/LoginPage.jsx
touch pages/auth/RegisterPage.jsx
touch pages/orders/OrdersPage.jsx
touch pages/orders/OrderDetailsPage.jsx

# Components
mkdir components
mkdir components/layout components/common components/navigation components/product

touch components/layout/Header.jsx
touch components/layout/Footer.jsx
touch components/layout/MainLayout.jsx

touch components/common/Button.jsx
touch components/common/Input.jsx
touch components/common/Modal.jsx
touch components/common/Loader.jsx
touch components/common/ErrorMessage.jsx

touch components/navigation/SearchBar.jsx
touch components/navigation/CategoryMenu.jsx
touch components/navigation/UserMenu.jsx

touch components/product/ProductCard.jsx
touch components/product/ProductList.jsx
touch components/product/ImageGallery.jsx

# Features (business logic + state)
mkdir features
mkdir features/product features/cart features/auth features/order features/payment

touch features/product/productSlice.js
touch features/product/productService.js
touch features/product/productApi.js

touch features/cart/cartSlice.js
touch features/cart/cartService.js

touch features/auth/authSlice.js
touch features/auth/authService.js
touch features/auth/authApi.js

touch features/order/orderSlice.js
touch features/order/orderService.js

touch features/payment/paymentService.js

# Hooks
mkdir hooks
touch hooks/useAuth.js
touch hooks/useCart.js
touch hooks/useFetch.js

# Services (API / storage)
mkdir services
touch services/apiClient.js
touch services/storageService.js
touch services/authTokenService.js

# Utils
mkdir utils
touch utils/constants.js
touch utils/validators.js
touch utils/formatters.js

# Styles
mkdir styles
touch styles/global.css
touch styles/theme.css

# Assets
mkdir assets
mkdir assets/images assets/icons
```

# 3️⃣ Folder Overview

```
src/
├── app/
│   ├── App.jsx
│   ├── routes.jsx
│   └── store.js
├── components/
│   ├── layout/          # Header, Footer, MainLayout
│   ├── common/          # Button, Input, Loader, Modal
│   ├── navigation/      # SearchBar, CategoryMenu, UserMenu
│   └── product/         # ProductCard, ProductList, ImageGallery
├── pages/
│   ├── HomePage.jsx
│   ├── product/         # Catalog + Details
│   ├── cart/            # CartPage
│   ├── checkout/        # CheckoutPage
│   ├── auth/            # LoginPage, RegisterPage
│   └── orders/          # OrdersPage, OrderDetailsPage
├── features/            # State & Business logic
├── hooks/               # Custom hooks
├── services/            # API + Storage
├── utils/               # Constants, Validators, Formatters
├── styles/              # CSS / themes
└── assets/              # Images, Icons
```

# 4️⃣ Next Steps (Optional)

1. **Setup App.jsx & routes.jsx** with React Router.
2. **Connect features** using Redux Toolkit or React Context.
3. **Create placeholder components** in each folder to test routing.
4. **Use apiClient.js** for all fetch/axios calls.
5. **Use storageService.js** for localStorage/sessionStorage handling.





# 1️⃣ `src/app/routes.jsx`

 Let’s create a **ready-to-run React skeleton** for your e-commerce app using the folder structure we just defined. This will include **`App.jsx`**, **`routes.jsx`**, and placeholder pages/components. You’ll be able to **run the app immediately** and see the routing in action.



```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "../pages/HomePage";
import ProductCatalogPage from "../pages/product/ProductCatalogPage";
import ProductDetailsPage from "../pages/product/ProductDetailsPage";
import CartPage from "../pages/cart/CartPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import OrdersPage from "../pages/orders/OrdersPage";
import OrderDetailsPage from "../pages/orders/OrderDetailsPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductCatalogPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
```

# 2️⃣ `src/app/App.jsx`

```jsx
import AppRoutes from "./routes";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "80vh", padding: "1rem" }}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

# 3️⃣ Placeholder Components (Quick Setup)

You can add **minimal JSX** so each page renders something visible:

### Example: `src/pages/HomePage.jsx`

```jsx
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to E-Commerce Store</h1>
      <p>Explore products and start shopping!</p>
    </div>
  );
};

export default HomePage;
```

### Example: `src/pages/product/ProductCatalogPage.jsx`

```jsx
const ProductCatalogPage = () => {
  return (
    <div>
      <h1>Product Catalog</h1>
      <p>List of all products will appear here.</p>
    </div>
  );
};

export default ProductCatalogPage;
```

### Example: `src/pages/cart/CartPage.jsx`

```jsx
const CartPage = () => {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <p>Items you added to cart will appear here.</p>
    </div>
  );
};

export default CartPage;
```

### Minimal Header & Footer Components

#### `src/components/layout/Header.jsx`

```jsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "1rem", background: "#f5f5f5" }}>
      <h2>E-Commerce Store</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
```

#### `src/components/layout/Footer.jsx`

```jsx
const Footer = () => {
  return (
    <footer style={{ padding: "1rem", background: "#f5f5f5", marginTop: "2rem" }}>
      <p>&copy; 2026 E-Commerce Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
```

# 4️⃣ `src/main.jsx` (Entry Point)

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```


# 5️⃣ Run the App

```bash
npm run dev
```

**Go to:** `http://localhost:5173`

You should see:

* **Header with navigation**
* **Home Page content**
* **Working routing** to Products, Cart, Login, etc.
* **Footer at the bottom**


