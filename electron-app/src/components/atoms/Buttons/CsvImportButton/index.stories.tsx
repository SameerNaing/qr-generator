import { ComponentStory, ComponentMeta } from "@storybook/react";

import CsvImportButton from ".";

export default {
  title: "components/atoms/Buttons/CsvImportButton",
  component: CsvImportButton,
} as ComponentMeta<typeof CsvImportButton>;

const Template: ComponentStory<typeof CsvImportButton> = (args) => (
  <CsvImportButton {...args} />
);

export const Button = Template.bind({});
