// di index.js
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

books.forEach(book => readBooks(10000, book, (callbackFn) => {
    console.log(callbackFn)
}))



// Books adalah array of objects. Kita bisa iterate array tersebut menggunakan map/forEach. Map akan me-return sebuah array baru, kita tidak butuh array baru, makanya kita hanya perlu menggunakan forEach.

// Intinya, code tersebut:
// 1. forEach akan iterate semua element di dalam array.
// 2. Di setiap element, kita akan panggil Fn readBooks.
// 3. Parameter pertama kita masukan waktu, di case saya saya masukan 10s. Kedua, kita masukan element yang sedang aktif. Ketiga saya membuat callbackFn yang berfungsi untuk console.log.