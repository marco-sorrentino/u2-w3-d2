class Pagination {
  constructor(items, pageSize) {
    this.items = items;
    this.pageSize = pageSize;
  }
}

class Members {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

let members = [
  new Members("Marco", "Sorrentino", 26),
  new Members("Gino", "Strada", 30),
  new Members("Andrea", "Lardi", 10),
  new Members("Pasquale", "Mora", 40),
  new Members("Alessandro", "Smuro", 34),
  new Members("Filippo", "Guffanti", 21),
  new Members("Alcide", "Gasperi", 78),
  new Members("Giulia", "Coturno", 12),
  new Members("Annalisa", "Stabile", 30),
  new Members("Fiona", "Levanto", 84),
];

const bottone = document.getElementById("bottone");
const table = document.getElementById("tabella");

bottone.addEventListener("click", () => {
  for (let i = 0; i < members.length; i++) {
    let tbl = document.getElementById("tabella");
    let hrow = document.createElement("tr");
    let row2 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.innerHTML = members[i].name;
    td2.innerHTML = members[i].surname;
    td3.innerHTML = members[i].age;
    row2.appendChild(td1);
    row2.appendChild(td2);
    row2.appendChild(td3);
    tbl.appendChild(hrow);
    tbl.appendChild(row2);
    document.body.appendChild(tbl);
  }
});
