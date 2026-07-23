interface ShipConfig {
    engineType: string; 
    maxSpeed: number; 
    shieldCapacity: number
}; 

type PartialShipConfig = Partial<ShipConfig>;
type ReadonlyShipConfig = Readonly<ShipConfig>;

const initialConfig: ShipConfig = {
    engineType: "V8",
    maxSpeed: 300, 
    shieldCapacity: 344
}; 

const configUpdate: PartialShipConfig = {
    maxSpeed: 200
}; 

const readOnlyConfig: ReadonlyShipConfig = initialConfig; 