let seccion = 1;

// instanciar secciones
const superior = document.getElementById('idSuperior');
const inicio = document.getElementById('idInicio');
const servicios = document.getElementById('idServicios');
const contacto = document.getElementById('idContacto');

// instanciar botones del menu
const btInicio = document.getElementById('btInicio');
const btServicios = document.getElementById('btServicios');
const btContacto = document.getElementById('btContacto');

// instanciar los botones de Facebook y Whatsapp
const btFacebook = document.getElementById('idFacebook');
const btWhatsapp = document.getElementById('idWhatsapp');


// ocultar todas las secciones excepto 'superior'
inicio.setAttribute('style', 'display: none');
servicios.setAttribute('style', 'display: none');
contacto.setAttribute('style', 'display: none');


// agregar funciones al evento click de cada boton
btInicio.onclick = btInicioClick;
btServicios.onclick = btServiciosClick;
btContacto.onclick = btContactoClick;
//setTimeout(btInicioClick, 3000);
btInicioClick(); // iniciar con click en Inicio


function btInicioClick() {
    //console.log('btInicioClick()');
    cambiarSeccion(1);   
}

function btServiciosClick() {
    //console.log('btServiciosClick()');
    cambiarSeccion(2);
}

function btContactoClick() {
    //console.log('btContactoClick()');
    cambiarSeccion(3);
}

function cambiarSeccion(actual) {
    // ocultar los botones Facebook y Whatsapp mientras se desliza la cortina negra
    btFacebook.style.display = 'none';
    btWhatsapp.style.display = 'none';
    
    location.href = '#'; /* 1ro ir al tope */
    superior.setAttribute('style', 'height: 100vh'); // 100% de la altura de lo que se muestra en pantalla
    switch (seccion) {
        case 1:
            btInicio.setAttribute('style', ''); // restaura valores originales y conserva el :hover
            inicio.style.display = 'none';
            break;
        case 2:
            btServicios.setAttribute('style', '');
            servicios.style.display = 'none';
            break;
        case 3:
            btContacto.setAttribute('style', '');
            contacto.style.display = 'none';
            break;
    }
    seccion = actual;
    
    // pintar el boton y mostrar la seccion actual 
    switch (seccion) {
        case 1:
            btInicio.style.backgroundColor = 'darkblue';
            inicio.style.display = 'block';
            break;
        case 2:
            btServicios.style.backgroundColor = 'darkblue';
            servicios.style.display = 'block';
            break;
        case 3:
            btContacto.style.backgroundColor = 'darkblue';
            contacto.style.display = 'block';
            // aqui no tiene caso el break
    }
    
    // tiempo para que logre subir suavemente la seccion
    window.setTimeout(function () {
        switch (seccion) {
            case 1:
                location.href = '#idInicio';
                break;
            case 2:
                location.href = '#idServicios';
                break;
            case 3:
                location.href = '#idContacto';
                break;
        }
        
        window.setTimeout(function () {
            superior.setAttribute('style', 'height: 0');
            location.href = '#'; // volver a apuntar al tope para que no se oculte el titulo de la seccion
            
            // volver a mostrar los botones de Facebook y Whatsapp
            btFacebook.style.display = 'block';
            btWhatsapp.style.display = 'block';
        }, 500);
    }, 1000); 

    idForm.onsubmit = (eve) => {
        eve.preventDefault()
        //console.log(idForm.nmNombre.value)

        // deshabilitar boton Enviar
        const color = idEnviar.style.backgroundColor
        idEnviar.style.backgroundColor = 'silver'
        idEnviar.disable = true
        idEnviar.value = "Espera..."
        
        // smtp.js
        Email.send({
            Host: 'smtp.gmail.com',
            Username: 'puntoplanet@gmail.com',
            Password: 'Jalisco01',
            To: 'puntoplanet@gmail.com',
            From: 'puntoplanet@gmail.com',
            Subject: 'Web de Gestoria Global',
            Body: 'De: ' + idForm.nmNombre.value + '<br/>' +
                  'Correo: ' + idForm.nmCorreo.value + '<br/>' +
                  'Whatsapp: ' + idForm.nmTelefono.value + '<br/>' +
                  'Asunto: ' + idForm.nmAsunto.value + '<br/>' +
                  '<hr/>' +
                  idForm.nmMensaje.value
        }).then(
            message => {
                idForm.reset()
                if (message == 'OK') {
                    idResultado.innerHTML = "Mensaje enviado!"
                    idResultado.style.backgroundColor = "lightgreen"
                }
                else {
                    idResultado.innerHTML = "Error en enviar mensaje"
                    idResultado.style.backgroundColor = "salmon"
                }
                idResultado.style.display = "block"
                setTimeout(() => {
                    idResultado.style.display = "none"
                    idEnviar.disable = false
                    idEnviar.value = "Enviar"
                    idEnviar.style.backgroundColor = color
                }, 6000)
            }
        )
    }
}