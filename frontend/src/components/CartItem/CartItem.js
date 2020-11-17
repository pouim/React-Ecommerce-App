import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '2rem',
    width: '100%',
    boxShadow: 'none',
    borderBottom: '0.05rem solid rgb(0,15,8, 0.3)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  content2: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(-1),
  },
  cover: {
    width: 200,
    height: 250,
  },
   button: {
    marginLeft: theme.spacing(40),
  },

  formControl: {
    marginTop: theme.spacing(1),
    // minWidth: 120,
    width: '7rem',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuItem: {
    fontFamily: 'Helvetica Neue LT Std',
  },
 
 
}));

const  CartItem = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [age, setage] = useState('');

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.image}
        title={props.name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h2" variant="h2">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            USD ${props.price}
          </Typography>
        </CardContent>

        <CardContent className={classes.content2}>
         <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              SIZE
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={age}
              onChange={e => setage(e.target.value)}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>NONE</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              COLOR
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={age}
              onChange={e => setage(e.target.value)}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>NONE</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              QUANTITY
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={age}
              onChange={e => setage(e.target.value)}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>{props.qty}</em>
              </MenuItem>
              {
                [...Array(props.countInStock).keys()].map(item => (
                  <MenuItem value={item + 2}>{item + 2}</MenuItem>
                ))
              }
              
              
            </Select>
          </FormControl>
        </CardContent>
        <Button className={classes.button} startIcon={<DeleteIcon />}>
          REMOVE
        </Button>
      </div>
    </Card>
  );
}

export default CartItem;