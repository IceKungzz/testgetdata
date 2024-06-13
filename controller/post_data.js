const { poolPromise } = require('../database_mssql/database');

const Post_data = async (req, res) => {
    const data = req.body;
    console.log(data.Description);
    try {
        const pool = await poolPromise;
        const request = await pool.request();
        const result = await request.query("INSERT INTO dbo.ErpitemCodes (Item_ID,item_Code,Description, UOM) VALUES ('" + data.Item_ID + "','" + data.Item_Code + "','" + data.Description + "', '" + data.UOM + "')");

        res.json({ message: "เพิ่มข้อมูลสำเร็จ", result });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error fetching data' });
    }
}

module.exports = { Post_data };
