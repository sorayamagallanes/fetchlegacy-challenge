import { FunctionComponent } from "react";
import React from 'react';

type AccProps = {
    temp: number,
    humidity: number
}

const Weather: FunctionComponent<(AccProps)> = (props) => {
    return (
        <div>
            <h2>Temperature: {props.temp} </h2>
            <h2>Humidity: {props.humidity} </h2>
        </div>
    )
}


export default Weather;