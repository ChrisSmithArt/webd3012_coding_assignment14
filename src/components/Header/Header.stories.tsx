import { StoryFn, Meta } from "@storybook/react";
import Header from "./Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Header",
  component: Header,
} as Meta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const EnabledHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EnabledHeader.args = {
  title: "Enabled",
  disabled: false,
  backgroundColor: "white",
};

export const DisabledHeader = Template.bind({});
DisabledHeader.args = {
  title: "Disabled",
  disabled: true,
  backgroundColor: "grey",
};
