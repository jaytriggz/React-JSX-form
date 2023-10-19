import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import overlord from './../assets/images/overlord.png';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      marginTop: theme.spacing(5),
    },
    title: {
      padding: theme.spacing(3, 2.5, 2),
      color: theme.palette.openTitle,
    },
    media: {
      minHeight: 400,
    },
  }));
  
  export default function Product(){ 
  const classes = useStyles()
  return (
  <Card className={classes.card}>
     
    <Typography variant="h6" className={classes.title}>Product Page</Typography>
  <CardMedia className={classes.media}
  image={overlord} title="Overlord"/>
  <CardContent>
  <Typography variant="body2" component="p"> 
  Welcome to the MERN Skeleton New-Product page.
  </Typography> 
    <form>
      <label for="name">Name:</label>
        <input type="text" id="name" name="name" required></input>
        

        
        <label for="description">Description:</label>
        <textarea id="description" name="description" required></textarea>
        

        
        <label for="category">Category:</label>
        <input type="text" id="category" name="category" required></input>

        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" required></input>


        <label for="price">Price (USD):</label>
        <input type="number" step="0.01" id="price" name="price" required></input>


        <button type="submit">Submit</button>

        <button type="submit">Cancel </button>
        
       
    </form>
  </CardContent>
  </Card> 
  )
  }