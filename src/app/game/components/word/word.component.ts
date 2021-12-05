import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  public get arrayWord() {
    return this.gameService.arrayWord;
  }
}
