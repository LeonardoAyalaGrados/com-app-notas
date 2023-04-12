import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrarNotaComponent } from './modal-registrar-nota.component';

describe('ModalRegistrarNotaComponent', () => {
  let component: ModalRegistrarNotaComponent;
  let fixture: ComponentFixture<ModalRegistrarNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegistrarNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegistrarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
