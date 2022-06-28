export interface Producto {
    id_proyecto?: number;
    nombre: string;
    caducado: number;
    PrecioU: number;
    CantidadProducto: number;
    fechaIngreso: string;
    id_bodega: number;
}

export interface Envio {
    bodega1: number,
    bodega2: number
}