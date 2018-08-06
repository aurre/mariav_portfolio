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
import axios from 'axios';

import ContactInfoCard from './ContactInfoCard';


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

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const newMessage = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    }
     await axios.post('/api/messages', newMessage)

     this.setState({
       name: '',
       email: '',
       message: ''
     })
  }

  render() {
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>

        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
        <Card className={classes.card}>
        <CardContent>
          <Typography component="h6">
            Si quiere que me ponga en contacto con usted llene el formuario a continuacion y sera contactado lo antes posible
          </Typography>
        </CardContent>
        <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Nombre"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
         <TextField
          required
          id="email"
          label="Correo Electronico"
          className={classes.textField}
          value = {this.state.email}
          onChange = {this.handleChange('email')}
          margin="normal"
        />
        <TextField
          id="mensaje"
          label="Mensaje"
          className={classes.textField}
          value={this.state.message}
          onChange={this.handleChange('message')}
          margin="normal"
          multiline
        />
          <CardActions>
          <Button size="small" color="primary" type="submit">
            Enviar
          </Button>
          </CardActions>
        </form>
        </Card>
        </Paper>
        </Grid>
        <ContactInfoCard />

      </Grid>
    </div>
  );
}
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);
