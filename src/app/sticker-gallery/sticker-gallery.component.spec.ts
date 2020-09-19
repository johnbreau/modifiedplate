import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerGalleryComponent } from './sticker-gallery.component';

describe('StickerGalleryComponent', () => {
  let component: StickerGalleryComponent;
  let fixture: ComponentFixture<StickerGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickerGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
