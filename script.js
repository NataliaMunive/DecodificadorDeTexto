function encriptarTexto() {
    // Obtiene el valor del textarea de entrada por su ID
    const entrada = document.getElementById('textoEntrada').value;
    // Reemplaza letras especificadas con sus equivalentes encriptados usando una expresión regular global
    let encriptado = entrada.replace(/e/g, 'enter') // Reemplaza 'e' con 'enter'
                            .replace(/i/g, 'imes') // Reemplaza 'i' con 'imes'
                            .replace(/a/g, 'ai') // Reemplaza 'a' con 'ai'
                            .replace(/o/g, 'ober') // Reemplaza 'o' con 'ober'
                            .replace(/u/g, 'ufat'); // Reemplaza 'u' con 'ufat'
    // Asigna el texto encriptado al textarea de salida
    document.getElementById('textoSalida').value = encriptado;
}

function desencriptarTexto() {
    // Obtiene el valor del textarea de entrada
    const entrada = document.getElementById('textoEntrada').value;
    // Reemplaza encriptados con sus letras originales usando una expresión regular global
    let desencriptado = entrada.replace(/enter/g, 'e') // Reemplaza 'enter' con 'e'
                               .replace(/imes/g, 'i') // Reemplaza 'imes' con 'i'
                               .replace(/ai/g, 'a') // Reemplaza 'ai' con 'a'
                               .replace(/ober/g, 'o') // Reemplaza 'ober' con 'o'
                               .replace(/ufat/g, 'u'); // Reemplaza 'ufat' con 'u'
    // Asigna el texto desencriptado al textarea de salida
    document.getElementById('textoSalida').value = desencriptado;       
}

function copiarTexto() {
    // Obtiene el textarea de salida por su ID
    const salida = document.getElementById('textoSalida');
    // Selecciona el texto dentro del textarea
    salida.select();
    // Para dispositivos móviles: establece el rango de selección
    salida.setSelectionRange(0, 99999);
    // Copia el texto seleccionado al portapapeles
    document.execCommand('copy');
    // Muestra una alerta indicando que el texto fue copiado
    alert('Texto copiado al portapapeles.');
}
