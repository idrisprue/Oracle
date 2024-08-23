const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const imageBg = document.querySelector(".resultbg");
const titleMesaje = document.querySelector(".title_result");
document.querySelector("#copy").addEventListener("click", copy);
const alerta = document.querySelector(".alert");
const caracteresValidos = /^[a-z\s]*$/;
const errorAlerta = document.querySelector(".errorText");

function btnEncriptar() {
  const textoOriginal = textArea.value;

  if (!caracteresValidos.test(textoOriginal)) {
    errorAlerta.style.display = "flex";
    return false;
  }

  const textoEncriptado = encriptar(textoOriginal);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  imageBg.remove();
  titleMesaje.remove();
  errorAlerta.style.display = "none";

  return true;
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  imageBg.remove();
  titleMesaje.remove();
  contenedor.appendChild(boton);
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function copy() {
  let copyText = document.querySelector("#textdecrypt");
  copyText.select();
  document.execCommand("copy");
  alerta.style.display = "flex";

  alerta.classList.add("show");
  alerta.classList.remove("hide");

  setTimeout(function () {
    alerta.classList.add("hide");
    alerta.classList.remove("show");

    setTimeout(function () {
      alerta.style.display = "none";
    }, 500);
  }, 2000);
}