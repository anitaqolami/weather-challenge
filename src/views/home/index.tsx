import WeatherDisplay from "../weatherDisplay";

// hooks
import { useGeolocation } from "../../hooks/useGeolocation";
import { useWeatherData } from "../../hooks/useWeatherData";

// utils
import { UnmountWeatherApp } from "../../utils/UnmountWeatherApp";

const Home = () => {
  const { latitude, longitude, error: geoError } = useGeolocation();
  const {
    weatherData,
    error: weatherError,
    loading,
  } = useWeatherData(latitude, longitude);

  // Expose unmount function to window object
  window.unmountweatherapp = (
    containerId: string,
    callback: (data: {
      latitude: number | null;
      longitude: number | null;
      weatherData: { [key: string]: any } | null;
    }) => void
  ) =>
    UnmountWeatherApp(containerId, callback, latitude, longitude, weatherData);

  return (
    <div>
      <WeatherDisplay
        latitude={latitude}
        longitude={longitude}
        weatherData={weatherData}
        error={geoError || weatherError}
        loading={loading}
      />
    </div>
  );
};
export default Home;
