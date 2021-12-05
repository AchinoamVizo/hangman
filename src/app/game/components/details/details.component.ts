import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {}

  public get selectedLettersArray() {
    return this.gameService.selectedLettersArray;
  }

  public get level() {
    return this.gameService.level;
  }

  public get countErrorLetters() {
    return this.gameService.countErrorLetters;
  }
}
