import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counting-button',
  standalone: true,
  imports: [],
  templateUrl: './counting-button.component.html',
  styleUrl: './counting-button.component.css'
})
export class CountingButtonComponent {
  protected buttonVal : number = 0;
  @Output() protected buttonValChange = new EventEmitter<number>();

  protected increment(){
    this.buttonVal++;
    this.buttonValChange.emit(this.buttonVal);
  }
}
