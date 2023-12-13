import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 3
      },
    },
    MuiTimelineContent: {
      defaultProps: {
        alignSelf: 'center',
      }
    }
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
    //   default: '#b19a9a',
    //   paper: '#271f1f',
    // },
  },
});

export default theme;
