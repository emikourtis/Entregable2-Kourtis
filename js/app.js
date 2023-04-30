
const stockProductos = [
    {
        "id": 1,
        "nombre": "Coca Cola x1500cc",
        "precio": 400,
        "desc": "Bebidas",
        "img": "./img/coca-cola-1500-cc.jpg",
        "cantidad": 1
        },
    {
        "id": 2,
        "nombre": "Coca Cola Cero x1500cc",
        "precio": 400,
        "desc": "Bebidas",
        "img": "./img/coca-cola-zero.jpg",
        "cantidad": 1
        },
    {
        "id": 3,
        "nombre": "Pepsi x1500cc",
        "precio": 350,
        "desc": "Bebidas",        
        "img": "./img/pepsi.jpg",
        "cantidad": 1
    },
    {
        "id": 4,
        "nombre": "Agua Mineral x2000cc",
        "precio": 300,
        "desc": "Bebidas",
        "img": "./img/agua2lt.jpg",
        "cantidad": 1
    },
    {
        "id": 5,
        "nombre": "Heineken Lata x473cc",
        "precio": 450,
        "desc": "Bebidas",
        "img": "./img/heineken.jpg",
        "cantidad": 1
    },
    {
        "id": 6,
        "nombre": "Imperial Lata x473cc",
        "precio": 350,
        "desc": "Bebidas",
        "img": "./img/imperial.jpg",
        "cantidad": 1
    },
    {
        "id": 7,
        "nombre": "Schneider Lata x473cc",
        "precio": 300,
        "desc": "Bebidas",
        "img": "./img/schneider.jpg",
        "cantidad": 1
    },
    {
        "id": 8,
        "nombre": "Tirabuzon x500gr",
        "precio": 300,
        "desc": "Fideos",
        "img": "./img/fideo-luchetti.jpg",
        "cantidad": 1
    },
    {
        "id": 9,
        "nombre": "Tirabuzon x500gr",
        "precio": 350,
        "desc": "Fideos",
        "img": "./img/fideos-matarazzo.jpg",
        "cantidad": 1
    },
    {
        "id": 10,
        "nombre": "Tallarin Don Vicente x500gr",
        "precio": 450,
        "desc": "Fideos",
        "img": "./img/donvicente.jpg",
        "cantidad": 1
    },
    {
        "id": 11,
        "nombre": "Arroz parboir Luchetti x500gr",
        "precio": 200,
        "desc": "Arroz",
        "img": "./img/arroz-lucheti.jpg",
        "cantidad": 1
    },
    {
        "id": 12,
        "nombre": "Arroz Gallo Oro caja x1kg",
        "precio": 390,
        "desc": "Arroz",
        "img": "./img/oro1kg.jpg",
        "cantidad": 1
    },
    {
        "id": 13,
        "nombre": "Arroz Gallo Doble Carolina x1kg",
        "precio": 550,
        "desc": "Arroz",
        "img": "./img/gallo-doble.jpg",
        "cantidad": 1
    },
    {
        "id": 14,
        "nombre": "Bizcochos de grasa",
        "precio": 190,
        "desc": "9 de oro",
        "img": "./img/9deoro.jpg",
        "cantidad": 1
    },
    {
        "id": 15,
        "nombre": "Playadito x500gr",
        "precio": 590,
        "desc": "Yerba",
        "img": "./img/playadito.jpg",
        "cantidad": 1
    },
    {
        "id": 16,
        "nombre": "Mayonesa x500gr",
        "precio": 390,
        "desc": "Natura",
        "img": "./img/mayonatura.jpg",
        "cantidad": 1
    },
    {
        "id": 17,
        "nombre": "Savora x250gr",
        "precio": 290,
        "desc": "Savora",
        "img": "./img/savora.jpg",
        "cantidad": 1
    },
    {
        "id": 18,
        "nombre": "Ketchup x250gr",
        "precio": 390,
        "desc": "Hellmans",
        "img": "./img/ketchup.jpg",
        "cantidad": 1
    },
    {
        "id": 19,
        "nombre": "Te Tilo x25 saq",
        "precio": 350,
        "desc": "La Virginia",
        "img": "./img/tetilo.jpg",
        "cantidad": 1
    },
    {
        "id": 20,
        "nombre": "Aceite x900ml",
        "precio": 590,
        "desc": "Cocinero",
        "img": "./img/cocinero.jpg",
        "cantidad": 1
    },
    {
      "id": 21,
      "nombre": "Pan Artesano x500gr",
      "precio": 990,
      "desc": "Bimbo",
      "img": "./img/lactal.jpg",
      "cantidad": 1
  },
  {
    "id": 22,
    "nombre": "Pan Lactal blanco x500gr",
    "precio": 590,
    "desc": "Bimbo",
    "img": "./img/lactal2.jpg",
    "cantidad": 1
},
{
  "id": 23,
  "nombre": "Mermelada campañola v/sabores",
  "precio": 590,
  "desc": "Campañola",
  "img": "./img/mermelada2.jpg",
  "cantidad": 1
},
{
  "id": 24,
  "nombre": "Mermelada BC v/sabores",
  "precio": 690,
  "desc": "Campañola",
  "img": "./img/mermelada.jpg",
  "cantidad": 1
},
{
  "id": 25,
  "nombre": "Lavandina x1lt",
  "precio": 190,
  "desc": "Ayudin",
  "img": "./img/ayudin.jpg",
  "cantidad": 1
},
{
  "id": 26,
  "nombre": "Papel Hig. x80mts",
  "precio": 790,
  "desc": "Higienol",
  "img": "./img/higienol.jpg",
  "cantidad": 1
},
{
  "id": 27,
  "nombre": "Papel Hig. d/h",
  "precio": 690,
  "desc": "Higienol",
  "img": "./img/hig80.jpg",
  "cantidad": 1
},
{
  "id": 28,
  "nombre": "Papel cocina Sussex Clasico",
  "precio": 390,
  "desc": "Sussex",
  "img": "./img/sussex.jpg",
  "cantidad": 1
}
]

let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}
/*
const URL = 'productos.JSON';

const pedirProductos = async () =>{
    resp = await fetch(URL)
    const data = await resp.json();

    data.forEach((prod)=>{
        contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
    })
}
pedirProductos();
*/

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3 m-3 ms-4" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-success" onclick="agregarProducto(${id})">Agregar al carrito</button>
    </div>
  </div>
    `;
  }
});


const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }

