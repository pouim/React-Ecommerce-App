import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  Button: {
    borderRadius: '0rem',
    boxShadow: 'none',
    backgroundColor: '#000F08',
    color: '#ffffff',
    fontSize: '1rem',
    "&:hover": {
      backgroundColor: '#000F08',
    },
  },
  big: {
    padding: '1rem 5rem',
  },
  small: {
    padding: '1rem 0.003rem',
  }
}));

const CustomButton = (props) => {
  const classes = useStyles();
  const bigOrSmall = props.small? classes.small: classes.big;
  const myClasses = [classes.Button, bigOrSmall].join(" ");
  return (
    <div className={classes.root}>
      <Button className={myClasses} variant="contained" {...props}>{props.children}</Button>
    </div>
  );
};

export default CustomButton;
