interface WeatherDisplayProps {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  weatherData: { [key: string]: any } | null;
}

const WeatherDisplay = ({
  latitude,
  longitude,
  weatherData,
  error,
}: WeatherDisplayProps) => {
  return (
    <div className="w-full bg-pink-50 flex flex-col gap-2  items-center justify-center py-4 h-screen cursor-pointer">
      <h1>Welcome to Weather App</h1>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      {/* <p>weather current : {weatherData}</p> */}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default WeatherDisplay;
