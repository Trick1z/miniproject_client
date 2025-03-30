import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestNumberComponent } from './guest-number.component';

describe('GuestNumberComponent', () => {
  let component: GuestNumberComponent;
  let fixture: ComponentFixture<GuestNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
