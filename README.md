# Data Dashboard

## Introducción

Laboratoria utiliza diferentes datos para medir el progreso de sus alumnas,
estos datos son utilizados por las Training Managers (TMs) de manera directa para
visualizar y conocer el progresor de los diferentes grupos y alumnas.
Para poder analizar estos datos, debe ser posible que las TMs accedan a ellos de manera
cómoda y clara, es por esto que el desarrollo de un Data Dashboard viene a complementar
otras plataformas de acceso y visualización de data.

## Qué es y para qué sirve

Un dashboard [wikipedia](https://goo.gl/P7PF4y)
es un resumen gráfico de varias piezas deinformación importante, generalmente utilizadas para dar una visión general de una empresa o de un servicio. Así, tenemos dashboards como los de:

* [Google Analytics](https://assets.econsultancy.com/images/resized/0003/3813/mobile_commerce_dashboard-blog-full.png)
  para visualizar la data de tráfico de sitios web.

* [Mailchimp](https://blog.mailchimp.com/wp-content/uploads/2016/11/Dashboard-view-3-Copy-1008x768.jpg)
  para visualizar el desempeño de campañas de mercadeo digital por correo
  electrónico.

* [Quickbooks](https://quickbooks.intuit.com/content/dam/intuit/quickbooks/branding/make-organization-easy-visual.png)
  para visualizar la información financiera de una empresa.

Estos sitios fueron creados para la visualización de datos de interés, con el fin de poder ver de manera más clara lo que sus usuarios necesitaban.

### User Experience Design

#### 1) Definición del producto

Los principales usuarios de este Data Dashboard son las TMs de Laboratoria, en este caso particular, la principal usuaria es Valentina Smith, TM de Laboratoria Santiago de Chile.
En base a entrevistas con ella y al feedback entregado a un skecth y a un prototipo de alta fidelidad, pudimos llegar a algunas conclusiones sobre lo que debíamos hacer para mejorar su experiencia al visualizar y manejar la data de Laboratoria.

Lo que Valentina necesitaba, era poder acceder a los datos de diferentes cohorts y alumnas, así como también a los cursos y porcentajes de progreso que ellas habían alcanzado.
Por medio de los objetivos de este proyecto y lo que Valentina señaló, es que pudimos determinar los elementos más importas de visualización:
Cohorts, alumnas, progreso.

Este dashboard le permite visualizar de manera más amigable y clara, datos que de otra manera se acceden vía Excel, lo cual signifca grandes plantillas con diferentes datos agrupados.

Para desarrollar este producto, realizamos entrevistas, mostramos al usuario sketchs y prototipos, al fin de avanzar en la dirección correcta.

#### 2) Sketch de la solución (prototipo de baja fidelidad)

Este fue el sketch del producto:
![Sketch 1](scl-2018-05-bc-core-am-datadashboard/src/img/WhatsApp Image 2018-06-24 at 19.43.16.jpeg)

![Sketch 2](scl-2018-05-bc-core-am-datadashboard/src/img/WhatsApp Image 2018-06-24 at 19.44.16.jpeg)

![Sketch 3](scl-2018-05-bc-core-am-datadashboard/src/img/WhatsApp Image 2018-06-24 at 19.45.03.jpeg)


#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Prototipo realizado en Figma:


### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
has diseñado. Tendrás un tiempo limitado para hackear, así que deberás priorizar.

Sin embargo, como mínimo, tu implementación debe:

1. Permitir al usuario seleccionar un cohort de una lista de cohorts.
2. Al seleccionar un cohort:
   - Listar las alumnas de ese cohort
   - Para cada alumna:
     + Calcular porcentaje de completitud de todos los _cursos_.
     + Calcular grado de completitud de _lecturas_, _ejercicios autocorregidos_,
       y _quizzes_.
   - Ordenar alumnas por completitud _general_ (porcentaje consumido/completado
     de todos los cursos del cohort en cuestión), de _lecturas_, _ejercicios
     autocorregidos_ y _quizzes_.
   - Filtrar/buscar alumnas por nombre.
3. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.
4. Incluir pruebas unitarias.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
igual debe seguir los fundamentos de visual design, como: contraste,
alineación, jerarquía, entre otros.

