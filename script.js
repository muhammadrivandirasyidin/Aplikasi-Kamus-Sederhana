const dictionary = {
    "rumah": "Tempat tinggal yang biasanya digunakan oleh keluarga.",
    "mobil": "Kendaraan bermotor yang digunakan untuk transportasi darat.",
    "sekolah": "Tempat pendidikan formal bagi siswa.",
    "kucing": "Hewan peliharaan yang biasanya berbulu halus dan suka mengeong.",
    "pantai": "Pesisir laut yang biasanya memiliki pasir dan ombak.",
    // Anda bisa menambah kata dan definisi lainnya
};

function searchWord() {
    const wordInput = document.getElementById("wordInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    if (wordInput === "") {
        resultDiv.textContent = "Silakan masukkan kata untuk dicari.";
        return;
    }

    if (dictionary[wordInput]) {
        resultDiv.textContent = `Definisi dari '${wordInput}': ${dictionary[wordInput]}`;
    } else {
        resultDiv.textContent = `Kata '${wordInput}' tidak ditemukan dalam kamus.`;
    }
}
