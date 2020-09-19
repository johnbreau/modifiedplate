import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { stickers } from '../data/stickers.data';

@Injectable()
export class StickerService {

  constructor() {}

  fetchImages(): Observable<any> {
    return of(stickers);
  }
}