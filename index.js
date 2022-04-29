function getTotal(){
  const quantities = document.getElementsByClassName('quantity');
  let total = 0;
  [...quantities].forEach((elem) => total = total + parseInt(elem.value));
  const totalSpan = document.getElementById('total');
  totalSpan.innerHTML = total;
}

let id = 2;
const table = document.getElementById('calculator');

function createNewRow(){
  const name = prompt("What's your friend's name?");
  const newRow = document.createElement('tr');
  newRow.id = id;
  newRow.innerHTML = `<td>${name}</td>
          <td><input class="quantity" type="number" value="0"/></td>
          <td><button onclick="deleteRow(${id})">❌</button></td>`;
  table.appendChild(newRow);
  console.log(table)
  id = id + 1;
}

function deleteRow(passId){
  console.log(passId)
  const row = document.getElementById(passId);
  table.removeChild(row);
  getTotal();
}