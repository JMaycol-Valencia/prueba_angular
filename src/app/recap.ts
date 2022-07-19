const nombre:string = 'maycol';
const suma = (a:number, b:number) => {
  return a+b;
}
console.log(suma(1,5));


//TS usa mucho el patron de objetos
//Creamos una clase declarando variables y asignandolas al cosntructor
class Person {

  age: number;
  private lastname: string;

  constructor(age: number,lastname: string){
    this.age = age;
    this.lastname = lastname;
  }
}
//Con TS podemos ahorrar un poco de lineas de codigo tan solo declarando en el constructor
//el tipo y la privacidad del parametro, para llegar a tener el mismo resultado
class PersonDos{
  constructor(public age:number,public lastname:string){
  }
}

//creamos dos nuevos objetos de los distintos tipos de persona
const nico = new Person(15, 'valencia');
const matilda = new PersonDos(24,'medez');


//como un objeto llegamos a acceder a los valores de sus atributos
nico.age;
matilda.age;
matilda.lastname;
//Una variable privada no puede ser vista desde fuera de la clase nico.lastname;
