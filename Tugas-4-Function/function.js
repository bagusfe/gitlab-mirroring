
console.log("--------- SOAL 1 ----------")

function tampilkan() {
  return "Hello Sanber!"
}
console.log(tampilkan()); 


console.log("--------- SOAL 2 ----------")
function kalikan(a,b){
	return a*b
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48


console.log("--------- SOAL 3 ----------")
function introduce(a,b,c,d){
	return "Nama saya "+a+" Umur saya "+b+" tahun, "+"alamat saya di "+c+ " dan saya punya hobby yaitu "+d;
}
 
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!"