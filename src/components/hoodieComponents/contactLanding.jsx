import React, { useState, useEffect } from "react";

const App = () => {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!country) {
      return;
    }

    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${country}`
      );
      const data = await response.json();
      setCountryData(data[0]);
    };

    fetchCountryData();
  }, [country]);

  useEffect(() => {
    if (!countryData) {
      return;
    }

    const fetchWeatherData = async () => {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${"744b48f67d5f5cc925204be6be46ec97"}&query=${
          countryData.capital
        }`
      );
      const data = await response.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, [countryData]);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
        <button type="submit" disabled={!country}>
          Submit
        </button>
      </form>
      {countryData && (
        <div>
          <h2>Country Information</h2>
          <p>Capital: {countryData.capital}</p>
          <p>Population: {countryData.population}</p>
          <p>Latitude: {countryData.latlng[0]}</p>
          <p>Longitude: {countryData.latlng[1]}</p>
          <img src={countryData.flag} alt={`Flag of ${country}`} />
          <button onClick={() => setWeatherData(null)}>Capital Weather</button>
          {weatherData && (
            <div>
              <h3>Weather Information</h3>
              <p>Temperature: {weatherData.temperature}</p>
              <p>Wind Speed: {weatherData.wind_speed}</p>
              <p>Precipitation: {weatherData.precipitation}</p>
              {weatherData.weather_icons.map((icon, index) => (
                <img key={index} src={icon} alt="Weather Icon" />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
