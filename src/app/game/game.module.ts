import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { HangmanImageComponent } from './components/hangman-image/hangman-image.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { DetailsComponent } from './components/details/details.component';
import { GameRoutingModule } from './game-routing.module';
import { WordComponent } from './components/word/word.component';

@NgModule({
  declarations: [
    GameComponent,
    HangmanImageComponent,
    KeyboardComponent,
    DetailsComponent,
    WordComponent,
  ],
  imports: [CommonModule, GameRoutingModule],
  bootstrap: [],
})
export class GameModule {}
