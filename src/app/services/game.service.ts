import { Injectable } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { RandomWordService } from './random-word.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  myModal?: bootstrap.Modal

  randomWord: string = "";
  index: number = 0;
  word: string = ''
  arrayWord: string[] = []
  selectedLettersArray: string[] = []
  level: number = 1;
  count: number = 0;
  isSelectedLetter: boolean = false;
  grade: number = 0;
  temp: string[] = []

  constructor(private randomWordService: RandomWordService) {
    this.randomWordFunc();
    this.myModal = new bootstrap.Modal(document.getElementById('exampleModal') as Element, undefined)
  }

  randomWordFunc() {
    this.randomWordService.getWord().subscribe(
      data => {
        this.randomWord = data.word;
        this.buildWordwith_();
        console.log(data.word)
      },
      err => console.log(err)
    )
  }

  buildWordwith_() {
    this.arrayWord = []
    for (let index = 0; index < this.randomWord.length; index++) {
      this.arrayWord.push("_")
    }
  }

  //check if the letter is a letter of the word
  checkLetter(char: string) {
    if (this.count == this.randomWord.length)
      this.myModal?.show();
    else if (this.index == 6)
      this.myModal?.show();
    else {
      if (this.selectedLettersArray.indexOf(char) != -1)
        this.isSelectedLetter = true;
      else if (this.randomWord.indexOf(char) == -1) {
        this.selectedLettersArray.push(char);
        this.index++;
        this.isSelectedLetter = false;
      }
      else {
        this.isSelectedLetter = false;
        this.selectedLettersArray.push(char);
        while (this.randomWord.indexOf(char) != -1) {
          this.count++;
          this.arrayWord[this.randomWord.indexOf(char)] = char
          this.temp = this.randomWord.split("");
          this.temp[this.randomWord.indexOf(char)] = " "
          this.randomWord = this.temp.join('');
          this.grade += 1;
        }
      }
      if (this.count == this.randomWord.length)
        this.myModal?.show();
      if (this.index == 6)
        this.myModal?.show();
    }
  }



  nextLevel() {
    this.level++;
    this.count = 0
    this.selectedLettersArray = [];
    this.index = 0;
    this.randomWordFunc()
    this.myModal?.hide();

  }


  newGame() {
    this.level = 1;
    this.count = 0
    this.selectedLettersArray = [];
    this.index = 0;
    this.grade = 0
    this.randomWordFunc()
    this.myModal?.hide();
  }
}
