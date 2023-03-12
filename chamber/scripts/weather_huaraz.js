// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const temp_f = document.querySelector('#temp_fahrenheit'); 
const wind_chill_huaraz = document.querySelector('#huaraz_wind_ch');

const url = "https://api.openweathermap.org/data/2.5/weather?id=3696378&appid=7d915bb17a3fbc879ddf58322bdc75d8&units=metric";

    /* TEMPERATURE   AND   SPEED */
    //  Temperature: (`${weatherData.main.temp}`);
    //  Speed: (`${weatherData.wind.speed}`);

                                          /* FORMULAS */
    //  METRIC UNITS ↓↓↓↓
    //  (13.12+(0.6215*TEMPERATURAA)-(11.37*(Math.pow(VELOCIDDADDD,0.16)))+(0.3965*TEMPERATURAA*(Math.pow(VELOCIDDADDD,0.16))));

    //  ENGLISH UNITS ↓↓↓↓
    //  (35.74+(0.6215*TEMPERATURAA)-(35.75*(Math.pow(VELOCIDDADDD,0.16)))+(0.4275*TEMPERATURAA*(Math.pow(VELOCIDDADDD,0.16))));;

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    temp_f.innerHTML = (`${weatherData.main.temp.toFixed(0)}`)*1.8 + 32;
    //wind_chill_huaraz.innerHTML=(`${weatherData.wind.speed}`);

    // Using metric units:
    let x =(13.12+(0.6215*(`${weatherData.main.temp}`))-(11.37*(Math.pow((`${weatherData.wind.speed}`),0.16)))+(0.3965*(`${weatherData.main.temp}`)*(Math.pow((`${weatherData.wind.speed}`),0.16))));
        
        //rounding to 3 decimals:
        let digits = 3;
        let multiplier = Math.pow(10, digits); 
        //wind_chill_huaraz.innerHTML= x;
        wind_chill_huaraz.innerHTML= Math.round(x* multiplier) / multiplier;



    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }



async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();
