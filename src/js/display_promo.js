function displayPromo(){

    // We declare the globals vars
    var content = document.querySelector("#content")
    var btnSwitch = 0;
    
    // We take the JSON data from the data div
    var dataPromo = document.querySelector("#data-promo");
    var dataStud = document.querySelector("#data-stud");
    var promotions = JSON.parse(dataPromo.dataset.promo);
    // var students = JSON.parse(dataStud.dataset.student);

    // We create a function for display object's infos
    function printPromo(){
    promotions.forEach(function(item,index){
        index = item.id;
        // We create bootstrap's cards for each promotions
        var cardDiv = document.createElement('div');
        cardDiv.className = "card text-white bg-dark mb-3"
        cardDiv.style = "max-width: 18rem";
        cardDiv.id = "card";
        cardDiv.dataset.name = item.name;
        content.appendChild(cardDiv);
        
        // We create cards's header for display promotions's id
        var cardHeader = document.createElement('div');
        cardHeader.classname = "card-header";
        cardDiv.appendChild(cardHeader);
        
        // We put promotions's name into the header
        cardHeader.innerHTML = `<h3>Promotion ${index}</h3>`;
        
        // We create cards's body for display promotions's infos
        var cardBody = document.createElement('div');
        cardBody.className = "card-body";
        cardBody.id = "card-body"  + index;
        cardDiv.appendChild(cardBody);
        
        // We create h5 element for display promotions's name
        var itemName = document.createElement('h5');
        itemName.className = "card-title";
        cardBody.appendChild(itemName);
        itemName.innerText = "Name: " + item.name;

        // We create p element for display promotions's start and end date
        var itemStart = document.createElement('p');
        itemStart.className = "card-text";
        cardBody.appendChild(itemStart)
        itemStart.innerText = "Start: " + item.startDate;
        var itemEnd = document.createElement('p');
        itemEnd.className = "card-text";
        cardBody.appendChild(itemEnd);
        itemEnd.innerText = "End: " + item.endDate;

        // We create the button who'll display the students table
        var tableButton = document.createElement('button');
        tableButton.id = "table_button" + index
        tableButton.className = "btn btn-light btn-img";
        tableButton.addEventListener("click",genTable);
        cardBody.appendChild(tableButton);
        
        // We create table generator function
            function genTable(){
                if(btnSwitch == 0){
                
                // We create a table header
                var table = document.createElement('table');
                table.className = "table";
                table.id = `table${index}`;
                cardBody.appendChild(table);
            
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
                th2.innerText = "Prénom";
                tr.appendChild(th2);
            
                // Button col
                var th3 =  document.createElement('th');
                th3.scope = 'col';
                th3.innerText = "";
                tr.appendChild(th3);

                btnSwitch = 1;
                }
                else{
                cardBody.removeChild(document.querySelector(`#table${index}`));
                btnSwitch = 0;
                console.log(btnSwitch);
                }
            }
        
    });
        }
    printPromo();
}

export default displayPromo;
