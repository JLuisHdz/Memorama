let iconos = []
let selecciones = []
let intentos = 0

let mostrarIntentos = document.getElementById ('intentos')

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
        '../img/img9.png',
        '../img/img10.png',
        '../img/img11.png',
        '../img/img12.png',
        '../img/img13.png',
        '../img/img14.png',
        '../img/img15.png',
        '../img/img16.png',
        '../img/img17.png',
        '../img/img18.png',
        '../img/img19.png',
        '../img/img20.png',
        '../img/img21.png',
        '../img/img22.png',
        '../img/img23.png',
        '../img/img24.png',
        '../img/img25.png',
        '../img/img26.png',
        '../img/img27.png',
        '../img/img28.png',
        '../img/img29.png',
        '../img/img30.png',
        '../img/img31.png',
        '../img/img32.png',
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
        intentos++
        mostrarIntentos.innerHTML = `Intentos: ${intentos}`
    }
}

function deseleccionar(selecciones) {
    let trasera1 = document.getElementById("trasera" + selecciones[0])
    let trasera2 = document.getElementById("trasera" + selecciones[1])
    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])

    if (trasera1.innerHTML != trasera2.innerHTML) {
        trasera1.style.setProperty('box-shadow', '0px 0px 5px 19px rgba(255,0,0,0.75) inset', 'important');
        trasera2.style.setProperty('box-shadow', '0px 0px 5px 19px rgba(255,0,0,0.75) inset', 'important');
        setTimeout(() => {
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
            trasera1.style.setProperty('box-shadow', '0px 0px 5px 19px rgb(255, 236, 62) inset', 'important');
            trasera2.style.setProperty('box-shadow', '0px 0px 5px 19px rgb(255, 236, 62) inset', 'important');
        }, 2000);
    }else{
        setTimeout(() => {
            trasera1.style.setProperty('box-shadow', '0px 0px 5px 19px rgba(0,255,43,0.75) inset', 'important');
            trasera2.style.setProperty('box-shadow', '0px 0px 5px 19px rgba(0,255,43,0.75) inset', 'important');
        }, 1000);        
    }
}