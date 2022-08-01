

//callback sincrono:

// const generaNumero = () => {
//     return Math.floor(Math.random() * 10);
// };


// const imprimeNum = (callback) => {
//     let numero = callback();
//     console.log(numero);
// };

// imprimeNum(generaNumero);



//callbacks asincronos: se ejecuta solamente cuando algo pasa, no son bloqueadoras

// const bajaVideo = (url, callback) => {
//     console.log(`Bajando video de ${url}`);
//     setTimeout(() => {
//         console.log(`Video de ${url} descargado`);
//         callback(url)
//     }, 2000);
// };

// const procesaVideo = (url) => {
//     console.log(`Procesando video de ${url}`);
// };

// let url = `google.com` 

// bajaVideo(url, procesaVideo);
// procesaVideo(url);

//promises son objetos que representan el resultado eventual de una operacion asincrona
//puede tener 3 estados:
// pending (pendiente de cumplirse o no), resolve (se cumplió) y reject (no se cumplió)

// let teHasPortadoBien = false;

// const siMePortoBien = new Promise ((resolve, reject) => {
//     if (teHasPortadoBien) {
//         const telefono = {
//             modelo: `Iphone 12`,
//             capacidad: `128Gb`,
//             color: `rojo`
//         }
//         resolve(telefono);
//     } else {
//         reject(`Te has portado mal`);
//     }
// });

// const promesaCumplida = (resolvedValue) => {
//     console.log(`Te regalo tu nuevo ${resolvedValue.modelo}`);
// };

// const promesaRota = (rejectedValue) => {
//     console.log(`No te compro nada porque ${rejectedValue}`);
// };

// // siMePortoBien.then(promesaCumplida, promesaRota); //poco intuitiva

// const pideRegalo = () => {
//     siMePortoBien
//         .then(promesaCumplida)
//         .catch(promesaRota)
// };

// pideRegalo();

//chaining promises

// let comportamiento = true;
// let teHasPortadoBien = false;

// const chequeaComportamiento = (comportamiento) => {
//     return new Promise ((resolve, reject) => {
        // if (teHasPortadoBien) {
        //     const telefono = {
        //         modelo: `Iphone 12`,
        //         capacidad: `128Gb`,
        //         color: `rojo`
        //     }
        //     resolve(telefono);
        // } else {
        //     reject(`Te has portado mal`);
//         }
//     });
// };

// const grabaVideo = (telefono) => {
//     const mensaje = `Grabo video para tiktok con mi ${telefono.modelo}`;
//     return Promise.resolve(mensaje);
// };


// chequeaComportamiento(comportamiento)
//     .then((resolvedValue) => {
//         return grabaVideo(resolvedValue);
//     })
//     .then((resolvedValue) => {
//         console.log(resolvedValue);
//     })
//     .catch((errorMessage) => { 
//         console.log(errorMessage)
//     })

//promise all --> para cuando te da igual el orden. Toma como argumento un array de promesas y retorna una sola promesa
// si hay una promesa que no se cumple, Promise.all rechaza con la razón específica
//si todas las promesas se cumplen, Promise.all se resuelve con un array que contiene los valores especificados en resolve de cada promesa

// const chequeaComportamiento = (comportamiento) => {
//     return new Promise ((resolve, reject) => {
//         if (comportamiento) {
//             const telefono = {
//                 modelo: `Iphone 12`,
//                 capacidad: `128Gb`,
//                 color: `rojo`
//             }
//             resolve(telefono);
//         } else {
//             reject(`Te has portado mal`);
//         }
//     });
// };

// const chequeaCalificacion = (calificacion) => {
//     return new Promise ((resolve, reject) => {
//         if (calificacion > 85) {
//             resolve(`Buen trabajo`);
//         }else {
//             reject(`Tienes que estudiar mejor`);
//         }
//     });
// };

// const mePorteBien = chequeaComportamiento(true);
// const estudieBien = chequeaCalificacion(89);

// const promesas = [mePorteBien, estudieBien];

// Promise.all(promesas)
//     .then((values) => {
//         console.log(values)
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//async await --> sirve para trabajar más facil con promises

const chequeaComportamiento = (comportamiento) => {
    return new Promise ((resolve, reject) => {
        if (comportamiento) {
            const telefono = {
                modelo: `Iphone 12`,
                capacidad: `128Gb`,
                color: `rojo`
            }
            resolve(telefono);
        } else {
            reject(`Te has portado mal`);
        }
    });
};

const chequeaCalificacion = (calificacion) => {
    return new Promise ((resolve, reject) => {
        if (calificacion > 85) {
            resolve(`Buen trabajo`);
        }else {
            reject(`Tienes que estudiar mejor`);
        }
    });
};

const pideTelefonoNuevo = async (comportamiento, calificacion) => {
    try {
        const promesas = await Promise.all([chequeaComportamiento(comportamiento), chequeaCalificacion(calificacion)]);
        console.log(promesas);
    } catch (error) {
        console.log(error);
    }
};

pideTelefonoNuevo(true, 100);