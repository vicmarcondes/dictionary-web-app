import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output('onSearch') searchEmitter = new EventEmitter<string>();   
  searchContent: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.searchEmitter.emit(this.searchContent);
  }

}
