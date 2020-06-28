import React from "react";
import { connect } from "react-redux";
import LazyLoad from 'react-lazyload';

const Result = ({ city, data }) => {
    if(data == undefined) {
        return (
            <div></div>
        )
    } else {
        return (
            <div>
                <div className="city-name">{city}</div>
                <div className="weather-info">
                    {data.temp}
                    {data.weather[0].main}
                    {data.weather[0].description}
                    {data.weather[0].icon}
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