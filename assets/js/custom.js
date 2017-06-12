/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function (){
    var today = new Date();
    var year = today.getFullYear();
    var nextYear = year + 1;
    var range = year.toString();
    range = range.concat(":", nextYear);
    var month = today.getMonth() + 1;
    var time = "";
    time = time.concat(today.getHours().toString(), today.getMinutes().toString());
    var hours = today.getHours();
    
    var curr_date = today.getDate() + '/' + month + '/' + today.getFullYear();
    $('option[value="date1"]').text(curr_date);
    var n_date = today.getDate() + 1;
    var next_date, n_month, n_year;
    if (n_date === 1) {
        if (today.getMonth() + 1 === 1) {
            n_month = 1;
            n_year = today.getFullYear() + 1;
            next_date = 1 + '/' + n_month + '/' + n_year;
        }
    } else {
        next_date = n_date + '/' + month + '/' + today.getFullYear();
    }
    $('option[value="date2"]').text(next_date);





    var temp;
    if (today.getMinutes() < 10) {
        temp = '0' + today.getMinutes();
    } else {
        temp = today.getMinutes();
    }
   
    $("#time").timepicker({
        defaultTime: today.getHours() + ":" + temp
    });

});

alert = function () {};
confirm = function () {};
prompt = function () {};
