import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNaoLogadoComponent } from './menu-nao-logado.component';

describe('MenuNaoLogadoComponent', () => {
  let component: MenuNaoLogadoComponent;
  let fixture: ComponentFixture<MenuNaoLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNaoLogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNaoLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
