// TODO: Create `CrewMember` and `Pilot` interfaces
interface CrewMember {
    name: string; 
    id: number
}; 

interface Pilot extends CrewMember {
    licenseNumber: string
}; 


// TODO: Use the `Pilot` type annotation here
const pilot1: Pilot = {
  name: "Test",
  id: 2,
  licenseNumber: "test",
};