$(document).ready(function(){
    $("#tablaregistros").hide();
    $("#formulario").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        submitHandler: function(form) {
            let valorNombre = $("#nombre").val();
            let valorApellido = $("#apellido").val();
            let valorRut = $("#rut").val();
            let valorDireccion = $("#direccion").val();
            let valorComuna = $("#comuna").val();
            let valorTipoVehiculo = $("#tVehiculo").val();
            let valorMarca = $("#marca").val();
            let valorModelo = $("#modelo").val();
            let valorAño = $("#año").val();
            let valorRT = $("#rTecnica").val();
            let valorTrabajador = $("#personal").val();
            let valorFecha = $("#fecha").val();
            let valorHora = $("#hora").val();
            let valorNeto = 0;
            let valorLavadoExt = "NO";
            if ($("#lavadoE").is(":checked")) {
                valorLavadoExt = "SI";
                valorNeto += 7000;
            } else {
                valorLavadoExt = "NO";
            }
            let valorLavadoMot = "NO";
            if ($("#lavadoM").is(":checked")) {
                valorLavadoMot = "SI";
                valorNeto += 5000;
            } else {
                valorLavadoMot = "NO";
            }
            let impuesto = valorNeto * 0.19;
            let totalPagar = valorNeto + impuesto;
            let mensaje = `Resumen:\nCliente: ${valorNombre} ${valorApellido}\nValor Neto del Servicio: $${valorNeto}\nIVA: $${impuesto}\nTotal a Pagar: $${totalPagar}`;
            if (confirm(mensaje)) {
                let filaTabla = "<tr><td>" +
                valorNombre + "</td><td>" +
                valorApellido + "</td><td>" +
                valorRut + "</td><td>" +
                valorDireccion + "</td><td>" +
                valorComuna + "</td><td>" +
                valorTipoVehiculo + "</td><td>" +
                valorMarca + "</td><td>" +
                valorModelo + "</td><td>" +
                valorAño + "</td><td>" +
                valorRT + "</td><td>" +
                valorLavadoExt + "</td><td>" +
                valorLavadoMot + "</td><td>" +
                valorTrabajador + "</td><td>" +
                valorFecha + "</td><td>" +
                valorHora + "</td><td>" +
                valorNeto + "</td><td>" +
                impuesto + "</td><td>" +
                totalPagar + "</td></tr>";
                $("#cuerpoTabla").append(filaTabla); 
                form.reset();
            }
        },
        rules: {
            nombre: {
                required: true,
                pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,48}",
                minlength: 3,
                maxlength: 30
            },
            apellido: {
                required: true,
                pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,48}",
                minlength: 3,
                maxlength: 30
            },
            rut: {
                required: true,
                pattern: "[0-9]{8}-[0-9kK]{1}",
            },
            direccion: {
                required: true,
                pattern: "^[\.a-zA-Z0-9# ]*$",
                minlength: 3,
                maxlength: 80,
            },
            comuna: {
                required: true
            },
            tVehiculo: {
                required: true,
            },
            marca: {
                required: true,
                pattern: "[a-zA-Z]{1,48}",
                minlength: 3,
                maxlength: 20
            },
            modelo: {
                required: true,
                pattern: "^[\.a-zA-Z0-9# ]*$",
                minlength: 3,
                maxlength: 20
            },
            año: {
                required: true,
                number: true,
                minlength: 4,
                maxlength: 4
            },
            rTecnica: {
                required: true
            },
            'lavado[]': {
                required: true,
                minlength: 1
            },
            personal: {
                required: true
            },
            fecha: {
                required: true
            },
            hora: {
                required: true
            }
        },
        messages: {
            nombre: {
                required: "Este campo es obligatorio",
                pattern: "El campo solo puede contener letras",
                minlength: "Este campo debe tener al menos 3 caracteres",
                maxlength: "Este campo admite máximo 30 caracteres"
            },
            apellido: {
                required: "Este campo es obligatorio",
                pattern: "Este campo solo puede contener letras",
                minlength: "Este campo debe tener al menos 3 caracteres",
                maxlength: "Este campo admite máximo 30 caracteres"
            },
            rut: {
                required: "Este campo es obligatorio",
                pattern: "Formato de RUT incorrecto"
            },
            direccion: {
                required: "Este campo es obligatorio",
                pattern: "Este campo solo puede contener letras, espacios y números",
                minlength: "Este campo debe tener al menos 3 caracteres",
                maxlength: "Este campo admite máximo 80 caracteres"
            },
            comuna: {
                required: "Este campo es obligatorio"
            },
            tVehiculo: {
                required: "Este campo es obligatorio"
            },
            marca: {
                required: "Este campo es obligatorio",
                pattern: "Este campo solo puede contener letras",
                minlength: "Este campo debe tener al menos 3 caracteres",
                maxlength: "Este campo admite máximo 20 caracteres"
            },
            modelo: {
                required: "Este campo es obligatorio",
                pattern: "Este campo solo puede contener letras, espacios y números",
                minlength: "Este campo debe tener al menos 3 caracteres",
                maxlength: "Este campo admite máximo 20 caracteres"
            },
            año: {
                required: "Este campo es obligatorio",
                number: "Solo se admiten valores numéricos",
                minlength: "Este campo debe tener 4 caracteres",
                maxlength: "Este campo debe tener 4 caracteres"
            },
            rTecnica: {
                required: "Este campo es obligatorio"
            },
            'lavado[]': {
                required: "Este campo es obligatorio",
                minlength: "Debe seleccionar al menos una opción"
            },
            personal: {
                required: "Este campo es obligatorio"
            },
            fecha: {
                required: "Este campo es obligatorio"
            },
            hora: {
                required: "Este campo es obligatorio"
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "lavado[]") {
                error.appendTo("#errorEspecial");
            } else {
                error.insertAfter(element);
            }
        }
    });
});