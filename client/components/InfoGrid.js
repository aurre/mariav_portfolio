import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Card, CardContent, Typography} from '@material-ui/core';

import PortfolioItems from './PortfolioItems';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },

});

class InfoGrid extends React.Component {

  render() {
    const { classes } = this.props;
    const values = ['Tristezas', 'Elaboración de duelos', 'Angustias', 'Miedos', 'Apegos', 'Depresiones', 'Ansiedades', 'Baja autoestima', 'Inseguridad', 'Complejos', 'Fobias', 'Estrés', 'Obesidad', 'Obsesiones' ]

    const values1 = ['Disfunciones sexuales', 'Migraña', 'Colon irritado', 'Alergias', 'Gastritis', 'Bulimia', 'Anorexia', 'Asfixia','Bloqueos', 'Enuresis', 'Adicciones', 'Dolores y enfermedades inexplicables']

    return <div className={classes.root}>
        <Card style={{height: '510px'}}>
          <Typography variant="headline" component="h6">
            Enfermedades emocionales como:
          </Typography>
          {values.map(item => {
            return <PortfolioItems key={item} props={item} />;
          })}
        </Card>
        <Card style={{height: '510px'}}>
          <Typography variant="headline" component="h6">
            Enfermedades Psicosomáticas:
          </Typography>
          {values1.map(item => {
            return <PortfolioItems key={item} props={item} />;
          })}
        </Card>
      </div>;
  }
}

InfoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoGrid);
