import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={0.5} alignItems="center">
          <Typography variant="body2" color="text.secondary" align="center">
            © {year} Sebas — All rights reserved.
          </Typography>

          {/* Enlace discreto al design system */}
          <Typography variant="caption" color="text.secondary">
            <MuiLink
              component={RouterLink}
              to="/style-guide"
              underline="hover"
              color="inherit"
              sx={{ opacity: 0.8 }}
              aria-label="Open design system / style guide"
            >
              Design system
            </MuiLink>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

