import { generatePalette } from "./utils";

const yellow = `#FFC005` as const;
const yellows = { ...generatePalette(yellow) } as const;

export default yellows;
