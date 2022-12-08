import { ComponentStory, ComponentMeta } from "@storybook/react";

import LogoHeader from ".";

export default {
  title: "components/atoms/Headings/LogoHeader",
  component: LogoHeader,
} as ComponentMeta<typeof LogoHeader>;

const Template: ComponentStory<typeof LogoHeader> = (args) => <LogoHeader />;

export const Header = Template.bind({});
