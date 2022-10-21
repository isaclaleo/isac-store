import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'isac-store';
  name = 'isac';
  age = 18;
  myimg = 'https://cdn.wegow.com/media/artists/aurora/aurora-1632412929.693044.2560x1440.jpg';
  btDisable = true;
  person ={
    name: 'fidel',
    age: 83,
    avatar: 'https://cdn.wegow.com/media/artists/aurora/aurora-1632412929.693044.2560x1440.jpg'
  }
}
