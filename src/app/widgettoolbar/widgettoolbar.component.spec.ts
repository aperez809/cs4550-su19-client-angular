import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgettoolbarComponent } from './widgettoolbar.component';

describe('WidgettoolbarComponent', () => {
  let component: WidgettoolbarComponent;
  let fixture: ComponentFixture<WidgettoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgettoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgettoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
