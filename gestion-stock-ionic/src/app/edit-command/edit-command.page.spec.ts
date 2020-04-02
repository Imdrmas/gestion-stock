import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCommandPage } from './edit-command.page';

describe('EditCommandPage', () => {
  let component: EditCommandPage;
  let fixture: ComponentFixture<EditCommandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCommandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCommandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
