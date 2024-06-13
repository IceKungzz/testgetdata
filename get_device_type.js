const {poolPromise} = require('../database_mssql/database');


const Get_device_type = async (req,res) =>{
    try{
        const pool = await poolPromise;
        const request = await pool.request();
        const result = await request.query("select * from ErpitemCodes")
        res.send(result);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error})
    }


}


module.exports = {Get_device_type};