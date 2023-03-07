import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function CardContact() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <ContactsIcon fontSize='large'/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Contact Number
        </Typography>
        <Typography variant="body2" color="text.secondary">
          (629) 485-4357
        </Typography>
      </CardContent>
    </Card>
    
  );
}