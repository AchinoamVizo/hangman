import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanImageComponent } from './hangman-image.component';

describe('HangmanImageComponent', () => {
  let component: HangmanImageComponent;
  let fixture: ComponentFixture<HangmanImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
