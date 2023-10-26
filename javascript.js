function myFunction() {
let username = prompt("Who are you?");

if (username != null) {
    document.getElementById("query").innerHTML = 
    "Hello " + username + "! It's nice to meet you!";
}
else if (username = " ") {
    document.getElementById("query").innerHTML = 
    "I didn't get that....";
}
}
