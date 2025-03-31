document.addEventListener("DOMContentLoaded", function () {
    const formCita = document.getElementById("formCita");
    const formInspeccion = document.getElementById("formInspeccion");
    const formSeguimiento = document.getElementById("formSeguimiento");

    let tramites = {
        "T17777": { 
            estado: "Trámite casi finalizado, apersonarse a la oficina.",
            nombreLocal: "IE Sagrado Corazón de Jesús",
            director: "Jean Alexander",
            fechaSolicitud: "2025-03-31"
        }
    };

    formCita.addEventListener("submit", function (e) {
        e.preventDefault();
        let dni = document.getElementById("dniCita").value;
        let codigoTramite = "T" + Math.floor(10000 + Math.random() * 90000);
        tramites[codigoTramite] = { estado: "Pendiente de inspección" };

        document.getElementById("codigoCita").innerText = `Código de trámite: ${codigoTramite}`;
        formCita.reset();
    });

    formInspeccion.addEventListener("submit", function (e) {
        e.preventDefault();
        let codigo = document.getElementById("codigoCitaInspeccion").value;
        if (tramites[codigo]) {
            tramites[codigo].estado = "Inspección programada";
            alert(`✅ Inspección programada para el trámite ${codigo}.`);
        } else {
            alert("⚠️ Código no válido.");
        }
        formInspeccion.reset();
    });

    formSeguimiento.addEventListener("submit", function (e) {
        e.preventDefault();
        let numeroRegistro = document.getElementById("numeroRegistro").value;
        if (tramites[numeroRegistro]) {
            let tramite = tramites[numeroRegistro];
            let progreso = 99;

            document.getElementById("barraProgresoContainer").style.display = "block";
            document.getElementById("informacionTramite").innerText = tramite.estado;
            document.getElementById("nombreLocal").innerText = `Local: ${tramite.nombreLocal}`;
            document.getElementById("directorLocal").innerText = `Director: ${tramite.director}`;
            document.getElementById("fechaSolicitud").innerText = `Fecha de solicitud: ${tramite.fechaSolicitud}`;
            document.getElementById("mensajeApersonarse").innerText = "Apersonarse a la oficina el 5 de abril de 2025 para recoger su ITSE impreso.";

            let progresoBarra = document.getElementById("barraProgreso");
            let progresoTexto = document.getElementById("progresoTexto");

            let intervalo = setInterval(function () {
                if (progreso >= 100) {
                    clearInterval(intervalo);
                } else {
                    progreso = 95; 
                    progresoBarra.style.width = progreso + "%";
                    progresoTexto.innerText = progreso + "%";
                    progresoTexto.style.left = progreso + "%";
                }
            }, 1000);
        } else {
            alert("⚠️ N° de registro no encontrado.");
        }
    });
});
