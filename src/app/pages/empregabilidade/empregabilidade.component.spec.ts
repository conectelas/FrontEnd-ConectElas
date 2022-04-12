import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregabilidadeComponent } from './empregabilidade.component';

describe('EmpregabilidadeComponent', () => {
  let component: EmpregabilidadeComponent;
  let fixture: ComponentFixture<EmpregabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpregabilidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
