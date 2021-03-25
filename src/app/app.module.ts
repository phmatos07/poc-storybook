import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterUserModule } from './register-user/register-user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegisterUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
