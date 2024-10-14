var express = require('express');
var MasterDataCtrl = require('../controllers/MasterController')
var auth = require('../tools/middleware');
var router = express.Router();

router.get('/auth-data', MasterDataCtrl.get_authorization)


module.exports =  router