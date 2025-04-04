let currentPhotoIndex = 0;
const photos = ["WhatsApp Image 2025-04-04 at 18.19.17 (7).jpeg" , "WhatsApp Image 2025-04-04 at 18.19.17 (6).jpeg" ,  "WhatsApp Image 2025-04-04 at 18.19.17 (5).jpeg" , "WhatsApp Image 2025-04-04 at 18.19.17 (4).jpeg" , "WhatsApp Image 2025-04-04 at 18.19.17 (3).jpeg" , "WhatsApp Image 2025-04-04 at 18.19.17 (2).jpeg" , "WhatsApp Image 2025-04-04 at 18.19.17 (1).jpeg", "WhatsApp Image 2025-04-04 at 18.19.17.jpeg", "WhatsApp Image 2025-04-04 at 18.19.16.jpeg"];
const audio = document.getElementById('myAudio');

function playSong() {
  audio.play(); // Şarkıyı çalmaya başlat
  document.getElementById('heart').style.display = 'none'; // Kalp simgesini gizle
  document.getElementById('photos').style.display = 'block'; // Fotoğrafları göster
}

function nextPhoto() {
  currentPhotoIndex++;
  if (currentPhotoIndex >= photos.length) {
    currentPhotoIndex = 0;
    document.getElementById('photos').style.display = 'none';
    document.getElementById('message').style.display = 'block';
  } else {
    document.getElementById('photo').src = photos[currentPhotoIndex];
  }
}

function showLoveMessage() {
  alert('Seni seviyorum!');
}