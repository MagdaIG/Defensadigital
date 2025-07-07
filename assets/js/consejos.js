// Inicia las animaciones de AOS
AOS.init();

// Espera a que el DOM esté listo
$(document).ready(function () {

  // Validación del formulario de contacto
  $("#formContacto").on("submit", function (e) {
    e.preventDefault();

    const nombre = $("#nombre").val().trim();
    const email = $("#email").val().trim();
    const mensaje = $("#mensaje").val().trim();

    if (nombre.length < 3 || !email.includes("@") || mensaje === "") {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    alert("¡Gracias por tu mensaje!");
    this.reset();
  });

  // Evaluación del test
  $("#testForm").on("submit", function (e) {
    e.preventDefault();

    let puntaje = 0;
    if ($("input[name='p1']:checked").val() === "no") puntaje++;
    if ($("input[name='p2']:checked").val() === "no") puntaje++;
    if ($("input[name='p3']:checked").val() === "si") puntaje++;

    const resultado = puntaje === 3
      ? "¡Excelente! Sabes protegerte."
      : puntaje === 2
        ? "Bien, pero puedes mejorar."
        : "Atención, revisa los consejos del sitio.";

    $("#resultadoTest").text(resultado);
  });

});
