import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowtoolbarComponent } from './rowtoolbar.component';

describe('RowtoolbarComponent', () => {
  let component: RowtoolbarComponent;
  let fixture: ComponentFixture<RowtoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowtoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowtoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
