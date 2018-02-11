import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerasContractComponent } from './geras-contract.component';

describe('GerasContractComponent', () => {
  let component: GerasContractComponent;
  let fixture: ComponentFixture<GerasContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerasContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerasContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
