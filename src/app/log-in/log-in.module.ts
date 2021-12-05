import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { LogInComponent } from './log-in.component';
import { LogInRoutingModule } from './log-in-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    FormsModule
  ]
})
export class LogInModule { }
