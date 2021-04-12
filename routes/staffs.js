var express = require('express');
const Service = require('../services/Service');
var router = express.Router();
var service = new Service();

/* GET the time table of a single staff. */
router.get('/:staffId/timetable', function(req, res, next) {
    res.json(service.getTimeTable(req.params['staffId']));
});

router.get('/', function(req, res, next){
    res.json(service.getAllStaffs());
})

module.exports = router;
