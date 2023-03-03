import { Meta, Story } from "@storybook/react";
import Modal from "./Modal";
import AcceptChallengeModal from "~/modules/Events/components/AcceptChallengeModal";

export default {
  title: "App/Components/Modal",
} as Meta;

export const AcceptChallenge: Story = () => (
  <Modal modalIsOpen={true} contentLabel="Accept Challenge">
    <AcceptChallengeModal
      players1={["Edge", "Christian"]}
      type="singles"
      frames={8}
    />
  </Modal>
);
