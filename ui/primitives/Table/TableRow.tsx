import Grid, { Props as GridProps } from "~ui/primitives/Grid/Grid";

type Props = Pick<
  GridProps,
  "gridTemplateColumns" | "minHeight" | "backgroundColor"
> & {
  children: React.ReactNode;
};

const TableRow: React.FC<Props> = ({ children, ...props }) => (
  <Grid as="tr" {...props}>
    {children}
  </Grid>
);

export default TableRow;
