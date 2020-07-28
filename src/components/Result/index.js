import React from "react";
import { connect } from "react-redux";

export const Result = ({ data, city }) => {
    if(data == undefined) {
        return (
            <div data-testid="empty-array"></div>
        )
    } else {
        return (
            <div data-testid="weather-array" className="weather-result-container">
                <div className="city-name">{city}</div>
                <div className="weather-info">
                    <div className="temperature">{Math.floor(data.temp)} °C</div>
                    {data.weather == undefined ? "" : <div>
                        <img className="one-column" src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={city + ' weather status'}/>
                        <div className="two-columns">{data.weather[0].main}</div>
                        <div className="two-columns">{data.weather[0].description}</div>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.weatherData.city || undefined,
        data: state.weatherData.weatherInfo.current || undefined
    }
}

export default connect(mapStateToProps)(Result);

