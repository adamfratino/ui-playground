import { generatePalette } from "./utils";

const blue = `#3DB2FF` as const;
const blues = { ...generatePalette(blue) } as const;

export default blues;
