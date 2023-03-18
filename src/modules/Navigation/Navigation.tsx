import { useState } from "react";
import { Box, Grid } from "~ui/primitives";
import { Button, CreateEventForm, Modal } from "~components";
import variants from "./variants";

const Navigation: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Box as="header" variants={variants} variant="outerContainer">
      <Box as="nav" variant="section" display="flex" paddingY={1}>
        <Grid gap={4} marginLeft="auto">
          <Button variant="primary" onClick={() => setModalIsOpen(true)}>
            Create Match
          </Button>
          <Modal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            contentLabel="Example Modal"
          >
            <CreateEventForm />
          </Modal>
          {/* <Button variant="secondary">Log In</Button> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Navigation;
