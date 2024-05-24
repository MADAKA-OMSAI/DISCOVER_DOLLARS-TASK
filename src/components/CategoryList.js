import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import categoriesData from '../data/categories.json';
import '../styles/CategoryList.css';

const CategoryList = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleCategoryClick = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const renderCategories = (categories) => {
    return categories.map((category) => (
      <div key={category.name}>
        <ListItem
          button
          onClick={() => handleCategoryClick(category.name)}
        >
          {category.image && (
            <ListItemIcon>
              <img src={category.image} alt={category.name} className="category-image" />
            </ListItemIcon>
          )}
          <ListItemText primary={category.name} />
          {category.subcategories ? (
            expandedCategories[category.name] ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )
          ) : null}
        </ListItem>
        {category.subcategories && (
          <Collapse in={expandedCategories[category.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className="subcategories">
              {renderCategories(category.subcategories)}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  return <List className="category-list">{renderCategories(categoriesData.categories)}</List>;
};

export default CategoryList;
