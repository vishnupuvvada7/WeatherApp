import React, { useState } from 'react'; 
import './home.css'; // Import your CSS file 
 
const Home = () => { 
  const [feedbackFormVisible, setFeedbackFormVisible] = useState(false); 
 
  const weatherConditions = [ 
    { type: 'Clear', description: 'Clear sky', icon: '☀️'}, // Animate sun 
    { type: 'Clouds', description: 'Cloudy weather', icon: '☁️' }, 
    { type: 'Rain', description: 'Rainy weather', icon: '️🌧' }, 
    { type: 'Snow', description: 'Snowy weather', icon: '❄️'}, // Animate snow 
    // Add more weather conditions as needed 
  ]; 
   
 
  const handleFeedbackClick = () => { 
    setFeedbackFormVisible(prevState => !prevState); // Toggle visibility 
  }; 
 
  return ( 
    <div className="home-container"> 
       
      <h1 style={{ color: "black", margin: 0 }}>About Us</h1> 
      <p style={{ color: "white", lineHeight: 1.5, textAlign: "justify", maxWidth: "1000px" }}> 
        A weather app is a software application designed to provide real-time and forecasted meteorological information to users. Typically accessible on various devices, a weather app delivers comprehensive data about atmospheric conditions for a specific location. Users can retrieve current temperature, humidity, wind speed, and precipitation details, along with forecasts for the upcoming days. 
      </p> 
      <div className='yellow-card'> 
        <h2>Various Types of Weather</h2> 
        <ul> 
          {weatherConditions.map((condition, index) => ( 
            <li key={index} className="weather-condition"> 
              <strong>{condition.type}:</strong> {condition.description} 
              <span className={`weather-icon ${condition.animation || ''}`}>{condition.icon}</span> 
            </li> 
          ))} 
        </ul> 
        <button onClick={handleFeedbackClick}>Give Feedback</button> 
        {feedbackFormVisible && ( 
          <div> 
            <iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=PsiMgEal50egP3Oh67ok81O4312Q5-lElk22yGceNodUMk0zOVlHS1ZVWkpXVUhQUDdCRFMyUTNGNy4u" title="Feedback Form" width="100%" height="500px"></iframe> 
          </div> 
        )} 
      </div> 
    </div> 
  ); 
}; 
 
export default Home;