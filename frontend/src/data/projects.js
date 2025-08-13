const projects = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    summary: 'SPA with React + MUI (Navy & Gold), accessibility-first and CI build.',
    frontend: ['React', 'MUI', 'Router'],
    backend: [],
    devops: ['Vercel', 'GitHub Actions'],
    tags: ['a11y', 'design-system'],
    live: '#', // cambia cuando tengas deploy
    repo: 'https://github.com/Sebasbh/Portfolio'
  },

  // === FLAGSHIP ===
  {
    id: 'task-api-dashboard',
    title: 'Task API + Dashboard',
    summary: 'Express REST API (JWT + roles) with MongoDB and React dashboard. Tested, Dockerized, CI/CD.',
    frontend: ['React', 'TanStack Query', 'MUI'],
    backend: ['Node', 'Express', 'MongoDB', 'JWT'],
    devops: ['Docker', 'GitHub Actions', 'Vercel'],
    tags: ['api', 'auth', 'crud', 'pagination', 'filters'],
    live: '#',
    repo: 'https://github.com/you/task-api'
  },
  {
    id: 'realtime-chat',
    title: 'Realtime Chat',
    summary: 'WebSocket/Socket.IO chat with rooms, typing indicators and optimistic UI updates.',
    frontend: ['React'],
    backend: ['Node', 'Socket.IO'],
    devops: ['Docker'],
    tags: ['websocket', 'realtime', 'rate-limit'],
    live: '#',
    repo: 'https://github.com/you/realtime-chat'
  },
  {
    id: 'mini-ecommerce',
    title: 'Mini e-commerce',
    summary: 'Catalog + cart + checkout with Stripe. Orders, admin basics and webhooks.',
    frontend: ['React', 'MUI'],
    backend: ['Node', 'Express', 'MongoDB', 'Stripe'],
    devops: ['Docker', 'GitHub Actions'],
    tags: ['stripe', 'webhooks', 'orders'],
    live: '#',
    repo: 'https://github.com/you/mini-ecommerce'
  },

  // === APOYO ===
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    summary: 'Scheduled ingestion, Mongo aggregations, caching (opt), and charts in MUI.',
    frontend: ['React', 'MUI'],
    backend: ['Node', 'Express', 'MongoDB'],
    devops: ['Cron', 'GitHub Actions'],
    tags: ['aggregations', 'caching', 'charts'],
    live: '#',
    repo: 'https://github.com/you/analytics-dashboard'
  },
  {
    id: 'url-shortener-stats',
    title: 'URL Shortener + Stats',
    summary: 'Short links with click analytics, QR generation and basic rate limiting.',
    frontend: ['React'],
    backend: ['Node', 'Express', 'MongoDB'],
    devops: ['Docker'],
    tags: ['qr', 'analytics', 'rate-limit'],
    live: '#',
    repo: 'https://github.com/you/url-shortener'
  }
];

export default projects;
