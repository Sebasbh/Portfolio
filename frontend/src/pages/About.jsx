// frontend/src/pages/About.jsx
import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme, alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
  const theme = useTheme();

  return (
    <Box component="section" aria-labelledby="about-title" sx={{ py: { xs: 1, md: 2 } }}>
      <Paper
        variant="outlined"
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: theme.shape.borderRadius,
          position: 'relative',
          overflow: 'hidden',
          bgcolor: 'background.paper',
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
        {/* Header */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Avatar
            sx={{
              width: 64,
              height: 64,
              fontWeight: 700,
              bgcolor: alpha(theme.palette.secondary.main, 0.2),
              color: theme.palette.secondary.dark,
            }}
            aria-hidden
          >
            SB
          </Avatar>
          <Stack spacing={0.5}>
            <Typography id="about-title" variant="h2">
              About
            </Typography>
            <Typography color="text.secondary">
              Full-stack developer — clean UI, solid APIs, reliable delivery.
            </Typography>
          </Stack>
        </Stack>

        {/* Intro */}
        <Typography color="text.secondary" sx={{ maxWidth: 72 * 10, mb: 2 }}>
          I build fast, accessible and maintainable web apps. On the frontend, I craft cohesive
          design systems with React + MUI. On the backend, I design APIs with Express/MongoDB,
          integrate auth & payments, and ship with Docker and CI/CD.
        </Typography>

        {/* CTA */}
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          <Button component={RouterLink} to="/projects" variant="contained" color="primary">
            See my projects
          </Button>
          <Button component={RouterLink} to="/contact" variant="outlined" color="secondary">
            Get in touch
          </Button>
          <Button
            component="a"
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="text"
            startIcon={<DownloadIcon />}
          >
            Download CV
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default About;
