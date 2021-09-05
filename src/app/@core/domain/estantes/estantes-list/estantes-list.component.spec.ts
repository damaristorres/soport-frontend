import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstantesListComponent } from './estantes-list.component';

describe('EstantesListComponent', () => {
  let component: EstantesListComponent;
  let fixture: ComponentFixture<EstantesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstantesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstantesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
