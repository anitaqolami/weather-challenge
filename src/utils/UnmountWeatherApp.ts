export const UnmountWeatherApp = (
  containerId: string,
  callback: (data: {
    latitude: number | null;
    longitude: number | null;
    weatherData: { [key: string]: any } | null;
  }) => void,
  latitude: number | null,
  longitude: number | null,
  weatherData: { [key: string]: any } | null
) => {
  callback({ latitude, longitude, weatherData });

  // Clean up React DOM
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = "";
  }
};
