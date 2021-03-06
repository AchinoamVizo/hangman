import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  keyboard: string[] =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  checkLetter(char: string) {
    this.gameService.checkLetter(char)
  }

  public get isSelectedLetter() {
    return this.gameService.isSelectedLetter;
  }
}
