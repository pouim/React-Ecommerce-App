import { makeStyles } from "@material-ui/styles";
import { Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  paper: {
    padding: '0.3rem 2rem',  
    textAlign: "left",
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  },
}));
