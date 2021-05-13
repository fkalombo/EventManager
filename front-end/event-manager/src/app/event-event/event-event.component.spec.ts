import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEventComponent } from './event-event.component';

describe('EventEventComponent', () => {
  let component: EventEventComponent;
  let fixture: ComponentFixture<EventEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
