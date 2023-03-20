import { generatePalette } from "./utils";

const orange = `#FF8D29` as const;
const oranges = { orange, oranges: generatePalette(orange) } as const;

export default oranges;
