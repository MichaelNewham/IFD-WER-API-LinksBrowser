var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/people/");
xhr.send();

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(typeof (JSON.parse(this.responseText)));
    }
};

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("data").innerHTML = this.responseText;
//     }
// };

// xhr.open("GET", "https://ci-swapi.herokuapp.com/api/people/1/");

// xhr.send();