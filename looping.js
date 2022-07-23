// var i = 0
// while (i<6){
//     console.log("Hello world");
//     i++;
// }

// // for
// for (var i = 1; i <= 10; i++){
//     console.log(i)
// }

// // while
// var i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

/**
 * study case 1
 *
 * tampilkan bilangan ganjil dan genap
 *
 * var num = 5
 *
 * Result :
 * 1 adalah ganjil
 * 2 adalah genap
 * 3 adalah ganjil
 * 4 adalah genap
 * 5 adalah ganjil
 *
 * */

// var num = 5;
// for (var i = 1 ; i <= num; i++){
//     if(i % 2 === 0){
//         console.log(i + " adalah genap")
//     } else {
//         console.log(i + " adalah ganjil")
//     }
// }

/**
 * study case 2
 *
 * ubah huruf menjadi besar dan kecil
 *
 * var str = sarapan
 *
 * Result :
 * SaRaPaN
 *
 *
 * 1. temukan looping dari kata sarapan 
 * 2. temukan ganjil dan genap
 * 3. buat penampang temp untuk print out ke kanan bukan kebawah
 * 
 * */

// var str = "sarapan"
// var temp = ""

// for (var i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     temp = temp + str[i].toUpperCase();
//     // console.log(str[i].toUpperCase())
//   } else {
//     temp = temp + str[i];
//     // console.log(str[i])
//   }
// }
// console.log(temp);

/**
 * Study Case 3
 * 
 * Buat kotak persegi
 * 
 * var num = 3
 * 
 * Result :
 * 
 * ###
 * ###
 * ###
 * */ 

// var num = 5;
// var temp = "";
// for (var i = 0; i < num; i++){
//     for (var j = 0; j< num; j++){
//         temp += "#"
//     }
//     console.log(temp)
//     temp = ""
// }

/**
 * Study Case 4
 * 
 * Buat segitiga
 * 
 * var num = 5
 * 
 * Result :
 * 
 * #
 * ##
 * ###
 * ####
 * #####
 * 
 * */ 

// var num = 5;
// var temp = '';
// var chara = "A"

// for(var i = 0; i < num; i++){
//     for (var j = 0; j <= i; j++){
//         temp += chara
//     }
//     console.log(temp)
//     temp = ""
// }

/**
 * Study Case 5
 * 
 * Buat segitiga angka
 * 
 * var num = 5
 * 
 * Result : 
 * 
 * 1
 * 12
 * 123
 * 1234
 * 12345
 * 
 * 
 * */ 

var num = 5;
var temp = "#"

for(var i = 0; i < num; i++){
    for(var j = 0; j <= i; j++){
        temp +=(j + 1)
    }
    console.log(temp)
    temp = ""
}