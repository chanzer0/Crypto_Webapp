import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopTenComponent } from '../../../../app/components/header/top-ten/top-ten.component';


describe('TopTenComponent', () => {
  let component: TopTenComponent;
  let fixture: ComponentFixture<TopTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
