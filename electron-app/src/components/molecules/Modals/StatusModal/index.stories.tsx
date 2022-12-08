import { ComponentStory, ComponentMeta } from "@storybook/react";

import Status from "src/constants/status";
import StatusModal from ".";

export default {
  title: "components/molecules/Modals/StatusModal",
  component: StatusModal,
} as ComponentMeta<typeof StatusModal>;

const Template: ComponentStory<typeof StatusModal> = (args) => (
  <StatusModal {...args} />
);

export const Loading = Template.bind({});
Loading.args = {
  status: Status.LOADING,
  open: true,
  onClose: () => {},
};

export const Error = Template.bind({});
Error.args = {
  status: Status.ERROR,
  open: true,
  errorMessage: "Error Message",
};
