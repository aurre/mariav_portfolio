import React from 'react';
import '../../node_modules/video-react/dist/video-react.css'
import { Player, ControlBar, ForwardControl } from 'video-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  };

const Gallery =  (props) => {
    const { classes } = props;

  return (
      <div>
          <CardContent>
        <Typography gutterBottom variant="headline" component="h5">
            GALERIA
        </Typography>
        </CardContent>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Card className={classes.card}>
 
    <Player
      src="https://s3.amazonaws.com/aurre/TLP-ira-explosiva.mp4"
      style={{width: '100px'}}
    >
    <ControlBar autoHide={false}>
    <ForwardControl seconds={5} order={3.1} />
    <ForwardControl seconds={10} order={3.2} />
    <ForwardControl seCONTACTOconds={30} order={3.3} />
    </ControlBar>
    </Player>
    <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            La ira explosiva en un TLP
          </Typography>
          <Typography component="p">
            Ira inapropiada, inestabilidad, respuesta agresiva a la frustración.Cuando tú o el TL tienen una intensa reacción por una situación, es probable que uno de tus desencadenantes o botón rojo fue encendido ¡ON!
          </Typography>
        </CardContent>
    </Card>
    <Card className={classes.card}>
 
    <Player
    src="https://s3.amazonaws.com/aurre/dolor_emocional.mp4"
    style={{width: '100px'}}
    >
    <ControlBar autoHide={false}>
    <ForwardControl seconds={5} order={3.1} />
    <ForwardControl seconds={10} order={3.2} />
    <ForwardControl seconds={30} order={3.3} />
    </ControlBar>
    </Player>
    <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
            El vacio en el estomago y el dolor emocional en un TLP
        </Typography>
        <Typography component="p">
            La imagen del problema que el afectado por un Trastorno Límite de la Personalidad (T.L.P) puede tener en su interior, podría parecerse probablemente a un laberinto, a un entramado o un caos en la que se siente atrapado en algo oscuro y espeso que le resulta difícil salir.
        </Typography>
        </CardContent>
    </Card>
    <Card className={classes.card}>
 
    <Player
    src="https://s3.amazonaws.com/aurre/TLP-beneficios.mp4"
    style={{width: '100px'}}
    >
    <ControlBar autoHide={false}>
    <ForwardControl seconds={5} order={3.1} />
    <ForwardControl seconds={10} order={3.2} />
    <ForwardControl seconds={30} order={3.3} />
    </ControlBar>
    </Player>
    <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
            Los beneficios de los limites en una persona con TLP
        </Typography>
        <Typography component="p">
            ¿ Tienes baja tolerancia a la frustración? ¿Como saberlo? o ¿ Eres de l@s que enfrentan una situación de estrés en cuyo caso reaccionas con ira, rabia o tristeza desmedida ante situaciones que la mayoría de las personas son capaces de resolver en su interior?
        </Typography>
        </CardContent>
    </Card>
    </div>
    </div>
   );
};


Gallery.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Gallery);
