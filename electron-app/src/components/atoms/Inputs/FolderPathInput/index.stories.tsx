import { ComponentStory, ComponentMeta } from "@storybook/react";

import FolderPathInput from ".";

export default {
  title: "components/atoms/Inputs/FolderPathInput",
  component: FolderPathInput,
} as ComponentMeta<typeof FolderPathInput>;

const Template: ComponentStory<typeof FolderPathInput> = (args) => (
  <FolderPathInput {...args} />
);

export const FolderInput = Template.bind({});
FolderInput.args = {
  value: "/User/folder/path",
};
