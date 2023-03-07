import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function CardLocation() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <LocationOnIcon fontSize='large' />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
          Location
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
        Lincoln Heights, Mansfield, OH 44905, USA
        </Typography>
      </CardContent>
    </Card>
    
  );
}