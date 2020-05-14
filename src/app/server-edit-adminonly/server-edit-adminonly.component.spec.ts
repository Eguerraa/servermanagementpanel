import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerEditComponentAdminOnly } from './server-edit-adminonly.component';

describe('ServerEditAdminonlyComponent', () => {
  let component: ServerEditComponentAdminOnly;
  let fixture: ComponentFixture<ServerEditComponentAdminOnly>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerEditComponentAdminOnly ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerEditComponentAdminOnly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
