import React from "react";
import { connect } from "react-redux";

export const Result = ({ data, city }) => {
    if(data === undefined) {
        return (
            <div data-testid="empty-array"></div>
        )
    } else {
        return (
            <div data-testid="weather-array">
                <div className="city-name">{city}</div>
                <div className="weather-info">
                    <div className="temperature">{data.temp}</div>
                    <div>{data.weather[0].main}</div>
                    <div>{data.weather[0].description}</div>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={city + ' weather status'}/>
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

export default connect(mapStateToProps, null)(Result);