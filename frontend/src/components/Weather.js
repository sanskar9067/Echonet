import React, { useEffect, useState } from 'react';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to get user's location
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    showWeather,
                    handleError
                );
            } else {
                setError("Geolocation is not supported by this browser.");
            }
        };

        // Function to show weather based on coordinates
        const showWeather = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Weather API endpoint and key
            const apiKey = '0ecddaa6cc5b78bf6403413f1f134e2d';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

            // Fetch weather data
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    setWeatherData(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError("Error fetching weather data");
                    setLoading(false);
                });
        };

        // Function to handle geolocation errors
        const handleError = (error) => {
            setError(`Error getting geolocation: ${error.message}`);
            setLoading(false);
        };

        // Get user's location on component mount
        getUserLocation();
    }, []);

    return (

        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {weatherData && (
                <div className='mx-3 my-3'>
                    <h5>Current Weather</h5>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Visibility: {weatherData.visibility}</p>
                    <p>Hubidity: {weatherData.main.humidity}</p>
                    <p>Location: {weatherData.name}</p>
                </div>
            )}
        </div>


    );
};

export default WeatherApp;
