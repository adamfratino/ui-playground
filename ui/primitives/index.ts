import { Box, BoxProps, box } from "./Box";
import { Button, ButtonProps, buttons } from "./Button";
import Container from "./Container/Container";
import { Grid, GridProps, grids } from "./Grid";
import Table from "./Table";
import { Text, TextProps, text } from "./Text";

export { Box, Button, Container, Grid, Table, Text };

export type { BoxProps, ButtonProps, GridProps, TextProps };

const primitives = {
  ...box, // box doesn't have a variant group
  buttons,
  grids,
  text,
};

export default primitives;
