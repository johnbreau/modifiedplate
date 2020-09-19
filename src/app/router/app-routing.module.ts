import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { StickerGalleryComponent } from '../sticker-gallery/sticker-gallery.component';

const routes: Routes = [
  {path: 'home' , component: HomePageComponent},
  {path: 'sticker' , component: StickerGalleryComponent},
];

@NgModule({
  imports:
    [RouterModule.forRoot(routes)],

  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
