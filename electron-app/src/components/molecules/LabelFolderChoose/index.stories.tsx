import { ComponentStory, ComponentMeta } from "@storybook/react";

import LabelFolderChoose from ".";

export default {
  title: "components/molecules/LabelFolderChoose",
  component: LabelFolderChoose,
} as ComponentMeta<typeof LabelFolderChoose>;

const Template: ComponentStory<typeof LabelFolderChoose> = (args) => (
  <LabelFolderChoose {...args} />
);

export const FolderChooseWithLabel = Template.bind({});

FolderChooseWithLabel.args = {
  labelText: "Label Text",
  value: "/User/Folder/Path",
};
