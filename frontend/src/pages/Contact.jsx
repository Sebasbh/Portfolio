import React, { useState } from 'react';
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Alert,
  Link as MuiLink,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme, alpha } from '@mui/material/styles';

// TODO: replace with your real email or route to your API
const CONTACT_EMAIL = 'contact@example.com';

const initialData = {
  name: '',
  email: '',
  topic: 'general',
  budget: '',
  message: '',
  consent: false,
};

const Contact = () => {
  const theme = useTheme();
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((d) => ({ ...d, [name]: type === 'checkbox' ? checked : value }));
    // clear error as user types
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const validate = () => {
    const errs = {};
    if (!data.name.trim()) errs.name = 'Please enter your name.';
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    if (!emailOk) errs.email = 'Please enter a valid email.';
    if (!data.message.trim() || data.message.trim().length < 10)
      errs.message = 'Message should be at least 10 characters.';
    if (!data.consent) errs.consent = 'You must accept the privacy notice.';
    return errs;
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    // Here you would call your API (POST /contact)
    // For now we just simulate success.
    // console.log('Contact form payload:', data);
    setSubmitted(true);
    setData(initialData);
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <Box component="section" aria-labelledby="contact-title">
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
        <Stack spacing={1} sx={{ mb: 2 }}>
          <Typography id="contact-title" variant="h2">Contact</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 72 * 10 }}>
            Tell me a bit about your project and I’ll get back to you within 24–48 hours.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {/* Left: Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Stack spacing={2}>
                {submitted && (
                  <Alert severity="success" onClose={() => setSubmitted(false)} role="status">
                    Thanks! Your message was sent. I’ll reply soon.
                  </Alert>
                )}

                {hasErrors && (
                  <Alert severity="error" role="alert" aria-live="polite">
                    Please fix the highlighted fields.
                  </Alert>
                )}

                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  autoComplete="name"
                  value={data.name}
                  onChange={onChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />

                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  autoComplete="email"
                  value={data.email}
                  onChange={onChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />

                <FormControl>
                  <InputLabel id="topic-label">Topic</InputLabel>
                  <Select
                    labelId="topic-label"
                    id="topic"
                    name="topic"
                    label="Topic"
                    value={data.topic}
                    onChange={onChange}
                  >
                    <MenuItem value="general">General</MenuItem>
                    <MenuItem value="project">New project</MenuItem>
                    <MenuItem value="consulting">Consulting</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>

                <FormControl>
                  <InputLabel id="budget-label">Budget (optional)</InputLabel>
                  <Select
                    labelId="budget-label"
                    id="budget"
                    name="budget"
                    label="Budget (optional)"
                    value={data.budget}
                    onChange={onChange}
                  >
                    <MenuItem value="">Not sure yet</MenuItem>
                    <MenuItem value="500-1000">€500–€1,000</MenuItem>
                    <MenuItem value="1000-3000">€1,000–€3,000</MenuItem>
                    <MenuItem value="3000-10000">€3,000–€10,000</MenuItem>
                    <MenuItem value="10000+">€10,000+</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  placeholder="What do you need? Goals, scope, deadlines…"
                  autoComplete="off"
                  multiline
                  minRows={4}
                  value={data.message}
                  onChange={onChange}
                  error={!!errors.message}
                  helperText={errors.message}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      id="consent"
                      name="consent"
                      checked={data.consent}
                      onChange={onChange}
                      aria-invalid={!!errors.consent}
                    />
                  }
                  label={
                    <span>
                      I agree to the{' '}
                      <MuiLink href="#" underline="hover">privacy notice</MuiLink>.
                    </span>
                  }
                />
                {errors.consent && (
                  <Typography variant="caption" color="error" sx={{ ml: 4 }}>
                    {errors.consent}
                  </Typography>
                )}

                <Stack direction="row" spacing={2}>
                  <Button type="submit" variant="contained">Send message</Button>
                  <Button
                    component="a"
                    href={`mailto:${CONTACT_EMAIL}?subject=Project%20inquiry`}
                    variant="outlined"
                    color="secondary"
                  >
                    Email me instead
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* Right: Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="overline">Prefer email?</Typography>
              <Typography sx={{ mb: 1 }}>
                You can reach me directly at{' '}
                <MuiLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</MuiLink>.
              </Typography>

              <Typography variant="overline">What to include</Typography>
              <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                <li><Typography variant="body2">A short description of your idea</Typography></li>
                <li><Typography variant="body2">Timeline & budget range</Typography></li>
                <li><Typography variant="body2">Links or references (if any)</Typography></li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Contact;