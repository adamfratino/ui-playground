import { Meta, Story } from "@storybook/react";
import Modal from "./Modal";
import AcceptChallengeModal from "~/modules/Events/components/AcceptChallengeModal";
import CreateEventForm from "~/components/CreateEventForm/CreateEventForm";

export default {
  title: "App/Components/Modal",
} as Meta;

export const AcceptChallenge: Story = () => (
  <Modal modalIsOpen={true} contentLabel="Accept Challenge">
    <AcceptChallengeModal
      players1={["Edge", "Christian"]}
      // player1="Edge"
      type="singles"
      frames={8}
    />
  </Modal>
);

export const CreateEvent: Story = () => (
  <Modal modalIsOpen={true} contentLabel="CreateEventForm">
    <CreateEventForm />
  </Modal>
);
