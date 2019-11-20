# Proyecto Cifrado Cesar

# Nombre Producto: “Proyectos Bajo Llave”

## Definición del producto

### Hipótesis:
La gran mayoría de los negocios emergentes entre dos socios no cuentan con un sistema de envío de mensajes que oculte información confidencial, lo que provoca que sus ideas puedan ser copiadas o sus datos caer en manos de la competencia.

### Escenario:
El dueño de un negocio de barrio tiene un buen dato de importación desde China a muy bajo costo, y necesita compartir esta información con su socio, el cual vive en otra cuidad. Pero no quiere compartirlo a través de los medios de mensajería tradicionales (WhatsApp, Messenger de Facebook, Mensajería de texto o Correo Electrónico), para evitar que su noticia sea interceptada por otras personas del mismo rubro.

### Investigación
Busqué un potencial usuario al cual podría serle útil una aplicación web, para aplicarle una entrevista.

- Entrevista personal con el usuario.
Apliqué una entrevista escrita a un potencial usuario, en la cual le pregunté si tenía conocimientos generales sobre cifrado, si le sería útil una aplicación web que realice esa función y en qué aspecto de su vida podrá utilizarla.

![Entrevista a usuario](Img/Entrevista.png)

A partir de una conversación con el usuario a partir de sus decidí el grupo objetivo del proyecto, perfilé al usuario y definí cómo sería su viaje a través de la aplicación web, considerando lo que el usuario necesita y cómo yo podría cubrir esa necesidad.

### Principales usuarios

Personas de 25 a 60 años, de cualquier sexo. Pueden ser emprendedores, aspirantes a emprendedores o dueños de un negocio,y que sean socios entre sí.

### Objetivos del usuario en relación al producto

1. El usuario satisfacerá su necesidad de comunicarse con su socio en forma fácil, rápida y eficaz.
2. El usuario podrá enviar mensajes cifrados a su socio en un contexto de inicio o desarrollo de un proyecto laboral.
3. El usuario podrá utilizar la aplicación web en un ambiente de confidencialidad y seguridad, ya que los mensajes enviados solo podrán ser descifrados por el usuario receptor.

### Nivel de experiencia y de interfaz

Lo primero fue realizar el diagrama de flujo de cómo sería la interacción en la aplicación web, para luego iniciar  el proceso de definir el producto final a nivel de experiencia y de interfaz. Esta etapa incluyó los siguientes pasos:

1. Etapa del prototipado

Con el fin de dar forma y formalizar las ideas, cree diferentes niveles de prototipado, de tal forma de poder visualizar la interfaz, y así después entregarle una propuesta de diseño al usuario:

a) Prototipos de baja fidelidad:

Sketch 

- A mano alzada

![Prototipo baja fidelidad](Img/manoalzada1.jpg)

![Prototipo baja fidelidad](Img/manoalzada2.jpg)

- Invision Studio 
![Prototipo baja fidelidad](Img/Invision1.png)

![Prototipo baja fidelidad](Img/Invision2.png)

Wireframe 

- Balsamiq

![Prototipo baja fidelidad](Img/Balsamiq1.png)

![Prototipo baja fidelidad](Img/Balsamiq2.png)

![Prototipo baja fidelidad](Img/Balsamiq3.png)

![Prototipo baja fidelidad](Img/Balsamiq4.png)

![Prototipo baja fidelidad](Img/Balsamiq5.png)

![Prototipo baja fidelidad](Img/Balsamiq6.png)

![Prototipo baja fidelidad](Img/Balsamiq7.png)

b) Prototipos de alta fidelidad:

Mockup


- Figma

2. Testeo de Prototipos
En esta etapa me reuní con el usuario para iterar sobre el aspecto visual de los prototipos de baja fidelidad. El usuario aprobó la propuesta, mencionó algunas opiniones sobre el cambio del color de fondo y de los elementos y la eliminación de las últimas “pantallas”, me solicitó resumirlas de tal modo que el mensaje cifrado apareciera en el mismo cuadro de texto.
Finalmente, realicé estas modificaciones en el diseño del prototipo de alta fidelidad, en donde se incluían las interaaciones y se lo presenté al usuario, el cual dio su V.B, por lo que continue a la siguiente etapa.

