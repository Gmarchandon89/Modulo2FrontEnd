$(document).ready(function() {
    
  $("#formulario").validate({
      errorClass: "error fail-alert",
      validClass: "valid success-alert",
      submitHandler: function(form) {
          if (confirm('Registro enviado!')) {
              form.submit();
          }
      },
      rules: {
          nombres: {
              required: true,
              pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}",
              minlength: 3,
              maxlength: 35,
          },
          pApellido: {
              required: true,
              pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}",
              minlength: 3,
              maxlength: 35,
          },
          mApellido: {
              required: true,
              pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}",
              minlength: 3,
              maxlength: 35,
          },
          edad: {
              required: true,
              number: true,
              min: 18,
              max: 70
          },
          direccion: {
              required: true,
              pattern: "^[\.a-zA-Z0-9# ]*$",
              minlength: 3,
              maxlength: 30,
          },
          alergico: {
              required: {
                  depends: function() {
                      return $("input[name=alergias]:checked").val() == "Si";
                  }
              }
          }
      },
      messages: {
          nombres: {
              required: "¡Este campo es obligatorio!",
              pattern: "El texto ingresado no debe contener símbolos o números",
              minlength: "El texto ingresado debe tener mínimo 3 caracteres",
              maxlength: "El texto ingresado debe tener máximo 35 caracteres",
              
          },
          pApellido: {
              required: "¡Este campo es obligatorio!",
              pattern: "El texto ingresado no debe contener símbolos o números",
              minlength: "El texto ingresado debe tener mínimo 3 caracteres",
              maxlength: "El texto ingresado debe tener máximo 35 caracteres",
          },
          mApellido: {
              required: "¡Este campo es obligatorio!",
              pattern: "El texto ingresado no debe contener símbolos o números",
              minlength: "El texto ingresado debe tener mínimo 3 caracteres",
              maxlength: "El texto ingresado debe tener máximo 35 caracteres",
          },
          edad: {
              required: "¡Este campo es obligatorio!",
              number: "Este campo solo admite valores numéricos",
              min: "Debes tener almenos 18 años",
              max: "La edad recomendada es hasta 70 años"
          },
          direccion: {
              required: "¡Este campo es obligatorio!",
              pattern: "El texto ingresado no debe contener símbolos diferentes a #",
              minlength: "El texto ingresado debe tener mínimo 3 caracteres",
              maxlength: "El texto ingresado debe tener máximo 30 caracteres",
          },
          alergico: {
              required: "¡Debes indicar tus alergias!"
          }
      }
  });
});

