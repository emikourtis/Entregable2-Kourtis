  
function procesarPedido() {
  const contenedorCompra = document.querySelector('#lista-compra tbody');
  contenedorCompra.innerHTML = '';

  carrito.forEach((prod) => {
    const { id, nombre, precio, cantidad, img } = prod;
    const subTotal = precio * cantidad;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img class="img-fluid img-carrito" src="${img}" /></td>
      <td>${nombre}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>${subTotal}</td>
    `;

    contenedorCompra.appendChild(row);
  });

  const totalProceso = document.querySelector('#totalProceso');
  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  totalProceso.textContent = total;
}