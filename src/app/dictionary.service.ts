import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private _font: string = 'serif'; // Fonte padrão

  constructor() { }


  get font(): string {
    return this._font;
  }

  set font(value: string) {
    this._font = value;
    document.body.style.fontFamily = this._font;
    document.getElementById('input-dictionary').style.fontFamily = this._font;
  }
}
