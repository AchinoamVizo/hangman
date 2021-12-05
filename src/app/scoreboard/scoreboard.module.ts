import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreboardTableComponent } from './components/scoreboard-table/scoreboard-table.component';
import { ScoreboardComponent } from './scoreboard.component';
import { ScoreboardRoutingModule } from './scoreboard-routing.module';



@NgModule({
  declarations: [
    ScoreboardTableComponent,
    ScoreboardComponent
  ],
  imports: [
    CommonModule,
    ScoreboardRoutingModule
  ]
})
export class ScoreboardModule { }
