// var w = [0, 1, 2, 3, 4, 5]

// var x = w.filter((a) => a !== 2)

// var a = ['Andi', 'Seto', 'Seno']

// var filterNama = a.filter(function (val) {
//     return a.includes('S')
// })

// // or 

// var newArr = []
// for (var i = 0; i < w.length; i++) {
//     if (w[i] !== 2) {
//         newArr.push(w[i])
//     }
// }
// console.log(x)
// console.log(filterNama())

// var w = [1, 4, 9, 16, 25]
// var x = w.map(Math.sqrt);
// var y = w.map((val) => val * 2);
// var z = w.map((val) => val !== 9);
// console.log(x);
// console.log(y);
// console.log(z);

// var orang = [{
//     nama: "Andi",
//     marga: "Hasibuan"
// }, {
//     nama: "Budi",
//     marga: "Sinaga"
// }, {
//     nama: "Caca",
//     marga: "Pasaribu"
// }];

// function namaLengkap(item, index) {
//     var fullname = [item.nama, item.marga].join(" ");
//     return fullname;
// }

// or 
// var a = orang.map(function (item, index) {
//     var fullname = [item.nama, item.marga].join(" ")
//     return fullname
// })

// console.log(a)

// function tesMap() {
//     console.log(orang.map(namaLengkap));
//     console.log(orang.map(namaLengkap)[0]);
//     console.log(orang.map(namaLengkap)[1]);
//     console.log(orang.map(namaLengkap)[2]);
// }
// tesMap()

// let merk = 'Yamaha';
// let tahun = 2015;
// let mio = {
//     merk: merk,
//     prod: tahun
// }
// let vixion = {
//     merk,
//     tahun
// }
// console.log(mio);
// console.log(vixion);

let nama = new Set();

nama.add('Adi').add('Budi').add('Adi');
console.log(nama);
console.log(nama.size);

// step github :
// ketik git init (cuma sekali setelah buat, kalau modifikasi tidak perlu ketik lagi)
// ketik git add .
// ketik git commit -m "isi commit"
// ketik git remote add origin https://....isi
// ketik git push origin master

// kalau kolaborasi 
// ketik git clone "nama link"