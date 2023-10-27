import { Component } from '@angular/core';

@Component({
  selector: 'app-lean-online',
  templateUrl: './lean-online.component.html',
  styleUrls: ['./lean-online.component.css']
})
export class LeanOnlineComponent {
  onButtonClick() {
    alert('Button Clicked!');
  }
}
