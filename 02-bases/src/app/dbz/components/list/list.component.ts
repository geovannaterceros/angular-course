import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public characters: Character[] = [{name: 'Maestro Roshi', power: 500}]

  onDelete(i: number): void {
    this.characters.splice(i, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
