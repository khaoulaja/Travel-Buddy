var countryEl = document.querySelector("#please");
var apiUrl = "https://restcountries.com/v3.1/all"

var getCountries = function () {
    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function (data) {
                var elem = document.getElementById("please");

                $("elem").data("name");
            });
        });
}





var getTranslation = function () {
    var bpiUrl = "https://libretranslate.com/spec";

    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function (data) {
                
            });
        });
}

var displayCountries = function() {

}
getCountries();
getTranslation();
