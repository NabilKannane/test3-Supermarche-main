const express = require('express');
const venteRoutes = require('./routes/venteRoutes');
const cors = require( 'cors' );
const path = require('path')

const app = express();

// ============= middlewares ==================

app.use( cors({
  origin: "*",
    credentials: true,
}) ); // controler l'acces a l'API

app.use('/api', venteRoutes) //Routes de vente

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.resolve(__dirname, './reactjs/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './reactjs/build', 'index.html'));
  });
}

module.exports = app;
