import React from "react";
import styled from "styled-components";
import { H1, Image, InnerFlex, OuterFlex, SpanOne, SpanThree, SpanTwo } from "../styles";

const Container = styled.div`
    margin-top: 2em;
    margin-bottom: 2em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #8c8c8c;
    background-color: #f4f2f3;
    padding: 4px 10px 8px 10px;
    border-radius: 20px;
    width: 90%;
`;
interface WeatherProps {
    weather: {
        coord: {
            lon: number;
            lat: number;
        };
        temperature: number;

        conditions: string;
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        base: string;
        main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            humidity: number;
        };
        visibility: number;
        wind: {
            speed: number;
            deg: number;
        };
        clouds: {
            all: number;
        };
        dt: number;
        sys: {
            type: number;
            id: number;
            country: string;
            sunrise: number;
            sunset: number;
        };
        timezone: number;
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
        <Container>
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
        </Container>
    );
};

export default DisplayWeather;
