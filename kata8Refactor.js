const multiplicationTable = maxValue => {
  let table = createTable(maxValue);
  return tableToString(table);
};

const createTable = maxValue => {
  const table = [];
  for (let i = 1; i <= maxValue; i++) {
    table.push(createRow(i, maxValue));
  }
  return table;
}

const createRow = (currentIndex, maxValue) => {
  const row = [];
  for (let i = 1; i <= maxValue; i++) {
    row.push(currentIndex * i);
  }
  return row;
}

const tableToString = table => {
  let finalTable = '';
  for (let row of table) {
    finalTable += row.join(' ') + '\n';
  }
  return finalTable;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));