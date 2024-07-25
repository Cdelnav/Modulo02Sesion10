$(document).ready(function(){

    function limpiarErrores() {
        $("#email-help").html("")
        $("#password-help").html("")
        $("#lbl-email").removeClass("text-danger")
        $("#lbl-password").removeClass("text-danger")
    }

    $("#btn-limpiar").click(function(){
        limpiarErrores();
        $("#txt-email").val("")
        $("#txt-password").val("")
        $("#alert-send").addClass("d-none")
        
    })

    $("#formulario").submit(function(evento){
        evento.preventDefault();
        limpiarErrores();
        var email = $("#txt-email").val();
        var password =$("#txt-password").val();

        var valido = true;
        if(email ==""){
            valido = false
            $("#email-help").html("ingrese el correo electronico")
            $("#lbl-email").addClass("text-danger")
        }

        if(password ==""){
            valido = false
            $("#password-help").html("ingrese la contraseña")
            $("#lbl-password").addClass("text-danger")
        }
        
        if(valido){
            $("#alert-send").removeClass("d-none")
        }

    })

        //ampliar y reducir imagen
       $("#btn-ampliar").click(function() {
            $("#logo").css("width","500px").css("border", "0px")
        })

        //$("#btn-ampliar").click(function() {
         //   $("#logo").css({
            //   "width":"500px",                    ///utilizar esta forma
         //       "border": "0px "
           // })
        
       // })

        $("#btn-reducir").click(function() {
            $("#logo").css({
                "width":"200px",                    ///utilizar esta forma
                "border": "1px solid #CCC"
            })
        
        })
        


    
})