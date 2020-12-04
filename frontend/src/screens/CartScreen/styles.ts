import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    width: '100%',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
     "@media (min-width:800px)": {
        width: '50%',
      },  
  },
  cartContainer: {
    display: 'flex',
  },
  headerContainer: {
    display: 'flex',
    padding: '0.5rem',
    marginBottom: '2rem',
    alignItems: 'center',
    width: '100%',
    borderBottom: '0.05rem solid rgb(0,15,8, 0.3)',
  },

  cartItemContainer: {
    backgroundColor: 'red',
    padding: '2rem',
  },
  cartItemImageContainer: {
    backgroundColor: 'blue',
    padding: '2rem',
  },
  cartItemDetailsContainer: {
     backgroundColor: 'green',
     padding: '2rem',
  },

}));
