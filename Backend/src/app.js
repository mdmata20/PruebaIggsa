import express from 'express';
import config from './config';
var cors = require('cors');
import productosRoutes from './routes/productos.routes'


const app = express();

// settings
app.set('port', config.port)

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(productosRoutes)

export default app