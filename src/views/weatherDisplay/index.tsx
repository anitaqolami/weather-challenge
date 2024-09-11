interface WeatherDisplayProps {
  latitude: number | null;
  longitude: number | null;
  error: { [key: string]: string } | undefined | string;
  weatherData: { [key: string]: any } | null;
  loading: boolean;
}

const WeatherDisplay = ({
  latitude,
  longitude,
  weatherData,
  error,
  loading,
}: WeatherDisplayProps) => {
  const weatherContent = (
    <div className="flex flex-wrap mt-4 gap-y-2 w-10/12">
      <p className="w-6/12">
        City : <strong>{weatherData?.name || ""}</strong>
      </p>
      <p className="w-6/12">
        Feels Like : <strong>{weatherData?.main?.feels_like || ""}</strong>
      </p>
      <p className="w-6/12">
        Humidity : <strong>{weatherData?.main?.humidity || ""}</strong>
      </p>
      <p className="w-6/12">
        Pressure : <strong>{weatherData?.main?.pressure || ""}</strong>
      </p>
      <p className="w-6/12">
        Temperature : <strong>{weatherData?.main?.temp || ""}</strong>
      </p>
      <p className="w-6/12">
        Maximum Temperature :
        <strong>{weatherData?.main?.temp_max || ""}</strong>
      </p>
      <p className="w-6/12">
        Minimum Temperature :
        <strong>{weatherData?.main?.temp_min || ""}</strong>
      </p>
      <p className="w-6/12">
        Statue Weather : <strong>{weatherData?.weather[0]?.main || ""}</strong>
      </p>
      <p className="w-6/12">
        Description Weather :
        <strong>{weatherData?.weather[0]?.description || ""}</strong>
      </p>
      <p className="w-6/12">
        Speed Wind :<strong>{weatherData?.wind?.speed || ""}</strong>
      </p>
      <p className="w-6/12">
        Degree Wind :<strong>{weatherData?.wind?.deg || ""}</strong>
      </p>
    </div>
  );

  return (
    <div className="w-full bg-pink-50 flex flex-col gap-2  items-center justify-center py-4 h-screen cursor-pointer">
      {error && (
        <span className="text-red-500">
          Error: {typeof error === "string" ? error : error?.message}
        </span>
      )}
      <h1>Welcome to Weather App</h1>
      <p className="w-6/12">Latitude Geo: {latitude}</p>
      <p className="w-6/12">Longitude Geo: {longitude}</p>
      {loading ? (
        <div className="w-full justify-center items-center">
          isLoading, please wait...
        </div>
      ) : (
        <div className="w-6/12">weather current : {weatherContent}</div>
      )}
    </div>
  );
};

export default WeatherDisplay;
