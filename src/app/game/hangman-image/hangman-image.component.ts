import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-hangman-image',
  templateUrl: './hangman-image.component.html',
  styleUrls: ['./hangman-image.component.scss']
})
export class HangmanImageComponent implements OnInit {
  arrayImg: string[] = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
  image: string = "";
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this.image = this.arrayImg[this.gameService.index]
  }

}
