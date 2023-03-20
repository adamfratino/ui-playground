import Table from "./Table";
import { Cell, Group, Row } from "./components";

/** @see https://stackoverflow.com/a/68678190/2868869 */
const TableNamespace = Object.assign(Table, {
  Cell: Cell,
  Group: Group,
  Row: Row,
});

export default TableNamespace;
