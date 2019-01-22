import fetchPromo from './fetch.js';

function addPromo(){
    var name = document.querySelector("#promo_name");
    var startDate = document.querySelector("#promo_start_date");
    var endDate = document.querySelector("#promo_end_date");
    var addBtn = document.querySelector("#addpromo");
    addBtn.addEventListener("click",function(e){
        e.preventDefault();
        post()
    });

    function post(){
        fetch("http://api-students.popschool-lens.fr/api/promotions",{
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
                name: name.value,
                startDate: startDate.value,
                endDate: endDate.value,
                students: []
            })
        });
    }
}
addPromo();
export default addPromo;
