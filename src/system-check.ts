type Component = 
| string
| number
| {type: "sensor"; status: string}
| {type: "motor"; speed: number}; 

function getComponentInfo(component: Component) {
  // TODO: Apply appropriate logic to check component types
    switch(typeof component) {
        case "string":
            return `Component ID: ${component}`;
        case "number": 
             return `Component Value: ${component}`;
        case "object": 
            if (component === null) {
                return "Unknown Object Component";
            }
            if (component.type === "sensor") {
                return `Sensor Status: ${component.status}`;
            }
            else if (component.type === "motor") {
                return `Motor Speed: ${component.speed}`;
            }
        case "undefined":
            return "Unknown Object Component";
        default: 
            return "Invalid Component Type";
    }
}