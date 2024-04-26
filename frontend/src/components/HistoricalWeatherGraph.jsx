import React, { useEffect, useState } from 'react'; 
import { Line } from 'react-chartjs-2'; 
import 'chart.js/auto'; 
 
const HistoricalWeatherGraph = ({ city }) => { 
    const [historicalData, setHistoricalData] = useState(null); 
 
    useEffect(() => { 
        const fetchData = async () => { 
            const apiKey = '8da9527803871888477f5641bfd508cf'; 
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`; 
 
            try { 
                const response = await fetch(apiUrl); 
                if (!response.ok) { 
                    throw new Error('Weather data could not be retrieved.'); 
                } 
                const data = await response.json(); 
                console.log('Historical Data:', data); // Log the fetched data 
                setHistoricalData(data); 
            } catch (error) { 
                console.error('Error fetching historical weather data:', error); 
            } 
        }; 
 
        fetchData(); 
    }, [city]); 
    console.log('Render HistoricalWeatherGraph:', historicalData); 
 
    const getChartData = () => { 
        if (!historicalData || !historicalData.list) { 
            return {}; 
        } 
 
        const timestamps = historicalData.list.map(entry => new Date(entry.dt * 1000).toISOString()); 
        const temperatures = historicalData.list.map(entry => entry.main.temp); 
 
        console.log('Timestamps:', timestamps); 
        console.log('Temperatures:', temperatures); 
 
        return { 
            labels: timestamps, 
            datasets: [ 
                { 
                    label: 'Temperature (°C)', 
                    data: temperatures, 
                    fill: false, 
                    borderColor: 'rgba(75,192,192,1)', 
                    borderWidth: 2, 
                    pointRadius: 0, 
                }, 
            ], 
        }; 
    }; 
 
    return ( 
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}> 
            {historicalData && historicalData.list && historicalData.list.length > 0 && ( 
                <Line 
                    data={getChartData()} 
                    options={{ 
                        maintainAspectRatio: false, 
                        scales: { 
                            x: [ 
                                { 
                                    type: 'time', 
                                    time: { 
                                        parser: 'YYYY-MM-DDTHH:mm:ss.SSSZ', 
                                        tooltipFormat: 'll HH:mm', 
                                        unit: 'hour', 
                                        displayFormats: { 
                                            hour: 'HH:mm', 
                                        }, 
                                    }, 
                                }, 
                            ], 
                            y: { 
                                beginAtZero: false, 
                            }, 
                        }, 
                        responsive: true, 
                        height: 400, 
                        width: '100%', // Adjust the width percentage as needed 
                    }} 
                /> 
            )} 
        </div> 
    ); 
}; 
 
export default HistoricalWeatherGraph;