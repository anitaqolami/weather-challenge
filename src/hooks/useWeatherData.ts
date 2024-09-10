import { useEffect, useState } from "react";

// utils
import api from "../utils/api";

export const useWeatherData = (
  latitude: number | null,
  longitude: number | null
) => {
  const [weatherData, setWeatherData] = useState<{ [key: string]: any } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      (async () => {
        try {
          const res = await api.get(
            `${process.env.REACT_APP_WEATHER_API}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          );
          //   setWeatherData(res)
          console.log("res => ", res);
        } catch (err) {
          console.error(err);
          //   setError(err)
        }
      })();
    }
  }, [latitude, longitude]);

  return { weatherData, error };
};
