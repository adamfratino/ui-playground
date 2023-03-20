import { EventType } from "__mockData";
import { Button, Grid, Table } from "~ui/primitives";

const DateCell: React.FC<Pick<EventType, "date">> = ({ date }) => {
  const readableDate = date && [
    new Date(date).toLocaleDateString("en-us", { weekday: "long" }),
    new Date(date).toLocaleDateString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  ];

  return (
    <Table.Cell>
      {readableDate ? (
        <Grid as="time" variant="stacked">
          <span>{readableDate[0]}</span>
          <span>{readableDate[1]}</span>
        </Grid>
      ) : (
        <Button variant="event">Set Date</Button>
      )}
    </Table.Cell>
  );
};

export default DateCell;
