import { createTheme, responsiveFontSizes, alpha } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0F172A',
      light: '#1E293B',
      dark: '#0B1220',
      contrastText: '#E5E7EB'
    },
    secondary: {
      main: '#EAB308',
      light: '#FDE68A',
      dark: '#B45309',
      contrastText: '#0F172A'
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569'
    },
    divider: '#E2E8F0'
  },
  typography: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    h1: { fontWeight: 800, fontSize: '2.5rem', lineHeight: 1.15 },
    h2: { fontWeight: 700, fontSize: '2rem', lineHeight: 1.2 },
    h3: { fontWeight: 700, fontSize: '1.6rem', lineHeight: 1.25 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  shape: { borderRadius: 12 },
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' }
    },

    // Focus ring accesible + variantes/estados de botones
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 12,
          paddingInline: '1rem',
          '&:focus-visible': {
            outline: `3px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
            outlineOffset: 2
          }
        }),
        outlinedSecondary: ({ theme }) => ({
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.dark,
          '&:hover': {
            borderColor: theme.palette.secondary.dark,
            backgroundColor: alpha(theme.palette.secondary.main, 0.08)
          }
        })
      },
      // Variante "soft" personalizada (útil para CTAs secundarios/chips)
      variants: [
        {
          props: { variant: 'soft', color: 'secondary' },
          style: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.secondary.main, 0.15),
            color: theme.palette.secondary.dark,
            border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
            '&:hover': {
              backgroundColor: alpha(theme.palette.secondary.main, 0.25)
            }
          })
        }
      ]
    },

    // AppBar “sticky” con separación sutil
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.divider}`
        })
      }
    },

    // Cards con hover sutil
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 16,
          border: `1px solid ${theme.palette.divider}`,
          transition: 'transform .2s ease, box-shadow .2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 30px rgba(0,0,0,.08)'
          }
        })
      }
    },

    // Links con subrayado elegante
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          textDecorationColor: alpha(theme.palette.text.primary, 0.2),
          textUnderlineOffset: '2px',
          '&:hover': { textDecorationColor: theme.palette.secondary.main }
        })
      }
    },

    // Chip "soft" dorado
    MuiChip: {
      variants: [
        {
          props: { variant: 'soft', color: 'secondary' },
          style: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.secondary.main, 0.15),
            color: theme.palette.secondary.dark
          })
        }
      ]
    },

    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': { height: '100%' },
        '::selection': {
          backgroundColor: alpha('#EAB308', 0.3)
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);
export default theme;



