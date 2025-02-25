function nuevoTitulo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML += '<h1>' + texto + '</h1>';
}

function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML += '<p>' + texto + '</p>';
}

function nuevoEnlace() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("enlaceTexto").value;
    var url = document.getElementById("enlaceURL").value;
    if (texto && url) {
        contenido.innerHTML += '<a href="' + url + '" target="_blank">' + texto + '</a><br>';
    } else {
        alert("Por favor, ingresa el texto y la URL del enlace.");
    }
}

function cargarImagen(event) {
    var archivos = event.target.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function(e) {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', e.target.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            document.getElementById('contenido').appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
}

function imprimir() {
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html><head><link rel="stylesheet" href="css/bootstrap.min.css"></head><body>');
    a.document.write('<h1>Resultado</h1><br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}