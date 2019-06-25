import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumntoolbarComponent } from './columntoolbar.component';

describe('ColumntoolbarComponent', () => {
  let component: ColumntoolbarComponent;
  let fixture: ComponentFixture<ColumntoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumntoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumntoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
