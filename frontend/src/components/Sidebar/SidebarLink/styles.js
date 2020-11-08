import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6), 
  },
  title: {
      fontSize: '2rem',
      fontWight: 'bold',
      marginLeft: '0.3rem',
      marginBottom: '1.9rem',
  },
  content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', 
  },
  item: {
      lineHeight: '2.8rem',
  },
  AccordionContainer: {
    boxShadow: 'none',
    padding: '0',
    border: 'none',
    marginTop: theme.spacing(-2),
  },
  AccordionListItems: {
    marginTop: theme.spacing(-2),
    marginLeft: theme.spacing(-2),
  },
  itemLink: {
    textDecoration: 'none',
    color: '#6E6E6E',
  },
}));
