import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InteractiveList from './InfoGrid'

const PorfolioInfo = () => {
  return (
    <CardContent>
      <Typography gutterBottom variant="headline" component="h5">
        PORTAFOLIO
      </Typography>
      <InteractiveList />
    </CardContent>
  )
}

export default PorfolioInfo
