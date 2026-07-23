type Timestamp = {
    timestamp: Date 
};

type Destination = Timestamp & {
    planetName: string, 
    sector: string
};

type WarpDrive = Timestamp & {
    warpFactor: number; 
};

type NavigationCommand = Destination | WarpDrive; 

const destination: Destination = {
    timestamp: new Date(), 
    planetName: "Mars", 
    sector: "B45"
}; 

const warpDrive: WarpDrive = {
    timestamp: new Date(), 
    warpFactor: 54
}; 

const navigationCommand: NavigationCommand = destination; 

