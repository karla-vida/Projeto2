import { useState, useEffect } from "react";
import { useAuth } from "../../contexts";
import {
  WeatherDiv,
  WeatherData,
  ErrorMessage,
  WeatherTitle,
  WeatherDetail,
  Temp,
  Description,
} from "./WeatherStyled";
export const Weather = () => {
  const [city, setCity] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    const fetchApi = async () => {
      console.log(user.userAddress.city);
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${user.userAddress.city}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, []);

  return (
    <WeatherDiv>
      {!city ? (
        <ErrorMessage>
          Não foi possível encontrar o clima de uma cidade com este nome
        </ErrorMessage>
      ) : (
        <WeatherData>
          <WeatherTitle>{user.userAddress.city}</WeatherTitle>
          <Temp> {Math.round(city.temp)} °C </Temp>

          <WeatherDetail>
            <Description>
              Mín.{Math.round(city.temp_min)} °C - Máx.
              {Math.round(city.temp_max)} °C - Umidade: {city.humidity} %{" "}
            </Description>
          </WeatherDetail>
        </WeatherData>
      )}
    </WeatherDiv>
  );
};
