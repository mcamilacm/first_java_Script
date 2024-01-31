precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const quantityElement = document.getElementById("quantity");
const totalValor = document.getElementById("totalPrice");

function adicionarCantidad() {
  const number = Number(quantityElement.innerHTML);
  const add = number + 1;
  quantityElement.innerHTML = add;
  totalValor.innerHTML = precio * add;
}

function restarCantidad() {
  const number = Number(quantityElement.innerHTML);
  const substract = number - 1;
  quantityElement.innerHTML = substract;
  totalValor.innerHTML = precio * substract;
}
