import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#ff4081' },
    background: { default: '#f5f5f5' }
  },
  typography: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    h1: { fontWeight: 800, fontSize: '2.5rem', lineHeight: 1.15 },
    h2: { fontWeight: 700, fontSize: '2rem', lineHeight: 1.2 },
    h3: { fontWeight: 700, fontSize: '1.6rem', lineHeight: 1.25 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' }
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, paddingInline: '1rem' }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': { height: '100%' }
      }
    }
  }
});

export default theme;

