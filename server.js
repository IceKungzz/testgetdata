const express = require('express');
const cors = require('cors');
const app = express();
const port = 3306;
const router = require('./routers/routers');
const { poolPromise } = require("./database_mssql/database");
require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log("Server started on port " + port);
});
