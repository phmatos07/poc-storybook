import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { RegisterUserComponent } from './register-user.component';
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
  }
} as Meta;

const TEMPLATE: Story<RegisterUserComponent> = (args) => ({
  component: RegisterUserComponent,
  props: args,
});

export const PRIMARY = TEMPLATE.bind({});
PRIMARY.args = {
  formSize: '100%',
  submitSize: '100px',
};
PRIMARY.argTypes = {
  labelColor: { control: 'color' },
  inputBorderColor: { control: 'color' },
  submitBackgroundColor: { control: 'color' }
};
PRIMARY.storyName = '2º História';
