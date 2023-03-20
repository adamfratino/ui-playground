import { generatePalette } from "./utils";

const grey = `#7F7F7F` as const;
const greys = { ...generatePalette(grey) } as const;

export default greys;
