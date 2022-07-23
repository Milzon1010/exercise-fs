// console.log("hello world");

// CONDITIONAL

var number = 15;

if(number === 10){
    console.log("Angka 10");
} else if(number === 12){
    console.log("Angka 12");
} else {
    console.log("Angka Bukan 10 dan 12")
}

// terdapat dua minuman kopi dan teh, selain itu tidak ada

// var beverages = "cenDol"
// // .toLowerCase => membuat jadi huruf kecil

// switch(beverages.toLowerCase()){
//     case 'kopi' :
//         console.log('kamu pilih kopi')
//         break;
//     case 'teh' :
//         console.log('kamu pilih teh')
//         break;
//     default:
//         console.log('Minuman tidak tersedia oke, trims.')
// }

// test pakai if belum berhasil nih

// var minuman = "kopi"

// if(minuman === kopi){
//     console.log("kamu pilih kopi")
// } else if (minuman === teh){
//     console.log("kamu pilih teh");
// } else {
//     console.log("kamu pilih bukan kopi dan teh")
// }

/**
 * Study Case 1
 *
 * Grade Nilai
 *
 * Jika nilai di antara 100 dan 85, maka grade A
 * Jika nilai di antara 84 dan 70, maka grade B
 * Jika nilai di antara 69 dan 50, maka grade C,
 * Jika nilai di antara 49 dan 30, maka grade D,
 * Jika nilai di antara 29 dan 0, maka grade E
 *
 * Buatlah codingan untuk menyelesaikan soal di atas.
 */

//  var score = 25;

//  if(score <= 100 && score >= 85){
//      console.log("Grade A")
//  } else if(score < 85 && score >= 70){
//      console.log("Grade B")
//  } else if(score <70 && score >= 50){
//      console.log("Grade C")
//  } else if(score < 50 && score >= 30){
//      console.log("Grade D")
//  } else if (score <30 && score >= 0){
//      console.log("Grade E")
//  } else {
//      console.log("Masukkan nilai antara 0 - 100")
//  }

// study case 2
// check bilangan ganjil dan genap

// ganjil adalah bilangan yang tidak habis dibagi 2
// gendap adalah bilangan yang habis dibagi 2

// var number = 2;
// // modulus % => sisa bagi

// if(number %2 === 0){
//     console.log(number + " bilangan Genap")
// } else if (number %2 === 1){
//     console.log(number + "Bilangan Ganjil")
// }

/**
 * Vending maching memberikan minuman input string
 *
 * Jika minuman kosong, maka tampilkan "Input minuman"
 * Jika minuman diinput "Sweet Tea" , maka tampilkan "You choose Sweet Tea, thanks"
 * Jika minuman diinput "Plain Tea" , maka tampilkan "You choose Plain Tea, thanks"
 * Jika minuman diinput "Boba" , maka tampilkan "You choose Boba, thanks"
 * Jika minuman diinput "Milk Coffee" , maka tampilkan "You choose Milk Coffee, thanks"
 * Jika minuman diinput "Choco Ice" , maka tampilkan "You choose Choco Ice, thanks"
 * Jika minuman diinput salah, tampilkan "minuman is not defined"
 */

// var minuman = "Boba";

// switch (minuman) {
//   case "Sweet Tea":
//     console.log("You choose Sweet Tea, thanks");
//     break;
//   case "Plain Tea":
//     console.log("You choose Plain Tea, thanks");
//     break;
//   case "Boba":
//     console.log("You choose Boba, thanks");
//     break;
//   case "Milk Coffee":
//     console.log("You choose Milk Coffee, thanks");
//     break;
//   case "Choco Ice":
//     console.log("You choose Choco Ice, thanks");
//     break;
//   default:
//     if (minuman === ""){
//         console.log("input minuman")
//     } else {
//         console.log("minuman is undefined");
//     }
//     break;
// }

/**
 * Study Case 3 - Nested Conditional
 *
 * Pilihan Coupon Code untuk Cash back e-commerce
 *
 * a. FreeOngkir
 * Jika pembelian lebih dari atau sama dengan 50.000, ada potongan 10%
 * Jika pembelian antara 30.000 dan 50.000, ada potongan 5%
 * Jika pembelian kurang dari 30.000, ada potongan 2.5%
 *
 * b. Free15%
 * Jika pembelian lebih dari atau sama dengan 30.000, ada potongan 15%
 * Jika pembelian kurang dari 30.000, ada potonga 0%
 *
 */

// let price = 35000;
// let coupon = "FreeOngkir";
// let total;

// switch (coupon) {
//   case "FreeOngkir":
//     if (price >= 50000) {
//       total = price - price * 0.15;
//     } else if (price >= 30000 && price <= 50000) {
//       total = price - price * 0.05;
//     } else {
//       total = price - price * 0.025;
//     }
//     break;
//   case "Free15%":
//     if (price >= 30000) {
//       total = price - price * 0.15;
//     } else {
//       total = price;
//     }
//     break;
//   default:
//     console.log("Coupon is not available!");
//     break;
// }
// console.log("Total yang dibayar adalah Rp. " + total);

// var pembelian = 45000;
// var coupon = "Free15%";

// switch (coupon) {
//     case 'FreeOngkir':
//         if (pembelian >= 50000) {
//             var total = pembelian * 0.9
//             console.log("Total pembelian anda Rp " + total)
//         } else if (pembelian >= 30000 && pembelian < 50000) {
//             var total = pembelian * 0.95
//             console.log("Total pembelian anda Rp " + total)
//         } else {
//             var total = pembelian * 0.975
//             console.log("Total pembelian anda Rp " + total)
//         }
//         break;
//     case 'Free15%':
//         if (pembelian >= 30000) {
//             var total = pembelian * 0.85
//             console.log("Total pembelian anda Rp " + total)
//         } else {
//             var total = pembelian * 1
//             console.log("Total pembelian anda Rp " + total)
//             break;
//         }
// }