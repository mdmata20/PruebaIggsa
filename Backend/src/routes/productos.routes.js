import { Router } from "express";
import {AntiguedadMateriales, ConstoInversionPorBodega, CreateProducto, deleteProducto, EnvioProducto, getProductoId, getProductos, productoCaducatos} from '../controllers/productos.controller';

const router = Router();

router.get('/productos', getProductos);
router.post('/productos', CreateProducto);
router.delete('/productos', deleteProducto);
router.put('/productos');
router.get('/productos/:nombre', getProductoId);
router.get('/productosC/:caducado', productoCaducatos);
router.get('/productosAntiguos', AntiguedadMateriales);
router.get('/ContoInversionBodega', ConstoInversionPorBodega);
router.put('/EnvioProducto', EnvioProducto);



export default router