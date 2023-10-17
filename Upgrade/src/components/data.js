export const STATUS_ON_DECK = { id: 1, name: "On Deck", color: "blue.300" };
export const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
export const STATUS_TESTING = { id: 3, name: "Testing", color: "pink.300" };
export const STATUS_DEPLOYED = { id: 4, name: "Deployed", color: "green.300" };
export const STATUSES = [
  STATUS_ON_DECK,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_DEPLOYED,
];

let DATA = [
  {
    task: "Add a New Feature",
    status: STATUS_ON_DECK,
    due: new Date("2023/10/15"),
    notes: "This is a note",
  },
  {
    task: "Write Integration Tests",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Use Jest",
  },
];

export function updateData(message) {
  DATA.push({
    task: message.initiator,
    status: null,
    due: null,
    notes: null,
  });
  return "Data updated successfully";
}

export function getData() {
  return DATA;
}
