import { generatePalette } from "./utils";

const green = `#00AF91` as const;
const greens = { ...generatePalette(green) } as const;

export default greens;
