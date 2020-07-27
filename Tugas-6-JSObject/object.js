console.log("----- SOAL 1 -----");

function arrayToObject(arr) {

    for (let i = 0; i < arr.length; i++) {
        let object = {};
        var now = new Date()
        var thisYear = now.getFullYear()
        for (let j = 0; j < arr[i].length + 1; j++) {
            if (j === 0) {
                console.log(i + 1 + '. ' + arr[i][j] + ' ' + arr[i][j + 1] + ':');
                object.firstName = arr[i][j];
            } else if (j === 1) {
                object.lastName = arr[i][j];
            } else if (j === 2) {
                object.gender = arr[i][j];
            } else if (j === 3) {
                if (arr[i][j] !== undefined && arr[i][j] <= thisYear) {
                    object.age = 2020 - arr[i][j];
                } else if (arr[i][j] !== thisYear || arr[i][j] > thisYear) {
                    object.age = 'Invalid Birth Year';
                }
            }
        }
        console.log(object);
    }
}

// Driver Code
var people = [
    ["Bruce", "Banner", "male", 1975],
    ["Natasha", "Romanoff", "female"]
]
arrayToObject(people)
    /*
        1. Bruce Banner: { 
            firstName: "Bruce",
            lastName: "Banner",
            gender: "male",
            age: 45
        }
        2. Natasha Romanoff: { 
            firstName: "Natasha",
            lastName: "Romanoff",
            gender: "female".
            age: "Invalid Birth Year"
        }
    */

var people2 = [
    ["Tony", "Stark", "male", 1980],
    ["Pepper", "Pots", "female", 2023]
]
arrayToObject(people2)
    /*
        1. Tony Stark: { 
            firstName: "Tony",
            lastName: "Stark",
            gender: "male",
            age: 40
        }
        2. Pepper Pots: { 
            firstName: "Pepper",
            lastName: "Pots",
            gender: "female".
            age: "Invalid Birth Year"
        }
    */

// Error case 
arrayToObject([]) // ""



console.log("----- SOAL 2 -----");
// Constructur Object
function makeObj(memberID, money) {
    this.memberID = memberID;
    this.money = money;
    this.listPurchased = [];
    this.changeMoney = 0;
}

function shoppingTime(memberId, money) {
    if (memberId === '' || (memberId === undefined && money === undefined)) {
        return "Mohon Maaf, toko X hanya berlaku untuk member saja";
    } else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    } else {
        shoppingObj = new makeObj(memberId, money);
        shoppingObj.memberID = memberId;
        shoppingObj.money = money;
        var canPurchase = true;
        while (money > 0 && canPurchase) {
            if (money >= 1500000) {
                shoppingObj.listPurchased.push('Sepatu Stacattu');
                money -= 1500000;
                canPurchase = true;
            }
            if (money >= 500000) {
                shoppingObj.listPurchased.push('Baju Zoro');
                money -= 500000;
                canPurchase = true;
            }
            if (money >= 250000) {
                shoppingObj.listPurchased.push('Baju H&N');
                money -= 250000;
                canPurchase = true;
            }
            if (money >= 175000) {
                shoppingObj.listPurchased.push('Sweater Uniklohh');
                money -= 175000;
                canPurchase = true;
            }
            if (money >= 50000) {
                shoppingObj.listPurchased.push('Casing Handphone');
                money -= 50000;
                canPurchase = true;
            }
            canPurchase = false;
        }
        shoppingObj.changeMoney = money;
        return shoppingObj;

    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


console.log("----- SOAL 3 -----");

function naikAngkot(arrPenumpang) {
    // jalur rute angkot 
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    // Menampung Object 
    var angkot = [{}, {}];
    var asal = '';
    var tujuan = '';
    for (var i = 0; i < arrPenumpang.length; i++) {
        for (var j = 0; j < arrPenumpang[i].length; j++) {
            switch (j) {
                case 0:
                    {
                        angkot[i].penumpang = arrPenumpang[i][j];
                        break;
                    }
                case 1:
                    {
                        angkot[i].naikDari = arrPenumpang[i][j];
                        angkot[i].tujuan = arrPenumpang[i][j + 1];
                        break;
                    }
                case 2:
                    {
                        asal = arrPenumpang[i][j - 1];
                        tujuan = arrPenumpang[i][j];
                        var jarak = 0;
                        for (var k = 0; k < rute.length; k++) {
                            if (rute[k] === asal) {
                                for (var l = k + 1; l < rute.length; l++) {
                                    jarak += 1;
                                    if (rute[l] === tujuan) {
                                        var bayar = jarak * 2000;
                                        angkot[i].bayar = bayar;
                                    }
                                }
                            }
                        }
                        break;
                    }
            }
        }
    }
    return angkot;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]