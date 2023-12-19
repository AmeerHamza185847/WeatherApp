
let wheatherCalc = () => {

    let nameOfCity = document.querySelector("#cityName").value;

    let API_KEY = '41ef7e4ae8c1ce2b25f6ff0cdd918409';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=${API_KEY}&units=metric`)

        .then(function (response) {
            // handle success
            console.log(response);
            document.querySelector("#result").innerHTML=`Current Temp: ${response.data.main.temp}°C`;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.querySelector("#result").innerHTML=`Error in getting wheather info`;
        })

}