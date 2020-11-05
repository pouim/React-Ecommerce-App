import React from "react";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from './Badge.module.css';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    
  },
}))(Badge);

const CustomizedBadges = (props) => {
  return (
      <span>
        <StyledBadge badgeContent={props.numItems} color="secondary">
          <ShoppingCartIcon className= {styles.badge}  />
        </StyledBadge>
       </span>  

  );
};

export default CustomizedBadges;
