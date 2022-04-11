import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedHomeComponent } from './feed-home.component';

describe('FeedHomeComponent', () => {
  let component: FeedHomeComponent;
  let fixture: ComponentFixture<FeedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
