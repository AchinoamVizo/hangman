import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/Item';
import { ScoreboardService } from '../services/scoreboard.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss','../app.component.scss']
})
export class ScoreboardComponent implements OnInit {
  scoreboard$: Observable<Item[]>;

  constructor(private scoreboardService:ScoreboardService) {
    this.scoreboard$=this.scoreboardService.getScoreboard();
   }

  ngOnInit(): void {
  }

}
