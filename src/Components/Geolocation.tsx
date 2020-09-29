import React, {Component} from 'react';
import Weather from './Weather';

type locationData = {
location: {
        lat: number,
        lon: number 
    },
 weather: {
        temp: number,
        humidity: number
    };
}



let latitude: number;
let longitude: number;

class Geolocation extends Component <{}, locationData> {
    constructor(props: {}) {
    super(props)
    this.state = {
        location: {lat: 0, lon: 0 },
        weather: { temp: 0, humidity: 0 }
        
    }

    
}

componentDidMount() {
    this.fetchLocation();
    this.fetchWeather();
}

fetchLocation = ( ) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log (position.coords.longitude, position.coords.latitude);
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
           
        },
        function(error) { console.log(error)}
        
        )
    }
};

fetchWeather = ()=> {
    let url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}&appid=3d81a21a21f469e26f71ea4b2d7cb5fb`;
    fetch(url)
    .then ((value) => {
        return value.json();
    })
    .then((json) => {
        this.setState({
            weather: {
            temp: json.main.temp,
            humidity: json.main.humidity
            }
        });
        console.log(json);
        console.log(json.main.humidity)
    })
    .catch(console.log);
}

render() {
    return(
        <div>
            <div>
                <h1>The Weather</h1>
                <Weather temp={this.state.weather.temp} humidity={this.state.weather.humidity} />
                </div>    
                    </div>
    )
}

}

export default Geolocation;