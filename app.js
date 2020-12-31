// Tu códgigo aquí

const METHOD = "GET",
    URL = "https://api.chucknorris.io/jokes/random";

const ERROR_MESSAGE = "There was an error with the API";

var btn = document.querySelector("#get-joke");
var display = document.querySelector("#display-joke");

btn.addEventListener('click', fetchInfo);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        updateHTML(display, JSON.parse(this.responseText).value)     
    }else if (this.status == 404){
        updateHTML(display, ERROR_MESSAGE);
        display.style.border = "5px";
    }
};

//Method 1
function updateInfo() {
    xhttp.open(METHOD, URL, true);
    xhttp.send();
}

//Method 2
function fetchInfo(){
    fetch(URL)
    .then(response => response.json())
    .then(data => updateHTML(display,data.value));
}

function updateHTML(field,value){
    field.innerHTML = value;
}
