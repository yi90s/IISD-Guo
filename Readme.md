You are welcome to implement solutions to the tests in any system/language/framework that you wish with the end result being viewable/operable from a web browser.

As this test is designed for you to work independently, where you may be unclear about the specification please feel free to make a decision based on your interpretation. You may document such decisions if you feel your interpretation may not have been what was asked for.

You do NOT have to implement your work as a live solution but can provide instructions for us to implement them to test your code. Even if you do implement/make live the solution please provide all of your source code for evaluation.

At IISD we have Programs that are made up of multiple projects and sets of staff members. Each project has time assigned to individual staff for their work in that project. Along with the time assignments, each staff member records their time spent on each project per day in a time tracking system.

The data tables described at the end of this document make up the structure for the Programs, Projects, Staff, Schedules and Tracking. The tables are linked via foreign keys as outlined in the description of each table. Once again, in implementing a solution to the test, you may implement the database management system in any method that you find suitable be it a relational system or other approach. This component will not specifically be evaluated unless you document that you use a feature of your chosen database management system as part of the implementation, be it stored procedures or other DBMS specific features.

Wherever you display a project code, it should be made up of the Program designation (2 characters) a dash and the Project code (3 characters) so a display like AD-005.

All dates/times displayed must be in a suitable ISO 8601 format.

## Test A – Individual Staff Time Tracked/Scheduled Summary Table

Create a tabular view for a single staff member showing a line for each project with time already tracked to the project (as a total), time remaining in the project (scheduled time minus tracked time) and the project end date.

You may display the table for a single staff member in a fixed fashion or provide a pick list of staff to select the table for different staff correspondingly updating the table data displayed.

The typical factors will be used in evaluating your submitted code (coding standards, code readability/understandability, relevant commenting), primary among them is accurate table data displayed. Also to be evaluated will be the user interface for the table and any extra features/functions that you add to the table aside from the basic table display. The speed of the solution will also be evaluated.

## Test B – Program staff forecasting matrix

Create a matrix report for the programs "Experimental Lakes Area" (programid=17) and "Executive" (programid=25).

Create a matrix consisting of 1 row per staff for each program. Each row would show columns with actual time tracking, on a monthly basis, for the staff member and then linearly forecast their remaining scheduled time for the next 8 months. The linear forecast consists of taking the remaining scheduled hours and spreading them out evenly, on a monthly basis, for the remaining duration of the project, based on its end date. Where projects end after the 8 month period, you should still forecast for the entire remaining duration of the project.

The implemented matrix may have any extra features that you think would be useful in such a display from a staff or manager perspective.

The second part of this test is to describe alternate forecasting methods and ramifications of implementing them. Your proposed alternates do not necessarily need to be practical but you should present benefits/drawbacks and technical implementation issue that you consider relevant in the alternate forecasting methods.

Similar factors will be used to evaluate your submission for this test as in part A. Your second part will be evaluated on writing quality, presentation of approaches and completeness of benefits/drawbacks/technical issues.

*** 

The following data tables are used in our internal time tracking system.
The related data can be found in CSV files in this repository.

PK = primary key, FK = foreign key

**tStaff**  
staffnumber (PK), firstname, lastname, programid (FK - tPrograms)

**tProjects**  
projectid (PK), projectcode, projectname, programid (FK - tPrograms), projectenddate

**tTrackingLog**  
logid (PK), staffnumber (FK - tStaff), projectid (FK - tProjects), hours, date

**tProjectSchedules**  
scheduleid (PK), staffnumber (FK - tStaff), projectid (FK - tProjects), days

**tPrograms**  
programid (PK), programname, abbreviation

Entries in **tTrackingLog** record the hours a staff member worked on a project per day. The table **tProjectSchedules** shows the number of scheduled days per staff member per project. 1 work day is 7.5 hours long.