3. Diseño de interfaz
Comencé con el diseño de la interfaz a partir de las sugerencias entregadas por el usuario. 

Cree una interfaz utilizando una paleta con colores llamativos 



4. Iteración con el usuario




5. Correcciones según opinión del usuario.


### Solución del problema
El producto creado cumple con los requerimientos básicos que el usuario manifestó en la entrevista, otorgando una interfaz fácil de usar sin detalles distractores. Permite el envío
De mensajes cifrados en forma correcta y segura. 






















# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Resumen del proyecto

¿Qué tengo que hacer exactamente? En este proyecto crearás la primera aplicación web del _bootcamp_. Servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. 

Algunas ideas de ejemplo:

- Crear claves seguras para el email.
- Encriptar/cifrar una tarjeta de crédito.
- Herramienta de mensajería interna de una organización de derechos humanos en una zona de conflicto.
- Mensajería secreta para parejas.


## Consideraciones generales

- Este proyecto se debe resolver de manera individual.
- El proyecto será entregado subiendo tu código a GitHub (commit/push) y la interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.
- Tiempo para completarlo: El proyecto dura 2 semanas, trabaja con sprints y planificando tus tareas.

## Objetivos de aprendizaje

En este proyecto aprenderás a construir una aplicación web que interactúe con el usuario a través del navegador y la lógica basada en esa interacción. Dicho en palabras sencillas, aprenderás a:

### UX
- Entender las **necesidades del usuario** y realizar propuestas para esas necesidades. 

### HTML y CSS
- Mostrar elementos de formulario en la pantalla.

### DOM
- Permitir al usuario interactuar (**eventos del DOM**) y hacer algo cuando ocurran dichos eventos (cifrar/descifrar).
- Actualizar la pantalla con los resultados (**manipular el DOM**).

### JS
- Manipular _**strings**_ (cadenas de texto).
- Usar **control de flujo** (bucles, condicionales, ...).
- **Implementar funciones** dada una descripción de su comportamiento.

### TESTING
- Verificar tu implementación con **pruebas unitarias**.

### GIT Y GITHUB
- Comandos de git (add | commit | pull | status | push).
- Manejo de repositorios de GitHub (clone | fork | gh-pages).Manejo de repositorios de GitHub (clone | fork | gh-pages).

### BUENAS PACTICAS
- Organizar tu tiempo y priorizar tareas en un entorno de **alta incertidumbre**.

## Consideraciones.

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

#### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

- Quiénes son los principales usuarios de producto.
- Cuáles son los objetivos de estos usuarios en relación con tu producto.
- Cómo crees que el producto que estás creando está resolviendo sus problemas.

#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## Funcionalidad extra o “Hacker edition”

Las secciones llamadas “Hacker Edition” son opcionales. Si **alcanzaste los objetivos de aprendizaje** y te queda tiempo, intenta realizar el hacker edition. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.

## Vamos a los detalles. Consideraciones Técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.


## Pistas sobre cómo comenzar a trabajar en el proyecto

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te 
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :rocket:

## Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Testeo e Iteración

Desarrollo Front-end:

* [Valores](https://lms.laboratoria.la/cohorts/scl-2019-10-bc-core-scl012/courses/javascript/01-basics/01-values-variables-and-types)
* [Tipos](https://lms.laboratoria.la/cohorts/scl-2019-10-bc-core-scl012/courses/javascript/01-basics/01-values-variables-and-types)
* [Variables](https://lms.laboratoria.la/cohorts/scl-2019-10-bc-core-scl012/courses/javascript/01-basics/02-variables)
* [Control de flujo](https://lms.laboratoria.la/cohorts/scl-2019-10-bc-core-scl012/courses/javascript/02-flow-control/00-opening)
* [Tests unitarios](https://lms.laboratoria.la/cohorts/scl-2019-10-bc-core-scl012/courses/javascript/11-testing/00-opening)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:
- [GitHub y GitHub Pages](https://guides.github.com/)
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.

## Checklist
Esta sección está para ayudarte a llevar un control de los objetivos de aprendizaje y las funcionalidades.

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Funcionalidad extra o “Hacker edition”
* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
