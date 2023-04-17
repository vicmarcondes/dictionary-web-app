import { Component, OnInit, ViewChild } from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: any;
  
  fontSelected: string = "sans-serif";
  dictionaryData: any;
  isDarkMode: boolean = false;
  submitted: boolean = false;

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
    if(response) {
      this.dictionaryData = response[0];
      
      let phoneticWithAudio = this.dictionaryData.phonetics.filter((phonetic: any) => phonetic.audio);      
      this.audioPlayer.nativeElement.src = phoneticWithAudio[0].audio;
    } else {
      this.dictionaryData = null;
    }

    this.submitted = true;

  }

  playPronunciation() {
    this.audioPlayer.nativeElement.play();
    
  }

}
