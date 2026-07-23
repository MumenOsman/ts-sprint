type TelemetryCallback = {
    (sensorReading: number, timeReading: number): void
}; 

const logTelemetry: TelemetryCallback = (data, timestamp) => {
  console.log(`Data: ${data}, Timestamp: ${timestamp}`);
};