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
  img = 'https://www.w3schools.com/howto/img_avatar.png'

  btnDisable = true;
  
  persona = {
    name: 'Jhonn',
    age: 25,
    avatar: "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000" 
  }

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
}
