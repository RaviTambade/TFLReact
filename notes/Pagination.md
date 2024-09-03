Implementing pagination in a React application helps manage and display larger datasets efficiently. Pagination is crucial for improving performance and user experience when dealing with substantial amounts of data.

Here's a practical guide to implementing pagination in a React application:

### Example Scenario

We'll build a component that fetches paginated data from an API and displays it with pagination controls. We'll use the JSONPlaceholder API for demonstration, which provides mock data.

### 1. Setup

Ensure you have a React application set up. You can use Create React App if needed:

```bash
npx create-react-app my-app
cd my-app
npm start
```

### 2. Create the Paginated Component

We'll create a `PaginatedData.js` component that handles fetching and displaying paginated data.

#### **PaginatedData.js**

```jsx
// src/PaginatedData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaginatedData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(10); // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${pageSize}`);
        
        // Calculate total pages (assuming we have a total count endpoint or can determine it)
        // This example assumes a fixed number of total pages for simplicity
        const totalCount = 100; // Adjust based on actual data
        setTotalPages(Math.ceil(totalCount / pageSize));

        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, pageSize]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Paginated Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedData;
```

### 3. Use the Component

In your `App.js`, import and use the `PaginatedData` component:

```jsx
// src/App.js
import React from 'react';
import PaginatedData from './PaginatedData';

const App = () => {
  return (
    <div className="App">
      <h1>My React App</h1>
      <PaginatedData />
    </div>
  );
};

export default App;
```

### Explanation

1. **State Management:** The component maintains `data`, `loading`, `error`, `currentPage`, and `totalPages` in its state.
2. **Fetching Data:** We fetch paginated data using query parameters `_page` and `_limit`. The `useEffect` hook triggers data fetching whenever `currentPage` or `pageSize` changes.
3. **Pagination Controls:** The `handlePageChange` function updates the `currentPage` state. Buttons are disabled based on the current page to prevent invalid page requests.
4. **Total Pages Calculation:** The total number of pages is calculated based on a fixed `totalCount`. In a real-world scenario, you might fetch the total count from the server or infer it from headers.

### Advanced Considerations

- **Dynamic Total Count:** Implement an endpoint to fetch the total number of items if available.
- **Performance Optimization:** Use memoization or lazy loading techniques for improved performance.
- **Pagination Libraries:** Consider using libraries like `react-paginate` for more complex pagination scenarios.

By following these steps, you can efficiently handle and display paginated data in your React application, improving both performance and user experience.