import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { RandomWordService } from './random-word.service';
import { ScoreboardService } from './scoreboard.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gameModal?: bootstrap.Modal;
  randomWord: string = '';
  countErrorLetters: number = 0;
  arrayWord: string[] = [];
  selectedLettersArray: string[] = [];
  level: number = 1;
  countCorectLetters: number = 0;
  isSelectedLetter: boolean = false;
  points: number = 0;
  isGameOverOrLevelFinisht: boolean = false;

  constructor(
    private randomWordService: RandomWordService,
    private scoreboardService: ScoreboardService,
    private router: Router,
    private userService: UsersService
  ) {}

  randomWordFunc() {
    this.randomWordService.getWord().subscribe(
      (data) => {
        this.randomWord = data.word;
        this.arrayWord = Array(this.randomWord.length).fill('_');
        console.log(data.word);
      },
      (err) => console.log(err)
    );
  }

  /**
   * check if the letter is a letter of the word
   * @param char
   */
  checkLetter(char: string) {
    if (this.checkShowModal()) return;

    //if the letter was selected
    this.isSelectedLetter = this.selectedLettersArray.includes(char);
    if (this.isSelectedLetter) return;

    this.selectedLettersArray.push(char);

    //if the letter not in the random word
    if (!this.randomWord.includes(char)) {
      this.countErrorLetters++;
    } else {
      //if letter is in the random word and was not selected
      this.replaceDashes(char);
      this.countCorectLetters++;
      this.points += 1;
    }

    this.checkShowModal();
  }

  private replaceDashes(char: string) {
    const indexes = this.getMatchingCharIndex(this.randomWord, char);
    this.arrayWord = this.arrayWord.map((c, i) =>
      indexes.includes(i) ? char : c
    );
  }

  private getMatchingCharIndex(word: string, char: string): number[] {
    const indexes = [];
    for (let index = 0; index < word.length; index++) {
      if (word[index] === char) indexes.push(index);
    }
    return indexes;
  }

  // check if the level over
  private checkShowModal(): boolean {
    if (this.countCorectLetters == this.randomWord.length) {
      this.showNextLevel();
      return true;
    } else if (this.countErrorLetters == 6) {
      this.showGameOver();
      return true;
    }
    return false;
  }

  private showNextLevel() {
    this.isGameOverOrLevelFinisht = false;
    this.gameModal?.show();
  }

  private showGameOver() {
    this.isGameOverOrLevelFinisht = true;
    this.gameModal?.show();
  }

  public nextLevel() {
    this.level++;
    this.countCorectLetters = 0;
    this.selectedLettersArray = [];
    this.countErrorLetters = 0;
    this.randomWordFunc();
    this.hideModal();
  }

  public newGame() {
    this.hideModal();
    this.gameModal = new bootstrap.Modal(
      document.getElementById('gameOverModal') as Element,
      undefined
    );
    this.level = 1;
    this.countCorectLetters = 0;
    this.selectedLettersArray = [];
    this.countErrorLetters = 0;
    this.points = 0;
    this.randomWordFunc();
  }

  async showScoreboard() {
    await this.addItem();
    await this.navigateScoreboard();
    this.hideModal();
  }

  private addItem() {
    return this.scoreboardService.addItem(this.points);
  }

  private navigateScoreboard() {
    return this.router.navigate(['scoreboard']);
  }

  private hideModal() {
    this.gameModal?.hide();
  }
}
