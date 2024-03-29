import { useState } from "react";
import { Box, Button } from "~ui/primitives";
import { CreateEventForm, Modal } from "~components";

const Navigation: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Box as="header" variant="outer" backgroundColor="black">
      <Box as="nav" variant="section" display="flex">
        <Button
          variant="primary"
          onClick={() => setModalIsOpen(true)}
          ml="auto"
        >
          Create Match
        </Button>
        <Modal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          contentLabel="Example Modal"
        >
          <CreateEventForm />
        </Modal>
      </Box>
    </Box>
  );
};

export default Navigation;
