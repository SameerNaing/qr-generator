import { ComponentStory, ComponentMeta } from "@storybook/react";
import CSVFileNameButton from ".";

export default {
  title: "components/molecules/CSVFileNameButton",
  component: CSVFileNameButton,
  argTypes: {
    fileName: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof CSVFileNameButton>;

const Template: ComponentStory<typeof CSVFileNameButton> = (args) => (
  <CSVFileNameButton {...args} />
);

export const FileSelected = Template.bind({});

FileSelected.args = {
  fileName: "File Name.csv",
  onOpenDir: () => {},
  onSelectFile: () => {},
  onRemoveFile: () => {},
};
export const WithoutFile = Template.bind({});

WithoutFile.args = {
  fileName: null,
  onOpenDir: () => {},
  onSelectFile: () => {},
  onRemoveFile: () => {},
};
