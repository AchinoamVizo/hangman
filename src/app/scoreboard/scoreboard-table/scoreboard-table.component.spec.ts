import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardTableComponent } from './scoreboard-table.component';

describe('ScoreboardTableComponent', () => {
  let component: ScoreboardTableComponent;
  let fixture: ComponentFixture<ScoreboardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
