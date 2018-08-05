import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EmailIcon from '@material-ui/icons/Email';
import ListItemText from '@material-ui/core/ListItemText';
import LocationIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#42eef4',
  },
  container: {
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  card: {
    maxWidth: 400,
    margin: '0 auto',
    height: '350px',
  },
});


function ContactInfoCard(props) {
  const { classes } = props;

  return (
  <Grid item xs={12} sm={6}>
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <CardContent>
          <Typography component="h6">
            Alternativamente me puede contactar directamente por algunos de mis contactos listados debajo
          </Typography>
        </CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="mariavictoria.perezrios@yahoo.com" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationIcon />
            </ListItemIcon>
            <ListItemText primary="84 A #37 B 34,Medellin, Colombia" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="310 430 0657" />
          </ListItem>
        </List>
      </Card>
    </Paper>
  </Grid>)
}

ContactInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactInfoCard);
