import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { NewsComponent } from '../news/news.component';
import { ContactComponent } from '../contact/contact.component';
import { StickerGalleryComponent } from '../sticker-gallery/sticker-gallery.component';

const routes: Routes = [
  {path: 'home' , component: HomePageComponent},
  {path: 'sticker' , component: StickerGalleryComponent},
  {path: 'news' , component: NewsComponent},
  {path: 'contact' , component: ContactComponent},
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
