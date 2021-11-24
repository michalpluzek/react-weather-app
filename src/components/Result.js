import React from "react";
import "./Result.css";

const Result = (props) => {
  const { date, city, sunrise, sunset, temp, wind, pressure } = props.weather;

  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  const error = (
    <p>
      Nie ma takiego miasta w bazie: <strong>{city}</strong>
    </p>
  );

  let result = "";
  if (!props.error && city) {
    result = (
      <>
        <p>
          Pogoda dla: <em>{city}</em>
        </p>
        <p>
          Aktualny czas: <strong>{date}</strong>
        </p>
        <p>
          Temperatura: <strong>{temp} &#8451;</strong>
        </p>
        <p>
          Wschód słońca o <strong>{sunriseTime}</strong>
        </p>
        <p>
          Zachód słońca o <strong>{sunsetTime}</strong>
        </p>
        <p>
          Siła wiatru: <strong>{wind} m/s</strong>
        </p>
        <p>
          Ciśnienie: <strong>{pressure} hPa</strong>
        </p>
      </>
    );
  }

  return <div className="result">{props.error ? error : result}</div>;
};

export default Result;
