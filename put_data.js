const { poolPromise } = require('../database_mssql/database');

const Put_data = async(req,res)=>{
    const id = req.params.id;
    const data_put = req.body;
    try{
        const pool = await poolPromise;
        const request = await pool.request();
        const result = await request.query("UPDATE dbo.erpitemcodes SET item_ID = '"+data_put.Item_ID+"', Description = '"+data_put.Description+"', UOM = '"+data_put.UOM+"' where item_Code = '"+ id +"'")
        res.status(200).json({message:"update success", result})
    }catch(err){
        console.log(err);
        res.status(500).json({errro: "Error update data ",err})
    }
}

module.exports = { Put_data }