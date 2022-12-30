import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletRefComponent } from './outlet-ref.component';

describe('OutletRefComponent', () => {
  let component: OutletRefComponent;
  let fixture: ComponentFixture<OutletRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
