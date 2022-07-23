// var scores = [100,50,75,70,35];

// for (i = 0; i < scores.length ; i++) {
//     console.log(scores [i]);
// }

// case 1 hitung jumlah total dari scores
// var total = 0;
// for (var i = 0; i < scores.length; i++) {
//   total += scores[i];
// }
// console.log(total);

// study case 2 : hitung rata rata dari score diatas

// for (var i = 0; i < scores.length ; i++) {
//     var avg = (scores[i] / scores.length) * scores.length
// }
// console.log(avg)

// var mean = total /scores.length;
// console.log(mean);

// var stats = [
//     [1,2,3],
//     [-1],
//     [10,20,30,40,50],
//     [-5,-7],
//     [15,17,19]
// ]

// // a. hitung jumlah semua angka
// var jumlah = 0;
// for (var i = 0; i < stats.length; i++) {
//     for (var j = 0; j < stats[i].length; j++) {
//         jumlah = jumlah + stats [i][j]
//     }
// }
// console.log(jumlah);
// b. hitung angka yang mengandung belasan
// var jumlahBelasan = 0;
// for (var i = 0; i < stats.length; i++){
//     for(var j=0; j < stats[i].length; j++){
//         if (stats[i][j] < 20 && stats [i][j] >=11){
//             jumlahBelasan = jumlahBelasan + stats[i][j]
//         }
//     }
// }
// // console.log(jumlahBelasan);

// //  c. kelompokan angka yang minus
// var arrayMint = []
// for (var i =0; i < stats.length; i++) {
//     for (var j = 0; j < stats[i].length; j++) {
//         if(stats [i][j] < 0) {
//             arrayMint.push(stats[i][j]);
//         }
//     }
// }
// // console.log(arrayMint);

// var murid = [
//     [1, "Vincent", 3.5],
//     [2, "Udin", 3.0],
//     [3, "mamang", 2.1]
// ]

// for (var i=0; i< murid.length; i++) {
//     if (murid[i][2] >= 3.0) {
//         console.log(murid[i][0] + ". " + murid[i][1] + "lulus")
//     } else {
//         console.log(murid[i][0]) + ". " + murid [i][1] + "lulus"
//     }
// }

/**
 * Latihan 1
 * 
 * A punya koleksi arloji yang dia banggakan, 
 * dan teman-teman nya ingin bertanya koleksi arloji 
 * apa saja yang dia punya
 * 
 * let watches = ["Swiss Army","Daniel Wellington","Dublot"]
// Hasil yang di harapkan : Saya punya Swiss Army, Daniel Wellington, dan
Dublot.

Hasil harus sama persis seperti yang di contohkan, dimana :
1. Result di print dalam 1 string
2. Tanda ',' (koma) dan '.' (titik) harus sesuai
 * 

let arloji = ['A', 'B', 'C', 'D','E']
// Hasil yang di harapkan : Saya punya A, B, C, D, dan E.


 * */ 

let watches = ["Swiss Army","Daniel Wellington","Dublot"]
let koleksi = 0;


for (let i = 0; i < watches.length; i++) {
    if (watches[i] !== ' ') {
        koleksi = 
    } else { 
        console.log("saya punya " + koleksi)
        koleksi = ''
    }
    if (i === watches.length - 1) {
        console.log("saya punya " + koleksi);
    }
}

/**
 * Latihan 2
 * 
 * Mengelompokkan sebuah array menjadi per alfabeth
 * 
 * Diberikan sebuah array 1 dimensi fruits sebagaiberikut:
 let fruits = ["cherry","blueberry","avocado","apple","cranberry"]
 * 
 // Result
 [
 ["avocado","apple"],
 ["blueberry"],
 ["cherry","cranberry"]
]
 * 
 * */ 

let fruits = ["cherry","blueberry","avocado","apple","cranberry"]
