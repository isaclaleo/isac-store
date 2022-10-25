import { Component } from '@angular/core';
import { Product } from './product.model';

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
  // names array
  names: string[] = [
    'isac',
    'fidel',
    'erick',
    'saul'
  ];
  newName = "";
  box = {
    width:10,
    heigth: 10,
    background: 'red'
  }
  // REto con array
  play = 'one';
  plays: string[] = [
    'psone',
    'ps2',
    'ps3',
    'ps4',
    'ps5',
  ];
  newPlay = "";
  // *ngFor arrays component
  products: Product[] = [
    {
      name: 'Orcas 1',
      price: 565,
      image: './assets/img/orca1.jpg',
      category: 'Ocean',
      desciption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      name: 'Orcas 2',
      price: 356,
      image: './assets/img/orca2.jpg',
      category: 'Ocean',
      desciption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
      name: 'Orcas 3',
      price: 34,
      image: './assets/img/orca3.jpeg',
      category: 'Ocean',
      desciption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
      name: 'Orcas 4',
      price: 23,
      image: './assets/img/orca4.jpeg',
      category: 'Ocean',
      desciption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
      name: 'Orcas 5',
      price: 34,
      image: './assets/img/orca5.jpeg',
      category: 'Ocean',
      desciption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
      name: 'Orcas 6',
      price: 3434,
      image: './assets/img/orca6.jpeg',
      category: 'Ocean',
      desciption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    }
  ]
  // init9
  widthImg = 10;

  toggleButton() {
    this.btDisable = !this.btDisable;
  }
  increaseAge () {
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName (event: Event) { 
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  // names array component
  addName() {
    this.names.push(this.newName);
    this.newName= '';
  }
  deleteName( index: number) {
    this.names.splice(index, 1); 
  }
 //plays reto array component 
  addPlay() {
    this.plays.push(this.newPlay);
    this.newPlay= '';
  }
  deletePlay(index: number) {
    this.plays.splice(index, 1);
  }
  // Formulario 
  register = {
    name:'',
    email: '',
    password: ''
  }
  onRegister () {
    console.log(this.register)
  }
}
