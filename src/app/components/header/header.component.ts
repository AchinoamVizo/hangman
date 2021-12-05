import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async logOut() {
    await this.usersService.logOut();
    this.navigateHome();
  }

  public get user$() {
    return this.usersService.user$;
  }
  navigateHome() {
    this.router.navigate(['/home'])
  }

}
