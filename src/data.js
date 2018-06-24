// let usuarios = [];
window.computeUsersStats = (users, progress) => {
  let tabla = ''; // Tabla para mostrar los datos
  let cont = 0; // Contador
  // Recorrer a todos los ususarios para obtener sus datos de progreso
  // id conecta usuarios con progreso
  users.forEach(function(element) {
    cont++;
    const progreso = progress[element.id];
    // Variables para guardar cada dato que se necesita mostrar
    // También servirán para calcular lo que se pide
    let lecturaCompletado = 0;
    let lecturaNoCompletado = 0;
    let preguntaCompletado = 0;
    let preguntaNoCompletado = 0;
    let preguntaPuntaje = 0;
    let practicaCompletado = 0;
    let practicaNoCompletado = 0;
    let contadorPuntaje = 0;
    // comienzo del ciclo for.. in hasta llegar a lo más profundo del objeto
    for (let keyCourse in progreso) {
      let curso = progreso[keyCourse];
      for (let keyPreUnidad in curso) {
        let preUnidad = curso[keyPreUnidad];
        for (let keyUnidad in preUnidad) {
          let unidad = preUnidad[keyUnidad];
          for (let keyParte in unidad) {
            if (keyParte === 'parts') {
              let parte = unidad[keyParte];
              for (let keyParteFinal in parte) {
                let parteFinal = parte[keyParteFinal];
                switch (parteFinal.type) { // switch para contar la completitud de lecturas, ejercicios y quizzes
                case 'read': 
                  if (parteFinal.completed === 1) {
                    lecturaCompletado++;
                  } else {
                    lecturaNoCompletado++;
                  }
                  break;
                case 'quiz':
                  if (parteFinal.completed === 1) {
                    preguntaCompletado++;
                  } else {
                    preguntaNoCompletado++;
                  }
                  if (parteFinal.score === undefined) {
                    parteFinal.score = 0;
                  }
                  preguntaPuntaje += parteFinal.score;
                  contadorPuntaje++;
                  break;
                case 'practice':
                  if (parteFinal.completed === 1) {
                    practicaCompletado++;
                  } else {
                    practicaNoCompletado++;
                  }
                  break;
                default:
                  // console.log('holi');
                }
              }
            }
          }
        }
      }
    }
  });
};

// Función de ordenado
window.sortUsers = (users, orderBy, orderDirection) => {

};

// Función de búsqueda
window.filterUsers = (users, search) => {
};
