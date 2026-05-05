// src/Autocomplete.js
import React, { useState, useEffect } from 'react';

const Autocomplete = ({ suggestions }) => {
  
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (inputValue) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, suggestions]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setActiveSuggestionIndex((prevIndex) =>
        Math.min(filteredSuggestions.length - 1, prevIndex + 1)
      );
    } else if (event.key === 'ArrowUp') {
      setActiveSuggestionIndex((prevIndex) =>
        Math.max(0, prevIndex - 1)
      );
    } else if (event.key === 'Enter') {
      if (activeSuggestionIndex >= 0) {
        handleSuggestionClick(filteredSuggestions[activeSuggestionIndex]);
      }
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} style={{ width: '300px', padding: '8px' }}/>
      {showSuggestions && (
        <ul style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginTop: '4px',
            padding: '0',
            listStyle: 'none',
            position: 'absolute',
            width: '100%',
            maxHeight: '200px',
            overflowY: 'auto',
            backgroundColor: 'white',
            zIndex: 1000,
          }}>

            {filteredSuggestions.map((suggestion, index) => (
                <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}
                    style={   {padding: '8px',
                                cursor: 'pointer',
                                backgroundColor: index === activeSuggestionIndex ? '#ddd' : 'white',
                            }}>
                    {suggestion}
                </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;