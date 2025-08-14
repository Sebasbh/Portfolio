// frontend/src/pages/About.jsx
import React from 'react';
import {
  Avatar, Box, Button, Paper, Stack, Typography,
  List, ListItem, ListItemIcon, ListItemText, Divider, Chip, Card, CardContent,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme, alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ApiIcon from '@mui/icons-material/Api';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BoltIcon from '@mui/icons-material/Bolt';
import InsightsIcon from '@mui/icons-material/Insights';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

const STATUS = { DONE: 'done', PLANNED: 'planned' };
const FRONTEND = [
  { label: 'React (CRA)', status: STATUS.DONE },
  { label: 'React Router', status: STATUS.DONE },
  { label: 'Material UI + theme (Navy & Gold)', status: STATUS.DONE },
  { label: 'MUI Icons', status: STATUS.DONE },
  { label: 'Google Fonts (Roboto)', status: STATUS.DONE },
  { label: 'AppShell + pages', status: STATUS.DONE },
  { label: 'A11y basics (labels)', status: STATUS.DONE },
  { label: 'TanStack Query', status: STATUS.PLANNED },
];
const BACKEND = [
  { label: 'Node.js + Express', status: STATUS.DONE },
  { label: 'MongoDB', status: STATUS.DONE },
  { label: 'Auth: JWT', status: STATUS.DONE },
  { label: 'Email verification', status: STATUS.PLANNED },
  { label: 'Socket.IO', status: STATUS.DONE },
  { label: 'Stripe', status: STATUS.DONE },
  { label: 'Multer + Cloudinary', status: STATUS.DONE },
  { label: 'Cron jobs', status: STATUS.DONE },
];
const DEVOPS = [
  { label: 'Docker', status: STATUS.DONE },
  { label: 'GitHub Actions', status: STATUS.PLANNED },
  { label: 'Vercel (FE/serverless)', status: STATUS.PLANNED },
];

const HIGHLIGHTS = [
  { title: 'Auth & Payments', desc: 'JWT auth, roles and Stripe (checkout & webhooks).', to: '/projects', icon: PaymentIcon },
  { title: 'Realtime UX', desc: 'Socket.IO chats, presence and optimistic UI.', to: '/projects', icon: ChatBubbleOutlineIcon },
  { title: 'APIs & Dashboards', desc: 'REST APIs, analytics and admin dashboards.', to: '/projects', icon: ApiIcon },
];

const STATS = [
  { label: 'Years coding', value: '3+', icon: BoltIcon },
  { label: 'Projects shipped', value: '10+', icon: InsightsIcon },
  { label: 'MERN + DevOps', value: 'End-to-end', icon: VerifiedUserIcon },
];

const VALUES = [
  'Clarity over complexity',
  'Accessible by default',
  'Performance-first',
  'Security-aware',
  'Automated & tested',
];
const TOOLING = ['ESLint', 'Prettier', 'React Hook Form', 'Yup', 'Helmet', 'GitHub Actions', 'Docker'];

const StatCard = ({ label, value, icon: Icon }) => (
  <Paper variant="outlined" sx={{ p: 2, height: '100%' }} role="group" aria-label={label}>
    <Stack direction="row" spacing={1.5} alignItems="center">
      {Icon && <Icon color="secondary" />}
      <Stack>
        <Typography variant="h5" sx={{ lineHeight: 1 }}>{value}</Typography>
        <Typography variant="caption" color="text.secondary">{label}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

const HighlightCard = ({ title, desc, to, icon: Icon }) => (
  <Card variant="outlined" sx={{ height: '100%' }}>
    <CardContent>
      <Stack spacing={1}>
        <Stack direction="row" spacing={1} alignItems="center">
          {Icon && <Icon color="secondary" />}
          <Typography variant="h6">{title}</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
        <Button component={RouterLink} to={to} size="small" color="secondary" sx={{ alignSelf: 'flex-start' }}>
          View projects
        </Button>
      </Stack>
    </CardContent>
  </Card>
);

const TechChip = ({ label, status }) => {
  const isDone = status === STATUS.DONE;
  return (
    <Chip
      size="small"
      label={label}
      icon={isDone ? <CheckCircleOutlineIcon sx={{ fontSize: 18 }} /> : <PendingOutlinedIcon sx={{ fontSize: 18 }} />}
      variant={isDone ? 'soft' : 'outlined'}
      color={isDone ? 'secondary' : 'default'}
      sx={{ mr: 1, mb: 1 }}
    />
  );
};

const About = () => {
  const theme = useTheme();

  return (
    <Box component="section" aria-labelledby="about-title" sx={{ py: { xs: 1, md: 2 } }}>
      <Paper variant="outlined" sx={{
        p: { xs: 3, md: 4 }, borderRadius: theme.shape.borderRadius, position: 'relative',
        overflow: 'hidden', bgcolor: 'background.paper',
        '&::before': { content: '""', position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)` },
      }}>
        {/* Header */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Avatar sx={{ width: 64, height: 64, fontWeight: 700,
            bgcolor: alpha(theme.palette.secondary.main, 0.2), color: theme.palette.secondary.dark }} aria-hidden>SB</Avatar>
          <Stack spacing={0.5}>
            <Typography id="about-title" variant="h2">About</Typography>
            <Typography color="text.secondary">Full-stack developer — clean UI, solid APIs, reliable delivery.</Typography>
          </Stack>
        </Stack>

        {/* Legend */}
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
          <Chip size="small" icon={<CheckCircleOutlineIcon sx={{ fontSize: 18 }} />} label="Done" variant="soft" color="secondary" />
          <Chip size="small" icon={<PendingOutlinedIcon sx={{ fontSize: 18 }} />} label="Planned" variant="outlined" />
        </Stack>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          {HIGHLIGHTS.map((h, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <HighlightCard {...h} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {/* LEFT: Intro + Quick facts */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography color="text.secondary" sx={{ maxWidth: 72 * 10 }}>
                I build fast, accessible and maintainable web apps. On the frontend, I craft cohesive
                design systems with React + MUI. On the backend, I design APIs with Express/MongoDB,
                integrate auth & payments, and ship with Docker and CI/CD.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 2 }}>
                {STATS.map((s, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 4 }}>
                    <StatCard {...s} />
                  </Grid>
                ))}
              </Grid>

              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="overline">Quick facts</Typography>
                <List dense sx={{ py: 0 }}>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 28 }}><PersonOutlineIcon fontSize="small" color="secondary" /></ListItemIcon>
                    <ListItemText primary="Full-Stack Developer (MERN)" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 28 }}><WorkOutlineIcon fontSize="small" color="secondary" /></ListItemIcon>
                    <ListItemText primary="Open to full-time & freelance" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 28 }}><PublicIcon fontSize="small" color="secondary" /></ListItemIcon>
                    <ListItemText primary="Remote-friendly (EU timezone)" />
                  </ListItem>
                </List>
              </Paper>

              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <BuildCircleIcon color="secondary" />
                  <Typography variant="h5">Core values</Typography>
                </Stack>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {VALUES.map((v) => (
                    <Chip
                      key={v}
                      icon={<CheckCircleOutlineIcon sx={{ fontSize: 18 }} />}
                      label={v}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </Stack>

              <Stack spacing={1.5}>
                <Typography variant="overline">Tooling I use</Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {TOOLING.map((t) => (
                    <Chip key={t} label={t} size="small" variant="outlined" />
                  ))}
                </Stack>
              </Stack>
              {/* CTA */}
              <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                <Button component={RouterLink} to="/projects" variant="contained" color="primary">See my projects</Button>
                <Button component={RouterLink} to="/contact" variant="outlined" color="secondary">Get in touch</Button>
                <Button component="a" href="/cv.pdf" target="_blank" rel="noopener noreferrer" variant="text" startIcon={<DownloadIcon />}>Download CV</Button>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT: Tech stacks */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <CodeIcon color="secondary" />
                  <Typography variant="h5">Frontend</Typography>
                </Stack>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {FRONTEND.map((t) => <TechChip key={t.label} {...t} />)}
                </Stack>
              </Paper>

              <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <StorageIcon color="secondary" />
                  <Typography variant="h5">Backend</Typography>
                </Stack>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {BACKEND.map((t) => <TechChip key={t.label} {...t} />)}
                </Stack>
              </Paper>

              <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <CloudDoneIcon color="secondary" />
                  <Typography variant="h5">DevOps / Delivery</Typography>
                </Stack>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {DEVOPS.map((t) => <TechChip key={t.label} {...t} />)}
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default About;