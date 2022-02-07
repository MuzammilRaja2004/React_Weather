import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("karachi");

  useEffect(() => {
    getWeatherData();
  });
  const getWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d250eebb3ee38818ac4098794ece0b0f`;
    const response = await fetch(url);
    const resJson = await response.json();
    // console.log(resJson);
    setCity(resJson.main);
  };

  return (
    <div>
      <div className="main-div">
        <div className="inner-div">
          <div className="search">
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>

          {!city ? (
            <p>Not Data Found</p>
          ) : (
            <div className="data-view">
              <h1>{search}</h1>
              <h1>{city.temp}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
