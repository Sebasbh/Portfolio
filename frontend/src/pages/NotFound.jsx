import React from 'react';
import {
  Box, Paper, Stack, Typography, Button, Link as MuiLink
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme, alpha } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const NotFound = () => {
  const theme = useTheme();

  return (
    <Box component="section" aria-labelledby="nf-title" aria-describedby="nf-desc" sx={{ py: { xs: 6, md: 8 } }}>
      <Paper
        variant="outlined"
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: `70px`,
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
        <Grid container spacing={4} alignItems="center">
          {/* Texto y acciones */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2} alignItems="flex-start">
              <Typography
                id="nf-title"
                variant="h1"
                sx={{ fontSize: { xs: '3rem', md: '4rem' }, lineHeight: 1, fontWeight: 800 }}
              >
                404
              </Typography>

              <Typography variant="h3">Page not found</Typography>

              <Typography id="nf-desc" color="text.secondary" sx={{ maxWidth: 72 * 10 }}>
                The page you’re looking for doesn’t exist or has moved. Try going back home or explore my projects.
              </Typography>

              <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                <Button
                  component={RouterLink}
                  to="/"
                  variant="contained"
                  startIcon={<HomeOutlinedIcon />}
                >
                  Go Home
                </Button>
                <Button
                  component={RouterLink}
                  to="/projects"
                  variant="outlined"
                  color="secondary"
                  startIcon={<WorkOutlineIcon />}
                >
                  See Projects
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="text"
                  startIcon={<MailOutlineIcon />}
                >
                  Contact
                </Button>
              </Stack>

              <Typography variant="caption" color="text.secondary">
                Or check the <MuiLink component={RouterLink} to="/style-guide" underline="hover">design system</MuiLink>.
              </Typography>
            </Stack>
          </Grid>

          {/* Panel decorativo */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              aria-hidden
              sx={{
                height: 220,
                borderRadius: theme.shape.borderRadius,
                border: `1px solid ${theme.palette.divider}`,
                background: `repeating-linear-gradient(
                  45deg,
                  ${alpha(theme.palette.primary.main, 0.06)},
                  ${alpha(theme.palette.primary.main, 0.06)} 10px,
                  transparent 10px,
                  transparent 20px
                )`,
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Typography variant="overline" color="text.secondary">
                Lost? Let’s get you back.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default NotFound;