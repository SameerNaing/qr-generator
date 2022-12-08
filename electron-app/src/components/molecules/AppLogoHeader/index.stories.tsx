import { ComponentStory, ComponentMeta } from "@storybook/react";

import AppLogoHeader from ".";

export default {
  title: "components/molecules/AppLogoHeader",
  component: AppLogoHeader,
} as ComponentMeta<typeof AppLogoHeader>;

const Template: ComponentStory<typeof AppLogoHeader> = (args) => (
  <AppLogoHeader />
);

export const AppLogoHeaderDisplay = Template.bind({});
