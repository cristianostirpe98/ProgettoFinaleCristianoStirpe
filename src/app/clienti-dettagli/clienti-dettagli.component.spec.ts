import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientiDettagliComponent } from './clienti-dettagli.component';

describe('ClientiDettagliComponent', () => {
  let component: ClientiDettagliComponent;
  let fixture: ComponentFixture<ClientiDettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientiDettagliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientiDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
