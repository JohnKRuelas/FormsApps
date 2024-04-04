import { Meta, StoryObj } from '@storybook/angular';

import { SidemenuComponent } from './sidemenu.component';

type ComponentWithCustomControls = SidemenuComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Sidemenu',
  component: SidemenuComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Sidemenu` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Sidemenu: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
