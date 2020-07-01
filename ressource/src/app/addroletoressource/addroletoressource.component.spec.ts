import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroletoressourceComponent } from './addroletoressource.component';

describe('AddroletoressourceComponent', () => {
  let component: AddroletoressourceComponent;
  let fixture: ComponentFixture<AddroletoressourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddroletoressourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroletoressourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
