# PORTFOLIO

Portfolio personal construido con React y Vite. Incluye secciones dinámicas, soporte bilingüe (es/en), modo claro/oscuro y un formulario de contacto integrado con EmailJS o un backend propio.

## Requisitos
- Node.js 18 LTS o superior (hasta la 23).
- npm 9+ (instalado junto con Node).

## Instalación
```bash
cd frontend
npm install
```

## Variables de entorno
Duplica `frontend/.env.example` y renómalo a `.env` dentro de la carpeta `frontend`. Completa los siguientes valores de EmailJS:

```
VITE_EMAILJS_PUBLIC_KEY=tu_clave_publica
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
```

Si prefieres usar un backend propio para el formulario de contacto, expón una variable global `API_BASE_URL` en tiempo de ejecución (por ejemplo, inyectándola desde tu hosting) que responda al endpoint `POST /api/contact`.

## Scripts útiles
Todos se ejecutan desde la carpeta `frontend`.

- `npm run dev`: levanta el servidor de desarrollo de Vite.
- `npm run build`: genera la build optimizada en `frontend/dist`.
- `npm run preview`: sirve la build generada para verificación rápida.
- `npm run lint`: ejecuta ESLint sobre el código fuente.
- `npm test`: ejecuta la suite de pruebas con Vitest y Testing Library.

## Pruebas
Las pruebas cubren hooks clave como el control del tema (`useTheme`) y componentes interactivos como el encabezado. Puedes extenderlas añadiendo casos en `src/**/*.test.{js,jsx}`. Para ejecutarlas una sola vez:

```bash
npm test -- --run
```

Durante desarrollo, Vitest puede correr en modo watch:

```bash
npm test
```

## Estructura principal
- `frontend/src`: código fuente del portfolio (componentes, hooks, estilos y datos).
- `frontend/public`: recursos estáticos servidos sin transformación.
- `frontend/dist`: salida de la build lista para producción (generada por `npm run build`).

## Despliegue
El proyecto está preparado para Vercel (ver `frontend/vercel.json`). Cualquier plataforma que soporte aplicaciones Vite/React funcionará si sirve la carpeta `frontend/dist` tras `npm run build`.

## Mantenimiento
- Actualiza contenido e imágenes en `frontend/src/data` y `frontend/public/assets`.
- Añade nuevas secciones como componentes en `frontend/src/components` y registra la navegación correspondiente en `content.js`.
- Usa `npm run lint` y `npm test` antes de desplegar para evitar regresiones.
