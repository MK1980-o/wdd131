document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

// Static Zimbabwe weather values
const temperature = 22; // °C
const windSpeed = 10; // km/h
let windchill = "N/A";

// Conditions: temp <= 10°C AND wind > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
  windchill = calculateWindChill(temperature, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windchill;
