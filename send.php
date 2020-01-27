<?php
// uso de las librerias phpmailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/Exception.php';
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';

// recoger valores de los campos
$nombre  = $_POST['nmNombre'];
$correo  = $_POST['nmCorreo'];
$whatsapp= $_POST['nmWhatsapp'];
$asunto  = $_POST['nmAsunto'];
$mensaje = $_POST['nmMensaje'];

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    
    //Configurar servidor propio para auto enviarnos correos
    $mail->SMTPDebug = 0;//SMTP::DEBUG_SERVER;                  // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'alexudg@gmail.com'; // gestoriaglobalmx@gmail.com                   // SMTP username
    $mail->Password   = 'universI0674';//'jalisco2019';                          // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($correo, $nombre);           // quien lo envia, el correo del visitante, puede ser falso 
    $mail->addAddress('alexudg@gmail.com');         // a quien se le envia (obvio para leerlo en mi correo)
    //$mail->addAddress('ellen@example.com', 'nombre');                // se agregan los que quieras (nombre opcional)
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Attachments  (archivos adjuntos opcionales)
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $asunto;
    $mail->Body    ="<h2>
                    Nombre: $nombre<br>
                    Correo: $correo<br>
                    Whatsapp: $whatsapp<br>
                    Asunto: $asunto<br>
                    <br>
                    Mensaje: $mensaje
                    </h2>";
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients'; // cuerpo de mensaje alterno

    $mail->send(); // comando de enviar fisicamente
    //header('Location: index.html#');
    echo "<script>
              alert('Mensaje enviado');
          </script>";
} catch (Exception $e) {
    echo "<script>
              alert('Ocurrió un error al enviar: $mail->ErrorInfo');
          </script>";
}
    
header('Location: index.html');
  
?>