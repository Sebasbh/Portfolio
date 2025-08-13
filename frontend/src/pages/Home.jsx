import React from 'react';
import { Stack, Divider, Typography } from '@mui/material';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Stack spacing={4}>
      <Hero />
      <Divider />
      <Typography variant="h3">Latest work</Typography>
      <Typography color="text.secondary">
        (Coming soon) A curated selection of projects I’m most proud of.
      </Typography>
    </Stack>
  );
};

export default Home;
// This file serves as the main landing page for the portfolio, featuring a hero section and a placeholder for latest work.
