import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterUserComponent
  ],
  declarations: [
    RegisterUserComponent
  ]
})
export class RegisterUserModule { }
