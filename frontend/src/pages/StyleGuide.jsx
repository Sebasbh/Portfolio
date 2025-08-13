import React from 'react';
import {
  Box,
  Stack,
  Paper,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Switch,
  Slider,
  Chip,
  Card,
  CardContent,
  CardActions,
  Alert,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import { useTheme, alpha } from '@mui/material/styles';
import PaletteIcon from '@mui/icons-material/Palette';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import TuneIcon from '@mui/icons-material/Tune';
import LinkIcon from '@mui/icons-material/Link';

// Small swatch card for color tokens
const Swatch = ({ title, color }) => (
  <Paper variant="outlined" sx={{ p: 2 }}>
    <Stack spacing={1}>
      <Box sx={{ height: 56, borderRadius: 1, bgcolor: color }} />
      <Typography variant="body2" color="text.secondary">{title}</Typography>
      <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>{String(color)}</Typography>
    </Stack>
  </Paper>
);

// Chips row to display key:value specs (theme tokens, props, etc.)
const StyleChips = ({ spec }) => (
  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
    {Object.entries(spec).map(([k, v]) => (
      <Chip key={k} size="small" variant="outlined" color="secondary" label={`${k}: ${v}`} />
    ))}
  </Stack>
);

// Generic section card with icon + title + optional subtitle/spec chips
const SectionCard = ({ id, icon: Icon, title, subtitle, children, spec }) => (
  <Card id={id} variant="outlined" sx={{
    borderRadius: 2,
    borderColor: 'divider',
    backgroundColor: (t) => alpha(t.palette.primary.main, 0.015),
  }}>
    <CardContent>
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          {Icon && <Icon fontSize="small" color="secondary" />}
          <Typography variant="h3">{title}</Typography>
        </Stack>
        {subtitle && (
          <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
        )}
        {children}
        {spec && <StyleChips spec={spec} />}
      </Stack>
    </CardContent>
  </Card>
);

// Sticky table of contents on the right
const Toc = () => (
  <Paper variant="outlined" sx={{ position: 'sticky', top: 88, p: 2 }}>
    <Typography variant="overline">On this page</Typography>
    <Stack spacing={0.75} sx={{ mt: 1 }}>
      <MuiLink href="#colors" underline="hover">Colors</MuiLink>
      <MuiLink href="#typography" underline="hover">Typography</MuiLink>
      <MuiLink href="#buttons" underline="hover">Buttons</MuiLink>
      <MuiLink href="#forms" underline="hover">Form Controls</MuiLink>
      <MuiLink href="#links" underline="hover">Links</MuiLink>
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
    <Grid container spacing={3}>
      {/* Main column */}
      <Grid size={{ xs: 12, md: 9 }}>
        <Stack spacing={3}>
          <SectionCard
            id="colors"
            icon={PaletteIcon}
            title="Colors"
            subtitle="Primary/secondary palette, background and text colors from the active theme."
            spec={{
              'primary.main': theme.palette.primary.main,
              'secondary.main': theme.palette.secondary.main,
              'background.default': theme.palette.background.default,
              'text.primary': theme.palette.text.primary,
            }}
          >
            <Grid container spacing={2}>
              {colors.map((c) => (
                <Grid key={c.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <Swatch title={c.title} color={c.value} />
                </Grid>
              ))}
            </Grid>
          </SectionCard>

          <SectionCard
            id="typography"
            icon={TextFieldsIcon}
            title="Typography"
            subtitle="Preview of heading scales and body text with your theme's typography."
            spec={{
              'fontFamily': theme.typography?.fontFamily,
              'h1.size': theme.typography?.h1?.fontSize,
              'h2.size': theme.typography?.h2?.fontSize,
              'button.weight': theme.typography?.button?.fontWeight ?? '—',
            }}
          >
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
          </SectionCard>

          <SectionCard
            id="buttons"
            icon={SmartButtonIcon}
            title="Buttons"
            subtitle="Primary/secondary, sizes and states."
            spec={{
              'radius(px)': theme.shape?.borderRadius ?? 4,
              'textTransform': theme.typography?.button?.textTransform ?? 'inherit',
            }}
          >
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Box>
                <Button variant="contained">Primary contained</Button>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
                  {'<Button variant="contained" color="primary" />'}
                </Typography>
              </Box>
              <Box>
                <Button variant="outlined">Primary outlined</Button>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
                  {'<Button variant="outlined" color="primary" />'}
                </Typography>
              </Box>
              <Box>
                <Button variant="text">Primary text</Button>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
                  {'<Button variant="text" color="primary" />'}
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" color="secondary">Secondary contained</Button>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
                  {'<Button variant="contained" color="secondary" />'}
                </Typography>
              </Box>
              <Box>
                <Button variant="outlined" color="secondary">Secondary outlined</Button>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
                  {'<Button variant="outlined" color="secondary" />'}
                </Typography>
              </Box>
              <Box>
                <Button variant="text" color="secondary">Secondary text</Button>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
                  {'<Button variant="text" color="secondary" />'}
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" disabled>Disabled</Button>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
                  {'<Button variant="contained" disabled />'}
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" size="small">Small</Button>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
                  {'<Button variant="contained" size="small" />'}
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" size="large">Large</Button>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
                  {'<Button variant="contained" size="large" />'}
                </Typography>
              </Box>
            </Stack>
          </SectionCard>

          <SectionCard
            id="forms"
            icon={TuneIcon}
            title="Form Controls"
            subtitle="TextFields, Select, Checkbox, Switch and Slider with proper a11y bindings."
            spec={{
              'TextField.variant': 'outlined (default)',
              'Select.label ↔ control': 'labelId="role-label" ↔ id="role"',
            }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={2}>
                  <TextField id="name" name="name" label="Name" placeholder="John Doe" autoComplete="name" />
                  <TextField id="email" name="email" label="Email" type="email" placeholder="john@mail.com" autoComplete="email" />
                  <TextField id="message" name="message" label="Message" multiline minRows={3} placeholder="Write something…" autoComplete="off" />
                  <FormControl>
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select labelId="role-label" id="role" name="role" label="Role" defaultValue="dev">
                      <MenuItem value="dev">Developer</MenuItem>
                      <MenuItem value="designer">Designer</MenuItem>
                      <MenuItem value="pm">Product Manager</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControlLabel control={<Checkbox id="newsletter" name="newsletter" defaultChecked />} label="Subscribe to newsletter" />
                  <FormControlLabel control={<Switch id="dark-mode" name="darkMode" defaultChecked />} label="Dark mode (mock)" />
                  <Box sx={{ px: 1 }}>
                    <Typography id="proficiency-label" variant="body2" gutterBottom>Proficiency</Typography>
                    <Slider name="proficiency" defaultValue={70} aria-labelledby="proficiency-label" />
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
          </SectionCard>

          <SectionCard
            id="links"
            icon={LinkIcon}
            title="Links"
            subtitle="Default vs secondary color with subtle underline style."
            spec={{
              'Link.underline': 'hover',
              'Link.color': 'default / secondary',
            }}
          >
            <Stack spacing={1}>
              <MuiLink href="#" underline="hover">Default link</MuiLink>
              <MuiLink href="#" color="secondary" underline="hover">Secondary link</MuiLink>
            </Stack>
          </SectionCard>
        </Stack>
      </Grid>

      {/* Aside column */}
      <Grid size={{ xs: 12, md: 3 }}>
        <Toc />
      </Grid>
    </Grid>
  );
};

export default StyleGuide;
