import React from 'react';
import Geocode from "react-geocode";
import axios from 'axios';

const Search = () => {
    let input;
    // const [ data, setData ] = useState([]);
    // const [ formatAddress, setFormatAddress ] = useState({});
    const apiKey = "e8780420f8d0a3cf13e80ff3ad27cf96";
    const defaultPlace = "Amsterdam";

    // get localposition
    Geocode.setApiKey("AIzaSyCgNsKGtrqTlN4uRXj6HbzR-drBWKqqHxA");

    const getSearchValue = (value) => {
        let currentLocation = value;
        checkLocation(currentLocation);
    }
    
    const checkLocation = (location) => {
        let getLocation = location;
        getLocation.length === 0 ? getLocation = defaultPlace : getLocation = location;
        passLocation(getLocation)
    }

    // get lat and lon coordination based on place name
    const passLocation = (placeName) => {
        Geocode.fromAddress(placeName).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                const city = response.results[0].formatted_address;
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
        console.log(lat, lon);
        let weatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude={part}&appid=${apiKey}`;
        passWeatherAPI(weatherAPI);

    }

    const passWeatherAPI = (getAPI) => { 
        console.log(getAPI) 
        axios(getAPI)
            .then(response => {
                // setData(response.data);
                console.log(response);
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
                input.value = "";
            }}
            >
                <input ref={node => (input = node)} placeholder="Search location weather"/>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Search;