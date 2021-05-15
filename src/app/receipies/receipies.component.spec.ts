import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RECEIPIESComponent } from './receipies.component';

describe('RECEIPIESComponent', () => {
  let component: RECEIPIESComponent;
  let fixture: ComponentFixture<RECEIPIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RECEIPIESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RECEIPIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
