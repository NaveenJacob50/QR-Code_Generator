var container = document.querySelector(".container");
var generateBtn = document.querySelector(".generate-btn");
var qrInput = document.querySelector(".qr-input");
var qrImg = document.querySelector(".qr-image");
var downloadBtn = document.querySelector(".download-btn");

generateBtn.onclick = function () {
  if (qrInput.value.length > 0) {
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=" +
      qrInput.value;
    qrImg.onload = function () {
      container.classList.add("active");
      generateBtn.innerText = "Generate QR Code";
      downloadBtn.style.visibility = "visible";
    };
  }
};

downloadBtn.onclick = function () {
  fetch(qrImg.src)
    .then((response) => response.blob())
    .then((blob) => {
      var link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = URL.createObjectURL(blob);
      link.click();
    });
};