const { poolPromise } = require('../database_mssql/database')


const Delete_data = async(req,res) =>{
    const id = req.params.id;

    try{
        const pool = await poolPromise;
        const request = await pool.request();
        const result = await request.query("Delete from dbo.ErpitemCodes where item_Code = '"+id+"'")
        res.status(200).json({Delete:"delete success"})
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Delete failed",err})
    }

}


module.exports = {Delete_data};