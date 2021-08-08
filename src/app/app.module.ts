import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { DetailsComponent } from './game/details/details.component';
import { KeyboardComponent } from './game/keyboard/keyboard.component';
import { HangmanImageComponent } from './game/hangman-image/hangman-image.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DetailsComponent,
    KeyboardComponent,
    HangmanImageComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
