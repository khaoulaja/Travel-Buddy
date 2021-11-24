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
                link: 'https://en.wikipedia.org/wiki/France',
                linkTarget: '_blank',
                gdp: 39869,
                change: 4.35,
                linkTarget: '_blank',
                gdpAdjusted: 43760,
                changeAdjusted: 1.46
            },
            IT: {
                link: 'https://en.wikipedia.org/wiki/Italy',
                linkTarget: '_blank',
                gdp: 31984,
                change: 4.31,
                linkTarget: '_blank',
                gdpAdjusted: 38140,
                changeAdjusted: 1.59
              },
              NL: {
                link: 'https://en.wikipedia.org/wiki/Netherlands',
                linkTarget: '_blank',
                gdp: 48346,
                change: 5.89,
                linkTarget: '_blank',
                gdpAdjusted: 53635,
                changeAdjusted: 2.83
              },
              ES: {
                link: 'https://en.wikipedia.org/wiki/Spain',
                linkTarget: '_blank',
                gdp: 28359,
                change: 6.31,
                linkTarget: '_blank',
                gdpAdjusted: 38286,
                changeAdjusted: 3.01
              },
              DE: {
                link: 'https://en.wikipedia.org/wiki/Germany',
                linkTarget: '_blank',
                gdp: 44550,
                change: 5.44,
                linkTarget: '_blank',
                gdpAdjusted: 50425,
                changeAdjusted: 2.07
              },

        }
        
    },
});




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
