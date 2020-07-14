
// const p = Promise.resolve({id: 1});
// p.then(result => console.log(result));


// const r = Promise.reject(new Error('why'));
// r.catch(error => console.log(error));

const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Calling Facebook Api...');
        resolve(1);
        //reject(new Error('failed'));
    }, 2000);

});

const p2 = new Promise ((resolve) => {
    setTimeout(() => {
        console.log('Calling Twitter Api...');
        resolve(2);
    }, 2000);

});

Promise.race([p1, p2])
.then(result => console.log(result))
.catch(error => console.log(error));