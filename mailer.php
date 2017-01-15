<?php
/*
*  Aqui se definen los email a cuales se
*  envian las copias del formulario de contacto
*/
$destino1 = "fransafu@gmail.com"; // Aqui va el destino1 
//$destino2 = "email2_respaldo@gmail.com"; // Aqui va el email de respaldo

/* 
*  Verifica el ingreso de los input del 
*  formulario con la funcion checkInput
*/
$name = $_POST['name']; // checkInput($_POST['name'], "Ingrese su nombre");
$email = $_POST['email']; // checkInput($_POST['email'], "Ingrese su Correo Electronico");
$subject = $_POST['subject']; // checkInput($_POST['subject'], "Ingrese el Asunto del Mensaje");
$message = $_POST['message']; // checkInput($_POST['message'], "Ingrese su Mensaje");

/* 
*   Verifica si el email es valido
*/
/*if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    showError("Direccion de correo electronico invalido");
}*/
/* 
*   Aqui se realiza la maqueta del contenido que va dentro
*   de un email (su estructura)
*/

$subject2 = "Mensaje enviado por el formulario de contacto de proteinlab";

$message = "

Este mensaje fue enviado por el formulario de contacto de proteinlab:

Nombre: $name
Email: $email
Asunto: $subject

Mensaje:
$message

";

/*
*   Envio de email usando la funcion mail(email, asunto, mensaje)
*/

$success = mail($destino1, $subject2, $message);
//mail($destino2, $subject, $message);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}

/*
*   Redireccionamos al usuario a la URL especificada
*/
//header('Location: http://localhost:8000/#contact');
//exit();

/* 
*   Funcion que verifica que los campos no esten vacios 
*/
function checkInput($data, $problem=''){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0){
        showError($problem);
    }
    return $data;
}

/*
*   Funcion que muestra el error, aqui se define la maqueta del error
*/
function showError($myError){
?>
    <html>
    <body>

        <p>Please correct the following error:</p>
        <strong><?php echo $myError; ?></strong>
        <p>Hit the back button and try again</p>

    </body>
    </html>
<?php
    exit();
}
?>