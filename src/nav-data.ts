interface NavigationLogEntry {
    timestamp: number;
    coordinates: [number, number, number];
    speed: number;
    event: string;
    notes: string;
}

type NavigationData = Pick<NavigationLogEntry, "timestamp" | "coordinates">;

type LogSummary = Omit<NavigationLogEntry, "notes">; 

const navData: NavigationData =  {
    timestamp: 23, 
    coordinates: [33, 434, 434]
}; 

const logSmry: LogSummary = {
    timestamp: 23,
    coordinates: [2, 3, 23],
    speed: 233,
    event: "string"
};