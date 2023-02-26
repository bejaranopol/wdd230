let text = document.lastModified;       
document.getElementById('last_modified').innerHTML = text;
let year = new Date().getFullYear();
document.getElementById('c_year').innerHTML = year;

let text1 = document.lastModified;       
document.getElementById('last_modified1').innerHTML = text;
let year1 = new Date().getFullYear();
document.getElementById('c_year1').innerHTML = year;
/*
const userdate = new Date();
document.getElementById("user_date_mod").nodeValue = userdate.toDateString();
var hours = user_form_load.getHours();
var min = user_form_load.getMinutes();
var seconds = user_form_load.getSeconds();
document.getElementById('user_form_loaded').innerHTML="*The form was loaded at: "+x+hours+min+seconds;*/
