import React from 'react';
import Geocode from "react-geocode";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { 
    cityName, 
    passWeatherData,
    clearArray
} from '../../actions/index';

export const Search = ({ data }) => {
    const dispatch = useDispatch();
    const apiKey = 'e8780420f8d0a3cf13e80ff3ad27cf96';
    const defaultPlace = "Amsterdam";

    let input;

    // get localposition
    Geocode.setApiKey("AIzaSyDTnFckTcPidqCa5F9dWom4H_0hbJu9Nh0");

    const getSearchValue = (value) => {
        let currentLocation = value;
        checkLocation(currentLocation);
    }
    
    const checkLocation = (location) => {
        let getLocation = location;
        getLocation.length == 0 ? getLocation = defaultPlace : getLocation = location;
        passLocation(getLocation)
    }

    // get lat and lon coordination based on place name
    const passLocation = (placeName) => {
        Geocode.fromAddress(placeName).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                const city = response.results[0].formatted_address;
                dispatch(cityName(city))
                passCoordination(lat, lng);
            },
            error => {
                console.error(error)
            }
        )  
    }

    const passCoordination = (latitude, longtitude) => {
        const lat = latitude;
        const lon = longtitude;
        searchLocation(lat, lon);
    }

    const searchLocation = (lat, lon) => {
        let weatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude={part}&appid=${apiKey}`;
        passWeatherAPI(weatherAPI);
    }

    const passWeatherAPI = (getAPI) => { 
        axios(getAPI)
            .then(response => {
                dispatch(passWeatherData(response.data));
            })
            .catch(error => {
                console.log('hello')
            })
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()) {
                    return;
                }

                getSearchValue(input.value);

                if(data !== undefined) {
                    dispatch(clearArray());
                }
                
                input.value = "";
            }}
            >
                <input ref={node => (input = node)} aria-label="search-input" placeholder="Search location weather"/>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.weatherData.weatherInfo.current
    }
}

export default connect(mapStateToProps, null)(Search);