document.addEventListener("DOMContentLoaded", function () {
    const citaForm = document.getElementById("citaForm");
    const inspeccionForm = document.getElementById("inspeccionForm");
    const consultaForm = document.getElementById("consultaForm");
    let tramites = {}; // Objeto para almacenar trámites

    // Programar cita en oficina
    citaForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let dni = document.getElementById("dni").value;
        let fechaCita = document.getElementById("fechaCita").value;
        let codigoTramite = "T" + Math.floor(10000 + Math.random() * 90000); // Código aleatorio
        tramites[dni] = { cita: fechaCita, codigo: codigoTramite, estado: "Pendiente de inspección" };

        alert(`✅ Cita programada con éxito. Código de trámite: ${codigoTramite}`);
        citaForm.reset();
    });

    // Solicitar inspección
    inspeccionForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let dni = document.getElementById("dniInspeccion").value;
        let codigo = document.getElementById("codigoTramite").value;

        if (tramites[dni] && tramites[dni].codigo === codigo) {
            tramites[dni].estado = "Inspección programada";
            alert(`✅ Inspección programada para ${dni}.`);
        } else {
            alert("⚠️ Código de trámite no válido o no existe.");
        }
        inspeccionForm.reset();
    });

    // Consultar estado de trámite
    consultaForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let dni = document.getElementById("dniConsulta").value;

        if (tramites[dni]) {
            alert(`📌 Estado de trámite: ${tramites[dni].estado}`);
        } else {
            alert("⚠️ No se encontró información para este DNI.");
        }
        consultaForm.reset();
    });
});
