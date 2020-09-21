import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { NewsComponent } from '../news/news.component';
import { ContactComponent } from '../contact/contact.component';
import { FullImageComponent } from '../full-image/full-image.component';
import { StickerGalleryComponent } from '../sticker-gallery/sticker-gallery.component';

const routes: Routes = [
  {path: 'home' , component: HomePageComponent},
  {path: 'sticker' , component: StickerGalleryComponent},
  {path: 'news' , component: NewsComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'full-image/:id/imagePath/:imagePath/title/:title' , component: FullImageComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
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
