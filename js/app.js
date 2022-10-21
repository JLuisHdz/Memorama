let iconos = []
let selecciones = []

generarTablero()

function generarTablero() {
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 16; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    <img src="${iconos[0]}" />
                </div>
                <div class="cara superior">
                    <img src="../img/logo.png" />
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function cargarIconos() {
    iconos = [
        '../img/img1.png',
        '../img/img2.png',
        '../img/img3.png',
        '../img/img4.png',
        '../img/img5.png',
        '../img/img6.png',
        '../img/img7.png',
        '../img/img8.png',
    ]
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    let trasera1 = document.getElementById("trasera" + selecciones[0])
    let trasera2 = document.getElementById("trasera" + selecciones[1])
    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
}