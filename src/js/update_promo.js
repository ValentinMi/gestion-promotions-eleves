function updatePromo(){
    var name = document.querySelector("#promo_name_update");
    var startDate = document.querySelector("#promo_start_date_update");
    var endDate = document.querySelector("#promo_end_date_update");
    var idInput = document.querySelector("#update_id");
    var updtBtn = document.querySelector("#updatepromo");
    updtBtn.addEventListener("click",function(e){
        e.preventDefault();
        update(idInput.value);
    });

    function update(id){
        fetch("http://api-students.popschool-lens.fr/api/promotions" + '/' + id,{                                                // récupere l'url de l'api et ajoute comme parrametre un PUT qui permet de modifier des promotions en fonctions des information passer dans les champs
            method: 'PUT',
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
updatePromo();

export default updatePromo;
    











