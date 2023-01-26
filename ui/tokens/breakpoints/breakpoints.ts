export type BreakpointsType = {
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
};

const breakpoints: string[] & BreakpointsType = [
  "414px",
  "768px",
  "1024px",
  "1440px",
];

export default breakpoints;
