const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const imageBg = document.querySelector(".resultbg");
const titleMesaje = document.querySelector(".title_result");
const copyButton = document.querySelector(".copyBtn");
const alerta = document.querySelector(".alert");
const caracteresValidos = /^[a-z\s]*$/;
const errorAlerta = document.querySelector(".errorText");

// Añadir eventos a los botones de encriptar y desencriptar
document.querySelector("#encriptar").addEventListener("click", btnEncriptar);
document.querySelector("#desencriptar").addEventListener("click", btnDesencriptar);
document.querySelector("#copy").addEventListener("click", copy);

function btnEncriptar() {
  const textoOriginal = textArea.value;

  if (!caracteresValidos.test(textoOriginal)) {
    errorAlerta.style.display = "flex";
    return false;
  }

  const textoEncriptado = encriptar(textoOriginal);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  imageBg.style.display = "none"; // Cambié a display en lugar de remove para no eliminar el elemento
  titleMesaje.style.display = "none"; // Cambié a display en lugar de remove para no eliminar el elemento
  errorAlerta.style.display = "none";

  // Mostrar el botón de copiar cuando hay texto encriptado
  copyButton.style.display = 'block';

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
  imageBg.style.display = "none"; // Cambié a display en lugar de remove para no eliminar el elemento
  titleMesaje.style.display = "none"; // Cambié a display en lugar de remove para no eliminar el elemento

  // Mostrar el botón de copiar cuando hay texto desencriptado
  copyButton.style.display = 'block';
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
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function copy() {
  const copyText = mensaje; // Usa el textarea de mensaje para copiar el texto encriptado/desencriptado
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
