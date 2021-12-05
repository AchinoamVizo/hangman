import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/Item';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-scoreboard-table',
  templateUrl: './scoreboard-table.component.html',
  styleUrls: ['./scoreboard-table.component.scss'],
})
export class ScoreboardTableComponent implements OnInit {
 @Input() scoreboard$: Observable<Item[]>;
  constructor() {
    this.scoreboard$ = new Observable<Item[]>();
  }
  ngOnInit(): void {}
}
