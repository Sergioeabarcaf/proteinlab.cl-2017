# Pagina Web proteinlab.cl 2018

Aplicacion web desarrollada en Angular, que busca mostrar los distintos proyectos desarrollados en proteinlab y el equipo de trabajo. El diseño estuvo a cargo del equipo interno de proteinlab. Las mejoras se pueden ver en http://146.83.190.220 antes de pasar a produccion que sera la version 2.0.

## V1.5

Version 1.5 contiene las siguientes caracteristicas:

* Funcion del servicio que desordena el orden de los proyectos
* Optimizacion en funciones al cargar datos del servicio


## V1.6

version 1.6 contiene las siguientes caracteristcas:

* Carga de imagenes del equipo a nivel grupal y personal (aun quedan pendientes direccion)
* Reparacion de error que mostraba a un solo integrante del proyecto

### V1.6.1

* Reparacion de error que mostraba los integrantes del proyecto anterior

### V1.6.2

* Carga de imagenes contenidas en brochure Proteinlab 2017-2018 (aun hay proyectos pendientes)
* Reparacion de error que aumentaba la cantidad de integrantes en componente nosotros
* Utilizacion de logos proteinlab en Navbar y Footer

### V1.6.3

* Reparacion de error que no cargaba los componentes en el top de la Pagina
* Cambios en navbar (logo más grande, separacion de link)
* Cambios en Home (se aumenta el interlineado, se cambia de color el boton 'saber mas')
* Cambios en footer (se elimina la zona de contacto en home y se agregan elementos al footer, ahora esta separado en 3 'link pagina','logo y contacto', redes sociales)
* Cambios en proyectos (se elimina el equipo realizador)
* el tamaño de las imagenes deben tener una relacion ancho/alto = 2.5

### V1.6.4

* Separacion de proyectos por categorias
* Obtener proyecto en base al nombreSmall
* Agregar el periodo de trabajo al titulo del proyecto en pagina proyectos

## V1.7

version 1.7 contiene las siguientes caracteristicas:

* Eliminación de componente nosotros.
* Se filtran los contenidos del componente nosotros y se agregan al home.
* Se reordena el servicio proyecto, agrupando las propiedades en nuevas interfaces.
* Se reordena el servicio equipo, eliminando los integrantes que no estan activos como tambien las propiedades de estos dejando: Nombre, Cargo, Imagen y Linkedin.
* Se agregan cambios de propiedades hover para los link de navbar, RRSS y proyectos.
* Navbar pasa de static a sticky, ordenar los link a la derecha.
* Se eliminan ambos pipes.
* Se utilizan estilos propios de cada componente y el general.
* Se usa la fuente Raleway para titulos y Roboto para parrafos.
* Eliminación de link en footer.
* Cambios de colores en footer y alineamiento centrado.

### V1.7.1

* Se agregan Slides al carousel.
* Cambios de estilos en linkedin.
