import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "20b36a51cffd95bdda9845b9b87733c2";

    let getWeatherInfo = async (city) => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
        let jsonRespnse = await response.json();
        // console.log(jsonRespnse);
        let result = {
            temp: jsonRespnse.main.temp,
            temp_min: jsonRespnse.main.temp_min,
            temp_max: jsonRespnse.main.temp_max,
            wind: jsonRespnse.wind.speed,
            humidity: jsonRespnse.main.humidity
        }
        console.log(result);
    };

    let handleChange = (e) => {
        setCity(e.target.value);
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        getWeatherInfo(city);
        setCity("");
    }

    return (
        <div className="SearchBox"> 
            <h3>Search for the weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                    Search
                </Button>
            </form>
        </div>
    );
};
