
//Esto sirve para traerte todo lo de la url sin formato:

// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// let url = `https://rickandmortyapi.com/api/character/`;

// const api = new XMLHttpRequest();
// api.open('GET', url, true);
// api.onreadystatechange = function() {
//     if( this.status == 200 && this.readyState == 4) {
//         console.log(this.responseText);
//     }
// };
// api.send();


//Esto sirve para traertelo en un formato JSON, mucho mas facil de leer

//  let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//  let url = `https://rickandmortyapi.com/api/character/`;

//  const api = new XMLHttpRequest();
//  api.open('GET', url, true);
//  api.onreadystatechange = function() {
//      if( this.status == 200 && this.readyState == 4) {
//          let datos = JSON.parse(this.responseText);
//          console.log(datos);
//      }
//  };
//  api.send();


 //Para escoger dentro del JSON se puede hacer de la siguiente manera

//  let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//  let url = `https://rickandmortyapi.com/api/character/`;

// const api = new XMLHttpRequest();
// api.open('GET', url, true);
// api.onreadystatechange = function() {
//     if( this.status == 200 && this.readyState == 4) {
//         let datos = JSON.parse(this.responseText);
//         let i = 0;
//         for (let x of datos.results) {
//             i++;
//             console.log(x.id);
//             console.log(x.name);
//             console.log(x.species);

//             if (i >= 10) {
//                 break
//             }
//         }
//     }
// };
// api.send();



//Intento de ponerlo en funciones para utilizar los callbacks

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let url_api = `https://rickandmortyapi.com/api/character/`;

const funcion = (url, callback) => {
   const api = new XMLHttpRequest();
   api.open('GET', url, true);
   api.onreadystatechange = function() {
       if( this.status == 200 && this.readyState == 4) {
           let datos = JSON.parse(this.responseText);
           let i = 0;
           for (let x of datos.results) {
               i++;
               console.log(x.id);
               console.log(x.name);
               console.log(x.species);

               if (i >= 10) {
                   break
               }
           }
       }
   };
   api.send();
};


funcion(url_api);

