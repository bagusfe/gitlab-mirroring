console.log("Soal 1");

function balikString(string) {
    var word = [];
    for (var i = string.length; i >= 0; i--) {
        var kata = string.charAt(i);
        word.push(kata);
    }
    x = word.toString().replace(/,/g, "");
    return x;
}
console.log(balikString("abcde")) // edcba
console.log(balikString("rusak")) // kasur
console.log(balikString("racecar")) // racecar
console.log(balikString("haji")) // ijah


console.log();
console.log("Soal 2");

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    // Perulangan Check
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("kasur rusak")) // true
console.log(palindrome("haji ijah")) // true
console.log(palindrome("nabasan")) // false
console.log(palindrome("nababan")) // true
console.log(palindrome("jakarta")) // false

console.log();
console.log("Soal 3");

function bandingkan(a, b) {
    if (a < b && a > 0) {
        return b;
    } else if (a == b) {
        return -1;
    } else if (a == undefined && b == undefined) {
        return -1;
    } else if (a < 0 && b > 0) {
        return -1;
    } else {
        return 1;
    }

}

console.log(bandingkan(10, 15)); // 15
console.log(bandingkan(12, 12)); // -1
console.log(bandingkan(-1, 10)); // -1 
console.log(bandingkan(112, 121)); // 121
console.log(bandingkan(1)); // 1
console.log(bandingkan()); // -1
console.log(bandingkan("15", "18")) // 18


console.log();
console.log("Soal 4");

function DescendingTen(Int) {
    // Mengurutkan secara Descending
    if (Int == 10 || Int == 100) {
        var arr = [];
        for (i = Int - 9; i <= Int; i++) {
            arr.push(i);
            arr.sort(function(a, b) { return b - a });
            var number = arr.toString(" ").replace(/,/g, " ");
        }

        return number;
    } else if (Int == undefined) {
        return -1;
    }
}

console.log(DescendingTen(100)) // 100 99 98 97 96 95 94 93 92 91
console.log(DescendingTen(10)) // 10 9 8 7 6 5 4 3 2 1
console.log(DescendingTen()) // -1