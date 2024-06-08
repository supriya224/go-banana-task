/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/aria-props */
/* eslint-disable import/no-extraneous-dependencies */
import {
  AppBar,
  IconButton,
  Button,
  Box,
  Toolbar,
  Typography,
  MenuList,
  MenuItem,
  Menu,
} from '@mui/material';
import React, { useState } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'Features'];

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openMenu = (): void => {
    setOpen(true);
  };
  const closeMenu = (): void => {
    setOpen(false);
  };
  return (
    <AppBar position="static" sx={{}}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
        >
          GoBanana
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button color="inherit">{page}</Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={Boolean(open)}
            onClose={closeMenu}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuList>
              {pages.map((page) => (
                <MenuItem color="inherit">{page}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <IconButton
          size="large"
          edge="start"
          color="secondary"
          aria-lebal="logo"
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <AutoStoriesIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          GoBanana
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
