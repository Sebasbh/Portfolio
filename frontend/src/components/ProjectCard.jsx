import React from 'react';
import { Card, CardContent, CardActions, Typography, Chip, Stack, Button, Box } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const Pill = ({ label, color = 'default' }) => (
  <Chip
    size="small"
    variant={color === 'secondary' ? 'soft' : 'outlined'}
    color={color}
    label={label}
  />
);

const ProjectCard = ({ project }) => {
  const { title, summary, frontend = [], backend = [], devops = [], tags = [], live, repo } = project;

  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {summary}
        </Typography>

        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 1 }}>
          {frontend.length > 0 && <Pill color="secondary" label={`FE: ${frontend.join(' · ')}`} />}
          {backend.length > 0 && <Pill label={`BE: ${backend.join(' · ')}`} />}
          {devops.length > 0 && <Pill label={`DevOps: ${devops.join(' · ')}`} />}
        </Stack>

        {tags.length > 0 && (
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {tags.map(t => <Chip key={t} size="small" label={t} />)}
          </Stack>
        )}
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        {live && (
          <Button size="small" variant="contained" color="primary" href={live} target="_blank" rel="noreferrer" startIcon={<LaunchIcon />}>
            Live demo
          </Button>
        )}
        {repo && (
          <Button size="small" variant="outlined" color="secondary" href={repo} target="_blank" rel="noreferrer" startIcon={<GitHubIcon />}>
            Source
          </Button>
        )}
        <Box sx={{ flex: 1 }} />
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
