let currentTime = new Date().getHours();
let greeting;

if (currentTime < 12) {
    greeting = "Pagi";
} else if (currentTime < 15) {
    greeting = "Siang";
} else if (currentTime < 18) {
    greeting = "Sore";
} else if (currentTime < 23) {
    greeting = "Malam";
} else {
    greeting = "Tengah Malam";
}

document.getElementById('grettingTime').innerHTML = `Hallo, Selamat ${greeting}`;

// Feke mengetik
let text = "Ini adalah program sederhana untuk menambahkan data karyawan / employee yang dibuild dengan javascript native dan sentuhan manis bootstrap.  \n\n1) dimulai dengan menekan icon + (plus) untuk menambahkan karyawan baru. \n2) dan untuk hasilnya bisa dilihat dibagian list \n\n Have Fun!!!";
let i = 0;

let typing = setInterval(function() {
  document.querySelector("#greetingText").innerHTML += text[i];
  if (text[i] === "\n") {
    document.querySelector("#greetingText").innerHTML += "<br>";
  }
  i++;
  if (i >= text.length) {
    clearInterval(typing);
  }
}, 50);


