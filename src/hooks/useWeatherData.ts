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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ [key: string]: string }>();

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      (async () => {
        try {
          setLoading(true);
          const res = await api.get(
            `${process.env.REACT_APP_WEATHER_API}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          );
          setLoading(false);
          setWeatherData(res?.data);
        } catch (err) {
          setError((err as { data?: { [key: string]: string } })?.data);
        }
      })();
    }
  }, [latitude, longitude]);

  return { weatherData, error, loading };
};
