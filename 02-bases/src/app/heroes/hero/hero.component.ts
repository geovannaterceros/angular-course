import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {

  public name: string = 'Ironman';
  public age: number = 15;
  get CapitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age} `
  }

  changeAge(): number{
    return this.age=40;
  }
}
