/** Player Types */
export type PlayerType = string;
export type SinglesPlayerType = PlayerType;
export type DoublesPlayersType = [PlayerType, PlayerType];
export type TournamentPlayersType = PlayerType[];

/** Match Types */
type MatchType =
  | {
      type: "singles";
      player1: SinglesPlayerType;
      player2?: SinglesPlayerType;
      whoWon?: SinglesPlayerType;
    }
  | {
      type: "doubles";
      players1: DoublesPlayersType;
      players2?: DoublesPlayersType;
      whoWon?: DoublesPlayersType;
    }
  | {
      type: "round robin" | "bracket";
      players: TournamentPlayersType;
      spots: number;
      whoWon?: SinglesPlayerType;
    };

/** Event Types */
export type EventType = MatchType & {
  id: number;
  type: MatchType["type"];
  date?: Date;
  frames?: 4 | 8 | 12 | 16;
  scoreCap?: number;
  stakes?: number;
};

/** @todo not throwing type errors properly, figure it out bud */
export const MOCK_EVENTS = [
  {
    id: 1,
    type: "singles",
    player1: "John Cena",
    player2: "Big Show",
    whoWon: "John Cena",
    frames: 16,
    scoreCap: 75,
    stakes: 10,
    date: new Date("2004-03-14"),
  },
  {
    id: 2,
    type: "doubles",
    players1: ["Rob Van Dam", "Booker T"],
    frames: 8,
    scoreCap: 50,
    stakes: 5,
    date: new Date("2004-03-14"),
  },
  {
    id: 3,
    type: "bracket",
    players: [
      "Chavo Guerrero",
      "Billy Kidman",
      "Funaki",
      "Jamie Noble",
      "Nunzio",
      "Rey Mysterio",
      "Tajiri",
      "Último Dragón",
    ],
    whoWon: "Chavo Guerrero",
    frames: 8,
    spots: 8,
    stakes: 2,
    date: new Date("2004-03-14"),
  },
  {
    id: 4,
    type: "round robin",
    players: ["Adrian Neville", "Tyler Breeze", "Sami Zayn"],
    frames: 4,
    spots: 4,
    stakes: 10,
    date: new Date("2014-09-11"),
  },
] as EventType[];
