var express = require('express');
var router = express.Router();
const Service = require('../services/Service');
let service = new Service();

router.get('/:programId/forecast', function(req, res, next){
    res.json(service.getProgramForecast(req.params['programId']));
});