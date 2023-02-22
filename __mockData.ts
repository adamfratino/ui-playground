import { EventProps } from "./src/modules/Events/Event";

export const MOCK_EVENTS = [
  {
    id: 1,
    type: "doubles",
    players: [
      ["Adam Fratino", "David Chester"],
      ["Christopher Widgren", "Ian Ainley"],
    ],
    frames: 16,
    cap: 75,
    stakes: 10,
  },
  {
    id: 2,
    type: "singles",
    players: [["Jeff Ziev"], ["Paul Assad"]],
    frames: 16,
  },
  {
    id: 3,
    type: "singles",
    players: [["Missy Kayko"]],
    frames: 8,
    stakes: 1,
  },
  {
    id: 4,
    type: "doubles",
    players: [["Mike Dunlap", "Mike Brady"]],
    frames: 4,
    stakes: 100,
  },
] as EventProps[];
