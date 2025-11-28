'use client'
import React, { useState, useEffect } from 'react';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Weather Information</h2>
      <p>City: {weatherData.name}</p>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Condition: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;