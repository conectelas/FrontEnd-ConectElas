import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFeedComponent } from './menu-feed.component';

describe('MenuFeedComponent', () => {
  let component: MenuFeedComponent;
  let fixture: ComponentFixture<MenuFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
