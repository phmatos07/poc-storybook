import { ValidationTypeEnum } from './message-type.enum';

export interface AlertMessagesInterface {
  validationType: ValidationTypeEnum;
  inputName: string;
  message: string;
}
