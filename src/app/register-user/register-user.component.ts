import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterUserInterface } from './../model/register-user.interface';
import { ALERT_MESSAGES_CONST } from './model/alert-messages.const';
import { AlertMessagesInterface } from './model/alert-messages.model';
import { ValidationTypeEnum } from './model/message-type.enum';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit, OnDestroy {

  @Input()
  formSize = '100%';

  @Input()
  labelColor = '#056779';

  @Input()
  inputBorderColor = '#056779';

  @Input()
  submitBackgroundColor = '#056779';

  @Input()
  submitSize = '10';

  @Output()
  dataChanges = new EventEmitter<RegisterUserInterface>();

  registerUserForm: AbstractControl | null = null;
  isSubmit = false;
  feedbackMessage?: string;
  private subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerUser();
    this.subscription.add(this.resetIsSubmit());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getAlert(inputName: string, control: AbstractControl): string {
    const ALERT_MESSAGE = ALERT_MESSAGES_CONST.find((data: AlertMessagesInterface) => (
      data.inputName === inputName &&
      control.touched &&
      control?.errors?.hasOwnProperty(ValidationTypeEnum.REQUIRED)
    ));
    return ALERT_MESSAGE?.message || '';
  }

  onSubmit(): void {
    try {
      this.isSubmit = true;
      if (this.registerUserForm?.valid) {
        this.dataChanges.emit({
          nome: this.nome.value,
          email: this.email.value,
          password: this.password.value
        });
        this.feedbackMessage = 'Cadastro realizado com sucesso!';
        return;
      }

      this.feedbackMessage = 'Preencha o formulário para receber todos os dados!';
      throw new Error(this.feedbackMessage);

    } catch (error) {
      console.group('FORMULÁRIO DE CADASTRO');
      console.error(error);
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

  private resetIsSubmit(): Subscription {
    return this.registerUserForm.valueChanges.subscribe(() => this.isSubmit = false);
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

  get styleSubmit(): { 'width': string; 'background-color': string } {
    return {
      'width': `${this.submitSize}%`,
      'background-color': this.submitBackgroundColor
    };
  }
}
