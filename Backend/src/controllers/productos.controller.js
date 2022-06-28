import {getConnection, sql } from '../database/conecction'

export const getProductos = async (req, res) =>{
    const pool = await getConnection();
    const result = await pool.request().query("select * from  [PruebaIggsa].[dbo].[Producto];");
    res.json(result.recordset);
};

export const CreateProducto = async (req, res) =>{

    const {nombre, caducado,PrecioU,CantidadProducto,fechaIngreso,id_bodega} = req.body;

    const pool = await getConnection();

    const result = await pool.request()
    .input("nombre", sql.VarChar, nombre)
    .input("caducado", sql.Bit, caducado)
    .input("PrecioU", sql.Float, PrecioU)
    .input("CantidadProducto", sql.Int, CantidadProducto)
    .input("fechaIngreso", sql.VarChar, fechaIngreso)
    .input("id_bodega", sql.Int, id_bodega)
    
    .query('INSERT INTO [PruebaIggsa].[dbo].[Producto] (nombre,caducado,PrecioU,CantidadProducto,fechaIngreso,id_bodega) VALUES(@nombre,@caducado,@PrecioU,@CantidadProducto,@fechaIngreso,@id_bodega)');

    res.json({msg: 'dato insertado'});
    
};

export const getProductoId = async (req, res) =>{ 
    
    const {nombre} = req.body;

    const pool = await getConnection();

    const result = await pool.request()
    .input("nombre", req.params.nombre)
    .query("select *  from [PruebaIggsa].[dbo].[Producto] where [PruebaIggsa].[dbo].[Producto].nombre = @nombre;");
    res.json(result.recordset);
};


export const deleteProducto = async (req, res) =>{ 

    const {id_proyecto} = req.body;

    const pool = await getConnection();

    const result = await pool.request()
    .input("id_proyecto",sql.Int, req.id_proyecto)
    .query("delete from [PruebaIggsa].[dbo].[Producto] where [PruebaIggsa].[dbo].[Producto].id_proyecto = @id_proyecto;");
    res.json({msg: 'producto eliminado'});
};

export const AntiguedadMateriales = async (req,res) => {
    const pool = await getConnection();
    const result = await pool.request().query("select TOP 5 [PruebaIggsa].[dbo].[Producto].fechaIngreso, [PruebaIggsa].[dbo].[Producto].nombre from [PruebaIggsa].[dbo].[Producto] ORDER BY fechaIngreso;");
    res.json(result.recordset);
}

export const productoCaducatos = async (req, res) =>{ 
    const {caducado} = req.body;

    const pool = await getConnection();

    const result = await pool.request()
    .input("caducado", req.params.caducado)
    .query("select * from [PruebaIggsa].[dbo].[Producto] where [PruebaIggsa].[dbo].[Producto].caducado = @caducado;");
    res.json(result.recordset);
};

export const ConstoInversionPorBodega = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("select SUM([PruebaIggsa].[dbo].[Producto].CantidadProducto * [PruebaIggsa].[dbo].[Producto].PrecioU) As Total, [PruebaIggsa].[dbo].[Bodega].nombre from [PruebaIggsa].[dbo].[Producto] inner join [PruebaIggsa].[dbo].[Bodega] on [PruebaIggsa].[dbo].[Bodega].id_bodega =  [PruebaIggsa].[dbo].[Producto].id_bodega group by [PruebaIggsa].[dbo].[Bodega].nombre;");
    res.json(result.recordset);
}

export const EnvioProducto = async (req, res) => {
    const pool = await getConnection();

    const {bodega1, bodega2} = req.body;

    const result = await pool.request()
    .input("bodega1", sql.Int, bodega1)
    .input("bodega2", sql.Int, bodega2)
    .query("UPDATE [PruebaIggsa].[dbo].[Producto] SET [PruebaIggsa].[dbo].[Producto].id_bodega = @bodega1 WHERE [PruebaIggsa].[dbo].[Producto].id_proyecto = @bodega2;");
    res.json({msg: 'Producto Enviado :)'});
}


