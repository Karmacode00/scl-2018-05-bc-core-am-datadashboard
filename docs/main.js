// Generar menú con los cohorts
const cohortsJSON = '../data/cohorts.json'; // ruta al archivo
let data = [];
fetch(cohortsJSON) // acá le digo de donde va  a tomar los datos
  .then(response => response.json())
  .then(data => {
    // Dibujamos el grupo de cohorts resultante de forEach
    // Se construyen los elementos del menú
    let grupoCohorts = `<label for='cohorts_select'>Cohorts</label>
    <select onchange='seleccionarCohorts()' 
    class='form-control' id='cohortSelect'>`; // Evento onchange, damos id
    data.forEach(function(element) { // Cada iteración va a crear una opción sacando el id
      grupoCohorts += '<option value="' + element.id + '">' + element.id + '</option>';
    });
    grupoCohorts += '</select>'; // Cierro la estructura de select
    document.getElementById('cohorts').innerHTML = grupoCohorts;
  });

// Al seleccionar el cohort que tiene información, muestra esos datos  
function seleccionarCohorts() { // Inicio progress (progreso)
  const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; // ruta al archivo
  fetch(progressJSON) // acá le digo de donde va  a tomar los datos de progress
    .then(response => response.json()) // Estructura fetch 
    .then(data => { // aqui recibo los datos de progreso del JSON
      const progress = data;
      // Inicio usuarios (users)
      const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'; // ruta al archivo
      var data = [];
      fetch(usersJSON) // acá le digo de donde va  a tomar los datos de user
        .then(response => response.json())
        .then(data => { // aqui recibo los datos de user del JSON
          // Grupo de alumnas
          let users = data.filter(user => user.signupCohort === document.getElementById('cohortSelect').value);
          computeUsersStats(users, progress); // Linkeo a la función
        });
      // Terminado usuarios
    });
}

