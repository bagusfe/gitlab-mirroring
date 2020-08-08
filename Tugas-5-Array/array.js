function range(a = -1, b = -1) {
    if (a === -1 || b === -1) {
        return -1;
    }
    // Mengurutkan secara Ascending
    else if (a < b) {
        var arr = [];
        for (var i = a; i <= b; i++) {
            arr.push(i);
        }
        return arr;
    }
    // Mengurutkan secara Descending
    else if (a > b) {
        var arr = [];
        for (var i = a; i >= b; i--) {
            arr.push(i);
        }
        return arr;
    }
}

console.log("SOAL 1")
console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)); // -1
console.log(range(11, 18)); // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)); // [54, 53, 52, 51, 50]
console.log(range()); // -1 





console.log("SOAL 2")

function rangeWithStep(a = -1, b = -1, c) {
    // Mengurutkan secara Ascending
    if (a < b) {
        var arr = [];
        for (var i = a; i <= b; i += c) {
            arr.push(i);
        }
        return arr;
    }
    // Mengurutkan secara Descending
    else if (a > b) {
        var arr = [];
        for (var i = a; i >= b; i -= c) {
            arr.push(i);
        }
        return arr;
    }
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]





function sum(a, b, c) {
    if (a === undefined && b === undefined && c === undefined) {
        return 0;
    } else if (b === undefined && c === undefined) {
        return a;
    } else if (c === undefined) {
        c = 1
    }

    let arr = rangeWithStep(a, b, c);

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        // console.log()
    }

    return sum;
}

console.log("SOAL 3");
console.log(sum(1, 10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15, 10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 



console.log("Soal 4");
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function datahandling(input) {
    for (var i = 0; i < input.length; i++) {
        console.log("No ID " + "\t\t:" + input[i][0]);
        console.log("Nama Lengkap " + "\t:" + input[i][1]);
        console.log("TTL " + "\t\t:" + input[i][2] + ", " + input[i][3]);
        console.log("Hobi " + "\t\t:" + input[i][4]);
        console.log();
    }
}

datahandling(input);



console.log("Soal 5");

function balikKata(string) {
    var word = [];
    for (var i = string.length; i >= 0; i--) {
        var kata = string.charAt(i);
        word.push(kata);
    }
    x = word.toString().replace(/,/g, "");
    return x;
}
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I



console.log("Soal 6");

function dataHandling2(input) {
    // Output 1
    var newArr = input.slice(0, 1)
    newArr.push("Roman Alamsyah Elsharawy")
    newArr.push("Provinsi " + input[2])
    newArr.push(input[3], "Pria", "SMA Internasional Metro")
    console.log(newArr)

    // Output 2
    var bulan = input[3].split("/");
    bulanke = bulan[1];
    var namabulan;
    switch (bulanke) {
        case "01":
            namabulan = 'Januari';
            console.log(namabulan)
            break;
        case "02":
            namabulan = 'Februari';
            console.log(namabulan)
            break;
        case "03":
            namabulan = 'Maret';
            console.log(namabulan)
            break;
        case "04":
            namabulan = 'April';
            console.log(namabulan)
            break;
        case "05":
            namabulan = 'Mei';
            console.log(namabulan)
            break;
        case "06":
            namabulan = 'Juni';
            console.log(namabulan)
            break;
        case "07":
            namabulan = 'Juli';
            console.log(namabulan)
            break;
        case "08":
            namabulan = 'Agustus';
            console.log(namabulan)
            break;
        case "09":
            namabulan = 'September';
            console.log(namabulan)
            break;
        case "10":
            namabulan = 'Oktober';
            console.log(namabulan)
            break;
        case "11":
            namabulan = 'November';
            console.log(namabulan)
            break;
        case "12":
            namabulan = 'Desember';
            console.log(namabulan)
            break;
    }

    //Output 3 
    var dateDesc = newArr[3].split("/").sort((a, b) => b - a)
    console.log(dateDesc)
        //Output 4 
    var dateSplit = newArr[3].split("/").join("-")
    console.log(dateSplit)
        //Output 5 
    var nameSlice = newArr[1].split("").slice(0, 15).join("")
    console.log(nameSlice)
}



var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */


function myApp() {
    var total = 5;
    var output = '';
    for (var i = 1; i <= total; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + ' ';
        }
        console.log(output);
        output = '';

    }
}

myApp();