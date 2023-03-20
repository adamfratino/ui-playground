import { CSSProperties } from "theme-ui";

export type StyleProps = {
  boxShadow?: CSSProperties["boxShadow"];
  display?: CSSProperties["display"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
};

// export const isCentered = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// } as const;

// export const trimEdges = {
//   "& > *": {
//     marginLeft: "0 !important",
//     marginRight: "0 !important",
//     paddingLeft: "0 !important",
//     paddingRight: "0 !important",
//     "&:first-child": {
//       marginTop: "0 !important",
//       paddingTop: "0 !important",
//     },
//     "&:last-child": {
//       marginBottom: "0 !important",
//       paddingBottom: "0 !important",
//     },
//   },
// } as const;
