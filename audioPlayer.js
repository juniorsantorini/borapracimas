// audioPlayer.js

function createAudioPlayer(postID, audioID, imageURL, postTitle) {
  // Lógica para criar o player de áudio com base no ID do áudio
  var audioContainer = document.createElement("div");
  audioContainer.className = "audio-container";

  var imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  var img = document.createElement("img");
  img.src = imageURL;
  img.alt = "Capa do Álbum";
  imageContainer.appendChild(img);

  var playerContainer = document.createElement("div");
  playerContainer.className = "player-container";
  var title = document.createElement("h2");
  title.style.color = "white";
  title.style.fontSize = "17px";
  title.style.marginBottom = "10px";
  title.textContent = postTitle;

  var audio = document.createElement("audio");
  audio.className = "audio-player";
  audio.controls = true;
  audio.textContent = "Seu navegador não suporta o elemento de áudio.";
  audio.src = "https://drive.google.com/uc?export=download&id=" + audioID;

  var downloadButton = document.createElement("div");
  downloadButton.className = "download-button";
  var button = document.createElement("button");
  button.style.backgroundColor = "#8c107e";
  button.style.color = "#fff";
  button.style.padding = "12px 20px";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.fontSize = "16px";
  button.style.width = "100%";
  button.textContent = "Baixar Agora";
  button.onclick = function() {
    window.location.href = "https://drive.google.com/uc?export=download&id=" + audioID;
  };
  downloadButton.appendChild(button);

  playerContainer.appendChild(title);
  playerContainer.appendChild(audio);
  playerContainer.appendChild(downloadButton);

  audioContainer.appendChild(imageContainer);
  audioContainer.appendChild(playerContainer);

  // Adicione o player de áudio criado à postagem
  var post = document.getElementById(postID);
  post.appendChild(audioContainer);
}
