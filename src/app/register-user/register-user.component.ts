import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterUserInterface } from './../model/register-user.interface';
import { ALERT_MESSAGES_CONST } from './model/alert-messages.const';
import { AlertMessagesInterface } from './model/alert-messages.model';
import { ValidationTypeEnum } from './model/message-type.enum';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  @Output()
  dataChanges = new EventEmitter<RegisterUserInterface>();

  registerUserForm: AbstractControl | null = null;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerUser();
  }

  getAlert(inputName: string, control: AbstractControl): string {
    const ALERT_MESSAGE = ALERT_MESSAGES_CONST.find((data: AlertMessagesInterface) => (
      data.inputName === inputName &&
      control.touched &&
      control.errors &&
      control.errors.hasOwnProperty(ValidationTypeEnum.REQUIRED)
    )
    );
    return ALERT_MESSAGE?.message || '';
  }

  onSubmit(): void {
    try {
      if (this.registerUserForm?.valid) {
        this.dataChanges.emit({
          nome: this.nome.value,
          email: this.email.value,
          password: this.password.value
        });
      }
      throw new Error('Preencha o formulário para receber todos os dados!');
    } catch (error) {
      console.group('FORMULÁRIO DE CADASTRO');
      console.error(error)
      console.log({
        nome: this.nome.value,
        email: this.email.value,
        password: this.password.value
      });
      console.groupEnd();
    }
  }

  private registerUser(): void {
    this.registerUserForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.maxLength(50)]],
      password: [null, [Validators.required, Validators.maxLength(50)]]
    });
  }

  get nome(): AbstractControl | null {
    return this.registerUserForm?.get('nome') || null;
  }

  get email(): AbstractControl | null {
    return this.registerUserForm?.get('email') || null;
  }

  get password(): AbstractControl | null {
    return this.registerUserForm?.get('password') || null;
  }
}
