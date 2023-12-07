import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontSize: 18,
    },
  },
  palette: {
    mode: 'dark',
    // primary: {
    //   main: '#23bb46',
    // },
    // secondary: {
    //   main: '#f50057',
    // },
    // background: {
    //   default: '#445d32',
    //   paper: '#271f1f',
    // },
  },
});

export default theme;
