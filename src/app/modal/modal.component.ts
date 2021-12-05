import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor( private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  newGame() {
    this.gameService.newGame();
  }

  nextLevel() {
    this.gameService.nextLevel();
  }


  ShowScoreboard() {
    this.gameService.showScoreboard();
  }

  public get isGameOverOrLevelFinisht() {
    return this.gameService.isGameOverOrLevelFinisht;
  }

  public get points() {
    return this.gameService.points;
  }


}
