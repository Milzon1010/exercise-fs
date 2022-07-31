// kumpulan array tapi lebih sakti
// mirip larik/array tapi memiliki kunci/key untuk acces nilainya
// array pakai "[]"
// object pakai "{}"

var caca = {
    // key
    name: "caca",
    weight: 45,
    height: 155,
    "able to code": "yes",
    100: 1,
    hobbies: ["nonton", "makan"],
    profile: {
        age: 19,
        address: {
            city: "bandung",
            province: "west java"
        }
    },
    // method
    mentionHobbies: function () {
        console.log("Hobby " + this.name)
        for (var i = 0; i < this.hobbies.length; i++) {
            console.log(i + 1 + ". " + this.hobbies[i])
        }
    },
    addHobby: function (hobi) {
        this.hobbies.push(hobi)
    }
}
// debugging : cek error, cek bug, belajar flow
// console.log(caca["100"])
// console.log(caca.profile.address)
caca.addHobby("coding")
caca.mentionHobbies()









