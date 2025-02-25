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
    var url = prompt("Ingrese la URL del enlace:");
    var texto = document.getElementById("texto").value;
    if (url) {
        contenido.innerHTML += '<a href="' + url + '" target="_blank">' + texto + '</a><br>';
    }
}

function cargarImagen(event) {
    var archivos = event.target.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function() {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
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