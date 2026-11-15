// untuk harga jenis BBM
const selectJenisBBM = document.getElementById('jenisBBM'); //mengambil isi dari option select
const hargaSpan = document.getElementById('harga-jenisBBM'); //mengambil span dari id

let hargaBBM = 0; //diletak di luar agar dapat di hoisting oleh function yang lain

selectJenisBBM.addEventListener('change', function() { //mengambil tindakan spesifik dari 'jenis bbm' melalui variabel 'selectJenisBBM'. Pada addEventListener "change" untuk optionselect
    const selectedOption = this.options[this.selectedIndex]; //mengambil elemen option yang dipilih oleh user

    hargaBBM = selectedOption.getAttribute('data-price'); //mengambil secara spesifik atribut dari selected option

    hargaSpan.textContent =
        'Rp ' + Number(hargaBBM).toLocaleString('id-ID'); //memastikan output dalam number dan menjadikannya sesuai standar negara yang diinput (mis. Rupiah Indonesia)
});


// untuk jumlah liter
const nominal = document.getElementById('nominal'); //mengambil nilai dari input
const jumlahLiterSpan = document.getElementById('jumlahLiter'); //mengambil span dari id

nominal.addEventListener('input', function() {
    const totalPengisian = Number(nominal.value); //mengambil nilai yang diinput dari input html, dan merubahnya dari string menjadi number
    const jumlahLiter = totalPengisian / Number(hargaBBM);

    jumlahLiterSpan.textContent =
        jumlahLiter.toLocaleString('id-ID');
});