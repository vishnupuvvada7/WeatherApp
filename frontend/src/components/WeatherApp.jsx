import React, { useEffect, useState } from 'react'; 
import './style.css'; 
import HistoricalWeatherGraph from './HistoricalWeatherGraph'; 
 
const weatherIcons = { 
    "01d": "bi bi-sun-fill", 
    "01n": "bi bi-moon-fill", 
    "02d": "bi bi-cloud-sun-fill", 
    "02n": "bi bi-cloud-moon-fill", 
    "03d": "bi bi-cloud-fill", 
    "03n": "bi bi-cloud-fill", 
    "04d": "bi bi-clouds-fill", 
    "04n": "bi bi-clouds-fill", 
    "09d": "bi bi-cloud-rain-fill", 
    "09n": "bi bi-cloud-rain-fill", 
    "10d": "bi bi-cloud-rain-fill", 
    "10n": "bi bi-cloud-rain-fill", 
    "11d": "bi bi-cloud-lightning-fill", 
    "11n": "bi bi-cloud-lightning-fill", 
    "13d": "bi bi-cloud-snow-fill", 
    "13n": "bi bi-cloud-snow-fill", 
    "50d": "bi bi-cloud-haze-fill", 
    "50n": "bi bi-cloud-haze-fill" 
}; 
 
const WeatherApp = () => { 
    const [city, setCity] = useState(''); 
    const [weatherData, setWeatherData] = useState(null); 
    const [showMap, setShowMap] = useState(false); 
 
    useEffect(() => { 
        fetchData(city); 
    }, [city]); 
 
    const fetchData = (city) => { 
        const apiKey = "8da9527803871888477f5641bfd508cf"; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`; 
 
        if (!city.trim()) { 
            console.error("Please enter a valid city name."); 
            return; 
        } 
 
        fetch(apiUrl) 
            .then(response => { 
                if (!response.ok) { 
                    throw new Error("Weather data could not be retrieved."); 
                } 
                return response.json(); 
            }) 
            .then(data => { 
                setWeatherData(data); 
            }) 
            .catch(error => { 
                console.error(error); 
            }); 
    }; 
 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if (!city.trim()) { 
            alert("Please enter a city name."); 
            return; 
        } 
        fetchData(city); 
    }; 
 
    const handleViewLocation = () => {  
        if (!city.trim()) {  
            alert("Please enter a city name.");  
            return;  
        }  
        window.open(`https://www.google.com/maps?q=${encodeURIComponent(city)}`, '_blank');  
    }; 
 
    const handleCloseMap = () => { 
        setShowMap(false); 
    } 
 
    return ( 
        <div className="container2">  
            <header>Weather App</header>  
            <form onSubmit={handleSubmit}>  
                <i className="bi bi-search"></i>  
                <input  
                    type="text"  
                    id="input"  
                    required  
                    placeholder="Enter a city name"  
                    value={city}  
                    onChange={(e) => setCity(e.target.value)}  
                />  
            </form> 
            {showMap && (  
                <div className="map-container">  
                    <button className="exit-button" onClick={handleCloseMap}>Exit</button>  
                    <iframe  
                        title="Google Maps"  
                        className="google-map"  
                        src={`https://www.google.com/maps?q=${encodeURIComponent(city)}`}  
                        allowFullScreen  
                    ></iframe>  
                </div>  
            )} 
            {weatherData && ( 
                <div> 
                    <div className="today"> 
                        <div className="today-info"> 
                            <div className="today-left"> 
                                <h2>{new Date().toLocaleDateString("en", { weekday: "long" })}</h2> 
                                <span>{new Date().toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" })}</span> 
                                <div> 
                                    <i className="bi bi-geo-alt-fill"></i> 
                                    <span>{weatherData.city.name}, {weatherData.city.country}</span>
                                    <button className="view-location-button" onClick={handleViewLocation}>  
                                    <i className="bi bi-geo-alt-fill"></i>  
                                    </button>  
                                </div> 
                            </div> 
                            <div className="today-right"> 
                                <i className={weatherIcons[weatherData.list[0].weather[0].icon]}></i> 
                                <h1>{Math.round(weatherData.list[0].main.temp)}°C</h1> 
                                <span>{weatherData.list[0].weather[0].description}</span> 
                            </div> 
                        </div> 
                        <hr /> 
                        <br/> 
                        <div className="today-detail"> 
                            <span>Precipitation: {weatherData.list[0].pop}%</span> 
                            <span>Humidity: {weatherData.list[0].main.humidity}%</span> 
                            <span>Wind Speed: {weatherData.list[0].wind.speed} m/s</span> 
                        </div> 
                    </div> 
                    <div className="future"> 
                        {weatherData.list.slice(8, 40).filter((_, index) => index % 8 === 0).map((forecast, index) => ( 
                            <div className="future-day" key={index}> 
                                <p className="day">{new Date(forecast.dt * 1000).toLocaleDateString("en", { weekday: "long" })}</p> 
                                <i className={weatherIcons[forecast.weather[0].icon]}></i> 
                                <p className="temperature">{Math.round(forecast.main.temp)}°C</p> 
                                <p className="description">{forecast.weather[0].description}</p> 
                            </div> 
                        ))} 
                        {city && <HistoricalWeatherGraph city={city} />} 
                    </div> 
                     
                </div> 
            )} 
        </div> 
    ); 
 
 
}; 
 
 
export default WeatherApp;