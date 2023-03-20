import { generatePalette } from "./utils";

const purple = `#6E1DBC` as const;
const purples = { ...generatePalette(purple) } as const;

export default purples;
