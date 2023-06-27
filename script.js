let result = document.getElementById("result");

function entrada(num) {
  let number = result.value;
  result.value = number + num;
}

function calcular() {
  if (result.value != "") {
    let result2 = result.value;
    result.value = eval(result2);
  } else {
    alert("Error! Adicionar valores válidos.");
  }
}

function reiniciar() {
  result.value = "";
}

function borrar() {
  let result2 = result.value;
  result.value = result2.substring(0, result2.length - 1);
}

// TEMPERATURA

function entradaCentigrados(num) {
  let numero = centigrados.value;
  centigrados.value = numero + num;
}

function calcularFarenheit() {
  if (centigrados.value != "") {
    let inputCentigrados = parseFloat(
      document.getElementById("centigrados").value
    );
    let outFarenheit = Math.round(inputCentigrados * 1.8 + 32);
    document.getElementById("farenheit").value = outFarenheit + " °F";
  } else {
    alert("Error! Adicionar valores válidos.");
  }
}

function borrarCentigrados() {
  let borrarCentigrados = centigrados.value;
  centigrados.value = borrarCentigrados.substring(
    0,
    borrarCentigrados.length - 1
  );
}

function reiniciarTemperatura() {
  centigrados.value = "";
  farenheit.value = "";
}

const theme = {
  defaul() {
    root.style.setProperty("--background", "#3a4764");
    root.style.setProperty("--background-dark", "#232c43");
    root.style.setProperty("--background-very-dark", "#182034");

    root.style.setProperty("--key-color-top", "#ffffff");
    root.style.setProperty("--key-color-bottom", "#3a4764");
    root.style.setProperty("--key-background", "#eae3dc");
    root.style.setProperty("--key-background-dark", "#dfd9d2");
    root.style.setProperty("--key-shadow", "#b4a597");

    root.style.setProperty("--key-blue-background", "#637097");
    root.style.setProperty("--key-blue-shadow", "#404e72");

    root.style.setProperty("--key-red-background", "#d03f2f");
    root.style.setProperty("--key-red-shadow", "#93261a");
  },
  light() {
    root.style.setProperty("--background", "#e6e6e6");
    root.style.setProperty("--background-dark", "#d3cdcd");
    root.style.setProperty("--background-very-dark", "#eeeeee");

    root.style.setProperty("--key-color-top", "#3d3d33");
    root.style.setProperty("--key-color-bottom", "#3d3d33");
    root.style.setProperty("--key-background", "#e5e4e0");
    root.style.setProperty("--key-background-dark", "#dfd9d2");
    root.style.setProperty("--key-shadow", "#b4a597");

    root.style.setProperty("--key-blue-background", "#388187");
    root.style.setProperty("--key-blue-shadow", "#1c6166");

    root.style.setProperty("--key-red-background", "#d03f2f");
    root.style.setProperty("--key-red-shadow", "#93261a");
  },
  dark() {
    root.style.setProperty("--background", "#17062a");
    root.style.setProperty("--background-dark", "#1e0836");
    root.style.setProperty("--background-very-dark", "#1e0836");

    root.style.setProperty("--key-color-top", "#f7de43");
    root.style.setProperty("--key-color-bottom", "#f7de43");
    root.style.setProperty("--key-background", "#331b4d");
    root.style.setProperty("--key-shadow", "#851c9c");

    root.style.setProperty("--key-blue-background", "#56077c");
    root.style.setProperty("--key-blue-shadow", "#851c9c");

    root.style.setProperty("--key-red-background", "#00decf");
    root.style.setProperty("--key-red-shadow", "#00decf");
  },
};

var root = document.querySelector(":root");

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

if (darkThemeMq.matches) {
  document.getElementById("btnTheme").value = "3";
  theme.dark();
} else if (lightThemeMq.matches) {
  document.getElementById("btnTheme").value = "2";
  theme.light();
} else {
  document.getElementById("btnTheme").value = "1";
  theme.defaul();
}

function miFuncion(val) {
  document.getElementById("btnTheme").value = val;

  if (val == 1) {
    theme.defaul();
  } else if (val == 2) {
    theme.light();
  } else {
    theme.dark();
  }
}
