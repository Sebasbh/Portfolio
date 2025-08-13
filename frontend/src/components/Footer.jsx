import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {year} Sebas — All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
