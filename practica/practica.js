

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

const bajaVideo = (url, callback) => {
    console.log(`Bajando video de ${url}`);
    setTimeout(() => {
        console.log(`Video de ${url} descargado`);
        callback(url)
    }, 2000);
};

const procesaVideo = (url) => {
    console.log(`Procesando video de ${url}`);
};

let url = `google.com` 

bajaVideo(url, procesaVideo);
// procesaVideo(url);

