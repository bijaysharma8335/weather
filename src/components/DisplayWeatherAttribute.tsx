import React from "react";
import { Flex, Main, WeatherDetail } from "../styles";

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

const DisplayWeatherAttribute: React.FC<WeatherProps> = ({ weather }) => {
    return (
        <Main>
            <WeatherDetail>
                <div>
                    <Flex>
                        <h4>High/Low</h4>
                        <span>
                            {Math.floor(weather.main.temp_max - 273.15)}/
                            {Math.floor(weather.main.temp_min - 273.15)}
                        </span>
                    </Flex>

                    <Flex>
                        <h4>Humidity</h4> &nbsp;
                        <span>{weather.main.humidity} %</span>
                    </Flex>

                    <Flex>
                        <h4>Pressure</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>{weather.main.pressure} hPa</span>
                    </Flex>

                    <Flex>
                        <h4>Visibility</h4> <span>{weather.visibility / 1000} Km</span>
                    </Flex>
                </div>

                <div>
                    <Flex>
                        <h4>Wind</h4> <span>{Math.floor((weather.wind.speed * 18) / 5)} km/hr</span>
                    </Flex>

                    <Flex>
                        <h4>Wind Direction</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                            {weather.wind.deg}
                            <sup>o</sup> deg
                        </span>
                    </Flex>

                    <Flex>
                        <h4>Sunrise</h4>
                        <span>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</span>
                    </Flex>

                    <Flex>
                        <h4>Sunset</h4>
                        <span>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</span>
                    </Flex>
                </div>
            </WeatherDetail>
        </Main>
    );
};

export default DisplayWeatherAttribute;
