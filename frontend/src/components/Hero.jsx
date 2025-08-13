import React from 'react';
import { Box, Stack, Typography, Button, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme, alpha } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CodeIcon from '@mui/icons-material/Code';

const Hero = () => {
  const theme = useTheme();
  const skills = ['React', 'MUI', 'Node.js', 'Express', 'MongoDB', 'Docker', 'CI/CD'];

  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      aria-describedby="hero-desc"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        // 👉 radio pequeño y consistente
        borderRadius: `70px`,
        // 👉 borde sutil para “card” sin efecto píldora
        border: `1px solid ${theme.palette.divider}`,
        bgcolor: 'background.paper',
        // 👉 degradado como overlay para que NO afecte a la forma
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `linear-gradient(
            135deg,
            ${alpha(theme.palette.primary.main, 0.03)} 0%,
            ${alpha(theme.palette.secondary.main, 0.05)} 100%
          )`,
        },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Copy + CTAs + stack */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3} alignItems="flex-start">
            <Typography id="hero-title" component="h2" variant="h2">
              Hi, I’m Sebas —{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                Full-Stack Developer
              </Box>
            </Typography>

            <Typography
              id="hero-desc"
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 72 * 10 }}
            >
              I build clean, fast and accessible web apps with the MERN stack and a security-first mindset.
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                component={RouterLink}
                to="/projects"
                variant="contained"
                size="large"
                color="primary"
                startIcon={<RocketLaunchIcon />}
              >
                View Projects
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                size="large"
                color="secondary"
                startIcon={<MailOutlineIcon />}
              >
                Contact Me
              </Button>
            </Stack>

            {/* Stack de skills */}
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {skills.map((s) => (
                <Chip
                  key={s}
                  icon={<CodeIcon sx={{ fontSize: 16 }} />}
                  label={s}
                  size="small"
                  variant={s === 'React' || s === 'MUI' ? 'soft' : 'outlined'}
                  color={s === 'React' || s === 'MUI' ? 'secondary' : 'default'}
                />
              ))}
            </Stack>
          </Stack>
        </Grid>

        {/* Decorativo derecho más discreto */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            aria-hidden
            sx={{
              height: 240,
              borderRadius: 4,
              border: `1px solid ${theme.palette.divider}`,
              background: `repeating-linear-gradient(
                45deg,
                ${alpha(theme.palette.primary.main, 0.06)},
                ${alpha(theme.palette.primary.main, 0.06)} 10px,
                transparent 10px,
                transparent 20px
              )`,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;

