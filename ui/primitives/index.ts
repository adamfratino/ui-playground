import { Box, BoxProps, boxes } from "./Box";
import { Button, ButtonProps, buttons } from "./Button";
import { Grid, GridProps, grids } from "./Grid";
import Table from "./Table/Table";
import TableCell from "./Table/TableCell";
import TableGroup from "./Table/TableGroup";
import TableRow from "./Table/TableRow";
import { Text, TextProps, text } from "./Text";

export { Box, Button, Grid, Table, TableCell, TableGroup, TableRow, Text };

export type { BoxProps, ButtonProps, GridProps, TextProps };

const primitives = {
  boxes,
  buttons,
  grids,
  text,
};

export default primitives;
