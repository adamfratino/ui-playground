import { Meta, Story } from "@storybook/react";
import TableComponent, { Props } from "./Table";

export default {
  title: "UI/Primitives",
} as Meta;

export const Table: Story<Props> = (args) => (
  <TableComponent {...args}>
    <thead>
      <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
    </tbody>
  </TableComponent>
);
