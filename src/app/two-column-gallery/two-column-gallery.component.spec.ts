import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnGalleryComponent } from './two-column-gallery.component';

describe('TwoColumnGalleryComponent', () => {
  let component: TwoColumnGalleryComponent;
  let fixture: ComponentFixture<TwoColumnGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
