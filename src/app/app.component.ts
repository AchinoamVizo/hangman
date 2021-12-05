import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './services/game.service';
import { UsersService } from './services/users.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hangman';

  constructor(public usersService: UsersService, public gameService: GameService, private router: Router, firestore: AngularFirestore) {
    this.usersService.user$.subscribe(x => { if (x) this.router.navigate(['']) })
  }

  public get Curentrouter() {
    return this.router.url
  }

}
