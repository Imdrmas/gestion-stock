import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCommandPage } from './add-command.page';

describe('AddCommandPage', () => {
  let component: AddCommandPage;
  let fixture: ComponentFixture<AddCommandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCommandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
