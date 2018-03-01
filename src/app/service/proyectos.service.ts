import { Injectable } from '@angular/core';

@Injectable()
export class ProyectosService {

  private proyectosAleatorios:Proyecto[] = [];
  private respaldoX:number[] = [];
  private x:number = 0;
  private esta:boolean = false;

  private proyectos:Proyecto[] = [
    {
      nombre:"Posicionamiento Outdoor/Indoor",
      descripcion: [
        "Proyecto colaborativo de carácter internacional en posicionamiento outdoor/indoor entre el Centre Tecnològic de Telecomunicacions de Catalunya (CTTC), España y ProteinLab UTEM.",
        "ProteinLab UTEM trabaja en el concepto, diseño y desarrollo de nuevos productos, aplicaciones y servicios orientados a usuarios finales basados en tecnologías de posicionamiento desarrolladas por el CTTC.",
        "El proyecto aborda un reto social: permitir el acceso asequible a todo el potencial de las señales del sistema global de navegación por satélite - GNSS -  civiles y se basa en un avance tecnológico que está alcanzando la madurez, el software definido por radio en dispositivos de bajo coste, junto con un diseño de producto sensible al contexto, centrado en el usuario y un ecosistema de innovación abierta liderado por una comunidad de usuarios y desarrolladores a través de un enfoque 'Bottom up'.",
        "La implementación de este proyecto en Chile permitirá evaluar las diferentes capas técnicas, sociales y económicas de la tecnología en entornos reales y permitirá abordar retos sociales como la inclusión digital, contribuyendo a hacer más asequible la tecnología GNSS para usos civiles.",
        "Este proyecto aborda el diseño e implementación de dos prototipos experimentales de posicionamiento interior y exterior que permitirán evaluar la integración de tecnologías inteligentes y de diseño de productos, así como el testeo de su interacción con usuarios reales.",
        "Los resultados del proyecto permitirán el diseño de aplicaciones y nuevos productos en diversos contextos tales como: Smart Cities, e-inclusion y e-Health o bien contextos sociales, comercios, producción, servicios basados en localización (LBS)."
      ],
      categoria:"Investigacion",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Helene Schmelzer,Sergio Abarca",
      partner:"CTTC",
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"SENSOR AMBIENTAL, SMART_NSEN",
      descripcion:[
        "SmartNSen es un sensor ambiental en etapa experimental que está orientado a un monitoreo remoto a través de Twitter. El sistema permite la medición en tiempo real de las condiciones ambientales en las que se encuentran un entorno.",
        "Smart_Nsen permite recibir o enviar la información recopilada por los sensores de las variables ambientales, o simplemente responder un tweet cuando la saludan.",
        "Mediante la integración con Twitter, cualquier persona con una cuenta, puede preguntar por los parámetros medidos por SmartNSen, en un lenguaje humano, como por ejemplo ¿tienes calor?, o ¿tienes sed? SmartNSen reconoce las palabras tanto en mayúsculas y minúsculas. A continuación se listan las palabras claves:",
        "* Temperatura: frío, calor, temperatura.",
        "* Humedad de suelo: humedad, humedad de suelo, sed, agua.",
        "* Humedad ambiente: humedad, humedad ambiente, aire.",
        "* Luz: luz, iluminación, iluminación ambiente.",
        "* Sonido: ruido, sonido, perturbaciones.",
        "* Presión: presión.",
        "* Frases: hola, estás viva, cómo estás, dónde estás."
      ],
      categoria:"Internet de las cosas",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes: "vacio",
      partner:null,
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"Pizarra Magica",
      descripcion:[
        "Pizarra Mágica permite explorar las relaciones entre usuarios y objetos en entornos conectados a Internet, en los cuales la experiencia de uso y el uso de interfaces visuales y tangibles determinan nuevas dinámicas de relación entre las personas y sus espacios cotidianos. Esta exploración está basada en la convergencia de cuatro factores clave en el diseño y desarrollo de productos con tecnología digital incrustada en su arquitectura: Hardware, Software, Interfaces y Experiencia de Usuario. Estos cuatro factores permiten que los objetos análogos adquieran una identidad digital en Internet lo cual transforma radicalmente la relación de las personas con los objetos."
      ],
      categoria:"Internet de las cosas",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:null,
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"Cubos interactivos",
      descripcion:[
        "Esta actividad experimental explora en el desarrollo técnico de comunicación máquina – máquina M2M. Consiste en cubos con una cara móvil que es accionada por un servomotor. La cara interactiva tiene movimiento e iluminación aleatorias. Cuando dos cubos se encuentran, se reconocen mediante tags de RFID y sincronizan su movimiento e iluminación. Al momento de separarse los cubos vuelven a tener movimiento e iluminación independiente.",
        "Actualmente, el prototipo está construido en base a la filosofía del #OpenStructure y está fabricado con piezas hechas en impresoras 3D. La programación está dada en base a #ArduinoUno, a un servomotor que permite controlar el movimiento y a un sensor de flexibilidad (ver video). Cuando el proyecto tome forma definitiva, se le aplicarán sensores más sofisticados para mejorar la experiencia de uso."
      ],
      categoria:"Internet de las cosas",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:null,
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"Caminante",
      descripcion:[
        "Desarrollo de robot inspirado en las esculturas cinéticas de Theo Jansen. Se realizó una adaptación del sistema de movimiento mecánico a una escala reducida, incorporandoincorporándo un servomotor y un arduino. Una vez programado, el Robot puede moverse por sí solo según la programación que este tenga. Se utilizaron recursos Open Source e impresoras 3D para la confección de las partes y piezas."
      ],
      categoria:"Internet de las cosas",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:null,
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"TRABAJO COLABORATIVO CON EL DISEÑADOR DE VESTUARIO MATÍAS HERNÁN PARA FESTIVAL DE VIÑA 2018",
      descripcion:[
        "Durante la tercera noche del Festival de Viña del Mar 2018,  Carolina de Moras, animadora del Festival, lució un vestido que fue el resultado del trabajo colaborativo en el uso de nuevas tecnologías de producción digital entre el diseñador de vestuario Matías Hernán y ProteinLab UTEM.",
        "El vestido fue el resultado de este trabajo colaborativo donde participaron activamente Carolina de Moras y su equipo asesor como parte de los esfuerzos de UTEM por fortalecer la Vinculación con el Medio mediante la Innovación Tecnológica.",
        "El proceso de diseño y desarrollo del vestido fue de 3 meses aproximadamente, en donde se aplicaron los resultados obtenidos en las actividades de investigación aplicada en el área de tecnologías de producción digital en el ámbito textil que se desarrolla en ProteinLab UTEM desde 2015. Los resultados de la investigación aplicada en impresión 3D y corte láser han permitido innovar en el diseño y desarrollo de vestuario en colaboración con destacados diseñadores nacionales como Claudio Paredes (2016 – 2017) y Matías Hernán en 2017-2018.",
        "El vestido fue diseñado en dos partes, una superior trabajada en Impresión 3D en donde se utilizó impresión flexible y rígida para la estructuración de las formas generales y una parte inferior en neolycra.",
        "El proyecto desde ProteinLab UTEM fue ejecutado por el Diseñador Industrial Diego Vilches, quien empleó herramientas de diseño paramétrico para digitalizar los moldes desarrollados sobre la base del cuerpo de la animadora. Para la fabricación del vestido, se utilizaron impresoras 3D y CNC Láser.",
        "El diseño final posee una silueta con corte sirena y la paleta de color es monocromática en negro con distintos matices, tanto opacos como brillantes, donde el fin es estilizar y dar énfasis en la elegancia."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"assets/img/carola2.png",
      imagen2:"assets/img/carola1.png",
      imagen3:"assets/img/carola2.png",
      imagenGrupal:"assets/img/carola1.png",
      integrantes:"Diego Vilches",
      partner:"Matías Hernán",
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"M2M OR IMITATION OF NATURE CAPSULE COLLECTION, TRABAJO COLABORATIVO CON EL DISEÑADOR DE VESTUARIO CLAUDIO PAREDES",
      descripcion:[
        "'M2M or Imitation of Nature - Capsule collection' es un proyecto colaborativo en Diseño, Moda y Tecnología desarrollado entre ProteinLab UTEM y el diseñador de vestuario Claudio Paredes. M2M integra herramientas de fabricación digital (impresión 3D corte láser y electrónica embebida), con técnicas tradicionales de confección.",
        "La inspiración de M2M proviene directamente de la observación de la belleza matemática de la naturaleza, la cual se manifiesta en la utilización de diseños fractales y patrones encontrados en esta.El objetivo de este proyecto es explorar las potencialidades de la unión de moda y tecnología a través del uso de técnicas de diseño y desarrollo de alta costura tradicional, en combinación de las tecnologías de fabricación digital y electrónica interactiva. Tecnologías como el corte láser, permiten la aplicación de diseños, texturas y patrones dinámicos y complejos directamente sobre la tela, así como la impresión 3D facilita la creación de elementos biomiméticos los cuales se integran a las prendas."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"assets/img/claudio1.png",
      imagen2:"assets/img/claudio2.png",
      imagen3:"assets/img/claudio3.png",
      imagenGrupal:"assets/img/claudio4.png",
      integrantes:"Diego Vilches",
      partner:"Claudio Paredes",
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"PROYECTO CIENCIA – EMPRESA: PLATAFORMA TECNOLÓGICA EN SMART CITY PARA LA REGIÓN METROPOLITANA",
      descripcion:[
        "El objetivo general de este proyecto ha sido fortalecer los vínculos entre las instituciones que realizan actividades de I+D+i sobre Smart Cities y la Industria tecnológica en la Región Metropolitana de modo de preparar el entorno técnico y económico necesario para el desarrollo de una Smart City en Santiago que contribuya a mejorar la calidad de vida de sus habitantes. Se abordaron los siguientes tópicos: Smart Cities, Smart Building, Machine to Machine, Internet of Things, Tecnologías Interactivas y diseño de experiencias de usuarios .",
        "Las entidades participantes de este proyecto son:",
        "* Fraunhofer Chile Research Foundation (FCR).",
        "* ProteinLab UTEM, Universidad Tecnológica Metropolitana",
        "* Asociación Chilena de Empresas de Tecnología de Información A.G. (ACTI)"
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:null,
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"PROYECTO ESTÓMAGO IN VITRO",
      descripcion:[
        "Proyecto colaborativo entre LabBio y ProteinLab UTEM para el Diseño y desarrollo de un sistema de digestión in vitro que simula el estómago humano para el estudio de la biodisponibilidad de nutrientes. El sistema busca recrear técnica y visualmente el sistema digestivo.",
        "El proyecto se desarrolló en el marco de la ejecución de un proyecto Fondecyt de la Académica del Departamento de Ingeniería Química Dra. Elizabeth Troncoso.",
        "El prototipo está compuesto por una estructura de acrílico con un estaque en el centro donde se ubica un estómago de Latex de tamaño natural sumergido en agua a 37º C. El estómago es comprimido por 8 paletas de acrílico que están unidas cada una, a un pistón accionado por un servomotor. El movimiento y compresión de las 8 paletas simulan el movimiento peristáltico del estómago.",
        "El sistema diseñado tiene diversas rutinas de funcionamiento las cuales son controladas desde un panel lateral.",
        "El proyecto demandó el trabajo colaborativo entre diseñadores y ingenieros electrónicos, químicos e informáticos."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:null,
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"FRESHWATER",
      descripcion:[
        "Durante el segundo semestre del 2015, el Programa de Prospectiva e Innovación Tecnológica, ProteinLab Utem, generó una alianza colaborativa con Freshwater Solutions, creadores del Proyecto Freshwater.",
        "Freshwater, ganador del Premio de Innovación Avonni 2015, produce agua de la humedad del aire mediante una máquina de uso doméstico que imita el ciclo del agua: condensa las partículas de H2O en el aire y las condensa hasta transformarlas en gotas de agua, las que luego son enfriadas y esterilizadas. El sistema, que se abastece de energía eléctrica o solar, puede generar entre 9 a 30 litros diarios de agua potable.",
        "ProteinLab Utem contribuye con su equipo interdisciplinario en Diseño, Ingeniería electrónica e Informática en optimizar el sistema electrónico y usabilidad de Freshwater para mejorar los procesos de fabricación, costos y accesibilidad.",
        "Esta iniciativa cuenta con el respaldo de Star-Up Chile, Fundación Chile, Corfo, ProteinLab Utem, Socialab y Docs4change."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:"Freshwater Solutions",
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"PROYECTO SABER HACER - COSTURERAS PEÑALOLÉN",
      descripcion:[
        "Durante el segundo semestre del 2015, junto al Taller de Diseño Industrial IV UTEM a cargo de los profesores Héctor Torres y Macarena Valenzuela, se desarrolló un Taller de co-creación entre los alumnos y costureras de la Municipalidad de Peñalolén. Este Taller estuvo a cargo del grupo Saber Hacer, liderado por Rodrigo Gajardo en el cual desarrollan dinámicas para promover el conocimiento y la producción local. Fueron 3 instancias en que 15 alumnos y 15 costureras se formaron en grupos multidisciplinarios para desarrollar diversos encargos que fueron solicitados por empresas o entidades. La colaboración, co-creación y la creatividad  fueron esenciales para desarrollar los productos, que crearon, diseñaron y fabricaron en estos Talleres. Luego, los alumnos evolucionaron los productos incorporando tecnología para una mejor funcionalidad e interacción, en donde las costureras también participaron.",
        "Al finalizar el año, se realizó una entrega pública en donde se expusieron los productos y su evolución tecnológica.",
        "Los alumnos pasaron a pertenecer a la comunidad productora de la Municipalidad de Peñalolén."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:null,
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"THUMBIE",
      descripcion:[
        "Thumbie es una ortoprótesis de bajo costo para personas con amputación de pulgar u otro tipo de discapacidad de mano relacionada con la incapacidad para realizar la pinza.",
        "Devuelve aproximadamente un 70% de las capacidades perdidas a 1/5 del precio de su competencia.",
        "Proyecto ganador de Innovatón 2014 (Teletón Chile) y fue incubado por Socialab Chile. Durante el primer semestre del 2015 se adjudicó el instrumento CORFO  SSAF- Social por medio del  Programa del Laboratorio de Innovación Social de la UC y el Centro de Innovación UC, CoLab UC.",
        "En el segundo semestre del mismo año, se formaliza la alianza colaborativa con ProteinLab UTEM para un desarrollo centrado en el rediseño, optimización de materiales, investigación aplicada en técnicas de fabricación digital y futura incorporación de electrónica en otros proyectos similares que tiene la empresa."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:null,
      link: "http://www.thumbie.org/",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"MOUTI",
      descripcion:[
        "Mouti es un dispositivo educativo de higiene bucal para niños con necesidades especiales. Es ergonómico y permite educar a través de la creación de hábitos didácticos, creando una actividad divertida basada en la experiencia y en el uso de elementos sensoriales que estimulan al niño, mediante la asociación de un color con un área de la boca.",
        "Puede ser utilizado por cualquier niño en etapa de aprendizaje.",
        "Ganadores de Innovatón 2015 (Teletón Chile) e incubados durante el 2016 en Socialab Chile. Durante el mes de Mayo del 2016 se formaliza la alianza con ProteinLab Utem, la cual se enfoca en la realización de un prototipo conceptual del funcionamiento y el rediseño del cepillo y su sistema electrónico. En este proyecto, el equipo de Diseño y Electrónica trabaja colaborativamente para la obtención de un resultado integral. A futuro, se proyecta la postulación en conjunto a instrumentos de financiamiento para el desarrollo y evolución del proyecto."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:null,
      link: "https://www.facebook.com/mouti",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"GET UP",
      descripcion:[
        "Proyecto de vinculación mediante la asignación de instrumento Voucher de Innovación de Corfo. Get Up es una silla Bipedestadora que permite el posicionamiento vertical de la persona. Este producto perteneciente a la empresa Kirón y es comercializado actualmente.",
        "Obtuvieron el Premio Nacional de Innovación Avonni 2016, en la categoría Salud. Además de distintos fondos de financiamiento. En cuanto al encargo que se realizó a ProteinLab UTEM, fue el desarrollar un sistema de desplazamiento motorizado, eléctrico y desmontable para la silla de ruedas, generando un sistema integrado, que permita poner de pie a los pacientes y los desplazarlos al mismo tiempo. Este proyecto tiene una duración de 6 meses y se proyecta la obtención de resultados para fines del 2016."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:null,
      link: "https://www.kiron.cl",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"ROTONWALL",
      descripcion:[
        "ROTONWALL, mobiliario para espacios reducidos que  permite el movimiento en su eje del muro que contiene distintos dispositivos, como TV y equipo de sonido. Así el aprovechamiento y optimización del espacio es mayor.",
        "Actualmente este producto se encuentra en diversos departamentos, solicitados por inmobiliarias de la Región Metropolitana, ya que contribuye a un aumento en las ventas de departamentos, por su funcionalidad, optimización de espacio e innovación.",
        "Proyecto creado por el docente de la Escuela de Diseño UTEM,  Ramiro Torres Alvarado.",
        "El encargo realizado a ProteinLab UTEM dentro del marco de la adjudicación del Voucher de Innovación CORFO es el diseñar un sistema electromecánico comandado por el usuario que realice el giro del mueble en 180° con detención automática y retorno de la misma manera al punto de inicio. De esta forma, se incorpora la tecnología como medio para mejorar la interacción del usuario. Se desarrolló un Plan de trabajo de 6 meses, en donde el equipo multidisciplinario de Diseño y Electrónica de ProteinLab UTEM investigarán, diseñarán y testearán las diversas soluciones a este encargo. Se espera que a fines del 2016 se tenga el resultado final."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:"Ramiro Torres Alvarado",
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"PROYECTO VINCULACIÓN VTTE: CIENCIA-EMPRESA CHILETEC",
      descripcion:[
        "A fines del 2015, ProteinLab UTEM postuló al concurso interno de la Vicerrectoría de Transferencia Tecnológica y Extensión, con el proyecto “Taller de vinculación Ciencia - Empresa en el ámbito Tecnológico”, el cual se proyectó a generación e implementación de un trabajo colaborativo entre estudiantes y encargados de empresas del rubro tecnológico, agrupadas por la Grupo de empresas tecnológicas, CHILETEC. En esta instancia, se proyectan 4 meses de desarrollo durante el 2016, en donde se generarán Talleres de co-creación en base a grupos de trabajo transversales, entre estudiantes de la carrera de Diseño Industrial e Ingeniería Electrónica con empresarios, en donde deban desarrollar un proyecto en base a nuevas tecnologías, según un desafío planteado y en relación a necesidades específicas que se detecten. La idea es poder obtener un proyecto tecnológico construido colaborativamente en los que tengan como resultados maquetas y/o prototipos que serán mostrados en una exposición final."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:"CHILETEC",
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"PROYECTO VINCULACIÓN BARRIO VICTORIA",
      descripcion:[
        "ProteinLab UTEM  se adjudica un proyecto MECESUP, dependiente del Ministerio de Educación junto a diversas carreras de nuestra Universidad. Este proyecto se desarrollará durante el 2016 un pilotaje de un laboratorio experimental de trabajo colaborativo en torno al diseño de productos textiles, conectando estudiantes de diseño e Ingeniería Electrónica e Informática de la Universidad con artesanos textiles del Barrio Victoria, incorporando nuevas tecnologías al desarrollo de esta industria creativa.",
        "Entre los objetivos específicos que se plantean, son el de desarrollar habilidades y conocimientos tanto para los estudiantes, como para las trabajadores textiles. Mediante la experimentación con nuevas tecnologías digitales aplicada al sector textil y calzado. Además de fortalecer la vinculación de estudiantes de diseño e Ingeniería con el medio productivo, a través de oficios textiles y calzado."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:null,
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"AMALTEA, joyas impresas 3D",
      descripcion:[
        "Proyecto de título de Elisa Halvorsen, estudiante de diseño industrial.",
        "AMALTEA es una marca de joyas producidas con ayuda de las nuevas tecnologías, software e impresoras 3D. Esta colección mezcla materiales clásicos desde el punto de vista de la joyería tradicional (metales seminobles) con polímeros.",
        "Esta marca incorpora las nuevas tecnologías a la producción de joyas, dándoles un valor agregado al fusionar éstas con las técnicas tradicionales, haciéndolas más reconocidas por la sociedad y creando objetos de diseño de vanguardia.",
        "Este proyecto búsca acercar maquinaria considerada industrial a un área de conocimiento masivo dándole un uso más cotidiano.",
        "Las joyas Amaltea se venden a través de su sitio web y al elegir la joya el usuario tiene dos opciones de compra. La primera  es elegir color y material (Polimero o plata) y recibir el producto por correo.",
        "Esta opción permite al usuario conocer las joyas 3D y ver los resultados formales posibles para luego a futuro aventurarse a imprimir su propia joya. La segunda opción es comprar el archivo STL. Esto permite al usuario hacerse parte del proceso creativo, fortaleciendo el valor simbólico de su joya. El usuario puede personalizar su joya al elegir el tipo de impresora que utilizar, los materiales y colores."
      ],
      categoria:"Proyectos de incubación",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"vacio",
      partner:"Elisa Halvorsen",
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    },
    {
      nombre:"Sonore",
      descripcion:[
        "Bautizado con el nombre de 'Sonore', el proyecto se basa en la utilización de los fundamentos del sonido y la música en aplicaciones terapéuticas, esto con la implementación de una interface análoga con recursos tecnológicos que potencie la instancia interactiva del instrumento diseñado.",
        "El prototipo consta de un instrumento musical, basado en una interface musical de 8 cuerdas pulsadas, en escala pentatónica (esta es una escala natural del oído humano), además de recursos tecnológicos que incluyen la incorporación lumínica de la caja acústica, la cual se activa con las vibraciones del instrumento, Estas vibraciones también pueden generar visualizaciones a través de animaciones hechas en “Processing” las cuales son transmitidas a una pantalla vía HDMI."
      ],
      categoria:"Proyectos de incubación",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Diego Vilches",
      partner:"Diego Vilches",
      link: "vacio",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:null
    }

  ];

  constructor() { }

   getProyectos():Proyecto[]{
     while(this.proyectosAleatorios.length < this.proyectos.length){
       this.x = Math.floor(Math.random() * this.proyectos.length);
       console.log("numero aleatorio: " + this.x);
       if(this.proyectosAleatorios.length == 0){
         this.proyectosAleatorios.push(this.proyectos[this.x]);
         this.respaldoX.push(this.x);
       }
       else{
         this.esta = false;
         for(let i=0; i < this.proyectosAleatorios.length; i++){
           if(this.respaldoX[i] == this.x){
             this.esta = true;
           }
         }
         if(!this.esta){
           this.proyectosAleatorios.push(this.proyectos[this.x]);
           this.respaldoX.push(this.x);
         }
       }
     }
     return this.proyectosAleatorios;
   }

   getProyecto( idx:string ){
     return this.proyectos[idx];
   }

   getEquipo( idx: string ){
     return this.proyectos[idx].integrantes;
   }

   getProyectoLimit( x:number ){
     let limit:Proyecto[] = [];
     for(let i=0;i<x;i++){
       limit[i] = this.proyectos[i];
     }
     return limit;
   }

}

export interface Proyecto{
  nombre: string;
  descripcion: string[];
  categoria: string;
  imagen1: string;
  imagen2: string;
  imagen3: string;
  imagenGrupal: string;
  integrantes: string;
  partner: string;
  link: string;
  partnerIMG: string;
  partnerMSJ: string;
}
