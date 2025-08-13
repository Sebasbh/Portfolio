import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme, alpha } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },                         // usa escala de spacing del tema
        px: { xs: 2, md: 4 },
        borderRadius: theme.shape.borderRadius * 2,     // consistente con tu shape
        bgcolor: theme.palette.background.default,      // fondo desde el tema
        background: `linear-gradient(
          135deg,
          ${alpha(theme.palette.primary.main, 0.08)} 0%,
          ${alpha(theme.palette.secondary.main, 0.08)} 100%
        )`,
      }}
      aria-labelledby="hero-title"
    >
      <Stack spacing={3} alignItems="flex-start">
        <Typography id="hero-title" variant="h2">
          Hi, I’m Sebas — Full-Stack Developer
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 72 * 10 /* 720px via spacing */ }}>
          I build clean, fast and accessible web apps with the MERN stack and a security-first mindset.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            component={RouterLink}
            to="/projects"
            variant="contained"
            size="large"
            color="primary"                // usa palette.primary
          >
            View Projects
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            size="large"
            color="secondary"              // usa palette.secondary
          >
            Contact Me
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
