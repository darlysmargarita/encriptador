const alfabetoOriginal = "abcdefghijklmnopqrstuvwxyz";
const alfabetoSustitucion = "qwertyuiopasdfghjklzxcvbnm";

// Función para encriptar el texto
function encriptar(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];
    let index = alfabetoOriginal.indexOf(char);
    if (index !== -1) {
      resultado += alfabetoSustitucion[index];
    } else {
      resultado += char;
    }
  }
  return resultado;
}

// Función para desencriptar el texto
const desencriptar = (texto) => {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];
    let index = alfabetoSustitucion.indexOf(char);
    if (index !== -1) {
      resultado += alfabetoOriginal[index];
    } else {
      resultado += char;
    }
  }
  return resultado;
};

// Función para copiar el texto encriptado
async function copiarTexto() {
  const textoEncriptado = document.getElementById("textoFinal").innerText;

  await navigator.clipboard.writeText(textoEncriptado);
}

// Constantes
const input = document.getElementById("textbox");
const encryptBtn = document.getElementById("encrypt");
const decryptBtn = document.getElementById("decrypt");

// Eventos
encryptBtn.addEventListener("click", () => {
  const copyBtn = document.getElementById("copy");
  copyBtn.classList.remove("oculto");
  const entrada = document.getElementById("textbox").value;
  const salida = document.getElementsByClassName("message")[0];
  const textoEncriptado = encriptar(entrada);

  if (entrada.trim() !== "") {
    salida.innerHTML = `
    <p id="textoFinal">${textoEncriptado}</p>
    `;
  }
  copyBtn.addEventListener("click", copiarTexto);
});

decryptBtn.addEventListener("click", () => {
  const copyBtn = document.getElementById("copy");
  copyBtn.classList.remove("oculto");
  const entrada = document.getElementById("textbox").value;
  const salida = document.getElementsByClassName("message")[0];
  const textoDesencriptado = desencriptar(entrada);

  if (entrada.trim() !== "") {
    salida.innerHTML = `
    <p id="textoFinal">${textoDesencriptado}</p>

    `;
  }
});

input.addEventListener("change", () => {
  const copyBtn = document.getElementById("copy");
  copyBtn.classList.add("oculto");
  const entrada = document.getElementById("textbox").value;
  const salida = document.getElementsByClassName("message")[0];

  if (entrada.trim() === "") {
    salida.innerHTML = `
        <h2>Ningún mensaje fue encontrado</h2>
        <p>Ingresa el texto que desees encriptar o desencriptar</p>`;
  }
});
