import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
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

function ContactForm(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h5">
            CONTACTO
        </Typography>
        </CardContent>
      <Grid container spacing={24}>
       
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
        <Card className={classes.card}>
        <CardContent>
          <Typography component="h6">
            Si quiere que me ponga en contacto con usted llene el formuario a continuacion y sera contactado lo antes posible
          </Typography>
        </CardContent>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Nombre"
          className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
        />
         <TextField
          required
          id="email"
          label="Correo Electronico"
          defaultValue=""
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="mensaje"
          label="Mensaje"
          className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
          multiline
        />
          <CardActions>
          <Button size="small" color="primary">
            Enviar
          </Button>
        </CardActions>
        </form>
        </Card>
        </Paper>
        </Grid>

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
            <ListItemText insert primary="mariavictoria.perezrios@yahoo.com" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationIcon />
            </ListItemIcon>
            <ListItemText insert primary="84 A #37 B 34,Medellin, Colombia" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText insert primary="310 430 0657" />
          </ListItem>
        </List>
          </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);