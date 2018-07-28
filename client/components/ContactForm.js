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
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);