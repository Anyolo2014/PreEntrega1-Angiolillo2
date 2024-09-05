function login() {
    let user = prompt("Ingresá tu Nombre de Usuario:")
    let pass = prompt("Ingresá tu Contraseña:")
    let contador = 1
    while ((pass == "" || user == "") && contador < 3){
     alert("Usuario o contraseña inválido, volvé a intentarlo.")
     contador++
     user = prompt("Ingresá tu Nombre de Usuario:")
     pass = prompt("Ingresá tu Contraseña:")
    }

    if (contador === 3) {
        return false
    } else {
        alert(`¡Bienvenido/a ${user} a Mundo Pelota! \nTe invitamos a visitar nuestra tienda...`)
        return true
    }
}
    const pelotas = [
        {id: 1, tipo: "Pelotas de Fútbol", precio: 65000},
        {id: 2, tipo: "Pelotas de Basquet", precio: 38000},
        {id: 3, tipo: "Pelotas de Voley", precio: 30000},
        {id: 4, tipo: "Pelotas de Handball", precio: 28000},
        {id: 5, tipo: "Pelotas de Tenis (x3)", precio: 9000},
        {id: 6, tipo: "Pelotas de Hockey", precio: 10000},
        {id: 7, tipo: "Pelotas de Rugby", precio: 40000},
        {id: 8, tipo: "Pelotas de Golf", precio: 8000},
    ];

let carrito = [];

function comprarPelota() {
    let seleccion = prompt(`¿Qué tipo de pelotas estás buscando? 
        1) ${pelotas[0].tipo} ($${pelotas[0].precio}) 
        2) ${pelotas[1].tipo} ($${pelotas[1].precio}) 
        3) ${pelotas[2].tipo} ($${pelotas[2].precio})
        4) ${pelotas[3].tipo} ($${pelotas[3].precio})
        5) ${pelotas[4].tipo} ($${pelotas[4].precio})
        6) ${pelotas[5].tipo} ($${pelotas[5].precio})
        7) ${pelotas[6].tipo} ($${pelotas[6].precio})
        8) ${pelotas[7].tipo} ($${pelotas[7].precio})`
    )

    let pelotaSeleccionada = pelotas.find(pelota => pelota.id === parseInt(seleccion))

    if (pelotaSeleccionada) {
        carrito.push(pelotaSeleccionada);
        alert(`Se agregó "${pelotaSeleccionada.tipo}" al carrito.`)
    } else {
        alert("¡Pelota no encontrada! Volvé a intentar")
    }

    let cantidad = prompt(`¿Cuántas ${pelotaSeleccionada.tipo} querés comprar?`);
    let precioFinal = cantidad * pelotaSeleccionada.precio;
    alert(`¡Gracias por elegirnos! El saldo final de tu compra es de $${precioFinal}`)  
}

function comprar(){
    if ( login()) {
        return comprarPelota()
    } else {
        return alert("Límite de intentos, volvé a ingresar")
    }
}