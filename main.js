let porcentaje = 30

function descuento (precio, porcentaje){
    return precio - (precio * porcentaje / 100)
}

do {
    let precio = parseInt(prompt("Ingresa un precio de producto mayor a $100 para aplicar descuento"))
    const socio = prompt("Sos socio?").toLocaleLowerCase()
    console.log("Es socio? " + socio)

    if (socio == "si") {
        const precioFinal = descuento (precio, porcentaje)
        alert ("El valor con descuento es de $" + precioFinal)
        continuar = prompt("Queres seguir calculando?").toLowerCase()    
    }

} while (continuar != "no")
alert("Gracias, hasta luego!")