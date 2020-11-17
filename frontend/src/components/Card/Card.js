import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '../UI/Rating/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(2),
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const CustomCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height="550"
          image={props.image}
          title={props.title}
        />
        <CardContent className={classes.cardContent}>
          <div>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              USD ${props.price}
            </Typography>
          </div>
          <div>
            <Rating
              ratingNumber={props.ratingNumber}
              ratingReviews={props.numReviews}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;