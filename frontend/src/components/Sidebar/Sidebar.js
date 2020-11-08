import React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";

const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
       {props.children}
    </Paper>
  );
};

export default Sidebar;
