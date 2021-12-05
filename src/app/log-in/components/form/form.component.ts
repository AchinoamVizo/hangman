import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  mail: string = ''
  password: string = ''
  isSigninOrSignupForm: boolean = false
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  changeStatusForm() {
    this.isSigninOrSignupForm = !this.isSigninOrSignupForm
  }

  async sign() {
    if (!this.isSigninOrSignupForm)
      try {
        await this.userService.signIn(this.mail, this.password)
      } catch (error) {
        console.error(error);
        alert(error?.message ?? "error with signin");
      }
    else
      try {
        await this.userService.signUp(this.mail, this.password)
      } catch (error) {
        console.error(error);
        alert(error?.message ?? "error with signup");
      }
  }
}
