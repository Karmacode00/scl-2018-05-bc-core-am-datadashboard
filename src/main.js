const cohortsJSON = '../data/cohorts.json'; // ruta al archivo
var data = [];
fetch(cohortsJSON) // acá le digo de donde va  a tomar los datos
  .then(response => response.json())
  .then(data => {
    // Dibujamos el grupo de alumnas
    var combo_cohorts = `<label for="cohorts_select">Cohorts</label>
    <select onchange="seleccionar_cohorts()" 
    class="form-control" id="cohorts_select">`;
    data.forEach(function(element) {
      combo_cohorts += '<option value="' + element.id + '">' + element.id + '</option>';
    });
    combo_cohorts += '</select>';
    document.getElementById("cohorts").innerHTML = combo_cohorts;
  })

  
function seleccionar_cohorts() {
  const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';    //ruta al archivo
  var data = [];
  fetch(progressJSON) // acá le digo de donde va  a tomar los datos
    .then(response => response.json())
    .then(data => {
      var progress = data;
      // Begin: usuarios
      const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';    //ruta al archivo
      var data = [];
      fetch(usersJSON) // acá le digo de donde va  a tomar los datos
        .then(response => response.json())
        .then(data => {
          // Dibujamos el grupo de alumnas
          const result = data.filter(user => user.signupCohort == document.getElementById("cohorts_select").value);
          computeUsersStats(result, progress);
        });
      // End: usuario
    });
}