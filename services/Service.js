const fs = require('fs');
const parse = require('csv-parse/lib/sync');

class Service{
    #staffs = null;
    #programs = null;
    #projects = null;
    #projectSchedules = null;
    #trackingLog = null;

    constructor(){
        let options = {
            bom: true,
            columns: true
        }
        //read csv data files into memory
        this.#staffs = parse(fs.readFileSync('data/tStaff.csv'), options);
        this.#programs = parse(fs.readFileSync('data/tPrograms.csv'), options);
        this.#projects = parse(fs.readFileSync('data/tProjects.csv'), options);
        this.#projectSchedules = parse(fs.readFileSync('data/tProjectSchedules.csv'), options);
        this.#trackingLog = parse(fs.readFileSync('data/tTrackingLog.csv'), options);
    }

    getTimeTable(staffId){
        let timeTable = [];
        let involvedProjectIds = this.#projectSchedules.filter( schedule => schedule.staffnumber == staffId).map(schedule => schedule.projectid);
        for(let projId of involvedProjectIds){
            let trackedHoursOfProject = this.#trackingLog
                .filter( log => log.staffnumber == staffId && log.projectid == projId)
                .reduce(function(accumulate, log){return accumulate + parseInt(log.hours)}, 0);
            
            let scheduledDays = this.#projectSchedules
            .filter( schedule => schedule.staffnumber == staffId && schedule.projectid == projId);

            let projectEndDates = this.#projects
            .filter( project => project.projectid == projId);

            let timeRemains = scheduledDays.length > 0 ? scheduledDays[0].days*7.5 - trackedHoursOfProject : 'N/A';
  
            let projectEndDate = projectEndDates.length > 0 ? projectEndDates[0].projectenddate : 'N/A';

            timeTable.push({'staffId':staffId, 'projectId':projId, 'trackedHrs':trackedHoursOfProject, 'timeRemains': timeRemains.toFixed(2), 'projectEndDate':projectEndDate});
        }

        return timeTable;
    }

    getProgramForecast(programId){
        let projectsOfProgram = this.#projects.filter( project => project.programid == programId);
        for(let project of projectsOfProgram){
            let projectId = project.projectid;
            //TODO
        }
    }

    getAllStaffs(){
        return this.#staffs;    
    }

    get staffs(){
        return this.#staffs;
    }
}

module.exports = Service;