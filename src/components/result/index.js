import React from "react";
import { connect } from "react-redux";

const Result = ({ city, data }) => {
    if(data === undefined) {
        return (
            <div></div>
        )
    } else {
        console.log(data)
        return (
            <div>
                <div className="city-name">{city}</div>
                <div className="weather-info">
                    <div className="temperature">{data.temp}</div>
                    <div>{data.weather[0].main}</div>
                    <div>{data.weather[0].description}</div>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.weatherData.city,
        data: state.weatherData.weatherInfo.current || undefined
    }
}

export default connect(mapStateToProps, null)(Result);