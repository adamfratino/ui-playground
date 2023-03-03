/** Player Types */
export type PlayerType = string;
export type SinglesPlayerType = PlayerType;
export type DoublesPlayersType = [PlayerType, PlayerType];
export type TournamentPlayersType = PlayerType[];

type MatchTypes = "singles" | "doubles" | "round robin" | "bracket";

/** Event Types */
export type EventType = {
  id: number;
  type: MatchTypes;
  frames: 4 | 8 | 12 | 16;
  date?: Date;
  scoreCap?: number;
  stakes?: number;
  players?: TournamentPlayersType;
  player1?: SinglesPlayerType;
  player2?: SinglesPlayerType;
  players1?: DoublesPlayersType;
  players2?: DoublesPlayersType;
  spots?: number;
  whoWon?: SinglesPlayerType | DoublesPlayersType;
};

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
    date: "2004-03-14",
  },
  {
    id: 2,
    type: "doubles",
    players1: ["Rob Van Dam", "Booker T"],
    frames: 8,
    scoreCap: 50,
    date: "2004-03-14",
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
    date: "2004-03-14",
  },
  {
    id: 4,
    type: "round robin",
    players: ["Adrian Neville", "Tyler Breeze", "Sami Zayn"],
    frames: 4,
    spots: 4,
    date: "2014-09-11",
  },
  {
    id: 5,
    type: "singles",
    player1: "The Great Sasuke",
    player2: "Wild Pegasus",
    whoWon: "Wild Pegasus",
    frames: 4,
    scoreCap: 100,
    stakes: 25,
    date: "1996-04-16",
  },
  {
    id: 6,
    type: "doubles",
    players1: ["Mitsuharu Misawa", "Kenta Kobashi"],
    players2: ["Toshiaki Kawada", "Akira Taue"],
    frames: 12,
    stakes: 10,
  },
  {
    id: 7,
    type: "bracket",
    players: [
      "Chris Jericho",
      "Shawn Michaels",
      "Randy Orton",
      "Kevin Nash",
      "Triple H",
      "Goldberg",
    ],
    spots: 8,
    frames: 16,
    stakes: 5,
  },
  {
    id: 8,
    type: "singles",
    player1: "Ric Flair",
    player2: "Ricky Steamboat",
    frames: 8,
    cap: 100,
    stakes: 1,
    date: "1994-08-16",
  },
  {
    id: 9,
    type: "doubles",
    players1: ["Genichiro Tenryu", "Toshiaki Kawada"],
    players2: ["Stan Hansen", "Terry Gordy"],
    whoWon: ["Stan Hansen", "Terry Gordy"],
    frames: 12,
    date: "1988-12-16",
  },
  {
    id: 10,
    type: "singles",
    player1: "Big Van Vader",
    frames: 16,
    scoreCap: 80,
    stakes: 5,
  },
  {
    id: 11,
    type: "singles",
    player1: "Bull Nakano",
    player2: "Devil Masami",
    whoWon: "Bull Nakano",
    frames: 8,
    scoreCap: 40,
    stakes: 2,
    date: "1995-04-28",
  },
] as EventType[];
