import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PortfolioItems from './PortfolioItems';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class InteractiveList extends React.Component {

  render() {
    const { classes } = this.props;
    const values = ['Tristezas', 'Elaboración de duelos', 'Angustias', 'Miedos', 'Apegos', 'Depresiones', 'Ansiedades', 'Baja autoestima', 'Inseguridad', 'Complejos', 'Fobias', 'Estrés', 'Obesidad', 'Obsesiones' ]

    const values1 = ['Disfunciones sexuales', 'Migraña', 'Colon irritado', 'Alergias', 'Gastritis', 'Bulimia', 'Anorexia', 'Asfixia','Bloqueos', 'Enuresis', 'Adicciones', 'Dolores y enfermedades inexplicables']

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {values.map(item => {
            return <PortfolioItems key={item} props={item} />
          })}
        </Grid>
        <br/>
        <p>Enfermedades Psicosomáticas:</p>
        <Grid container spacing={24}>
          {values1.map(item => {
            return <PortfolioItems key={item} props={item} />
          })}
        </Grid>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveList);
