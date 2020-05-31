import { createMuiTheme } from '@material-ui/core/styles';

import { lightGreen, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: pink,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
