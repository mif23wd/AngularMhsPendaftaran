import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdaftarComponent } from './formdaftar.component';

describe('FormdaftarComponent', () => {
  let component: FormdaftarComponent;
  let fixture: ComponentFixture<FormdaftarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdaftarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
