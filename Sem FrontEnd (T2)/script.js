// Projeto sem FrontEnd

const axios = require("axios");
const apiKey = "b8177396b86d1da655c3ca3d3288c05c";

const city = "São Paulo";
const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

axios
.get(apiWeatherURL)
.then(res => {
    const cidade = res.data[0];
        if (cidade) {
        const {lat, lon} = cidade;
        console.log(`As coordenadas são Latitude: ${lat} e Longitude: ${lon}`);
        const apiWeatherURL2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        axios
        .get(apiWeatherURL2)
        then(resWeather => {
            const temperatura = resWeather.data.main.feels_like;
            const descricao = resWeather.data.weather[0].description;
            console.log(`Sensação Térmica: ${temperatura}ºC`);
            console.log(`Descrição: ${descricao}`);
            })
        .catch(errorWeather => {
            console.error('Algo deu errado:', errorWeather.message);
        });
        } else {
            console.error('Cidade não encontrada.');
        }
        })
        .catch(error => {
            console.error('Algo deu errado ao fazer a requisição:', error.message);
        });
