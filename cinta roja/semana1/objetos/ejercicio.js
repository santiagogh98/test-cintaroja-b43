// 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia
// https://en.wikipedia.org/wiki/List_of_fictional_penguins
//     Crea un objeto llamado myPenguin con propiedades que representen
//     la información listada en cada columna en esa página de wikipedia
//     (por ejemplo: character, origin...)

let myPenguin={
    character:'Chilly Willy',
    origin: 'Chilly Willy',
    notes:'A penguin who does not enjoy being cold, from the classic Walter Lantz cartoons. In addition to his animated cartoons, also had his own comic book in the 1950s.'
}





// 2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
//     de bienvenida. La salida debe ser algo como:
//     "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
console.log('Hola, soy un pingüino y mi nombre es '+myPenguin.character);
console.log(myPenguin);



// 3.- Escribe otra línea de código que añada una nueva propiedad a tu
//     pingüino llamada puedeVolar y asignalo a falso.
//     Nota: No modifiques el código original donde definiste a tu pingüino

myPenguin.puedeVolar=false;
console.log(myPenguin);



// 4.- Añade un método a tu pingüino llamado 'graznar' que muestre en
//     consola: "kaww kaww!!"
//     Nota: Sí, así suenan los pingüinos
//     Nota de la Nota: No modifiques el código previo. Hazlo en una
//     nueva línea de código.
myPenguin.graznar= function(){
    console.log('KAWW KAWW');
}
console.log(myPenguin);
myPenguin.graznar();

// -----------------------------------------------------------------------
// 5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
//     consola el mismo mensaje que escribimos para la bienvenida.
//     Esta vez, emplea la palabra reservada "this" para resolverlo.
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------


myPenguin.saludar=function(){
    console.log('Hola, soy un pingüino y mi nombre es '+this.character);
}
myPenguin.saludar();
// 6.- Sin modificar el código previo, cambia el nombre del pingüino a
//     "Señor Pingu" y llama al método "saludar" para verificar que
//     se ha aplicado el cambio correctamente.
// -----------------------------------------------------------------------

myPenguin.character='Señor Pingu';
myPenguin.saludar();

// -----------------------------------------------------------------------
// 7.- Escribe otro método llamado 'volar'. Con este método imprime en
//     consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true'
//     en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
//     "No puedo volar :("
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

myPenguin.volar= function(){
    if (myPenguin.puedeVolar==true) {
        console.log('Puede volar');
        
    }
    else{
        console.log('No puede volar');
    }
}
myPenguin.volar();
// 8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a
//     llamar el método 'volar' para verificar que el cambio se efectuó
//     correctamente.
// -----------------------------------------------------------------------
// -------------------------------------------------------------

myPenguin.puedeVolar=true;
myPenguin.volar();
// 9.- Crea un objeto que contenga información de una receta
//     para preparar Mole. Debe contener las propiedades de
//     título (string), porciones (numero) e ingredientes (un
//     arreglo de strings). Muestra la información de la receta
//     para que luzca así:
   
//     Mole
//     Porciones: 2
//     Ingredientes:
//     canela
//     comino
//     cocoa

let receta={
    nombre:'Mole',
    Porciones: 2,
    Ingredientes:['canela','comino','cocoa']

}
console.log(receta.nombre);
console.log('Porciones:'+ receta.Porciones);
console.log('Ingredientes');
for (let i = 0; i < receta.Ingredientes.length; i++) {
    console.log(receta.Ingredientes[i]);
    
}

// -------------------------------------------------------------
// -------------------------------------------------------------
// 10.- Crea un arreglo de objetos, donde cada objeto describa
//     un libro y tenga las propiedades para titulo(string),
//     autor(string) y leido(booleano para indicar si se ha
//     leido o no). Itera sobre el arreglo de libros, y por
//     cada libro imprime el titulo y autor, junto con su
//     status de lectura (si ya ha sido leído, o no).
// -------------------------------------------------------------
let libros = [
    {
        titulo: 'Crimen y Castigo',
        autor:'Dostoyevski',
        leido:false,
    },
    {
        titulo: ' y Castigo',
        autor:'Dostoyevski',
        leido:true,

    }
];
for (let i = 0; i < libros.length; i++) {
    console.log(libros[i].titulo);
    console.log(libros[i].autor);
    if (libros[i].leido) {
        console.log('Ya leiste este libro');

        
    }else{
        console.log('No has leido este libro');
    }

    
}

