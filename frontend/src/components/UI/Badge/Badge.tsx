import React from "react";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import classes from './Badge.module.css';
import { Theme } from '@material-ui/core/styles';

// const StyledBadge = withStyles((theme: Theme) => ({
//   badge: {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     backgroundColor: theme.palette.secondary.main,
//     color: '#ffffff',
//     fontSize: '1.2rem',
//     zIndex: '1 !important',
//   },
// }))(Badge);

const CustomizedBadges = () => {
  return (
      <span>
        {/* <StyledBadge badgeContent={props.numItems}>
          <ShoppingCartIcon className= {classes.badgeIcon}  />
        </StyledBadge> */}
       </span>  

  );
};

export default CustomizedBadges;
