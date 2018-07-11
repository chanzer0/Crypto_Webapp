import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenCardComponent } from './top-ten-card.component';

describe('TopTenCardComponent', () => {
  let component: TopTenCardComponent;
  let fixture: ComponentFixture<TopTenCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
