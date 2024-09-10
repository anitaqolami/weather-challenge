declare global {
  interface Window {
    unmountweatherapp: (
      containerId: string,
      callback: (data: {
        latitude: number | null;
        longitude: number | null;
      }) => void
    ) => void;
  }
}

export {};
