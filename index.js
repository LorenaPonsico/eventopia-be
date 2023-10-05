const express = require ( 'express');
const conectarDB = require('./config/db')
const cors = require('cors');

//creamos el servidor
const app = express();


const port = process.env.PORT || 4000;

//conectamos a la BD
conectarDB();

// middleware
app.use(cors());
app.use(express.json()) // para poder enviar json a nuestra app
app.use('/api/events', require('./routes/events.routes'));
app.use('/api/users', require('./routes/users.routes'));

app.listen(port) 

    console.log('server is working listen on port ${port}');
