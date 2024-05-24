import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge } from '@mui/material';
import { Search, ShoppingCart } from '@mui/icons-material';
import '../styles/Header.css';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="h6" className="title">
          Shopping Cart
        </Typography>
        <div className="search">
          <div className="searchIcon">
            <Search />
            
          </div>
          <InputBase
            placeholder=  "      Search…"
            classes={{
              root: 'inputRoot',
              input: 'inputInput',
            }}
          />
          
        </div>
        <div className="grow" />
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
