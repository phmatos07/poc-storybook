import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { RegisterUserComponent } from './register-user.component';
import registerUserMarkdown from './register-user.markdown.md';
import { RegisterUserModule } from './register-user.module';

export default {
  title: 'Components/Formulário de Cadastro',
  component: RegisterUserComponent,
  decorators: [
    moduleMetadata({
      imports: [RegisterUserModule]
    })
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: 'Background Blue', value: '#02587a' },
        { name: 'Background Grey', value: '#838383' },
        { name: 'Background Black', value: '#000000' },
      ],
    },
    notes: { registerUserMarkdown },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta;

const TEMPLATE: Story<RegisterUserComponent> = (args) => ({
  component: RegisterUserComponent,
  props: args,
});

export const PRIMARY = TEMPLATE.bind({});
PRIMARY.args = {
  formSize: '100%'
};
PRIMARY.argTypes = {
  labelColor: { control: 'color' },
  inputBorderColor: { control: 'color' },
  submitBackgroundColor: { control: 'color' },
  submitSize: {
    control: { type: 'range', min: 5, max: 100, step: 0 }
  }
};
PRIMARY.storyName = '2º História';
