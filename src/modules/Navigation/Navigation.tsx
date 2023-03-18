import { useState } from "react";
import { Box, Button, Grid } from "~ui/primitives";
import { CreateEventForm, Modal } from "~components";
import variants from "./variants";

const Navigation: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Box as="header" variants={variants} variant="outerContainer">
      <Box as="nav" variant="section" display="flex" paddingY={1}>
        <Grid gap={4} marginLeft="auto">
          <Button onClick={() => setModalIsOpen(true)}>Create Match</Button>
          <Modal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            contentLabel="Example Modal"
          >
            <CreateEventForm />
          </Modal>
        </Grid>
      </Box>
    </Box>
  );
};

export default Navigation;
