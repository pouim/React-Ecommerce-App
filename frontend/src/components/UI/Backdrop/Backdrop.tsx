import React from 'react';
import classes from './Backdrop.module.css';

interface backDropProps {
    show: boolean;
    clicked: () => void;
}

const backDrop: React.FC<backDropProps> = (props) => (
   props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backDrop;