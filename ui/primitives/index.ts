import { Box, boxVariants } from "./Box";
import { Button, buttonVariants } from "./Button";
import { Grid, gridVariants } from "./Grid";
import Table from "./Table/Table";
import TableCell from "./Table/TableCell";
import TableGroup from "./Table/TableGroup";
import TableRow from "./Table/TableRow";
import { Text, textVariants } from "./Text";

export { Box, Button, Grid, Table, TableCell, TableGroup, TableRow, Text };

export const primitiveVariants = {
  ...boxVariants,
  ...buttonVariants,
  ...gridVariants,
  ...textVariants,
};
