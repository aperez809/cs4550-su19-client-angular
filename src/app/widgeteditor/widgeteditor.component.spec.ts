import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgeteditorComponent } from './widgeteditor.component';

describe('WidgeteditorComponent', () => {
  let component: WidgeteditorComponent;
  let fixture: ComponentFixture<WidgeteditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgeteditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgeteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
