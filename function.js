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

checkPrime(2);
checkPrime(13);
checkPrime(122);
