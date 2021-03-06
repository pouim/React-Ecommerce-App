import React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";

interface SidebarProps {
   children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
       {props.children}
    </Paper>
  );
};

export default Sidebar;
