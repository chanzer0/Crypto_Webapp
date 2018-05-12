import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoDropdownComponent } from './crypto-dropdown.component';

describe('CryptoDropdownComponent', () => {
  let component: CryptoDropdownComponent;
  let fixture: ComponentFixture<CryptoDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
