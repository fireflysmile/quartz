import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNoBoderComponent } from './dropdown-no-boder.component';

describe('DropdownNoBoderComponent', () => {
  let component: DropdownNoBoderComponent;
  let fixture: ComponentFixture<DropdownNoBoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownNoBoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownNoBoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
