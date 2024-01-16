import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './homePage.component.html',
})
export class HomePageComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get gifs(): Gif[]{
   return  this.gifsService.gifList;
  }

  ngOnInit(): void {
  }

}
