import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedirectivesComponent } from './usedirectives.component';

describe('UsedirectivesComponent', () => {
  let component: UsedirectivesComponent;
  let fixture: ComponentFixture<UsedirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
