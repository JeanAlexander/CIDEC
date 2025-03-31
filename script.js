document.addEventListener("DOMContentLoaded", function () {
    const citaForm = document.getElementById("formCita");
    const inspeccionForm = document.getElementById("formInspeccion");
    const consultaForm = document.getElementById("formSeguimiento");
    let tramites = {}; // Objeto para almacenar trámites

    // Programar cita en oficina
    citaForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let dni = document.getElementById("dniCita").value;
        let fechaCita = document.getElementById("fechaCita").value;
        let codigoTramite = "T" + Math.floor(10000 + Math.random() * 90000); // Código aleatorio
        tramites[dni] = { cita: fechaCita, codigo: codigoTramite, estado: "Pendiente de inspección" };

        alert(`✅ Cita programada con éxito. Código de trámite: ${codigoTramite}`);
        citaForm.reset();
    });

    // Solicitar inspección
    inspeccionForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let dni = document.getElementById("codigoCitaInspeccion").value;
        if (tramites[dni]) {
            tramites[dni].estado = "Inspección programada";
            alert(`✅ Inspección programada.`);
        } else {
            alert("⚠️ Código de trámite no válido.");
        }
        inspeccionForm.reset();
    });

    // Consultar estado de trámite
    consultaForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let dni = document.getElementById("numeroRegistro").value;
        alert(tramites[dni] ? `📌 Estado de trámite: ${tramites[dni].estado}` : "⚠️ No se encontró información.");
        consultaForm.reset();
    });
});
