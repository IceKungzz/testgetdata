const {poolPromise} = require('../database_mssql/database')


const Post_transaction = async(req,res) =>{
    const data = req.body;
    try{
        const pool = await poolPromise;
        const request = await pool.request;
        const result = request.query(`
            insert into transactions 
            (tran_task,tran_device_type, tran_empname,tran_request_number ,tran_itemname,
             tran_itemcode,tran_amount,tran_date,tran_product_request_date, tran_note)
            VALUES(${data.task},${data.device_type},${data.empname},${data.request_number},${data.item_name},
            ${data.itemcode},${data.amount},${data.date},${data.product_request_date},${data.note})
            `)
            res.status(200).json({data:"add data success"})
    }catch(error){
        console.log(error);
        req.status(500).json({error:error})
    }
}

module.exports = {Post_transaction};