const express = require('express');
const router = express.Router();
const Controller_get_test = require('../controller/get_test');
const Controller_getalldata = require('../controller/get_Alldata');
const Controller_Postdata = require('../controller/post_data');
const Controller_Putdata = require('../controller/put_data');
const Controller_Delete = require('../controller/delete_data');
const Controller_Testapprove = require('../controller/test_approve');

const Controller_Get_device_type = require('../controller/get_device_type');
const Controller_Post_transaction = require('../controller/post_transaction')
require('dotenv').config();


router.get('/', Controller_get_test.get_test);
router.get('/getalldata',Controller_getalldata.getAlldata)
router.post('/postdata',Controller_Postdata.Post_data)
router.put('/put_data/:id',Controller_Putdata.Put_data)
router.delete('/delete_data/:id',Controller_Delete.Delete_data)
router.post('/testapprove',Controller_Testapprove.Test_approve)

router.get('/devicetype',Controller_Get_device_type.Get_device_type)
router.post('/transaction',Controller_Post_transaction.Post_transaction)






module.exports = router;
