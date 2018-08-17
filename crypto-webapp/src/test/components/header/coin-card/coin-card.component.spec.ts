import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoinCardComponent } from '../../../../app/components/header/top-ten/coin-card/coin-card.component';


describe('CoinCardComponent', () => {
  let component: CoinCardComponent;
  let fixture: ComponentFixture<CoinCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
