import { EventProps } from "./src/modules/Events/Event";

export const MOCK_EVENTS = [
  {
    id: 1,
    type: "doubles",
    players: [
      ["Bret Hart", "Owen Hart"],
      ["Shawn Michaels", "Diesel"],
    ],
    frames: 16,
    cap: 75,
    stakes: 10,
    date: "2023-01-20",
    winners: ["Bret Hart", "Owen Hart"],
  },
  {
    id: 2,
    type: "singles",
    players: [["Edge"], ["Christian"]],
    frames: 16,
    date: "2023-02-14",
    winners: ["Christian"],
  },
  {
    id: 3,
    type: "singles",
    players: [["Stone Cold Steve Austin"]],
    frames: 8,
    stakes: 1,
    date: "2023-04-20",
    winners: undefined,
  },
  {
    id: 4,
    type: "doubles",
    players: [
      ["Charlotte Flair", "Becky Lynch"],
      ["Sasha Banks", "Bayley"],
    ],
    frames: 4,
    stakes: 100,
    winners: undefined,
  },
  {
    id: 5,
    type: "doubles",
    players: [["The Rock", "Roman Reigns"]],
    frames: 16,
    stakes: 2,
    cap: 50,
    winners: undefined,
  },
  {
    id: 6,
    type: "singles",
    players: [["Macho Man Randy Savage"], ["Miss Elizabeth"]],
    frames: 16,
    date: "2023-02-14",
    winners: undefined,
  },
  {
    id: 7,
    type: "singles",
    players: [["King Kong Bundy", "Hulk Hogan"]],
    frames: 16,
    stakes: 20,
    date: "2023-04-20",
    winners: undefined,
  },
  {
    id: 8,
    type: "doubles",
    cap: 65,
    players: [["The Undertaker", "Mankind"]],
    frames: 4,
    stakes: 50,
    winners: undefined,
  },
] as EventProps[];
