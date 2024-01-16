import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increasyBy(2)">+1</button>
    <button (click)="resert()">Resert</button>
    <button (click)="decreaseBy(2)">-1</button>
  `,
})
export class CounterComponent {
    public counter: number = 10;

    increasyBy( data: number): void {
      this.counter+=data;
    }
  
    resert(): void {
      this.counter = 10 ;
    }
  
    decreaseBy( data: number) : void {
      this.counter-=data;
    }
}
