import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendertemplatesonconditionComponent } from './rendertemplatesoncondition.component';

describe('RendertemplatesonconditionComponent', () => {
  let component: RendertemplatesonconditionComponent;
  let fixture: ComponentFixture<RendertemplatesonconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendertemplatesonconditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendertemplatesonconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
