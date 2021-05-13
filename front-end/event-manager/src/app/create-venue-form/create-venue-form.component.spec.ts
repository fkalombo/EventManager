import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVenueFormComponent } from './create-venue-form.component';

describe('CreateVenueFormComponent', () => {
  let component: CreateVenueFormComponent;
  let fixture: ComponentFixture<CreateVenueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVenueFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVenueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
