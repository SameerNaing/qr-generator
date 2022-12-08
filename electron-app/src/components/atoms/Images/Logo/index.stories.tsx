import { ComponentStory, ComponentMeta } from "@storybook/react";

import Logo from ".";

export default {
  title: "components/atoms/Images/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo />;

export const LogoImg = Template.bind({});
