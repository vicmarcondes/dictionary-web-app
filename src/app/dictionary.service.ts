import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private _font: string = 'serif'; // Fonte padrão

  constructor(
    private http: HttpClient
  ) { }


  get font(): string {
    return this._font;
  }

  set font(value: string) {
    this._font = value;
    document.body.style.fontFamily = this._font;
    document.getElementById('input-dictionary').style.fontFamily = this._font;
  }

  async searchWord(word: string) {
    try {
      let response: any = await this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).toPromise();
      if(response) {
        return response;
      }
    } catch (error) {
      return null;
    }
  }
}
