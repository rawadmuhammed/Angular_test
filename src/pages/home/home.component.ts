import { Component } from '@angular/core';
import {CountingButtonComponent} from '../../components/counting-button/counting-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CountingButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected buttonVal : number = 0;

  protected updateButtonVal(val: number){
    this.buttonVal = val;
  }

}
