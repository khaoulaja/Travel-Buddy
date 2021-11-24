
var countryName = document.getElementById("countryName");
var countryPop = document.getElementById("population");
var countryReg = document.getElementById("region");
var subRegion = document.getElementById("subregion");
var countryCap = document.getElementById("capital");
var countryCurrency = document.getElementById("currencies");
var countryLang = document.getElementById("languages");

var getCountries = function () {
    var apiUrl = "https://restcountries.com/v3.1/all";

    fetch(apiUrl).then(function (response) {
          response.json().then(function(data) {
              console.log(repsonse);
            });
        });

}


