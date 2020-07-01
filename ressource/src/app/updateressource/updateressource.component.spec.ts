import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateressourceComponent } from './updateressource.component';

describe('UpdateressourceComponent', () => {
  let component: UpdateressourceComponent;
  let fixture: ComponentFixture<UpdateressourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateressourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateressourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
