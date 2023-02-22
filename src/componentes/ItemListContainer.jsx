import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ItemListContainer() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image="sillon.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sillon 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sillon esquinero con tela de cheline para 4 personas, reforzado
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar al Carrito</Button>
        <Button size="small"><FavoriteBorderIcon/></Button>
      </CardActions>
    </Card>
  );
}


