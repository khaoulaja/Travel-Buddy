var areaName = document.querySelector("#area");
var capitalName = document.querySelector("#capitol");
var langaugeName = document.querySelector("#language");
var currencyName = document.querySelector("#currency");
var areaNameOne = document.querySelector("#area1");
var capitalNameOne = document.querySelector("#capital1");
var languageNameOne = document.querySelector("#language1");
var currencyNameOne = document.querySelector("#currency1");
var areaNameTwo = document.querySelector("#area2");
var capitalNameTwo = document.querySelector("#capital2");
var languageNameTwo = document.querySelector("#language2");
var currencyNameTwo = document.querySelector("#currency2");
var areaNameThree = document.querySelector("#area3");
var capitalNameThree = document.querySelector("#capital3");
var languageNameThree = document.querySelector("#language3");
var currencyNameThree = document.querySelector("#currency3");
var areaNameFour = document.querySelector("#area4");
var capitalNameFour = document.querySelector("#capital4");
var languageNameFour = document.querySelector("#language4");
var currencyNameFour = document.querySelector("#currency4");

var apiUrl = "https://restcountries.com/v3.1/all"
var bpiUrl = "https://libretranslate.com/";

var getSpain = function () {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {

            var array = data[102].area;
            console.log(data);
            var capitol = data[102].capital[0];
            console.log(capitol);
            var diction = data[102].languages['spa'];
            console.log(diction);
            var money = data[102].currencies['EUR'].name;
            console.log(money);

            areaName.innerHTML = `Area: ${array}`;
            capitalName.innerHTML = `Capital: ${capitol}`;
            langaugeName.innerHTML = `Language: ${diction}`
            currencyName.innerHTML = `Currency: ${money}`

        });
};

var getGermany = function () {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {

            var array1 = data[174].area;
            console.log(array1)
            var cap1 = data[174].capital[0];
            var diction1 = data[174].languages['deu'];

            var money1 = data[174].currencies['EUR'].name;
            console.log(money1);

            areaNameOne.innerHTML = `Area: ${array1}`;
            capitalNameOne.innerHTML = `Capital: ${cap1}`;
            languageNameOne.innerHTML = `Language: ${diction1}`
            currencyNameOne.innerHTML = `Currency: ${money1}`

        });
};



var getFrance = function () {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {

            var array2 = data[120].area;
            console.log(array2)
            var cap2 = data[120].capital[0];
            var diction2 = data[120].languages['fra'];

            var money2 = data[120].currencies['EUR'].name;
            console.log(money2);

            areaNameTwo.innerHTML = `Area: ${array2}`;
            capitalNameTwo.innerHTML = `Capital: ${cap2}`;
            languageNameTwo.innerHTML = `Language: ${diction2}`
            currencyNameTwo.innerHTML = `Currency: ${money2}`

        });
};



var getItaly = function () {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {

            var array3 = data[65].area;
            console.log(array3)
            var cap3 = data[165].capital[0];
            var diction3 = data[165].languages['ita'];

            var money3 = data[165].currencies['EUR'].name;
            console.log(money3);

            areaNameThree.innerHTML = `Area: ${array3}`;
            capitalNameThree.innerHTML = `Capital: ${cap3}`;
            languageNameThree.innerHTML = `Language: ${diction3}`
            currencyNameThree.innerHTML = `Currency: ${money3}`

        });
};

var getNether = function () {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {

            var array4 = data[241].area;
            console.log(array4)
            var cap4 = data[241].capital[0];
            var diction4 = data[241].languages['nld'];

            var money4 = data[241].currencies['EUR'].name;
            console.log(money4);

            areaNameFour.innerHTML = `Area: ${array4}`;
            capitalNameFour.innerHTML = `Capital: ${cap4}`;
            languageNameFour.innerHTML = `Language: ${diction4}`
            currencyNameFour.innerHTML = `Currency: ${money4}`

        });
};



var getTranslation = function () {
    fetch(bpiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
})
}

getSpain();
getGermany();
getFrance();
getItaly();
getNether();
getTranslation();
