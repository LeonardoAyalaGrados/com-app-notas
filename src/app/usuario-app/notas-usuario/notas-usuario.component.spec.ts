import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasUsuarioComponent } from './notas-usuario.component';

describe('NotasUsuarioComponent', () => {
  let component: NotasUsuarioComponent;
  let fixture: ComponentFixture<NotasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
