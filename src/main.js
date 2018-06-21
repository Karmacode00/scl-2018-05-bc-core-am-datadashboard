// Generar menú con los cohorts
const cohortsJSON = '../data/cohorts.json'; // ruta al archivo json
var data = [];
fetch(cohortsJSON) // acá le digo de donde va  a tomar los datos
  .then(response => response.json()) // comienza estructra fetch
  .then(data => {
    // Dibujamos el grupo de cohorts resultante de forEach  
    var groupCohort = `<label for="selectionCohort">Cohorts</label>
    <select onchange="selectionCohort()"
    class="form-control" id="selectionCohort">`; // Evento onchange, damos id
    data.forEach(function(element) { // Cada iteración va a crear una opción sacando el id
      groupCohort += '<option value="' + element.id + '">' + element.id + '</option>';
    });
    groupCohort += '</select>'; // Cierro la estructura de select
    document.getElementById('cohorts').innerHTML = groupCohort; // Imprime en html los cohorts
  });
  
// Al seleccionar el cohort que tiene información, muestra esos datos
function selectionCohort() { // Inicio progress (progreso)
  const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; // ruta al archivo
  // var data = []; 
  fetch(progressJSON) // acá le digo de donde va  a tomar los datos
    .then(response => response.json()) // Estructura fetch
    .then(data => {
      var progress = data;
      // Inicio usuarios (users)
      const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'; // ruta al archivo
      var data = [];
      fetch(usersJSON) // acá le digo de donde va  a tomar los datos
        .then(response => response.json())
        .then(data => {
          // Dibujamos el grupo de alumnas
          const result = data.filter(user => user.signupCohort === document.getElementById('selectionCohort').value);
          // Se une la función de data js, que entrega datos de completitud
          computeUsersStats(result, progress, courses);
          console.log(result)
        });
      // Terminado usuarios
    });
}