// var base_url = "http://api.openweathermap.org/data/2.5/weather?q=";
// const API_key = "&appid=605d20cd0745852ea29422b392d59b5b"
// var loc, cont, tem, fel;
// fetch("http://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=605d20cd0745852ea29422b392d59b5b")
//     .then((data)=>data.json())
//     .then((jsonData)=>{
//         console.log(jsonData);
//         loc=jsonData.name;
//     })
//     .catch((error) => {
//         console.error("Error fetching weather data:", error);
//     });

// var location=document.getElementById('text_location');
// var country=document.getElementById('text_county_location');
// var  temp=document.getElementById('text_temp');
// var feel=document.getElementById('text_feelslike');

// location.innerHTML=loc;


// // console.log(base_url);

var startPos;

window.onload = function () {
    var loc, cont, tem, fel;

    var geoSuccess = function (position) {
        console.log("Enters");
        startPos = position;

        const API_key = "bcd89a6f9b78aec6b86d7f6dc4ec2ed5";
        var base_url = "https://api.openweathermap.org/data/2.5/weather?";

        fetch(`${base_url}lat=${startPos.coords.latitude}&lon=${startPos.coords.longitude}&units=metric&appid=${API_key}`)
            .then((data) => data.json())
            .then((jsonData) => {
                console.log(jsonData);
                loc = jsonData.name;
                cont = jsonData.sys.country;
                tem = jsonData.main.temp;
                fel = jsonData.main.feels_like;

                // Set innerHTML values here
                var location = document.getElementById('text_location');
                var country = document.getElementById('text_county_location');
                var temp = document.getElementById('text_temp');
                var feel = document.getElementById('text_feelslike');

                location.innerHTML = loc;
                country.innerHTML = cont;
                temp.innerHTML = tem;
                feel.innerHTML = fel;
                // Set other values as needed
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    };

    // Check if the browser supports geolocation
    if (navigator.geolocation) {
        // Get the current position
        navigator.geolocation.getCurrentPosition(geoSuccess);
    } else {
        console.error("Geolocation is not supported by this browser");
    }
};
