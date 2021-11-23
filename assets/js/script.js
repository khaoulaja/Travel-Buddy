var countryEl = document.querySelector("#country");

var getCountries = function () {
    var apiUrl = "https://restcountries.com/v3.1/all"

    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
            });
        });
}

new svgMap({
    targetElementID: 'svgMap',
    data: {
        data: {
            gdp: {
                name: 'GDP per capita',
                format: '{0} USD',
                thousandSeparator: ',',
                thresholdMax: 50000,
                thresholdMin: 1000
            },
            change: {
                name: 'Change to year before',
                format: '{0} %'
            }
        },
        applyData: 'gdpAdjusted',
        values: {
            FR: {
                link: 'https://pt.wikipedia.org/wiki/FR',
                linkTarget: '_blank',
                gdp: 39869,
                change: 4.35,
                linkTarget: '_blank',
                gdpAdjusted: 43760,
                changeAdjusted: 1.46
            },
            IT: {
                link: 'https://pt.wikipedia.org/wiki/IT',
                linkTarget: '_blank',
                gdp: 31984,
                change: 4.31,
                linkTarget: '_blank',
                gdpAdjusted: 38140,
                changeAdjusted: 1.59
              },
              NL: {
                link: 'https://pt.wikipedia.org/wiki/NL',
                linkTarget: '_blank',
                gdp: 48346,
                change: 5.89,
                linkTarget: '_blank',
                gdpAdjusted: 53635,
                changeAdjusted: 2.83
              },

        }
        
    },
});




var getTranslation = function () {
    var apiUrl = "https://libretranslate.com/spec";

    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
            });
        });
}


getCountries();
getTranslation();
