import { Meta, StoryObj } from '@storybook/angular';

import { DynamicPageComponent } from './dynamic-page.component';

type ComponentWithCustomControls = DynamicPageComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Dynamic Page',
  component: DynamicPageComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `DynamicPage` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const DynamicPage: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
