var number_visits = localStorage.getItem("number_visits");

if (!number_visits) {
    number_visits = 0;
}
number_visits = +number_visits + 1; 

localStorage.setItem("number_visits", number_visits);
document.getElementById("discover_visits").innerHTML = number_visits;

function clear_cache() {
  localStorage.removeItem("number_visits");
  location.reload();
}
// works cited: https://www.techighness.com/post/track-number-of-user-visits-with-javascript-local-storage/