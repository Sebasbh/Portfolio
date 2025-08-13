import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const FeaturedProjects = () => {
  const featured = projects.slice(0, 3); // top 3

  return (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="baseline" justifyContent="space-between">
        <Typography variant="h3">Featured projects</Typography>
        <Button component={RouterLink} to="/projects" variant="text" color="secondary">
          See all
        </Button>
      </Stack>

      <Grid container spacing={2}>
        {featured.map(p => (
          <Grid key={p.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default FeaturedProjects;
