import React from 'react';
import { Box, Stack, Divider, Typography, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';

const Home = () => {
  const frontend = ['React', 'MUI', 'Router'];
  const backend  = ['Node', 'Express', 'MongoDB'];
  const devops   = ['Docker', 'GitHub Actions', 'Vercel'];

  return (
    <Stack spacing={6}>
      <Hero />

      {/* Featured */}
      <FeaturedProjects />

      <Divider />

      {/* Skills / Stack */}
      <Stack spacing={2}>
        <Typography variant="h3">Core stack</Typography>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="overline">Frontend</Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
              {frontend.map(s => <Chip key={s} label={s} variant="soft" color="secondary" />)}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="overline">Backend</Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
              {backend.map(s => <Chip key={s} label={s} variant="outlined" />)}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="overline">DevOps</Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
              {devops.map(s => <Chip key={s} label={s} variant="outlined" />)}
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      {/* CTA */}
      <Box
        component="section"
        sx={(t) => ({
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: `1px solid ${t.palette.divider}`,
          background: `linear-gradient(135deg, ${t.palette.background.paper} 0%, ${t.palette.background.default} 100%)`,
          textAlign: { xs: 'left', md: 'center' }
        })}
      >
        <Typography variant="h4" gutterBottom>
          Let’s build something great
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          I’m open to freelance work, collaborations and full-time roles.
        </Typography>
        <Chip
          component="a"
          href="/contact"
          clickable
          color="secondary"
          variant="soft"
          label="Contact me"
          sx={{ fontWeight: 600 }}
        />
      </Box>
    </Stack>
  );
};

export default Home;


