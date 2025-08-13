const projects = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    summary: 'SPA with React + MUI (Navy & Gold), accessibility-first and CI build.',
    frontend: ['React', 'MUI', 'Router'],
    backend: [],
    devops: ['Vercel', 'GitHub Actions'],
    tags: ['a11y', 'design-system'],
    live: '#',             // cambia cuando tengas deploy
    repo: 'https://github.com/Sebasbh/Portfolio'
  },
  {
    id: 'task-api',
    title: 'Task API + Dashboard',
    summary: 'Express REST API with JWT + MongoDB, React dashboard and Dockerized dev env.',
    frontend: ['React'],
    backend: ['Node', 'Express', 'MongoDB', 'JWT'],
    devops: ['Docker', 'GH Actions'],
    tags: ['api', 'auth', 'docker'],
    live: '#',
    repo: 'https://github.com/you/task-api'
  },
  {
    id: 'realtime-chat',
    title: 'Realtime Chat',
    summary: 'WebSocket chat with rooms, typing indicators and optimistic UI updates.',
    frontend: ['React'],
    backend: ['Node', 'WS'],
    devops: ['Docker'],
    tags: ['websocket', 'realtime'],
    live: '#',
    repo: 'https://github.com/you/realtime-chat'
  }
];

export default projects;
