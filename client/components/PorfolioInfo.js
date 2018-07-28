import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InfoGrid from './InfoGrid'

const PorfolioInfo = () => {
  return (
    <CardContent>
      <Typography gutterBottom variant="headline" component="h5">
        PORTAFOLIO
      </Typography>
      <h6>¿Qué se puede tratar con Hipnosis?</h6>
      <p>Se pueden tratar mediante la Hipnosis enfermedades emocionales como:</p>

      <InfoGrid />
    </CardContent>
  )
}

export default PorfolioInfo
