import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuid } from 'uuid'; 

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
  ];

  onNewCharter(character: Character): void {
    const newCharacter: Character = {id: uuid(), ...character }
    this.characters.push({ name: character.name, power: character.power });
    console.log(character);
    console.log(this.characters);
  }
}
