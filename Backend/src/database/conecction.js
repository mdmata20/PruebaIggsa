import sql from 'mssql'

const dbSettings = {
    user: 'mdmata',
    password: '5470',
    server: 'localhost',
    databae: 'PruebaIggsa',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
}

export async function getConnection(){
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch (error){
        console.log(error);
    }
}


export { sql }