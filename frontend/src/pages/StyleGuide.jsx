import React from 'react';
import {
  Box, Stack, Paper, Typography, Button, Divider, TextField,
  Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel,
  Switch, Slider, Chip, Card, CardContent, CardActions, Alert
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const Swatch = ({ title, color }) => (
  <Paper variant="outlined" sx={{ p: 2 }}>
    <Stack spacing={1}>
      <Box sx={{ height: 56, borderRadius: 1, bgcolor: color }} />
      <Typography variant="body2" color="text.secondary">{title}</Typography>
      <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>{color}</Typography>
    </Stack>
  </Paper>
);

const StyleGuide = () => {
  const theme = useTheme();

  const colors = [
    { title: 'Primary main', value: theme.palette.primary.main },
    { title: 'Primary light', value: theme.palette.primary.light ?? '(auto)' },
    { title: 'Primary dark', value: theme.palette.primary.dark ?? '(auto)' },
    { title: 'Secondary main', value: theme.palette.secondary.main },
    { title: 'Secondary light', value: theme.palette.secondary.light ?? '(auto)' },
    { title: 'Secondary dark', value: theme.palette.secondary.dark ?? '(auto)' },
    { title: 'Background default', value: theme.palette.background.default },
    { title: 'Text primary', value: theme.palette.text.primary },
    { title: 'Text secondary', value: theme.palette.text.secondary },
  ];

  return (
    <Stack spacing={4}>
      {/* Header */}
      <Box>
        <Typography variant="h2" gutterBottom>Style Guide</Typography>
        <Typography variant="body1" color="text.secondary">
          Quick visual reference of typography, colors and common UI components using your current MUI theme.
        </Typography>
      </Box>

      <Divider />

      {/* Colors */}
      <Box>
        <Typography variant="h3" gutterBottom>Colors</Typography>
        <Grid container spacing={2}>
          {colors.map((c) => (
            <Grid key={c.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Swatch title={c.title} color={c.value} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider />

      {/* Typography */}
      <Box>
        <Typography variant="h3" gutterBottom>Typography</Typography>
        <Stack spacing={1}>
          <Typography variant="h1">H1 — The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="h2">H2 — The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="h3">H3 — The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="h4">H4 — The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="h5">H5 — The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="h6">H6 — The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="body1">
            Body1 — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Body2 — Secondary text. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          </Typography>
          <Typography variant="button">Button text</Typography>
          <Typography variant="caption" display="block">Caption text</Typography>
          <Typography variant="overline" display="block">OVERLINE</Typography>
        </Stack>
      </Box>

      <Divider />

      {/* Buttons */}
      <Box>
        <Typography variant="h3" gutterBottom>Buttons</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Button variant="contained">Primary contained</Button>
          <Button variant="outlined">Primary outlined</Button>
          <Button variant="text">Primary text</Button>
          <Button variant="contained" color="secondary">Secondary contained</Button>
          <Button variant="outlined" color="secondary">Secondary outlined</Button>
          <Button variant="text" color="secondary">Secondary text</Button>
          <Button variant="contained" disabled>Disabled</Button>
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="large">Large</Button>
        </Stack>
      </Box>

      <Divider />

      {/* Form controls */}
      <Box>
        <Typography variant="h3" gutterBottom>Form Controls</Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <TextField label="Name" placeholder="John Doe" />
              <TextField label="Email" type="email" placeholder="john@mail.com" />
              <TextField label="Message" multiline minRows={3} placeholder="Write something…" />
              <FormControl>
                <InputLabel id="sg-select-label">Role</InputLabel>
                <Select labelId="sg-select-label" label="Role" defaultValue="dev">
                  <MenuItem value="dev">Developer</MenuItem>
                  <MenuItem value="designer">Designer</MenuItem>
                  <MenuItem value="pm">Product Manager</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Subscribe to newsletter" />
              <FormControlLabel control={<Switch defaultChecked />} label="Dark mode (mock)" />
              <Box sx={{ px: 1 }}>
                <Typography variant="body2" gutterBottom>Proficiency</Typography>
                <Slider defaultValue={70} aria-label="Proficiency" />
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Chip label="Chip default" />
              <Chip color="primary" label="Chip primary" />
              <Chip color="secondary" label="Chip secondary" />
              <Alert severity="success">This is a success alert</Alert>
              <Alert severity="info">This is an info alert</Alert>
              <Alert severity="warning">This is a warning alert</Alert>
              <Alert severity="error">This is an error alert</Alert>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" gutterBottom>Card Title</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Card body text with secondary color using the theme.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Action</Button>
                  <Button size="small" color="secondary">Secondary</Button>
                </CardActions>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default StyleGuide;
