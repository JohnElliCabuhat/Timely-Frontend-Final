import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';

export default function CardEmail() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <EmailIcon  fontSize='large'/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Email
        </Typography>
        <Typography variant="body2" color="text.secondary">
          main@playerscore.co
        </Typography>
      </CardContent>
    </Card>
    
  );
}