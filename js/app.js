
//carrito empieza con un array vacio al que le agregaremos productos o le sacaremos
let carrito = [];

//capturo los id del html y guardo en constantes
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')
const contenedor = document.querySelector("#contenedor");

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {


  pedirProductos();
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();
  if(activarFuncion){
  document.querySelector("#activarFuncion").click(procesarPedido);
}
});
//si se llena el formulario correctamente y clickea el boton se envia la compra
if (formulario) {
  formulario.addEventListener('submit', enviarCompra)
};

//click en vaciar carrito
if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
};
//si el carrito esta vacio se muestra un mensaje
if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length == 0) {
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
};

let stockProductos
//FETCH y async await para mostrar los productos en pantalla

const URL = "./productos.json";
const pedirProductos = async () => {
  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    stockProductos = data

    data.forEach((prod) => {
      contenedor.innerHTML += `
        <div class="card mt-3" style="width: 18rem;">
          <img class="card-img-top mt-2" src="${prod.img}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">Precio: ${prod.precio}</p>
            <p class="card-text">Descripcion: ${prod.desc}</p>
            <p class="card-text">Cantidad: ${prod.cantidad}</p>
            <button class="btn btn-primary" onclick="agregarProducto(${prod.id})">Comprar Producto</button>
          </div>
        </div>
      `;
    });
  } catch (err) {
    console.error('Ocurrió un error: ' + err);
  } finally {
    console.log('llamada a la API realizada con exito')
  }
};






//agrego productos al carrito
const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id == id)

  if (existe) {
    carrito.forEach(prod => {
      if (prod.id == id) {
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find(prod => prod.id == id)
    if (item) {
      carrito.push(item)
    }
  }
  mostrarCarrito()

};
//muestro carrito
const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div id="imagen-carrito">
        <img class="img-thumbnail img-carrito" src="${img}" style="width: 30%"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger" style="margin-bottom:9px" onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  };
  //si no agregaste productos muestro el msj que no se agrego nada
  if (carrito.length === 0) {
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  }
  //muestro cantidad de productos
  carritoContenedor.textContent = carrito.length;
  //sumo precios
  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};
//set item storage
function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
//eliminar productos de carrito
function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
};



//proceder con la compra
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;

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

  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
};

function enviarCompra(e) {
  e.preventDefault()
  const cliente = document.querySelector('#cliente').value
  const email = document.querySelector('#correo').value
  //validacion formulario
  if (email === '' || cliente == '') {
    Swal.fire({
      title: "¡Debes completar tu email y nombre!",
      text: "Rellena el formulario",
      icon: "error",
      confirmButtonText: "Aceptar",
    })
  } else {

    const btn = document.getElementById('button');

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

};

