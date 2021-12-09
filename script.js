alert ("Bienvenido/a a Mateá")

class Yerba {
    constructor(data) {
        this.marca = data.marca;
        this.precio = parseFloat(data.precio);
        this.stock = 10;
        this.id = Yerba.ID;
        this.img = data.img
        Yerba.ID++;
    }

    static ID = 1

    sumaIva() {
        return this.precio = this.precio * 1.21;
    }

    vender() {
        if (this.stock === 0) {
            console.log ("Nos quedamos sin stock del producto seleccionado")
        } else{
            console.log("Vendido")
            this.stock--;
        }
    }

    reponer() {
        this.stock += 10;
    }
}

let almacen = [
    new Yerba( { marca: "Rosamonte", precio: 154, img: "https://www.rosamonte.com.ar/wp-content/uploads/2016/01/ROSAMONTE-TRADICIONAL-WEB-400x400.png" }),
    new Yerba( { marca: "Amanda", precio: 173, img: "https://yerbamanda.com.ar/productos/yerba-mate-campo500gr/img/main.png" }),
    new Yerba( { marca: "Chamigo", precio: 194, img: "https://hiperlibertad.vteximg.com.br/arquivos/ids/156319-1000-1000/Yerba-Mate-Chamigo-con-palo-500-Gr-YERBA-CHAMIGO-----------X500GR-1-1238.jpg?v=637236237196900000" }),
    new Yerba( { marca: "Cruz de malta", precio: 212, img: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2010305_f.jpg" }),
    new Yerba( { marca: "Taragui", precio: 247, img: "https://www.uruguayeces.com/1349-large_default/yerba-mate-taragui-12-kg.jpg" }),
    new Yerba( { marca: "Mañanita", precio: 250, img: "https://hiperlibertad.vteximg.com.br/arquivos/ids/170437-1000-1000/YERBA-ma-anitas-1-KG-1-11111.jpg?v=637414176189900000" }),
    new Yerba( { marca: "Unión", precio: 254, img: "https://www.deliargentina.com/image/cache/catalog/product/alimentacion/yerba-mate-union-suave-500gr/yerba-mate-union-suave-500gr-gr-1000x1000.png" }),
    new Yerba( { marca: "Cbsé", precio: 256, img: "https://www.cbse.com.ar/wp-content/uploads/2015/03/CBS%C3%A9-Hierbas-Serranas-1k.png" }),
    new Yerba( { marca: "Playadito", precio: 302, img: "https://jumboargentina.vtexassets.com/arquivos/ids/609096/Yerba-Mate-Playadito-Suave-X1kg-1-854539.jpg?v=637388478780800000" }),
    new Yerba( { marca: "La Merced", precio: 382, img: "https://www.latinfoodsmarket.com/img-YMDeCampoLaMerced500g1.jpg" }),
]

let contenedor = $('#productos');
contenedor.html("")

for (const producto of almacen) {
    
    contenedor.append(`<div><h3> ${producto.marca}</h3>
                            <img src="${producto.img}" width="100px">
                            <b> Precio: $ ${producto.precio}</b>
                            <button id="btnAgregar${producto.id}">Agregar al carrito🛒</button>
                            </div>`
    )
}

let carrito = [];

    $('#btnAgregar1').on('click', function () {agregarElemento (1)})

    $('#btnAgregar2').on('click', function () {agregarElemento (2)})

    $('#btnAgregar3').on('click', function () {agregarElemento (3)})

    $('#btnAgregar4').on('click', function () {agregarElemento (4)})

    $('#btnAgregar5').on('click', function () {agregarElemento (5)})

    $('#btnAgregar6').on('click', function () {agregarElemento (6)})

    $('#btnAgregar7').on('click', function () {agregarElemento (7)})

    $('#btnAgregar8').on('click', function () {agregarElemento (8)})

    $('#btnAgregar9').on('click', function () {agregarElemento (9)})

    $('#btnAgregar10').on('click', function () {agregarElemento (10)})

    function agregarElemento(productoID) {
        let producto = almacen.find((p => p.id == productoID))
        
        producto = almacen.find(function (producto) {
            if(producto.id == productoID)
                return true;
            else
                return false;
        })
    
        let estaSeguro = prompt ("¿Usted desea continuar con esta compra? Por favor, responder en minúsculas.");
        if ((estaSeguro !== "") && (estaSeguro === "no")) {
            alert ("¡Qué lástima, nos vemos pronto!");
        }
        else if ((estaSeguro === "si") || (estaSeguro === "sí")) {
            carrito.push(producto);
            saveLocal(carrito)
            mostrarCarrito();
            alert("Se ha agregado el producto: " + producto.marca);
        }
        else {
            alert ("Algo ha salido mal. Por favor, resfrecá la pantalla y volvé a intentarlo.");
        }
    }

function saveLocal(param){
    sessionStorage.setItem("Yerba", JSON.stringify(param));
}

function mostrarCarrito() {
    let contenedor = document.getElementById("carrito");
    let precioTotal = 0


    contenedor.innerHTML = "";
    htmlString = "<h3>CARRITO</h3> <ul>";
    for(const id in carrito ) {
        let producto = carrito[id]
        htmlString += `
            <li> <h4>${producto.marca}, $ ${producto.precio}
            <button id="carrito_${id}" class="eliminar"> 🗑️</button>
            </li></h4>`
        precioTotal += producto.precio;
    }
    htmlString += "</ul>";

    contenedor.innerHTML = htmlString;

    let contenedorPrecio = document.getElementById("precio");
    contenedorPrecio.innerHTML = `<h3>TOTAL: ${precioTotal}</h3>
    <button id="btnFinalizar">Finalizar compra</button>`;

    let botonFinalizar = document.getElementById("btnFinalizar")
    botonFinalizar.onclick = () =>{finalizarCompra()}

function finalizarCompra() {
    alert ("El monto a pagar es $" + precioTotal)
}

    loadEliminar();
}

function loadEliminar() {
    let botones = document.getElementsByClassName("eliminar");
    for(const boton of botones) {

        boton.onclick = () => {
            let id = boton.getAttribute("id");
            idNumber = id.split("_")[1]
            carrito.splice(idNumber, 1)
            
            mostrarCarrito()
        }
    }
}