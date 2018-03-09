import { Injectable } from '@angular/core';

@Injectable()
export class ProyectosService {

  private proyectosPropios:Proyecto[] = [];
  private auxPropio:Proyecto = null;
  private randPropio:number = 0;

  private proyectosVinculacion:Proyecto[] = [];
  private auxVinculacion:Proyecto = null;
  private randVinculacion:number = 0;

  private proyectosApoyo:Proyecto[] = [];
  private auxApoyo:Proyecto = null;
  private randApoyo:number = 0;

  private proyectos:Proyecto[] = [
    // {
    //   nombreSmall: "vacio",
    //   nombreCompleto: "vacio",
    //   periodo: "vacio",
    //   categoria: "vacio",
    //   descripcion: [
    //     "string",
    //     "string"
    //   ],
    //   segmento: "Transferencia y Vinculación con la Industria",
    //   imagen1: "http://via.placeholder.com/700x450",
    //   imagen2: "http://via.placeholder.com/700x450",
    //   imagen3: "http://via.placeholder.com/700x450",
    //   imagenGrupal: "http://via.placeholder.com/700x450",
    //   integrantes: "vacio",
    //   partner: null,
    //   link: null,
    //   partnerIMG: null,
    //   partnerMSJ: null
    // },
    {
      nombreSmall: "SMART_NSEN",
      nombreCompleto: "SENSOR AMBIENTAL, SMART_NSEN",
      periodo: "2015 - 2016 - 2017",
      categoria: "propio",
      descripcion: [
        "SmartNSen es un sensor ambiental en etapa experimental que está orientado a un monitoreo remoto a través de Twitter. El sistema permite la medición en tiempo real de las condiciones ambientales en las que se encuentran un entorno.",
        "Smart_Nsen permite recibir o enviar la información recopilada por los sensores de las variables ambientales, o simplemente responder un tweet cuando la saludan.",
        "Mediante la integración con Twitter, cualquier persona con una cuenta, puede preguntar por los parámetros medidos por SmartNSen, en un lenguaje humano, como por ejemplo ¿tienes calor?, o ¿tienes sed? SmartNSen reconoce las palabras tanto en mayúsculas y minúsculas. A continuación se listan las palabras claves:",
        "* Temperatura: frío, calor, temperatura.",
        "* Humedad de suelo: humedad, humedad de suelo, sed, agua.",
        "* Humedad ambiente: humedad, humedad ambiente, aire.",
        "* Luz: luz, iluminación, iluminación ambiente.",
        "* Sonido: ruido, sonido, perturbaciones.",
        "* Presión: presión.",
        "* Frases: hola, estás viva, cómo estás, dónde estás.",
        "El proyecto ha tenido diversas versiones, en donde se han optimizado sus funcionalidades y diseño. Estuvo presente en la exposición del evento FAB13 SANTIAGO, Exposición Mundial de Laboratorios de Fabricación."
      ],
      segmento: "Internet de las cosas",
      imagen1: "assets/img/SMARTNSEN/1.jpg",
      imagen2: "assets/img/SMARTNSEN/2.jpg",
      imagen3: "assets/img/SMARTNSEN/3.jpg",
      imagenGrupal: "assets/img/SMARTNSEN/grupal.jpg",
      integrantes: "vacio",
      partner: null,
      link: "https://twitter.com/smart_nsen",
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "PIZARRA MÁGICA",
      nombreCompleto: "PIZARRA MÁGICA",
      periodo: "2015",
      categoria: "propio",
      descripcion: [
        "Pizarra Mágica permite explorar las relaciones entre usuarios y objetos en entornos conectados a Internet, en los cuales la experiencia de uso y el uso de interfaces visuales y tangibles determinan nuevas dinámicas de relación entre las personas y sus espacios cotidianos.",
        "Esta exploración está basada en la convergencia de cuatro factores clave en el diseño y desarrollo de productos con tecnología digital incrustada en su arquitectura: Hardware, Software, Interfaces y Experiencia de Usuario.",
        "Estos cuatro factores permiten que los objetos análogos adquieran una identidad digital en Internet lo cual transforma radicalmente la relación de las personas con los objetos."
      ],
      segmento: "Intenet de las cosas",
      imagen1: null,
      imagen2: null,
      imagen3: null,
      imagenGrupal: "assets/img/PIZARRA-MAGICA/grupal.JPG",
      integrantes: "vacio",
      partner: null,
      link: null,
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "CUBOS INTERACTIVOS",
      nombreCompleto: "CUBOS INTERACTIVOS",
      periodo: "2015",
      categoria: "propio",
      descripcion: [
        "Esta actividad experimental explora en el desarrollo técnico de comunicación máquina – máquina M2M. Consiste en cubos con una cara móvil que es accionada por un servomotor. La cara interactiva tiene movimiento e iluminación aleatorias.",
        "Cuando dos cubos se encuentran, se reconocen mediante tags de RFID y sincronizan su movimiento e iluminación. Al momento de separarse los cubos vuelven a tener movimiento e iluminación independiente.",
        "Actualmente, el prototipo está construido en base a la filosofía del #OpenStructure y está fabricado con piezas hechas en impresoras 3D. La programación está dada en base a #ArduinoUno, a un servomotor que permite controlar el movimiento y a un sensor de flexibilidad (ver video). Cuando el proyecto tome forma definitiva, se le aplicarán sensores más sofisticados para mejorar la experiencia de uso."
      ],
      segmento: "Internet de las cosas",
      imagen1: null,
      imagen2: null,
      imagen3: null,
      imagenGrupal: "assets/img/CUBOS-MAGICOS/grupal.jpg",
      integrantes: "vacio",
      partner: null,
      link: null,
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "Vestido impreso 3D para Viña 2018",
      nombreCompleto: "TRABAJO COLABORATIVO CON EL DISEÑADOR DE VESTUARIO MATÍAS HERNÁN PARA FESTIVAL DE VIÑA 2018",
      periodo: "2017-2018",
      categoria: "vinculacion",
      descripcion: [
        "Durante la tercera noche del Festival de Viña del Mar 2018,  Carolina de Moras, animadora del Festival, lució un vestido que fue el resultado del trabajo colaborativo en el uso de nuevas tecnologías de producción digital entre el diseñador de vestuario Matías Hernán y ProteinLab UTEM.",
        "El vestido fue el resultado de este trabajo colaborativo donde participaron activamente Carolina de Moras y su equipo asesor como parte de los esfuerzos de UTEM por fortalecer la Vinculación con el Medio mediante la Innovación Tecnológica.",
        "El proceso de diseño y desarrollo del vestido fue de 3 meses aproximadamente, en donde se aplicaron los resultados obtenidos en las actividades de investigación aplicada en el área de tecnologías de producción digital en el ámbito textil que se desarrolla en ProteinLab UTEM desde 2015. Los resultados de la investigación aplicada en impresión 3D y corte láser han permitido innovar en el diseño y desarrollo de vestuario en colaboración con destacados diseñadores nacionales como Claudio Paredes (2016 – 2017) y Matías Hernán en 2017-2018.",
        "El vestido fue diseñado en dos partes, una superior trabajada en Impresión 3D en donde se utilizó impresión flexible y rígida para la estructuración de las formas generales y una parte inferior en neolycra.",
        "El proyecto desde ProteinLab UTEM fue ejecutado por el Diseñador Industrial Diego Vilches, quien empleó herramientas de diseño paramétrico para digitalizar los moldes desarrollados sobre la base del cuerpo de la animadora. Para la fabricación del vestido, se utilizaron impresoras 3D y CNC Láser.",
        "El diseño final posee una silueta con corte sirena y la paleta de color es monocromática en negro con distintos matices, tanto opacos como brillantes, donde el fin es estilizar y dar énfasis en la elegancia."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/VINA2018/1.PNG",
      imagen2: "assets/img/VINA2018/2.PNG",
      imagen3: "assets/img/VINA2018/3.PNG",
      imagenGrupal: "assets/img/VINA2018/grupal.png",
      integrantes: "Diego Vilches",
      partner: "Matías Hernán",
      link: null,
      partnerIMG: "assets/img/partners/matiasHernan.jpg",
      partnerMSJ: null
    },
    {
      nombreSmall: "M2M OR IMITATION OF NATURE CAPSULE COLLECTION",
      nombreCompleto: "M2M OR IMITATION OF NATURE CAPSULE COLLECTION, TRABAJO COLABORATIVO CON EL DISEÑADOR DE VESTUARIO CLAUDIO PAREDES",
      periodo: "2016-2017",
      categoria: "vinculacion",
      descripcion: [
        "“M2M or Imitation of Nature - Capsule collection” es un proyecto colaborativo en Diseño, Moda y Tecnología desarrollado entre ProteinLab UTEM y el diseñador de vestuario Claudio Paredes.",
        "M2M integra herramientas de fabricación digital (impresión 3D corte láser y electrónica embebida), con técnicas tradicionales de confección.",
        "La inspiración de M2M proviene directamente de la observación de la belleza matemática de la naturaleza, la cual se manifiesta en la utilización de diseños fractales y patrones encontrados en esta. El objetivo de este proyecto es explorar las potencialidades de la unión de moda y tecnología a través del uso de técnicas de diseño y desarrollo de alta costura tradicional, en combinación de las tecnologías de fabricación digital y electrónica interactiva. Tecnologías como el corte láser, permiten la aplicación de diseños, texturas y patrones dinámicos y complejos directamente sobre la tela, así como la impresión 3D facilita la creación de elementos biomiméticos los cuales se integran a las prendas."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/M2M/1.jpg",
      imagen2: "assets/img/M2M/2.png",
      imagen3: "assets/img/M2M/3.png",
      imagenGrupal: "assets/img/M2M/grupal.png",
      integrantes: "Diego Vilches",
      partner: "Claudio Paredes",
      link: null,
      partnerIMG: "assets/img/partners/claudioParedes.jpeg",
      partnerMSJ: null
    },
    {
      nombreSmall: "DUO ENERGY",
      nombreCompleto: "DUO ENERGY",
      periodo: "2016-2017",
      categoria: "apoyo",
      descripcion: [
        "Duo Energy, pertenece a la emprendedora Panameña Sady Garzón, que por medio del programa  Startup Chile de CORFO realiza una alianza con ProteinLab UTEM para el desarrollo de Duo Energy, que corresponde a una prenda textil que genera calor, permitiendo la transmisión de calor a la persona.",
        "El objetivo fue lograr 21 grados Celsius de temperatura, utilizando tecnologías existentes y a bajo costo . Durante 3 meses se desarrolló un trabajo colaborativo entre emprendedora y el equipo de Diseño y Ingeniería Electrónica, en donde se obtuvo el primer MVP que fue presentado a CORFO con muy buenos resultados.",
        "Durante el 2017 se continuó el trabajo con otro fondo STARTUP CHILE, en donde el  objetivo fue el mejoramiento del MVP, logrando un prototipo totalmente funcional,  con nuevas prestaciones y una App."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: null,
      imagen2: null,
      imagen3: null,
      imagenGrupal: "assets/img/LOGO_PROTEINLAB.svg",
      integrantes: "Helene Schmelzer,Carla Perez,Diego Vilches,Francisco Sanchez",
      partner: "Sady Garzón",
      link: null,
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "AGROSUPER",
      nombreCompleto: "AGROSUPER",
      periodo: "2016-2017",
      categoria: "vinculacion",
      descripcion: [
        "El área de Innovación de Agrosuper, empresa líder en la industria de alimentos, generó una alianza con ProteinLab UTEM en donde se desarrolló un dispositivo con el objetivo de  impresión de pasta de carne (similar a la de hamburguesas).",
        "Se creó un Plan de trabajo colaborativo y proyectado en el tiempo, en donde se experimentó con diversos sistemas de impresión, muy poco explorados en el mundo."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: null,
      imagen2: null,
      imagen3: null,
      imagenGrupal: "assets/img/LOGO_PROTEINLAB.svg",
      integrantes: "vacio",
      partner: "Agrosuper",
      link: null,
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "ALLEGRA",
      nombreCompleto: "ALLEGRA",
      periodo: "2017",
      categoria: "apoyo",
      descripcion: [
        "El objetivo de este proyecto fue desarrollar un módulo electrónico portátil con conexión a internet, liviano y de bajo costo, creado para ofrecer trazabilidad de la carga online durante el transporte de alimentos y de encomiendas, que además de la ubicación permita conocer la temperatura, humedad, ayudando a las empresas del rubro a generar indicadores y disminuir pérdidas provocadas principalmente durante sus cadenas de suministro.",
        "Este proyecto busca avanzar en la oferta digital asociada a vehículos comerciales e industriales, posicionando a nuestra empresa (hoy dedicada al desarrollo y fabricación de vehículos livianos cero emisiones) como pionera en ofrecer vehículos eléctricos y sistemas digitales desarrollados especialmente para optimizar la gestión del transporte de carga.",
        "Este proyecto se postuló en conjunto a un Voucher de Innovación CORFO, con la empresa Lucio Alvarez."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: null,
      imagen2: null,
      imagen3: null,
      imagenGrupal: "assets/img/LOGO_PROTEINLAB.svg",
      integrantes: "Francis Soto,Josue Alarcon,Victor Meza,Sergio Abarca",
      partner: "Lucio Alvarez",
      link: null,
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "DISPOSITIVO IOT – UTN TUCUMÁN",
      nombreCompleto: "DISPOSITIVO IOT – UTN TUCUMÁN",
      periodo: "2017",
      categoria: "vinculacion",
      descripcion: [
        "El proyecto consistió en un sistema basado en IoT que permita al usuario poder encender y apagar un dispositivo de forma remota a través de internet.",
        "Este desarrollo se enmarca dentro de la alianza colaborativa de trabajo entre ProteinLab y la Dirección de Proyectos Informáticos de la Universidad Tecnológica Nacional de Tucumán, Argentina. (UTN FRT)",
        "Esta alianza tiene por objetivo generar desarrollos tecnológicos multidisciplinarios en conjunto, con la finalidad de generar un laboratorio interuniversitario binacional.",
        "El resultado de este proyecto fue exhibido en la “Semana de la Ingeniería” evento anual que desarrolla la UTN en Tucumán.",
        "Este proyecto fue seleccionado para la exposición de Proyectos Tecnológicos en FAB13 Santiago, en Agosto 2017."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/IOT-TUCUMAN/1.jpg",
      imagen2: "assets/img/IOT-TUCUMAN/2.jpg",
      imagen3: "assets/img/IOT-TUCUMAN/3.png",
      imagenGrupal: "assets/img/IOT-TUCUMAN/grupal.jpg",
      integrantes: "Josue Alarcon,Francis Soto,Sergio Abarca",
      partner: "Universidad Tecnológica Nacional de Tucumán",
      link: "https://www.youtube.com/watch?v=EDawbhuHI4I",
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "MIO EXO",
      nombreCompleto: "MIO EXO",
      periodo: "2017",
      categoria: "apoyo",
      descripcion: [
        "Este proyecto corresponde al trabajo final para la obtención del Título Profesional en Ingeniería Electrónica de los alumnos Carla Pérez y Mauricio Olivares.",
        "Este proyecto considera el diseño y construcción de un dispositivo electro-mecánico accionando mediante señales mioeléctricas con un formato de exoesqueleto e implementado en pacientes con falta de movilidad, producto de algún daño neuromuscular, traumatismo craneal o lesiones de médula espinal que le hayan provocado al afectado una pérdida muscular en extremidades superiores.",
        "El trabajo se inició a fines del año 2016, con el desarrollo del proyecto y posteriormente se apoyó para la postulación a financiamiento externo. En Mayo del 2017 se adjudicó financiamiento CORFO, mediante el programa de apoyo al emprendimiento STARTUP CHILE"
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: null,
      imagen2: null,
      imagen3: null,
      imagenGrupal: "assets/img/LOGO_PROTEINLAB.svg",
      integrantes: "Victor Meza,Paz Ayala,Francis Soto,Carla Perez",
      partner: "Carla Pérez y Mauricio Olivares",
      link: null,
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "PROYECTO TOTEM TURISMO",
      nombreCompleto: "PROYECTO TOTEM TURISMO",
      periodo: "2017",
      categoria: "vinculacion",
      descripcion: [
        "El proyecto consiste en un Totem de comunicación para parques nacionales., entregando información necesaria para su visita.",
        "Estos datos hacen referencia a condiciones climáticas, comunicación con guardaparque e información del parque.",
        "Este proyecto responde a la necesidad del equipo de Competitividad Turística UTEM para diseñar y desarrollar un sistema de información interactiva orientado a visitantes de parques nacionales o áreas de interés turístico."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: null,
      imagen2: null,
      imagen3: null,
      imagenGrupal: "assets/img/LOGO_PROTEINLAB.svg",
      integrantes: "Sergio Abarca,Francis Soto,Josue Alarcon",
      partner: null,
      link: null,
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "PLATAFORMA TECNOLÓGICA EN SMART CITY PARA LA REGIÓN METROPOLITANA",
      nombreCompleto: "PROYECTO CIENCIA – EMPRESA: PLATAFORMA TECNOLÓGICA EN SMART CITY PARA LA REGIÓN METROPOLITANA",
      periodo: "2015",
      categoria: "vinculacion",
      descripcion: [
        "El objetivo general de este proyecto fue fortalecer los vínculos entre las instituciones que realizan actividades de I+D+i sobre Smart Cities y la Industria tecnológica en la Región Metropolitana de modo de preparar el entorno técnico y económico necesario para el desarrollo de una Smart City en Santiago que contribuya a mejorar la calidad de vida de sus habitantes. Se abordaron los siguientes tópicos: Smart Cities, Smart Building, Machine to Machine, Internet of Things, Tecnologías Interactivas y diseño de experiencias de usuarios.",
        "Las entidades participantes de este proyecto son:",
        "Fraunhofer Chile Research Foundation (FCR)",
       	"ProteinLab UTEM, Universidad Tecnológica Metropolitana",
       	"Asociación Chilena de Empresas de Tecnología de Información A.G. (ACTI)"
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/SMART-CITY_RM/1.jpg",
      imagen2: "assets/img/SMART-CITY_RM/2.jpg",
      imagen3: "assets/img/SMART-CITY_RM/3.jpg",
      imagenGrupal: "assets/img/SMART-CITY_RM/grupal.JPG",
      integrantes: "vacio",
      partner: null,
      link: null,
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "PROYECTO ESTÓMAGO IN VITRO",
      nombreCompleto: "PROYECTO ESTÓMAGO IN VITRO",
      periodo: "2015",
      categoria: "vinculacion",
      descripcion: [
        "Proyecto colaborativo entre LabBio y ProteinLab UTEM para el Diseño y desarrollo de un sistema de digestión in vitro que simula el estómago humano para el estudio de la biodisponibilidad de nutrientes. El sistema busca recrear técnica y visualmente el sistema digestivo.",
        "El proyecto se desarrolló en el marco de la ejecución de un proyecto Fondecyt de la Académica del Departamento de Ingeniería Química Dra. Elizabeth Troncoso.",
        "El prototipo está compuesto por una estructura de acrílico con un estaque en el centro donde se ubica un estómago de Latex de tamaño natural sumergido en agua a 37º C. El estómago es comprimido por 8 paletas de acrílico que están unidas cada una, a un pistón accionado por un servomotor. El movimiento y compresión de las 8 paletas simulan el movimiento peristáltico del estómago.",
        "El sistema diseñado tiene diversas rutinas de funcionamiento las cuales son controladas desde un panel lateral.",
        "El proyecto demandó el trabajo colaborativo entre diseñadores y ingenieros electrónicos, químicos e informáticos."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/ESTOMAGO/1.JPG",
      imagen2: "assets/img/ESTOMAGO/2.jpg",
      imagen3: null,
      imagenGrupal: "assets/img/ESTOMAGO/grupal.jpg",
      integrantes: "vacio",
      partner: null,
      link: null,
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "FRESHWATER",
      nombreCompleto: "FRESHWATER",
      periodo: "2015",
      categoria: "apoyo",
      descripcion: [
        "Durante el segundo semestre del 2015, el Programa de Prospectiva e Innovación Tecnológica, ProteinLab Utem, generó una alianza colaborativa con Freshwater Solutions, creadores del Proyecto Freshwater.",
        "Freshwater, ganador del Premio de Innovación Avonni 2015, produce agua de la humedad del aire mediante una máquina de uso doméstico que imita el ciclo del agua: condensa las partículas de H2O en el aire y las condensa hasta transformarlas en gotas de agua, las que luego son enfriadas y esterilizadas. El sistema, que se abastece de energía eléctrica o solar, puede generar entre 9 a 30 litros diarios de agua potable.",
        "ProteinLab Utem contribuyó con su equipo interdisciplinario en Diseño, Ingeniería electrónica e Informática en optimizar el sistema electrónico y usabilidad de Freshwater para mejorar los procesos de fabricación, costos y accesibilidad.",
        "Esta iniciativa contó con el respaldo de Start-Up Chile, Fundación Chile, Corfo, ProteinLab Utem, Socialab y Docs4change."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/FRESHWATER/1.JPG",
      imagen2: "assets/img/FRESHWATER/2.jpg",
      imagen3: null,
      imagenGrupal: "assets/img/FRESHWATER/grupal.jpg",
      integrantes: "vacio",
      partner: "Freswater",
      link: "http://www.freshwatersolutions.org/",
      partnerIMG: "assets/img/partners/freshwater.JPG",
      partnerMSJ: null
    },
    {
      nombreSmall: "PROYECTO SABER HACER",
      nombreCompleto: "PROYECTO SABER HACER - COSTURERAS PEÑALOLÉN",
      periodo: "2015",
      categoria: "vinculacion",
      descripcion: [
        "Durante el segundo semestre del 2015, junto al Taller de Diseño Industrial IV UTEM a cargo de los profesores Héctor Torres y Macarena Valenzuela, se desarrolló un Taller de co-creación entre los alumnos y costureras de la Municipalidad de Peñalolén.",
        "Este Taller estuvo a cargo del grupo Saber Hacer, liderado por Rodrigo Gajardo en el cual desarrollan dinámicas para promover el conocimiento y la producción local. Fueron 3 instancias en que 15 alumnos y 15 costureras se formaron en grupos multidisciplinarios para desarrollar diversos encargos que fueron solicitados por empresas o entidades. La colaboración, co-creación y la creatividad  fueron esenciales para desarrollar los productos, que crearon, diseñaron y fabricaron en estos Talleres.",
        "Luego, los alumnos evolucionaron los productos incorporando tecnología para una mejor funcionalidad e interacción, en donde las costureras también participaron.",
        "Al finalizar el año, se realizó una entrega pública en donde se expusieron los productos y su evolución tecnológica.",
        "Los alumnos pasaron a pertenecer a la comunidad productora de la Municipalidad de Peñalolén."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/COSTURERAS-PENALOLEN/1.png",
      imagen2: "assets/img/COSTURERAS-PENALOLEN/2.jpg",
      imagen3: "assets/img/COSTURERAS-PENALOLEN/3.jpg",
      imagenGrupal: "assets/img/COSTURERAS-PENALOLEN/grupal.jpg",
      integrantes: "vacio",
      partner: null,
      link: null,
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "THUMBIE",
      nombreCompleto: "THUMBIE",
      periodo: "2017",
      categoria: "apoyo",
      descripcion: [
        "Thumbie es una ortoprótesis de bajo costo para personas con amputación de pulgar u otro tipo de discapacidad de mano relacionada con la incapacidad para realizar la pinza.",
        "Devuelve aproximadamente un 70% de las capacidades perdidas a 1/5 del precio de su competencia.",
        "Proyecto ganador de Innovatón 2014 (Teletón Chile) y fue incubado por Socialab Chile. Durante el primer semestre del 2015 se adjudicó el instrumento CORFO  SSAF- Social por medio del  Programa del Laboratorio de Innovación Social de la UC y el Centro de Innovación UC, CoLab UC.",
        "En el segundo semestre del mismo año, se formaliza la alianza colaborativa con ProteinLab UTEM para un desarrollo centrado en el rediseño, optimización de materiales, investigación aplicada en técnicas de fabricación digital y futura incorporación de electrónica en otros proyectos similares que tiene la empresa.",
        "Durante el año 2017 se realizó una postulación en conjunto a un Voucher para la Innovación CORFO, el cual se adjudica con el objetivo de optimizar sus partes y piezas para una mejor funcionalidad y producción."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/THUMBIE/1.png",
      imagen2: "assets/img/THUMBIE/2.png",
      imagen3: "assets/img/THUMBIE/3.png",
      imagenGrupal: "assets/img/THUMBIE/grupal.png",
      integrantes: "Paz Ayala",
      partner: "Thumbie",
      link: "http://www.thumbie.org/",
      partnerIMG: "assets/img/partners/thumbie.png",
      partnerMSJ: null
    },
    {
      nombreSmall: "MOUTI",
      nombreCompleto: "MOUTI",
      periodo: "2016",
      categoria: "apoyo",
      descripcion: [
        "Mouti es un dispositivo educativo de higiene bucal para niños con necesidades especiales. Es ergonómico y permite educar a través de la creación de hábitos didácticos, creando una actividad divertida basada en la experiencia y en el uso de elementos sensoriales que estimulan al niño, mediante la asociación de un color con un área de la boca.",
        "Puede ser utilizado por cualquier niño en etapa de aprendizaje.",
        "Ganadores de Innovatón 2015 (Teletón Chile) e incubados durante el 2016 en Socialab Chile.",
        "Durante el mes de Mayo del 2016 se formalizó la alianza con ProteinLab Utem, la cual se enfocó en la realización de un prototipo conceptual del funcionamiento y el rediseño del cepillo y su sistema electrónico. En este proyecto, el equipo de Diseño y Electrónica trabaja colaborativamente para la obtención de un resultado integral."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/MOUTI/1.jpg",
      imagen2: null,
      imagen3: null,
      imagenGrupal: "assets/img/MOUTI/grupal.jpg",
      integrantes: "Helene Schmelzer",
      partner: "Mouti",
      link: "https://www.facebook.com/mouti",
      partnerIMG: "assets/img/partners/mouti.jpg",
      partnerMSJ: null
    },
    {
      nombreSmall: "GET UP",
      nombreCompleto: "GET UP",
      periodo: "2016",
      categoria: "vinculacion",
      descripcion: [
        "Proyecto de vinculación mediante la asignación de instrumento Voucher de Innovación de Corfo. Get Up es una silla Bipedestadora que permite el posicionamiento vertical de la persona. Este producto perteneciente a la empresa Kirón y es comercializado actualmente.",
        "Obtuvieron el Premio Nacional de Innovación Avonni 2016, en la categoría Salud. Además de distintos fondos de financiamiento. En cuanto al encargo que se realizó a ProteinLab UTEM, fue el desarrollar un sistema de desplazamiento motorizado, eléctrico y desmontable para la silla de ruedas, generando un sistema integrado, que permita poner de pie a los pacientes y los desplazarlos al mismo tiempo. "
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/GET-UP/1.jpg",
      imagen2: "assets/img/GET-UP/2.jpg",
      imagen3: "assets/img/GET-UP/3.jpeg",
      imagenGrupal: "assets/img/GET-UP/grupal.jpg",
      integrantes: "Victor Meza",
      partner: "Kiron",
      link: "https://www.kiron.cl",
      partnerIMG: null,
      partnerMSJ: null
    },
    {
      nombreSmall: "ROTONWALL",
      nombreCompleto: "ROTONWALL",
      periodo: "2016",
      categoria: "apoyo",
      descripcion: [
        "ROTONWALL, mobiliario para espacios reducidos que  permite el movimiento en su eje del muro que contiene distintos dispositivos, como TV y equipo de sonido. Así el aprovechamiento y optimización del espacio es mayor.",
        "Actualmente este producto se encuentra en diversos departamentos, solicitados por inmobiliarias de la Región Metropolitana, ya que contribuye a un aumento en las ventas de departamentos, por su funcionalidad, optimización de espacio e innovación.",
        "Proyecto creado por el docente de la Escuela de Diseño UTEM,  Ramiro Torres Alvarado."
      ],
      segmento: "Transferencia y Vinculación con la Industria",
      imagen1: "assets/img/ROTONWALL/1.png",
      imagen2: "assets/img/ROTONWALL/2.png",
      imagen3: null,
      imagenGrupal: "assets/img/ROTONWALL/grupal.png",
      integrantes: "Paz Ayala,Victor Meza",
      partner: "Ramiro Torres Alvarado",
      link: "https://www.toyzu.cl",
      partnerIMG: "assets/img/partners/toyzu.png",
      partnerMSJ: null
    }
  ];

  constructor() { }

   getProyectosPropios():Proyecto[]{
     // limpiar arreglo
     this.proyectosPropios.splice(0, this.proyectosPropios.length);
     console.log("Propio: despues de limpiar ",this.proyectosPropios)
     // Obtener proyecto de la catregoria
     for(let a = 0; a < this.proyectos.length; a++){
       if(this.proyectos[a].categoria == "propio"){
         this.proyectosPropios.push(this.proyectos[a]);
       }
     }
     console.log("Propio: despues de extraer ",this.proyectosPropios)
     for(let i = 0; i < this.proyectosPropios.length; i++){
       this.randPropio = Math.floor(Math.random() * this.proyectosPropios.length);
       console.log(this.randPropio);
       this.auxPropio = this.proyectosPropios[i];
       this.proyectosPropios[i] = this.proyectosPropios[this.randPropio];
       this.proyectosPropios[this.randPropio] = this.auxPropio;
     }
     console.log("Propio: despues de desordenar ",this.proyectosPropios)
     //retornar arreglo desordenado
     return this.proyectosPropios;
   }

   getProyectosVinculacion():Proyecto[]{
     // limpiar arreglo
     this.proyectosVinculacion.splice(0, this.proyectosVinculacion.length);
     console.log("Vinculacion: despues de limpiar ",this.proyectosVinculacion)
     // Obtener proyecto de la catregoria
     for(let a = 0; a < this.proyectos.length; a++){
       if(this.proyectos[a].categoria == "vinculacion"){
         this.proyectosVinculacion.push(this.proyectos[a]);
       }
     }
     console.log("Vinculacion: despues de extraer ",this.proyectosVinculacion)
     for(let i = 0; i < this.proyectosVinculacion.length; i++){
       this.randPropio = Math.floor(Math.random() * this.proyectosVinculacion.length);
       console.log(this.randPropio);
       this.auxPropio = this.proyectosVinculacion[i];
       console.log(i, " - ", this.auxPropio);
       this.proyectosVinculacion[i] = this.proyectosVinculacion[this.randPropio];
       console.log(i, " - ", this.proyectosVinculacion[i]);
       this.proyectosVinculacion[this.randPropio] = this.auxPropio;
       console.log(i, " - ", this.proyectosVinculacion[this.randPropio]);
     }
     console.log("Vinculacion: despues de desordenar ",this.proyectosVinculacion)
     //retornar arreglo desordenado
     return this.proyectosVinculacion;
   }

   getProyectosApoyo():Proyecto[]{
     // limpiar arreglo
     this.proyectosApoyo.splice(0, this.proyectosApoyo.length);
     console.log(" Apoyo: despues de limpiar ",this.proyectosApoyo)
     // Obtener proyecto de la catregoria
     for(let a = 0; a < this.proyectos.length; a++){
       if(this.proyectos[a].categoria == "apoyo"){
         this.proyectosApoyo.push(this.proyectos[a]);
       }
     }
     console.log(" Apoyo: despues de extraer ",this.proyectosApoyo)
     for(let i = 0; i < this.proyectosApoyo.length; i++){
       this.randPropio = Math.floor(Math.random() * this.proyectosApoyo.length);
       console.log(this.randPropio);
       this.auxPropio = this.proyectosApoyo[i];
       this.proyectosApoyo[i] = this.proyectosApoyo[this.randPropio];
       this.proyectosApoyo[this.randPropio] = this.auxPropio;
     }
     console.log(" Apoyo: despues de desordenar ",this.proyectosApoyo)
     //retornar arreglo desordenado
     return this.proyectosApoyo;
   }

   getProyecto( idx:string ){
     for(let i=0; i < this.proyectos.length; i++){
       if(this.proyectos[i].nombreSmall == idx){
         return this.proyectos[i];
       }
     }
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
  nombreSmall: string;
  nombreCompleto: string;
  periodo: string;
  categoria: string;
  descripcion: string[];
  segmento: string;
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
