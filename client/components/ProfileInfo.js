import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ProfileInfo = () => {
  return (
    <CardContent>
      <Typography gutterBottom variant="headline" component="h5">
        Psicóloga, Psicoterapeuta, Astrologa, En la Ciudad de Medellin.
      </Typography>
      <Typography component="p" style={{ fontSize: '15px' }}>
        Graduada en la UNAD en el año 2008, hipnoterapeuta desde el año 2012; experto en Regresiones, Terapia de Perdón DMC (Desactivación de la Memoria Corporal) y Reprogramación Mental.
      </Typography>
      <br />
      <Typography component="p" style={{ fontSize: '15px' }}>
        Enfoca su trabajo desde el método Terapéutico Psicoemocional y la psicología transpersonal, desde donde ha podido evidenciar importantes sanaciones específicamente de las enfermedades psicosomáticas, originadas por conflictos emocionales o psíquicos.
      </Typography>
      <br />
      <Typography component="p" style={{ fontSize: '15px' }}>
        Terapeuta comprometido con la salud emocional y psicosomática de sus consultantes, ayudándolos a encontrar las herramientas y/o recursos sanadores con lo que cada persona cuenta interiormente para activarlas, potencializarlas y a partir de allí combinarlas con la dinámica de perdón, la toma de conciencia y la liberación de basura mental y emocional, ayudando a resolver conflictos que se represan interiormente, lográndose así liberaciones de emociones negativas, alivios, cambios positivos y en muchos casos sanaciones.
      </Typography>
      <br />
      <Typography component="p" style={{ fontSize: '15px', fontWeight: 'bolder' }}>
        Terapias Personalizadas y por internet vía Skype.
      </Typography>
    </CardContent>)
}

export default ProfileInfo;
