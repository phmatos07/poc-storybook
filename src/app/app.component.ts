import { Component } from '@angular/core';
import { RegisterUserInterface } from './model/register-user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC-Storybook - Formulário de Cadastro';
  registerUser: RegisterUserInterface | null = null;
}
