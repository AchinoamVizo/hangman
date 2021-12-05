import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../services/game.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private gameService: GameService) {
    this.gameService.newGame();
  }

  ngOnInit(): void {}
}
