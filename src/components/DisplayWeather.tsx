import React from "react";
import {
    DisplayWeatherContainer,
    H1,
    Image,
    InnerFlex,
    OuterFlex,
    SpanOne,
    SpanThree,
    SpanTwo,
} from "../styles";

interface WeatherProps {
    weather: {
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        // base: string;
        main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            humidity: number;
        };
        visibility: number;
        sys: {
            type: number;
            id: number;
            country: string;
            sunrise: number;
            sunset: number;
        };
        id: number;
        name: string;
        cod: number;
    };
}

const DisplayWeather: React.FC<WeatherProps> = ({ weather }) => {
    const iconurl =
        "http://openweathermap.org/img/wn/" +
        `${weather.cod !== 404 ? weather.weather[0]?.icon : null}` +
        ".png";

    return (
        <DisplayWeatherContainer>
            <SpanOne>
                {weather.name} , {weather?.sys?.country}. Weather
            </SpanOne>
            <SpanTwo>As of {new Date().toLocaleTimeString()}</SpanTwo>
            <OuterFlex>
                <H1>
                    {Math.floor(weather?.main?.temp - 273.15)}
                    <sup>o</sup>
                </H1>
                <InnerFlex>
                    <Image src={iconurl} alt="" />
                    <SpanThree>{weather?.weather[0]?.main}</SpanThree>
                </InnerFlex>
            </OuterFlex>
            <span> {weather?.weather[0]?.description}</span>
        </DisplayWeatherContainer>
    );
};

export default DisplayWeather;
