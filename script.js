//Desafio Numero 1

//Bienvenida y presentacion de productos
alert("Bienvenido a la TiendaTech")
alert("Los productos en stock son: Placa de Video, Memoria Ram, Motherboard, Fuente , SSD, Procesador y Gabinete")

//Hago una variable seguir y una constante con la funcion de calcular IVA.
let seguir
const IVA =function calcularIVA(precioProducto) {
    return precioProducto * 1.21
}

//Realizo un do while para comprobar mas adelante si el cliente quiere seguir comprando
do {
    producto = prompt("Ingrese el producto que desea:") //El cliente elige un producto de la lista y el switch actua como if anidados/
    //Segun el producto elegido se muestra el precio con IVA y sin IVA.
    switch (producto) {
        case "placa de video":
            precioProducto = 10000
            alert(`El precio de la Placa de Video es 10000, con IVA es de $${IVA(precioProducto)} `)
            break

        case "memoria ram":
            precioProducto = 8000
            alert(`El precio de la Memoria Ram es 8000, con IVA es de $${IVA(precioProducto)} `)
            break

        case "motherboard":
            precioProducto = 20000
            alert(`El precio del Motherboard es 20000, con IVA es de $${IVA(precioProducto)} `)
            break

        case "fuente":
            precioProducto = 18000
            alert(`El precio de la Fuente es 18000, con IVA es de $${IVA(precioProducto)} `)
            break

        case "ssd":
            precioProducto = 8000
            alert(`El precio del SSD es 8000, con IVA es de $${IVA(precioProducto)} `)
            break

        case "procesador":
            precioProducto = 30000
            alert(`El precio del Procesador es 30000, con IVA es de $${IVA(precioProducto)} `)
            break

        case "gabinete":
            precioProducto = 7000
            alert(`El precio del Gabinete es 7000, con IVA es de $${IVA(precioProducto)} `)
            break
        default:
            alert("Producto ingresado inexistente")
            break

    }
//Se le pregunta al cliente si desea realizar otra compra
    seguir = prompt("Desea hacer otra compra? Ingrese Si/No")

}
//Segun lo ingresado empieza devuelta el ciclo o se termina.
while (seguir!="no")





