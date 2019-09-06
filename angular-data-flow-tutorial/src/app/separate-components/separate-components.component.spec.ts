import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateComponentsComponent } from './separate-components.component';

describe('SeparateComponentsComponent', () => {
  let component: SeparateComponentsComponent;
  let fixture: ComponentFixture<SeparateComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparateComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
