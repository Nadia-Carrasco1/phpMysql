$('#formPersona').validate({
    rules: {
        NroDni: {
            number: true,
            minlength: 8,
            maxlength: 10,
            min: 0,
            required: true
        },
        Apellido: {
            soloLetras: true,
            maxlength: 25,
            required: true
        },
        Nombre: {
            soloLetras: true,
            maxlength: 25,
            required: true
        },
        fechaNac: {
            required: true
        },
        Telefono: {
            formatoTelefonoValido: true,
            maxlength: 11,
            minlength: 11,
            required: true
        },
        Domicilio: {
            debeContenerAltura: true,
            required: true
        },
    },
    messages: {
        NroDni: {
            number: "Por favor, ingrese un número válido",
            minlength: "Por favor, ingrese al menos 8 dígitos",
            maxlength: "Por favor, ingrese hasta 10 dígitos",
            min: "Por favor, ingrese un número válido",
            required: "Por favor, ingrese su DNI"
        },
        Apellido: {
            soloLetras: "El apellido solo debe contener letras",
            maxlength: "Por favor, ingrese hasta 30 dígitos",
            required: "Por favor, ingrese su apellido"
        },
        Nombre: {
            soloLetras: "El nombre solo debe contener letras",
            maxlength: "Por favor, ingrese hasta 30 dígitos",
            required: "Por favor, ingrese su nombre"
        },
        fechaNac: {
            required: "Por favor, ingrese su fecha de nacimiento"
        },
        //falta chequear que el numero de telefono tenga el formato correcto (299-5632417)
        Telefono: {
            formatoTelefonoValido: "Formato de teléfono: código de área-5632419",
            maxlength: "Formato de teléfono: código de área-5632419",
            minlength: "Formato de teléfono: código de área-5632419",
            required: "Por favor, ingrese su número de teléfono"
        },
        Domicilio: {
            debeContenerAltura: "Por favor, ingrese la altura",
            required: "Por favor, ingrese su domicilio"
        }
    }
});

$.validator.addMethod("soloLetras", function (valor) {
    return /^[a-zA-Z\s]+$/.test(valor);
}, "Solo debe contener letras")

$.validator.addMethod("soloNumeros", function (valor) {
    return /^[0-9]+$/.test(valor);
}, "Solo debe contener números");

$.validator.addMethod("formatoTelefonoValido", function(valor) {
    return /^\d{3}-\d{7}$/.test(valor);
}, "Formato de patente válido");

$.validator.addMethod("debeContenerAltura", function (valor) {
    return /(?=.*\d)/.test(valor);
}, )