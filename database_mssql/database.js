const sql = require('mssql/msnodesqlv8');

const config = {
    user: "sa",
    password: "scc1994*",
    server: "SRICHACLOUD",
    database: "Test_Database",
    port: 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
    connectionTimeout: 15000,
};

const poolPromise = sql.connect(config).then(pool => {
    console.log("Connect success");
    return pool;
}).catch(err => {
    console.error(err);
});

module.exports = { poolPromise };
