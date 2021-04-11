
let table;

$(function(){

    $.ajax({
        url:'staffs',
        success: function(staffs){
            let $staffSelect = $('<select id="staffSelect"></select>');
            let $label = $('<label for="staffSelect">Select an staff to show his time table:</label>');
            
            for(let staff of staffs){
    
                $staffSelect.append('<option data-staff-id="'+staff.staffnumber+'">' + staff.firstname + staff.lastname + '</option>');
            }
            
            $('body').prepend($staffSelect).prepend($label);

            //render the time table for the first staff in the options
            let firstStaffNumber = $staffSelect.find('option').first().data('staff-id');
            setUpTable(firstStaffNumber);

            $('#staffSelect').on('change', function(evt){
                let staffnumber = $(evt.target).find('option').filter(':selected').data('staff-id');
        
                $.ajax({
                    url: 'staffs/'+staffnumber+'/timetable',
                    success: function(data){
                        table.setData(data);
                    },
                    dataType: 'json'
                })
            })

        },
        dataType: 'json'
    });
 


});

function setUpTable(staffnumber){

    $.ajax({
        url: 'staffs/'+staffnumber+'/timetable',
        success: function(data){
            table = new Tabulator("#example-table", {
                data: data, //assign data to table
                autoColumns: true,
            });
        },
        dataType: 'json'
    })

}