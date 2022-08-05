import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project-two';
  name = 'maycol';
  age = 24;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  btnDisable = true;

  persona = {
    name: 'Jhonn',
    age: 25,
    avatar: "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000"
  }

  names: string[] = ['nicolas', 'maycol', 'vanesa', 'carlos',' alan'];
  newName = '';

  habitaciones: number[] = [1,2,3,4,4.1,4.2,4.3,4.4];
  pagos: boolean[] = [true, false, true, true , true , true , false, false];

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.webp',
      category: 'juguetes'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpeg',
      category: 'deporte'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
      category: 'musica'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
      category: 'lectura'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.webp',
      category: 'mascotas'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glass.webp',
      category: 'Dama'
    }
  ]

  /*Metodos */

  public toggleButton(){
    this.btnDisable = !this.btnDisable;
  }

  public aumentarEdad(){
    this.persona.age += 1;
  }

  public restarEdad(){
    this.persona.age -= 1;
  }

  /*FUNCIONES QUE USAN EL EVENTO COMO PARAMETRO
   PARA ACCEDES A SUS PROPIEDADES */
  public onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.persona.name = element.value;
  }

  /*PRUEBA EXTRA */
  clickEvent(){
    alert('Simple click event fired');
  }

  dblclickEvent(){
    alert('Double click event fired');
  }

  blurEvent(){
    console.log('Blur event fired');
   // alert('Blur event fired');
  }

  focusEvent(){
    console.log('Focus event fired');
    //alert('Focus event fired');
  }

  copyEvent(){
    alert('Copy event fired');
  }

  cutEvent(){
    alert('Cut event fired');

  }

  pasteEvent(){
     alert('Paste event fired');
  }


  /*MANEJO DE NGFOR , funciones */

  addName(){
    this.names.push(this.newName);
    this.newName = '';    /*LINEA DE CODIGO PARA LIMPIAR EL INPUT AL TERMINAR EL GUARDADO DE LA LISTA */
  }

  deleteName(index : number){
    this.names.splice(index, 1);
  }
}
