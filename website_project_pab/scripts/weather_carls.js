// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const temp_f = document.querySelector('#temp_fahrenheit'); 
const wind_chill_carl = document.querySelector('#carl_wind_ch');
const humidity =document.querySelector('#carl_humid');
const forecast1=document.querySelector('#forecast1');
const forecast2=document.querySelector('#forecast2');
const forecast3=document.querySelector('#forecast3');

const url = "https://api.openweathermap.org/data/2.5/weather?id=5334223&appid=7d915bb17a3fbc879ddf58322bdc75d8&units=imperial";
const url2 ="https://api.openweathermap.org/data/2.5/forecast?id=5334223&cnt=3&appid=7d915bb17a3fbc879ddf58322bdc75d8";

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

    //wind_chill_carl.innerHTML=(`${weatherData.wind.speed}`);

    // Using ENGLISH units:
    let x =(35.74+(0.6215*(`${weatherData.main.temp}`))-(35.75*(Math.pow((`${weatherData.wind.speed}`),0.16)))+(0.4275*(`${weatherData.main.temp}`)*(Math.pow((`${weatherData.wind.speed}`),0.16))));
        
        //rounding to 3 decimals:
        let digits = 3;
        let multiplier = Math.pow(10, digits); 
        //wind_chill_carl.innerHTML= x;
        wind_chill_carl.innerHTML= Math.round(x* multiplier) / multiplier;

    temp_f.innerHTML =  Math.round((((`${weatherData.main.temp.toFixed(0)}`)-32)/1.8)* multiplier) / multiplier;
    humidity.innerHTML = `${weatherData.main.humidity}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }


  function  displayResults1(weatherData1){
    forecast1.innerHTML=`${weatherData1.list[0].weather[0].description}`;
    forecast2.innerHTML=`${weatherData1.list[1].weather[0].description}`;
    forecast3.innerHTML=`${weatherData1.list[2].weather[0].description}`;
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











  async function apiFetch1() {
    try {
      const response1 = await fetch(url2);
      if (response1.ok) {
        const data1 = await response1.json();
        console.log(data1); // this is for testing the call
         displayResults1(data1);
      } else {
          throw Error(await response1.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch1();
