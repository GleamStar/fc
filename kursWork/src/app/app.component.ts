import { Component } from '@angular/core';
import { CustomForm } from './models/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  test: CustomForm[] = [
    {
      type : 1,
      value : 'one'
    },
    {
      type : 2,
      value : 'two'
    }
  ];
}
