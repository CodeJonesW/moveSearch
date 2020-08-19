let student = {
    name: "Bill",
    level: 2
}

let stringfiedStudent = JSON.stringify(student)


console.log("This is my object: ", student)
console.log("This is my stringified object: ", stringfiedStudent)
console.log("This is my parsed object: ", JSON.parse(stringfiedStudent))


var title = "space+jam";



let button = document.getElementById("element")
let titleElement = document.getElementById("title")
let yearElement = document.getElementById("year")
let actorsElement = document.getElementById("actors")
let searchInput = document.getElementById("searchInput")
console.log(searchInput.textC)
var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";




button.addEventListener("click", function () {
    // console.log(this)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.Runtime);

        titleElement.innerHTML = response.Title
        yearElement.innerHTML = response.Year
        actorsElement.innerHTML = response.Actors




    });
})