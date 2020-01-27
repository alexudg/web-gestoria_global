<?php
    // recoger valores de los campos
    $nombre  = $_POST['nmNombre'];
    $correo  = $_POST['nmCorreo'];
    $whatsapp= $_POST['nmWhatsapp'];
    $asunto  = $_POST['nmAsunto'];
    $mensaje = $_POST['nmMensaje'];
    
    // preparar datos de envio
    $to         = 'gestoriaglobalmx@gmail.com';
    $subject    = 'Contacto de la pagina web';
    $headers    = "Nombre: $nombre\nCorreo: $correo\nWhatsapp: $whatsapp\nAsunto: $asunto\nMensaje:\n$mensaje";
    $parameters = "FROM: $nombre"; // obligatorio si no no se envia

    mail($to,$subject,$headers,$parameters);
    
    echo "<script>alert('Mensaje enviado');</script>";
    
    //header('Location: index.html');
    
?>