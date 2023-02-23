const express = require('express');
const morgan = require('morgan');
const users = require('./routes/users.routes');

const app = express();

app.use(morgan('tiny'))
app.use(express.json());
app.use(users);



app.listen(8000, () =>{
    console.log('Servidor corriendo en el puerto 8000');
});
