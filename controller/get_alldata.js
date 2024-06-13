const {poolPromise}  = require('../database_mssql/database')

const getAlldata = async (req,res) => {
  try {
    const pool = await poolPromise;
    const request = pool.request();
    const result = await request.query("SELECT TOP(100) * FROM dbo.ErpitemCodes");
    res.json(result.recordset);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data' });
}
  };
  
  module.exports = {
    getAlldata
  };