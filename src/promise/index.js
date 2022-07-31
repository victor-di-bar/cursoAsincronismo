const somethinWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('whooooops');
        }
    });
};

somethinWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whooop!');
            reject(error);
        }
    });
};


somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethinWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of Results', response);
    })
    .catch(err => {
        console.error(err);
    })


    