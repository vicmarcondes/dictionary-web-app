import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fontSelected: string = "sans-serif";

  constructor(
    private dictionaryService: DictionaryService
  ) { }

  ngOnInit(): void {
  }


  onSelectFont() {
    this.dictionaryService.font = this.fontSelected;
  }

  async search(searchContent: string) {
    let response: any = await this.dictionaryService.searchWord(searchContent);
    console.log('>>> response', response);
  }

}
