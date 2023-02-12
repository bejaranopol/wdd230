function doInputOutput(){
    let tempF=parseFloat(document.getElementById('temperature').value);
    let speed=parseFloat(document.getElementById('wind_speed').value);
    wind_chill= windChill(tempF, speed);
    //rounding to 3 decimals:
    let digits = 3;
    let multiplier = Math.pow(10, digits); 
    document.getElementById('output').innerHTML= "The wind chill is "+Math.round(wind_chill* multiplier) / multiplier+" °F";
}

function windChill(tempF, speed){
    // wind_chill factor formula:

    let f=(35.74+(0.6215*tempF)-(35.75*(Math.pow(speed,0.16)))+(0.4275*tempF*(Math.pow(speed,0.16))));
    return f;
    //       f is the wind chill factor in Fahrenheit, 
    //       t is the air temperature in Fahrenheit, and 
    //       s is the wind speed in miles per hour at five feet above the ground.
}