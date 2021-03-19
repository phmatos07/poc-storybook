import { moduleMetadata } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
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
  },
} as Meta;

export const REGISTER_USER = () => ({
  component: RegisterUserComponent,
  props: {
    label: 'Button',
  },
});
REGISTER_USER.storyName = '1º História';

