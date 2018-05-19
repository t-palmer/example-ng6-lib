import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNg6LibComponent } from './example-ng6-lib.component';

describe('ExampleNg6LibComponent', () => {
  let component: ExampleNg6LibComponent;
  let fixture: ComponentFixture<ExampleNg6LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNg6LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNg6LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
