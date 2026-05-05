// src/App.js
import React from 'react';
import Autocomplete from './AutoComplete';

const AutoSuggestionContainer = () => {
  const suggestions = [
    'Transflower',
    'CDAC Pune',
    'Amazon Web Services',
    'Microsoft',
    'Transflower Acceleration Program',
    'Internet',
    'Amazon Prime',
    'CDAC Mumbai',
    'Extranet',
    'Orange',
    'CDAC IACSD',
    'Netflix',
    'Try Infotech',
    'Zensoft',
    'Microsoft 365',
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Autocomplete Example</h1>
      <Autocomplete suggestions={suggestions} />
    </div>
  );
};

export default AutoSuggestionContainer;