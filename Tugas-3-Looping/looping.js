// SOAL 1
console.log("--- SOAL 1 --- \n");
var flag = 2;
console.log("### Looping Pertama ###")
while(flag < 22) { 							// Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log(flag+' - I love coding'); 	// Menampilkan nilai flag pada iterasi tertentu
  flag = flag+2; 							// Mengubah nilai flag dengan menambahkan 1
}

console.log("### Looping Kedua ###")
var flag_2 = 20;
while(flag_2 >= 2) { 											// Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log(flag_2+' - I will become a mobile developer'); 	// Menampilkan nilai flag pada iterasi tertentu
  flag_2 = flag_2-2; 											// Mengubah nilai flag dengan menambahkan 1
}
console.log(" ");


// SOAL 2 
console.log("--- SOAL 2 --- \n");
for(var angka = 1; angka <= 20; angka++) {
	if (angka%2 == 0)
	{
		console.log(angka+' - Berkualitas');
	} 
	else if(angka%2 != 0 && angka%3 != 0 )
		{
			console.log(angka+' - Santai');
		}
	if( angka%2 !=0 && angka%3 == 0)
			{
				console.log(angka+' - I love Coding');
			}		
} 
console.log("\n");

// SOAL 3
console.log("--- SOAL 3 --- \n");
for(i = 0; i < 4; i++) {
	for (j=0; j< 8; j++)
	{
		process.stdout.write("#")
	}	
	process.stdout.write("\n")
}
process.stdout.write("\n\n")


// SOAL 4
console.log("--- SOAL 4 --- \n");
for(var angka = 0; angka <= 6; angka++) {
	for (angka2=0; angka2<=angka; angka2++ )
	{
		process.stdout.write("#")
	}	
	process.stdout.write("\n")
}
process.stdout.write("\n\n")


// SOAL 5
console.log("--- SOAL 5 --- \n");
var catur = "";
for(var i = 0; i < 8; i++)
{
 	for(var a = 0; a < 8; a++)
 	{
 		catur += (a % 2) == (i % 2) ? " " : "#";
 	}
 	catur += "\n";
}
console.log(catur);


