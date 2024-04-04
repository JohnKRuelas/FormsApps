import { Meta, StoryObj } from '@storybook/angular';

import { RegisterPageComponent } from './register-page.component';

type ComponentWithCustomControls = RegisterPageComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Register Page',
  component: RegisterPageComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `RegisterPage` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const RegisterPage: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
