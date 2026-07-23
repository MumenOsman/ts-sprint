type Thruster = {
    name: string, 
    powerLevel: number
}; 

type Thrusters = {
    left: Thruster, 
    right: Thruster, 
    main: Thruster
}; 

const thrusters: Thrusters = {
    left: {name: "liberal", powerLevel: 0},
    right: {name: "conservative", powerLevel: 0},
    main: {name: "quantum", powerLevel: 0} 
}; 

function setThrusterPower(thruster: "right" | "left" | "main", powerLevel: number): string {
    if (!(thruster in thrusters)) {
        throw new Error(`Invalid thruster designation: ${thruster}`); 
    }
    if (powerLevel < 0 || powerLevel > 100) {
        throw new Error("Power level out of acceptable range (0-100)");
    }
    
    thrusters[thruster].powerLevel = powerLevel; 

    return `${thrusters[thruster].name}: ${powerLevel}% output`;
}; 

console.log(setThrusterPower("right", 50)); 
