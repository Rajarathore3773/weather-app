import React, { useEffect, useState } from "react";
import { fetchApi } from "../common_util/api";
import "../App.css";

const Weather = () => {
  const [city, setCity] = useState("indore");
  const [weatherinfo, setWeatherinfo] = useState();

  useEffect(() => {
    const getCityWeather = async () => {
      const cityWeather = await fetchApi(city);
      console.log(cityWeather);
      setWeatherinfo(cityWeather);
    };
    if (city) {
      getCityWeather();
    }
  }, []);

  const handleOnClick = async () => {
    const cityWeather = await fetchApi(city);
    setWeatherinfo(cityWeather);
  };

  return (
    <>
      <div className="box">
        <h1>Weather Forecast App</h1>
        <div>
          <div className="inputData">
            <input
              type="search"
              className="inputfeild"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            <button className="searchButton" onClick={handleOnClick}>Search</button>
          </div>
          {weatherinfo && (
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {weatherinfo?.name}
              </h2>
              <h3>
                <i class="fa-solid fa-cloud"></i>
                {weatherinfo?.weather[0]?.description}
              </h3>
              <h1 className="temp">
                <i class="fa-solid fa-temperature-three-quarters"></i>
                {weatherinfo?.main?.temp}
              </h1>
              <h4>{`Humidity ${weatherinfo?.main?.humidity}`}</h4>
              <h3 className="tempMin_Max">
                {" "}
                {`Min Temp: ${weatherinfo?.main?.temp_min} | Max Temp: ${weatherinfo?.main?.temp_max}`}
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
