export const UnmountWeatherApp = (
  containerId: string,
  callback: (data: {
    latitude: number | null;
    longitude: number | null;
  }) => void,
  latitude: number | null,
  longitude: number | null
) => {
  callback({ latitude, longitude });

  // Clean up React DOM
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = "";
  }
};
