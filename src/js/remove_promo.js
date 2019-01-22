function rmvPromo(){

    var idInput = document.querySelector("#suppr_id");

    var btnRmv = document.querySelector("#dltpromo");
    btnRmv.addEventListener("click",function(e){
        e.preventDefault();
        deletePromotion(idInput.value);
    });

    function deletePromotion(id) {                  // function qui supprime les promotions
        fetch("http://api-students.popschool-lens.fr/api/promotions" + '/' + id,{
            method: 'DELETE'
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}
rmvPromo()

export default rmvPromo;