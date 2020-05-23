import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourColumnGalleryComponent } from './four-column-gallery.component';

describe('FourColumnGalleryComponent', () => {
  let component: FourColumnGalleryComponent;
  let fixture: ComponentFixture<FourColumnGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourColumnGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourColumnGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
