import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasprComponent } from './rotaspr.component';

describe('RotasprComponent', () => {
  let component: RotasprComponent;
  let fixture: ComponentFixture<RotasprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotasprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotasprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
