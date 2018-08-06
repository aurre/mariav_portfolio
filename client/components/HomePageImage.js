import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    maxWidth: 200,
    maxHeight: 400,
    margin: 'auto',
  },
  media: {
    maxWidth: 200,
    height: 400,
  },
};

function HomePageImage(props) {
  const { classes } = props;
  return (
    <div style={{margin: 0, padding: 0}}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://s3.amazonaws.com/aurre/TLP-pic.jpg"
          title="TLP"
        />
      </Card>
    </div>
  );
}

HomePageImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePageImage);
