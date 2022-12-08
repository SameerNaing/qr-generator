import { ComponentStory, ComponentMeta } from "@storybook/react";
import DirLinkText from ".";

export default {
  title: "components/atoms/Texts/DirLinkText",
  component: DirLinkText,
} as ComponentMeta<typeof DirLinkText>;

const Template: ComponentStory<typeof DirLinkText> = (args) => (
  <DirLinkText {...args} />
);

export const TextLink = Template.bind({});
