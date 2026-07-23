type FriendlyAlien = { name: string; greeting: string };
type HostileAlien = { name: string; weapon: string };
type AlienContact = FriendlyAlien | HostileAlien;

// TODO: param type and return type
function handleEncounter(contact: AlienContact): void {
  // TODO: Figure out how to determine between friendly and hostile aliens
  if ("greeting" in contact) {
    console.log(`${contact.name} says: ${contact.greeting}`);
  } else {
    console.log(`Warning! Hostile alien ${contact.name} detected, armed with ${contact.weapon}!`);
  }

}