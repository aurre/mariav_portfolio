import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function ProfileCard(props) {
  const { classes } = props;
  return (
    <div>
      <CardMedia
        className={classes.media}
        image="http://localhost:8080/profile_pic.jpeg"
        title="Profile Picture"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Maria Victoria Perez Rios
        </Typography>
        <Typography component="p">
          Psicoterapeuta y astrologa
        </Typography>
      </CardContent>
    </div>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);
