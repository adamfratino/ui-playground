import ReactModal from "react-modal";
import { shadows } from "~ui/tokens";
import { Box, Button } from "~ui/primitives";

type Props = {
  modalIsOpen: boolean;
  setModalIsOpen?: (isOpen: boolean) => void;
  contentLabel: string;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({
  modalIsOpen = false,
  setModalIsOpen,
  contentLabel,
  children,
}) => (
  <ReactModal
    isOpen={modalIsOpen}
    contentLabel={contentLabel}
    ariaHideApp={false}
    onRequestClose={() => setModalIsOpen && setModalIsOpen(false)}
    shouldCloseOnOverlayClick={true}
    style={styles}
  >
    <Box
      display="flex"
      padding="thick"
      sx={{
        flexDirection: "column",
      }}
    >
      <Box ml="auto" mb="thin">
        <Button
          variant="icon"
          onClick={() => setModalIsOpen && setModalIsOpen(false)}
        >
          &times;
        </Button>
      </Box>
      {children}
    </Box>
  </ReactModal>
);

export default Modal;

const styles = {
  overlay: {
    zindex: 5,
    backgroundColor: "rgba(255, 255, 255, .9)",
  },
  content: {
    minWidth: "640px",
    maxWidth: "100%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: 0,
    boxShadow: shadows.box.shallow,
    padding: "8px",
  },
};
