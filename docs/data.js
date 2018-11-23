let usuarios = [];
window.computeUsersStats = (users, progress) => {
  let tabla = ''; // Tabla para mostrar los datos
  let cont = 0; // Contador
  // Recorrer a todos los ususarios para obtener sus datos de progreso
  // id conecta usuarios con progreso
  users.forEach(function(element) {
    cont++;
    let progreso = progress[element.id];
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
    };

    // Llevamos a porcentaje los datos obtenidos
    // En caso de no encontrar dato, lo considera 0
    let lectura = (lecturaCompletado / (lecturaCompletado + lecturaNoCompletado)) * 100;
    if (isNaN(lectura)) {
      lectura = 0;
    }
    let quiz = (preguntaCompletado / (preguntaCompletado + preguntaNoCompletado)) * 100;
    if (isNaN(quiz)) {
      quiz = 0;
    }
    let practica = (practicaCompletado / (practicaCompletado + practicaNoCompletado)) * 100;
    if (isNaN(practica)) {
      practica = 0;
      let promedioPuntaje = preguntaPuntaje / contadorPuntaje;
      if (isNaN(promedioPuntaje)) {
        promedioPuntaje = 0;
      }

      let porcentaje = porcentajeProgress(element.id, progress);
      if (isNaN(porcentaje)) {
        porcentaje = 0;
      }
      // Pusheamos los datos a un objeto que los contiene
      usuarios.push({
        lectura: lectura,
        quiz: quiz,
        preguntaPuntaje: preguntaPuntaje,
        promedioPuntaje: promedioPuntaje,
        practica: practica,
        nombre: element.name,
        id: element.id,
        porcentaje: porcentaje
      });
    };

    if (users.length > 0) {
      showTable(usuarios);
    } else {
      let mensaje = `<div class="alert alert-danger" role="alert">
      <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
      <span class="sr-only">Error:</span>
      No se encontraron resultados
      </div>`;
      document.getElementById('alumnas').innerHTML = mensaje;
    }
  });
  
  window.showTable = (usuarios) => {
    let tabla = '';
    for (var i = 0; i < usuarios.length; i++) {
      let usuarioTemporal = usuarios[i];
      tabla += '<tr><td>' + (i + 1) + '</td><td>' + usuarioTemporal.nombre + '</td><td>' + usuarioTemporal.porcentaje + '%</td><td>%' + Math.round(usuarioTemporal.lectura) + '%</td><td>%' + Math.round(usuarioTemporal.quiz) + '%</td><td>%' + Math.round(usuarioTemporal.practica) + '%</td><td>' + Math.round(usuarioTemporal.promedioPuntaje) + '</td></tr>';
    }
    document.getElementById('alumnas').innerHTML = tabla;
  };
  
  // Si no hay porcentaje que de cero
  window.porcentajeProgress = (id, progress) => {
    try {
      let progressObj = progress[id];
      return progressObj.intro.percent;
    } catch (err) {
      return 0;
    }
  };

  // Función de ordenado
  // window.ordenar = (tipo, direccion) => {
  //   sortUsers(usuarios, tipo, direccion);
  // };

  // Ordenamos con metodo burbuja (bubble sort o bubbling event)
  // Forma de ordenar sacada de internet, mueve los datos 
  // Ascendente 
  window.sortUsers = (users, orderBy, orderDirection) => {
    if (orderBy === 'porcentaje' && orderDirection === 'asc') {
      for (var i = 1; i < users.length; i++) {
        for (var j = 0; j < (users.length - i); j++) {
          if (users[j].porcentaje < users[j + 1].porcentaje) {
            k = users[j + 1];
            users[j + 1] = users[j];
            users[j] = k;
          }
        }
      }
    }
    
    if (orderBy === 'lectura' && orderDirection === 'asc') {
      for (var i = 1; i < users.length; i++) {
        for (var j = 0; j < (users.length - i); j++) {
          if (users[j].lectura < users[j + 1].lectura) {
            k = users[j + 1];
            users[j + 1] = users[j];
            users[j] = k;
          }
        }
      }
    }
    
    if (orderBy === 'quiz' && orderDirection === 'asc') {
      for (var i = 1; i < users.length; i++) {
        for (var j = 0; j < (users.length - i); j++) {
          if (users[j].quiz < users[j + 1].quiz) {
            k = users[j + 1];
            users[j + 1] = users[j];
            users[j] = k;
          }
        }
      }
    }
    
    if (orderBy === 'practica' && orderDirection === 'asc') {
      for (var i = 1; i < users.length; i++) {
        for (var j = 0; j < (users.length - i); j++) {
          if (users[j].practica < users[j + 1].practica) {
            k = users[j + 1];
            users[j + 1] = users[j];
            users[j] = k;
          }
        }
      }
    }
    
    showTable(users);  
  }; 

  // Filtrado usuarios (buscar, según la barra)
  // window.filtrar = (filtro) => {
  // console.log(filtro);
  // filterUsers(usuarios, filtro);
  // };

  window.filterUsers = (users, search) => {
    let usuariosTemporal = [];
    let usuariosAux = [];
    for (var i = 0; i < users.length; i++) {
      usuariosAux.push(users[i]);
    }
    let encontrado = false;
    for (var i = 0; i < users.length; i++) {
      let usuarioTemporal = users[i];
      if (usuarioTemporal.nombre.indexOf(search) > -1) {
        usuariosTemporal.push(usuarioTemporal);
        encontrado = true;
      }      
    }
    usuarios = usuariosAux;
    if (encontrado) {
      showTable(usuariosTemporal);
    } else {
      showTable(usuarios);
    }    
  };
};