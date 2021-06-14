function buildForecast(fiveDayForecast) {
    console.log(fiveDayForecast)
    fiveDayForecast.forEach(function (day){
        $("#forecast-container").append(buildDayForecast(day))
    });

}


function buildDayForecast(day) {
    let weatherCard = $(`<div class="card col-2 px-3"></div>`);

    weatherCard.append(
        `<div class="card-header date">${day.date}</div>
		<div class="card-body">
		<div class="temp">Temperature: ${day.main.temp} F</div>
		<hr>
		<div class="desc-container">
			<div class="desc">${day.weather[0].description}</div>
			<img class="icon0" src="img/${day.icon}.png">
		</div>
		<hr>
		<div class="humidity">Humidity: ${day.main.humidity}</div>
		<hr>
		<div class="wind">Wind: ${day.wind.speed}</div>
	</div>`
    )
    return weatherCard
}
