//pilih semua data didalam li
const videos = Array.from(document.querySelectorAll("[data-duration]"));

//pilih yang hanya javascript lanjutan
let lanjutVideo = videos.filter(video => video.textContent.includes('Javascript'))

//ambil durationnya
.map(duration => duration.dataset.duration)

//ubah durasi menjadi int, ubah menit menjadi detik
.map(ubahWaktu => {
    const splitWaktu = ubahWaktu.split(":").map(ubahWaktu => parseFloat(ubahWaktu));
    return (splitWaktu[0]*60)+splitWaktu[1];
})

//jumlahkan semua detik
.reduce((menit, detik) => menit + detik);

//ubah jam menit dan detik
var jam   = Math.floor(lanjutVideo / 3600);
lanjutVideo = lanjutVideo - jam * 3600;
const menit = Math.floor(lanjutVideo / 60);
const detik = lanjutVideo - menit * 60;
var hasil =  jam+':'+menit+':'+detik;

//simpan di dom
const jumlahVideo = videos.filter(video => video.textContent.includes('Javascript')).length;
document.querySelector(".jumlahVideo").textContent = jumlahVideo;
document.querySelector(".jumlahWaktu").textContent = hasil;

const videoApa = videos.filter(video => video.textContent.includes('Javascript'))
.map(isVideo => isVideo.textContent)
.reduce((awal, akhir) => awal+', '+akhir);

document.querySelector(".isProgram").textContent = videoApa;

let notVideos = videos.filter(video => !video.textContent.includes('Javascript'))
.map(notIsVideo => notIsVideo.textContent)
.reduce((programAwal, programAkhir) => programAwal+','+programAkhir);
document.querySelector(".isNotProgram").textContent = notVideos;

document.querySelector(".sumNotProgram").textContent = videos.filter(video => !video.textContent.includes('Javascript')).length;

console.log(notVideos); 