import React from 'react';
import InfoGrid from './InfoGrid';
import  Typography  from '@material-ui/core/Typography';

const PorfolioInfo = () => {
  return (
    <div>
      <Typography gutterBottom variant="headline" component="h1">
        ¿Qué se puede tratar con Hipnosis?
      </Typography>
      <InfoGrid />
    </div>
  )
}

export default PorfolioInfo
