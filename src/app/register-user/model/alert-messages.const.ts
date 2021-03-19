import { AlertMessagesInterface } from './alert-messages.model';
import { ValidationTypeEnum } from './message-type.enum';

export const ALERT_MESSAGES_CONST: Array<AlertMessagesInterface> = [
  {
    validationType: ValidationTypeEnum.REQUIRED,
    inputName: 'nome',
    message: 'Por favor, digite seu nome completo.'
  },
  {
    validationType: ValidationTypeEnum.REQUIRED,
    inputName: 'email',
    message: 'Por favor, digite seu e-mail.'
  },
  {
    validationType: ValidationTypeEnum.REQUIRED,
    inputName: 'password',
    message: 'Por favor, digite uma senha.'
  }
];
