import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search:</h5>
    <input type='text'
     class='form-control'
     placeholder= 'Search gifs...'
     (keyup.enter)="searchTag()"
     #txtTagInput
     >
    `
})
export class SearchBoxComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  ngOnInit() {}

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag(){

    const newTag= this.tagInput.nativeElement.value;
    console.log({newTag});
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
