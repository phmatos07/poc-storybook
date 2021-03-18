import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  registerUserForm: AbstractControl | null = null;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerUser();
  }

  onSubmit(): void {
    console.log(this.registerUserForm);
  }

  private registerUser(): void {
    this.registerUserForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      email: [null, Validators.required, Validators.maxLength(50)],
      passwords: [null, Validators.required, Validators.maxLength(50)]
    });
  }
}