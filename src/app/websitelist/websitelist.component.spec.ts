import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitelistComponent } from './websitelist.component';

describe('WebsitelistComponent', () => {
  let component: WebsitelistComponent;
  let fixture: ComponentFixture<WebsitelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
