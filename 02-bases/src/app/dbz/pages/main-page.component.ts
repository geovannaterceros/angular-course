import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character';

@Component({
  selector: 'main-page-root',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters]
  }

  onNewCharacter( character: Character): void{
    this.dbzService.onNewCharter(character);
  }

  
}
