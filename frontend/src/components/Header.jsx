import React from 'react';
import { AppBar, Toolbar, Container, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/style-guide', label: 'Style Guide' }
];

const Header = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, py: 1 }}>
          <Typography component="h1" variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Sebas Portfolio
          </Typography>

          <Box component="nav" sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                sx={{
                  '&.active': {
                    borderBottom: '2px solid',
                    borderColor: 'primary.contrastText',
                    borderRadius: 0,
                  },
                }}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;


