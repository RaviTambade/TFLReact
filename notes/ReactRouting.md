# React routing

React routing is a way to handle navigation in a React application. When you build a React app, you often have multiple views or pages that users can navigate between. React Router is a popular library for managing this navigation.

Here’s a simple breakdown of how React routing works:

1. **Installation**:
   First, you need to install React Router. You can do this via npm or yarn:
   ```bash
   npm install react-router-dom
   # or
   yarn add react-router-dom
   ```

2. **Setting Up**:
   Import the necessary components from `react-router-dom` into your app. The most commonly used components are:
   - `BrowserRouter`: A router that uses HTML5 history API to keep your UI in sync with the URL.
   - `Routes`: A component that manages a collection of `Route` elements.
   - `Route`: Defines a path and the component that should be rendered when the path matches.
   - `Link`: A component used to navigate between routes.

   Here's a basic example of setting up routing:

   ```jsx
   import React from 'react';
   import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

   // Define your components for different routes
   const Home = () => <h2>Home</h2>;
   const About = () => <h2>About</h2>;
   const Contact = () => <h2>Contact</h2>;

   function App() {
     return (
       <Router>
         <nav>
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/about">About</Link>
             </li>
             <li>
               <Link to="/contact">Contact</Link>
             </li>
           </ul>
         </nav>

         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
       </Router>
     );
   }

   export default App;
   ```

3. **How It Works**:
   - **BrowserRouter** wraps your entire application to enable routing.
   - **Routes** holds a collection of **Route** elements.
   - **Route** matches the URL and renders the appropriate component based on the `path` prop.
   - **Link** components create links that update the URL without causing a full page reload, which provides a smoother user experience.

4. **Dynamic Routing**:
   React Router also supports dynamic routes and route parameters. For instance, if you want a route that matches any user profile, you can use a route parameter:

   ```jsx
   <Route path="/profile/:username" element={<Profile />} />
   ```

   Inside the `Profile` component, you can access the `username` parameter via hooks:

   ```jsx
   import { useParams } from 'react-router-dom';

   const Profile = () => {
     const { username } = useParams();
     return <h2>Profile of {username}</h2>;
   };
   ```

5. **Nested Routes**:
   You can also nest routes to create more complex layouts:

   ```jsx
   <Routes>
     <Route path="/" element={<Home />}>
       <Route path="subpage" element={<Subpage />} />
     </Route>
   </Routes>
   ```

   In this example, `Subpage` is nested under the `Home` component.

React Router provides a lot of flexibility and control over navigation and is essential for building single-page applications (SPAs) with React.


## Route guards

Route guards are a common requirement in web applications to protect certain routes based on conditions like authentication status or user roles. In React Router, you can implement route guards by creating components that handle the logic for checking access before rendering routes.

Here’s how you can implement route guards with React Router, step by step:

### 1. Set Up Basic Routing

First, set up your basic routing using React Router. Make sure you have React Router installed:

```bash
npm install react-router-dom
# or
yarn add react-router-dom
```

Here’s a simple setup with `BrowserRouter`:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const Login = () => <h2>Login</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 2. Create a Route Guard Component

You need a component that will handle the logic for checking whether a route should be accessible. This is often called `PrivateRoute` or `ProtectedRoute`. Here’s a basic example:

```jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
```

In this example, `ProtectedRoute` checks if the user is authenticated (`isAuthenticated`). If so, it renders the `element` passed to it; otherwise, it redirects to the login page.

### 3. Use the Route Guard in Your Routing

Update your routing to use the `ProtectedRoute` component. 

Here’s how you can integrate the `ProtectedRoute` into your routing setup:

```jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Home = () => <h2>Home</h2>;
const Login = () => <h2>Login</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 4. Handle Authentication Status

In a real application, you would handle authentication status through a more complex system involving authentication context or hooks. Here’s a brief example using context:

```jsx
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

Then wrap your `App` component with `AuthProvider`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './auth';
import App from './App';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
```

And use `useAuth` hook in your `App` component to get authentication status:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './auth';
import ProtectedRoute from './ProtectedRoute';

const Home = () => <h2>Home</h2>;
const Login = () => <h2>Login</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;
```

This way, you have a protected route setup that redirects users to the login page if they are not authenticated. You can extend this approach to handle different kinds of route guards, such as role-based access, by modifying the `ProtectedRoute` component accordingly.
