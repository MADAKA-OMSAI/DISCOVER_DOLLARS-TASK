import React, { useState } from 'react';
import { TextField, List, ListItem, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material'; // Import the Search icon

const TypeaheadSearch = ({ categories }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {
      const lowercasedValue = value.toLowerCase();
      const filteredSuggestions = categories
        .flatMap(category => {
          const subcategories = category.subcategories ? category.subcategories.flatMap(subcategory => {
            return subcategory.subcategories ? subcategory.subcategories : [subcategory];
          }) : [];
          return [category, ...subcategories];
        })
        .filter(item => item.name.toLowerCase().includes(lowercasedValue));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Search Categories"
        variant="outlined"
        value={query}
        onChange={handleSearch}
        InputProps={{ // Add this InputProps prop
          startAdornment: ( // Start adornment for search icon
            <InputAdornment position="start">
              <Search /> {/* Search icon */}
            </InputAdornment>
          ),
        }}
      />
      {suggestions.length > 0 && (
        <List>
          {suggestions.map((suggestion, index) => (
            <ListItem key={index}>{suggestion.name}</ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default TypeaheadSearch;
