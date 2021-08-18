import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstantesEditComponent } from './estantes-edit.component';

describe('EstantesEditComponent', () => {
  let component: EstantesEditComponent;
  let fixture: ComponentFixture<EstantesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstantesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstantesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
