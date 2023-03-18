import Box from "./Box/Box";
import { Button, buttonVariants } from "./Button";
import Grid from "./Grid/Grid";
import Line from "./Line/Line";
import Table from "./Table/Table";
import TableCell from "./Table/TableCell";
import TableGroup from "./Table/TableGroup";
import TableRow from "./Table/TableRow";
import { NewText, Text, textVariants } from "./Text";

export {
  Box,
  Button,
  Grid,
  Line,
  Table,
  TableCell,
  TableGroup,
  TableRow,
  NewText,
  Text,
};

export const primitiveVariants = {
  ...buttonVariants,
  ...textVariants,
};
