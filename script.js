let numero = prompt("Ingresa un número para calcular su factorial:");

numero = Number(numero);

if (isNaN(numero) || numero < 0) {

  console.log("✖️ Error. El número debe ser mayor o igual a 0.");
  document.getElementById("resultado").textContent =
    "✖️ Error. El número debe ser mayor o igual a 0.";

} else {

  let factorial = 1;

  for (let i = 1; i <= numero; i++) {
    factorial = factorial * i;
  }

  console.log(`☑️ El factorial de ${numero} es: ${factorial}`);
  document.getElementById("resultado").textContent =
    `☑️ El factorial de ${numero} es: ${factorial}`;
}
