import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GutsComponent } from './guts.component';

describe('GutsComponent', () => {
  let component: GutsComponent;
  let fixture: ComponentFixture<GutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
