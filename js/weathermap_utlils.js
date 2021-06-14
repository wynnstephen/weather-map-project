function getForecast(coordinates) {
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: coordinates[1],
            lon: coordinates[0],
            units: "imperial",
        },
        success:function (data){
            buildForecast(getFiveDayForecast(data.list));

        }
    })
}

function getFiveDayForecast(fullForecast) {
    let fiveDayForcast = []

    for (let i = 0; i < fullForecast.length; i++){

        if(i % 8 === 0){
            fiveDayForcast.push(fullForecast[i]);
        }


    }

    return fiveDayForcast
}

