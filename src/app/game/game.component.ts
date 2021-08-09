import { Component, OnInit, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { GameService } from '../services/game.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public gameService: GameService, public usersService: UsersService) {
    this.gameService.newGame();
  }

  ngOnInit(): void {
  }

}
