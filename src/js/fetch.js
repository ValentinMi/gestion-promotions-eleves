import displayPromo from './display_promo.js';

function fetchPromo(){

    var promotions;
    var students;

    // We fetch the promo data from the api
   fetch("http://api-students.popschool-lens.fr/api/promotions")
       .then(response => response.json())
       .then(promotionData => {
           promotions = promotionData["hydra:member"];
           var dataPromo = document.querySelector("#data-promo");
           dataPromo.dataset.promo = JSON.stringify(promotions);
           displayPromo();
           
           fetch("http://api-students.popschool-lens.fr/api/students")
                .then(response => response.json())
                .then(studentData => {
                    students = studentData["hydra:member"];
                    var dataStud = document.querySelector("#data-stud");
                    dataStud.dataset.student = JSON.stringify(students);
           
       })
        })
   }

export default fetchPromo;