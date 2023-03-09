const hitungKelilingPersegiPanjang = (panjang,lebar) => {
    return 2*panjang + 2*lebar
}
const hitungKelilingJajarGenjang = (panjang,lebar) => {
    return 2*panjang + 2*lebar
}
const hitungKelilingSegitiga = (sisi) => {
    return 3*sisi
}

const panjangPersegiPanjang = prompt("Masukan Panjang Persegi Panjang")
const lebarPersegiPanjang = prompt("Masukan Lebar Persegi Panjang")

console.log("Keliling Persegi Panjang : ", hitungKelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang))

const panjangJajarGenjang = prompt("Masukan Panjang Jajar Genjang")
const lebarJajarGenjang = prompt("Masukan Lebar Jajar Genjang")

console.log("Keliling Jajar Genjang : ", hitungKelilingJajarGenjang(panjangJajarGenjang, lebarJajarGenjang))

const sisiSegitiga = prompt("Masukan Sisi Segitiga :")

console.log("Keliling Segitga : " , hitungKelilingSegitiga(sisiSegitiga))