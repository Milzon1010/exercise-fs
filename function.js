// function hello ();
//     console.log("hello, selamat pagi");

// // invoke the function
// hello();

// bikin ganjil genap

// function checkAngka (number) {
//     if (number % 2 === 0) {
//         console.log("Genap");
//     } else {
//         console.log ("Ganjil");
//     }
// }
// checkAngka (1029);

// function splitToArray (str) {
//     var tempArray = str.split (" ");
//     return tempArray;
// }

// function jumlahKata (kalimat) {
//     var result = splitToArray (kalimat);
//     var arrayLength = result.length;
//     return arrayLength;
// }
// console.log(jumlahKata("Hello selamat pagi"));

// study case 1
// cari faktor sebuah bilangan

function findFactors(num){
    console.log("Factor dari " + num + " :")
    for(var i = 1; i <= num; i++) {
        if (num % i === 0){
            console.log(i)
        }
    }
}
// findFactors(7)
// findFactors(1020)
// findFactors(9)

// study case 2
//  check apakah bilangan prima atau bukan
//  bilangan prima adalah bilangan yang hanya memiliki 2 faktor
//  buat 2 functions : function countFactors dan checkPrime

function countFactors(num){
    var tempFactors = [];
    for(var i = 1; i <= num; i++) {
        if (num % i === 0){
            tempFactors.push(i);
        }
    }
    return tempFactors.length
}

function checkPrime(x) {
    var jumlahFaktor = countFactors (x)

    if(jumlahFaktor === 2){
        console.log(x + "Adalah Prima")
    } else {
        console.log(x + "Adalah Bukan Prima")
    }
}

// checkPrime(2);
// checkPrime(13);
// checkPrime(122);

// Study Case 3
// BUat segitiga '#' dan 'X'

function triangle(n) {
    var temp = ""
    for (var i = 0; i < n; i++) {
        // if (i % 2 === 0) {
        //     for (var j = 0; j <= i; j++) {
        //         temp += "#"
        //     }
        //     console.log(temp)
        //     temp = ""
        // } else {
        //     for (var k = 0; k <= i; k++) {
        //         temp += "X"
        //     }
        //     console.log(temp)
        //     temp = ""
        // }
        for (var j = 0; j <= i; j++) {
            if (j % 2 === 0) {
                temp += '#'
            } else {
                temp += 'X'
            }
        }
        console.log(temp)
        temp = ""

    }
}

// triangle(5)

// Study Case 4
// Buat kotak kosong

function square(angka) {
    if (angka % 2 !== 0) {
        var temp = ""
        for (var i = 0; i < angka; i++) {
            if (i === 0 || i === angka - 1) {
                for (var j = 0; j < angka; j++) {
                    temp += '#'
                }
                console.log(temp)
                temp = ""
            } else {
                for (var j = 0; j < angka; j++) {
                    if (j === 0 || j === angka - 1) {
                        temp += "#"
                    } else {
                        temp += ' '
                    }
                }
                console.log(temp)
                temp = ""
            }
        }
    } else {
        console.log("Harus Ganjil")
    }
}

// square(5)
// square(4)

// Study Case 5
// Buat kotak kosong, tetapi ada tengahnya
/**
var num = 5;
#####
@   @
@ $ @
@   @
#####
 */

function square(angka) {
    if (angka % 2 !== 0) {
        var temp = ""
        for (var i = 0; i < angka; i++) {
            if (i === 0 || i === angka - 1) {
                for (var j = 0; j < angka; j++) {
                    temp += '#'
                }
                console.log(temp)
                temp = ""
            } else {
                for (var j = 0; j < angka; j++) {
                    if (j === 0 || j === angka - 1) {
                        temp += "@"
                    } else {
                        if(i === Math.floor(angka / 2) && j === 
                        Math.floor((angka / 2))){
                            temp += '$'
                        } else
                            temp += ' '
                    }
                }
                console.log(temp)
                temp = ""
            }
        }
    } else {
        console.log("Harus Ganjil")
    }
}
square(5)