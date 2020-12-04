import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection:'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '50rem',
    maxWidth: '100%',
    height: '60rem',
    "@media (max-width:500px)": {
        height: "30rem",
      },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
   AccordionContainer: {
    boxShadow: 'none',
    padding: '0',
    border: 'none',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  AccordionListItems: {
    marginTop: theme.spacing(-2),
    marginLeft: theme.spacing(-2),
  },
  item: {
   marginTop: '0.5rem',
  },
  btnContainer: {
    boxShadow: 'none',
  },
  button: {
    padding: '1rem 3rem',
    borderRadius: '0rem',
    textAlign: 'center',
    margin: '0.019rem',
  },
  small: {
    padding: '1rem 1rem',
  },

  sec2: {
    marginTop: '8rem',
  },
  sec2titleContainer: {
    marginTop: '15rem',
    "@media (max-width:858px)": {
        marginTop: '10rem',
      },
    "@media (max-width:599px)": {
      marginBottom: '3rem',
      },
    "@media (max-width:376px)": {
      marginBottom: '3rem',
      },   
  },
  sec2title: {
    fontWeight: 'bold',
    "@media (max-width:858px)": {
        fontSize: '1.8rem',
      },
    "@media (max-width:599px)": {
        fontSize: '1.5rem',
        textAlign: 'center',
      },
    "@media (max-width:376px)": {
        fontSize: '1.2rem',
        textAlign: 'center',
      },  
  },
  sec2image: {
    width: '40rem',
    maxWidth: '100%',
    height: '50rem',
    "@media (max-width:1542px)": {
        width: '35rem',
        height: "45rem",
      },
      "@media (max-width:1307px)": {
        width: '30rem',
        height: "40rem",
      },
      "@media (max-width:1099px)": {
        width: '25rem',
        height: "35rem",
      },
      "@media (max-width:880px)": {
        width: '20rem',
        height: "25rem",
      },
      "@media (max-width:673px)": {
        width: '15rem',
        height: "20rem",
      },
      "@media (max-width:376px)": {
        width: '10rem',
        height: "15rem",
      },  
  },
  imgContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
  },

  sec3: {
    marginTop: '12rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sec3image: {
    width: '22rem',
    maxWidth: '100%',
    height: '32rem',
  },
}));
