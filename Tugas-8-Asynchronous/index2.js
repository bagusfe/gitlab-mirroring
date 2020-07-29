var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

function readBooks() {
    readbooksPromise
        .then(function(fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
            // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function(error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
}

readBooks();