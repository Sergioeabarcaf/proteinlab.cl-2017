$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    //alert("Here!");
    submitForm();
});

function submitForm(){
    // Init Var
    var name = $("#inputName").val();
    var email = $("#inputEmail").val();
    var subject = $("#inputSubject").val();
    var message = $("#inputMessage").val();

    //console.log("Inicia envio");
    $.ajax({
        type: "POST",
        url: "http://localhost:8000/mailer.php",
        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                //console.log("todo okkk");
                formSuccess();
            } else {
                //console.log("No se envio");
                formFail();
            }
        }
    });
    //console.log("Finaliza envio");
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}
function formFail(){
    $( "#msgFail" ).removeClass( "hidden" );
}