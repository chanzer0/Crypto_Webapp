import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GainersLosersComponent } from '../../../../app/components/header/gainers-losers/gainers-losers.component';


describe('GainersLosersComponent', () => {
  let component: GainersLosersComponent;
  let fixture: ComponentFixture<GainersLosersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainersLosersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainersLosersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
