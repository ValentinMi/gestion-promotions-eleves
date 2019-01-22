function genTable(){

    var data = document.querySelector("#data-promo");

    // We take the JSON data from the data div
    var promo = JSON.parse(data.dataset.promo);
    var card = document.querySelector("#card-body");


    // We create a table header
    var table = document.createElement('table');
    table.className = "table";
    card.appendChild(table);

    var thead = document.createElement('thead');
    thead.className = "thead-dark";
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    var th = document.createElement('th');
    th.scope = "col";
    th.innerText = "#";
    tr.appendChild(th);

    // Name col
    var th1 = document.createElement('th');
    th1.scope = "col";
    th1.innerText = "Nom";
    tr.appendChild(th1);

    // Firstname col
    var th2 = document.createElement('th');
    th2.scope= "col";
    th2.innerText = "Prénom"
    tr.appendChild(th2);

    // Button col
    var th3 =  document.createElement('th');
    th3.scope = 'col';
    th3.innerText = "";
    tr.appendChild(th3);

    }



    //     <table class="table">
        //   <thead class="thead-dark">
        //     <tr>
        //       <th scope="col">#</th>
        //       <th scope="col">First</th>
        //       <th scope="col">Last</th>
        //       <th scope="col">Handle</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <th scope="row">1</th>
        //       <td>Mark</td>
        //       <td>Otto</td>
        //       <td>@mdo</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">2</th>
        //       <td>Jacob</td>
        //       <td>Thornton</td>
        //       <td>@fat</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">3</th>
        //       <td>Larry</td>
        //       <td>the Bird</td>
        //       <td>@twitter</td>
        //     </tr>
        //   </tbody>
        // </table>