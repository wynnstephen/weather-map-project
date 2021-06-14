function getForecast(coordinates) {
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: coordinates[1],
            lon: coordinates[0],
            unites: "imperial",
        },
        success:function (data){
            console.log(data);
        }
    })
}