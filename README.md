# Data Dashboard

## ¿Cómo colaboramos?

Para este proyecto trabajamos colaborando en sesiones mediante Live Share de Visual Studio Code, por lo que escribimos código, comentamos y nos comunicamos en tiempo real, resultando en menos pull request y también menos problemas al hacer merge de pull request.

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

#### 2) Entrevista con el usuario

Para llegar a la definición del producto señalada en el punto anterior, se realizó una entrevista con Valentina Smith, TM de Santiago, quien es la principal usuaria del producto que creamos.
Algunas de las preguntas que le hicimos para definir mejor el producto fueron:

- ¿Cómo visualizas actualmente los datos entregados por el LMS (y otros datos de interés)?
 Actualmente los visualizo en una plantilla Excel, al igual que muchos otros datos que maneja Laboratoria.

- ¿Qué es lo que te gustaría que esta aplicación mejorara de esa visualización?
 Me gustaría que fuese más amigable, que los datos se vean más claros.

- ¿Aparte de ti, alguien más tiene acceso a estos datos?
 A estos datos accedo principalmente yo, otros superiores (no se especifica), y para otras sedes son los respectivos TMs.

Además, otras preguntas importantes para definir el producto son:

- ¿Quiénes son los principales usarios de producto?
 TMs de cada sede. En el caso de la sede de Santiago, la principal usuaria es Valentina Smith.

- ¿Cuáles son los objetivos de estos usarios en relación con el producto?
 Visualizar de forma amigable y rápida los datos de las alumnas (progresos, nombres, etc)

- ¿Cuáles son los datos más relevantes que el usuario quiere ver en la interfaz y por qué. Cómo los descubriste?
 Mediante la entrevista, Valentina pudo señalar que los datos importantes son el progreso general, y los progresos de cada unidad, así como también poder ver el estado de completitud de las actividades.

- ¿Cuándo revisa normalmente estos datos?
 Tanto a diario, como cada semana para la reunión con los demás TMs.

- ¿Cómo crees que el producto les está resolviendo sus problemas?
 El producto le permite visualizar los datos que le interesan, de una manera más cómoda y amigable.

- ¿Cómo fue tu proceso de diseño?
 En primer lugar fue entrevistar a la usuaria, entender cómo era el producto que actualmente usa, qué cosas le gustaría que se vieran o fueran diferentes, luego presentar un sketch, un prototipo, así como el respectivo feedback de cada etapa, hasta tener un producto funcional que fuese cumpliendo con lo que íbamos aprendiendo en el proceso.

#### 3) Sketch de la solución (prototipo de baja fidelidad)

Este fue el sketch del producto:
![Sketch 1](https://raw.githubusercontent.com/jotaparra/scl-2018-05-bc-core-am-datadashboard/master/src/img/sketch_1_index.jpeg)

![Sketch 2](https://raw.githubusercontent.com/jotaparra/scl-2018-05-bc-core-am-datadashboard/master/src/img/sketch_2_todas%20las%20alumnas.jpeg)

![Sketch 3](https://raw.githubusercontent.com/jotaparra/scl-2018-05-bc-core-am-datadashboard/master/src/img/sketch_3_Alumna%20especifica.jpeg)


#### 4) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Prototipo realizado en Figma:

![Figma 1](https://raw.githubusercontent.com/jotaparra/scl-2018-05-bc-core-am-datadashboard/master/src/img/WhatsApp%20Image%202018-06-24%20at%2019.57.43.jpeg)

![Figma 2](https://raw.githubusercontent.com/Karmacode00/scl-2018-05-bc-core-am-datadashboard/master/src/img/WhatsApp%20Image%202018-06-24%20at%2019.57.51.jpeg)

![Figma 3](https://raw.githubusercontent.com/Karmacode00/scl-2018-05-bc-core-am-datadashboard/master/src/img/WhatsApp%20Image%202018-06-24%20at%2019.57.15.jpeg)

