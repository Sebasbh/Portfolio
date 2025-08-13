const projects = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    summary: 'SPA with React + MUI (Navy & Gold), accessibility-first and CI build.',
    frontend: ['React', 'MUI', 'Router', 'MUI Icons', 'Google Fonts'],
    backend: [],
    devops: ['Vercel', 'GitHub Actions'],
    tags: ['a11y', 'design-system', 'seo'],
    live: '#',
    repo: 'https://github.com/Sebasbh/Portfolio'
  },

  // === FLAGSHIP ===
  {
    id: 'task-api-dashboard',
    title: 'Task API + Dashboard',
    summary: 'Express REST API (JWT + roles) with MongoDB and React dashboard. Tested, Dockerized, CI/CD.',
    frontend: ['React', 'TanStack Query', 'MUI', 'Router'],
    backend: ['Node', 'Express', 'MongoDB', 'JWT'],
    devops: ['Docker', 'GitHub Actions', 'Vercel'],
    tags: ['api', 'auth', 'crud', 'pagination', 'filters'],
    live: '#',
    repo: 'https://github.com/Sebasbh/task-api'
  },
  {
    id: 'realtime-chat',
    title: 'Realtime Chat',
    summary: 'Socket.IO chat with rooms, typing indicators, presence and optimistic UI updates.',
    frontend: ['React', 'MUI'],
    backend: ['Node', 'Socket.IO', 'MongoDB'],
    devops: ['Docker', 'GitHub Actions'],
    tags: ['websocket', 'realtime', 'rate-limit'],
    live: '#',
    repo: 'https://github.com/Sebasbh/realtime-chat'
  },
  {
    id: 'mini-ecommerce',
    title: 'Mini e-commerce',
    summary: 'Catalog, cart and checkout with Stripe. Orders, admin basics and webhooks.',
    frontend: ['React', 'MUI', 'Router'],
    backend: ['Node', 'Express', 'MongoDB', 'Stripe'],
    devops: ['Docker', 'GitHub Actions', 'Vercel (serverless)'],
    tags: ['stripe', 'webhooks', 'orders'],
    live: '#',
    repo: 'https://github.com/Sebasbh/mini-ecommerce'
  },

  // === FLAGSHIP EXTRA (subs/saas) ===
  {
    id: 'saas-subscriptions',
    title: 'SaaS Subscriptions',
    summary: 'Stripe subscriptions + billing portal, webhooks, roles, and protected routes.',
    frontend: ['React', 'MUI', 'React Hook Form', 'Yup', 'Router'],
    backend: ['Node', 'Express', 'MongoDB', 'JWT', 'Stripe'],
    devops: ['Docker', 'GitHub Actions', 'Vercel (serverless)'],
    tags: ['stripe', 'subscriptions', 'webhooks', 'auth'],
    live: '#',
    repo: 'https://github.com/Sebasbh/saas-subscriptions'
  },

  // === APOYO ===
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    summary: 'Scheduled ingestion (cron), Mongo aggregations, caching (opt) and charts.',
    frontend: ['React', 'MUI', 'TanStack Query'],
    backend: ['Node', 'Express', 'MongoDB'],
    devops: ['Cron', 'GitHub Actions', 'Docker'],
    tags: ['aggregations', 'caching', 'charts'],
    live: '#',
    repo: 'https://github.com/Sebasbh/analytics-dashboard'
  },
  {
    id: 'url-shortener-stats',
    title: 'URL Shortener + Stats',
    summary: 'Short links with click analytics, QR generation and basic rate limiting.',
    frontend: ['React', 'MUI'],
    backend: ['Node', 'Express', 'MongoDB'],
    devops: ['Docker', 'GitHub Actions'],
    tags: ['qr', 'analytics', 'rate-limit'],
    live: '#',
    repo: 'https://github.com/Sebasbh/url-shortener'
  },
  {
    id: 'media-uploader',
    title: 'Media Uploader',
    summary: 'Drag & drop uploads with Multer + Cloudinary, thumbnails and signed URLs.',
    frontend: ['React', 'MUI', 'React Hook Form', 'Yup'],
    backend: ['Node', 'Express', 'Multer', 'Cloudinary'],
    devops: ['Docker', 'GitHub Actions'],
    tags: ['uploads', 'cloudinary', 'thumbnails'],
    live: '#',
    repo: 'https://github.com/Sebasbh/media-uploader'
  },
  {
    id: 'kanban-collab',
    title: 'Realtime Kanban',
    summary: 'Collaborative kanban with drag & drop (dnd-kit) and live updates via Socket.IO.',
    frontend: ['React', 'MUI', 'dnd-kit'],
    backend: ['Node', 'Socket.IO', 'MongoDB', 'JWT'],
    devops: ['Docker', 'GitHub Actions'],
    tags: ['realtime', 'dnd', 'collaboration'],
    live: '#',
    repo: 'https://github.com/Sebasbh/kanban-collab'
  },
  {
    id: 'status-monitor',
    title: 'Status & Uptime Monitor',
    summary: 'Periodic health checks (cron), alerts and uptime charts with persisted history.',
    frontend: ['React', 'MUI', 'TanStack Query'],
    backend: ['Node', 'Express', 'MongoDB', 'Nodemailer'],
    devops: ['Cron', 'GitHub Actions', 'Docker'],
    tags: ['monitoring', 'alerts', 'cron'],
    live: '#',
    repo: 'https://github.com/Sebasbh/status-monitor'
  }
];

export default projects;