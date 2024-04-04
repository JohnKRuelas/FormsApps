import { Meta, StoryObj } from '@storybook/angular';

import { BasicPageComponent } from './basic-page.component';

type ComponentWithCustomControls = BasicPageComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Basic Page',
  component: BasicPageComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `BasicPage` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const BasicPage: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
