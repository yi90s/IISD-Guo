var express = require('express');
const StaffService = require('../services/StaffService');
var router = express.Router();
var staffService = new StaffService();

/* GET the time table of a single staff. */
router.get('/:staffId/timetable', function(req, res, next) {
    res.json(staffService.getTimeTable(req.params['staffId']));
});

router.get('/', function(req, res, next){
    res.json(staffService.getAllStaffs());
})

module.exports = router;
