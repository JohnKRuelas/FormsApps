import { Meta, StoryObj } from '@storybook/angular';

import { SwitchesPageComponent } from './switches-page.component';

type ComponentWithCustomControls = SwitchesPageComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Switches Page',
  component: SwitchesPageComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `SwitchesPage` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const SwitchesPage: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
