import React from 'react'
import useStyles from "./styles";


interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          {props.children}
        </div>
    );
};


export default Footer;