import { generatePalette } from "./utils";

const red = "#FF4949" as const;
const reds = { ...generatePalette(red) } as const;

export default reds;
