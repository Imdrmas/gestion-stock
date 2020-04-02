import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayProductPage } from './display-product.page';

describe('DisplayProductPage', () => {
  let component: DisplayProductPage;
  let fixture: ComponentFixture<DisplayProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
