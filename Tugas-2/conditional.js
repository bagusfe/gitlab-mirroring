/* #### READ ME #### 
   Untuk mengetest program ini perlu memberikan comment terlebih dahulu
   pada tiap soalnya.
   1. Jika ingin test soal If-Else maka perlu memberikan comment di soal Switch Case
   2. Jika ingin test soal Switch Case maka perlu memberikan comment di soal If Else
   #################
*/



// Soal If-Else

const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  let nama = await ask('What is your name? ');
  let peran = await ask('What is your role? ');
   	if (nama =="John" && peran == "")
   	{
		// Untuk John
		console.log("Selamat datang di Dunia Warewolf, " + nama + "!");
		console.log("Halo, " + nama + ", Pilih peran untuk memulai game!");    
   	} 
   	else if (nama == "Jane" && peran =="Penyihir" )
   	{
		//Untuk Jane
		console.log("Selamat datang di Dunia Warewolf, " + nama + "!");
		console.log("Halo, " + peran + ' ' + nama + ", kamu dapat melihat siapa yang menjadi warewolf!");
   	}
    else if (nama == "Jenita" && peran =="Guard" )
    {
		//Untuk Jenita 
		console.log("Selamat datang di Dunia Warewolf, " + nama + "!");
		console.log("Halo, " + peran + ' ' + nama + ", kamu akan membantu melindungi temanmu dari serangan warewolf!");    
    }
    else if (nama == "Junaedi" && peran =="Warewolf" )
    {
	    //Untuk Junaedi
		console.log("Selamat datang di Dunia Warewolf, " + nama + "!");
		console.log("Halo, " + peran + ' ' + nama + ", kamu akan memakan mangsa setiap malam!");
    } 
    else 
	{
		//Jika kosong
		console.log("Nama harus diisi!!");
	}
  process.exit();
}
    	



	
// Soal Switch-Case
// Jika tanggal tidak valid maka tidak bisa melanjutkan menampilkan data bulan
// Jika bulan tidak valid maka tidak bisa melanjutkan data tahun
// Jika data tahun tidak valid maka tidak bisa mencetak data format tanggal

// INPUT Manual
var hari = 1; 
var bulan = 12; 
var tahun = 2200;

//Variable nama bulan
var namabulan;

if (hari < 1 || hari > 31)
{
	console.log("Tanggal tidak valid")
} else if (bulan >= 1 || bulan <= 12)
  {
	switch(bulan) {
    case 1:
        namabulan = 'Januari';
        //break;
    case 2:
        namabulan = 'Februari';
        //break;
    case 3:
        namabulan = 'Maret';
        //break;
    case 4:
        namabulan = 'April';
        //break;
    case 5:
        namabulan = 'Mei';
        //break;
    case 6:
        namabulan = 'Juni';
        //break;
    case 7:
        namabulan = 'Juli';
        //break;
    case 8:
        namabulan = 'Agustus';
        //break;
    case 9:
        namabulan = 'September';
        //break;
    case 10:
        namabulan = 'Oktober';
        //break;
    case 11:
        namabulan = 'November';
        //break;
    case 12:
        namabulan = 'Desember';
        //break;
	//default: { console.log('Bulan tidak valid.'); }
	}
	if(bulan > 12)
	{
		console.log('Bulan tidak valid.');
	} else if (tahun < 1900 || tahun > 2200)
		{
			console.log("Tahun tidak valid")
		}
	//Data akan dicetak jika semua terpenuhi.
	if (hari>=1 && hari<=31 && bulan>=1 && bulan<= 12 && tahun >=1900 && tahun <=2200)
	{
		console.log (hari+' '+namabulan+' '+tahun);
	}			
} 
