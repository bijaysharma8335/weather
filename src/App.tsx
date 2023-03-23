import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form, Input, Title } from "./styles";
import DisplayWeather from "./components/DisplayWeather";
import DisplayWeatherAttribute from "./components/DisplayWeatherAttribute";

const APIKEY = "1ba9e71eaed06fee3c7ca6863af4e9d7";

type weatherData = {
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

const App: React.FC = () => {
    const [weather, setWeather] = useState<weatherData | null>(null);
    const [formData, setFormData] = useState({ city: "", country: "" });

    const onChangeHandler = (e: any) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${formData.city},${formData.country}&APPID=${APIKEY}`
            )
            .then((res) => {
                // console.log(res.data);
                setWeather(res.data);
            });
    };
    return (
        <Container>
            <Title>Weather APP</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={onChangeHandler}
                    required
                />
                <Input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={onChangeHandler}
                    required
                />

                <Button type="submit">Submit</Button>
            </Form>

            {weather && (
                <>
                    <DisplayWeather weather={weather} />
                    <DisplayWeatherAttribute weather={weather} />
                </>
            )}
        </Container>
    );
};

export default App;
