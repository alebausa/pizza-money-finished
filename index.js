const tbody = document.getElementById('calculator');
let id = 1;

function createNewRow() {
  id = id + 1;
  const newRow = document.createElement('tr');
  newRow.id = id;
  const name = prompt("What's your cheap friend's name?")
  newRow.innerHTML = `
    <td>${name}</td>
    <td><input class="quantity" type="number" value="0" /></td>
    <td><button onclick="deleteRow(${id})">❌</button></td>
  `
  tbody.appendChild(newRow);
}

function getTotal() {
  let total = 0;
  const quantities = document.getElementsByClassName('quantity');
  [...quantities].forEach(elem => total = total + parseInt(elem.value))
  const span = document.getElementById('total');
  span.innerHTML = total;
}

function deleteRow(num) {
  const tr = document.getElementById(num);
  tbody.removeChild(tr)
  getTotal();
}



