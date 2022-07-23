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

var stats = [
    [1,2,3],
    [-1],
    [10,20,30,40,50],
    [-5,-7],
    [15,17,19]
]

// a. hitung jumlah semua angka
var jumlah = 0;
for (var i = 0; i < stats.length; i++) {
    for (var j = 0; j < stats[i].length; j++) {
        jumlah = jumlah + stats [i][j]
    }
}
// console.log(jumlah);
// b. hitung angka yang mengandung belasan
var jumlahBelasan = 0;
for (var i = 0; i < stats.length; i++){
    for(var j=0; j < stats[i].length; j++){
        if (stats[i][j] < 20 && stats [i][j] >=11){
            jumlahBelasan = jumlahBelasan + stats[i][j]
        }
    }
}
// console.log(jumlahBelasan);

//  c. kelompokan angka yang minus
var arrayMint = []
for (var i =0; i < stats.length; i++) {
    for (var j = 0; j < stats[i].length; j++) {
        if(stats [i][j] < 0) {
            arrayMint.push(stats[i][j]);
        }
    }
}
console.log(arrayMint);

