import { CSSProperties } from "theme-ui";
import Grid, { Props as GridProps } from "~ui/primitives/Grid/Grid";

type Props = Pick<GridProps, "columns" | "backgroundColor"> & {
  children: React.ReactNode;
  minHeight?: CSSProperties["minHeight"];
};

const Row: React.FC<Props> = ({ children, minHeight, ...props }) => (
  <Grid as="tr" variant="auto" {...props} sx={{ minHeight }}>
    {children}
  </Grid>
);

export default Row;
