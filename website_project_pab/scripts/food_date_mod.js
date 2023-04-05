const d=new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];

// Displaying the current date and the last date of modification ↓↓↓
let year ="   "+day+", "+new Date().getDate()+" "+month+"  "+new Date().getFullYear()+" ; ";
document.getElementById('c_year').innerHTML = year;

let text = document.lastModified;       
document.getElementById('last_modified').innerHTML = text;

