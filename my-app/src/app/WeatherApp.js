import React from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';

const WeatherApp = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>Weather App</h1>
      <SearchBar />
      <WeatherDisplay />
    </div>
  );
};

export default WeatherApp;