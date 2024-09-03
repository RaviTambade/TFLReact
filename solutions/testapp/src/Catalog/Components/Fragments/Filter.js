import React from 'react';

function Filter() {
  return (
    <>
      <h2>Filter Products</h2>
      <form>
        <label>
          Price Range:
          <input type="range" min="0" max="100" />
        </label>
        <label>
          Category:
          <select>
            <option value="all">All</option>
            <option value="flowers">Flowers</option>
            <option value="fruits">Fruits</option>
          </select>
        </label>
        <button type="submit">Apply Filters</button>
      </form>
    </>
  );
}

export default Filter;