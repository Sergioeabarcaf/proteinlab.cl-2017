import { Injectable } from '@angular/core';

@Injectable()
export class ProyectosService {

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
      partnerIMG:null,
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
      partnerIMG:null,
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
      partnerIMG:null,
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
      partnerIMG:null,
      partnerMSJ:null
    },
    {
      nombre:"TRABAJO COLABORATIVO CON EL DISEÑADOR DE VESTUARIO MATÍAS HERNÁN PARA FESTIVAL DE VIÑA 2018",
      descripcion:[
        "Durante la tercera noche del Festival de Viña del Mar 2018,  Carola de Moras, animadora del Festival, lució un vestido que fue el resultado del trabajo colaborativo entre el diseñador de vestuario Matías Hernán y ProteinLab UTEM.",
        "El vestido fue diseñado en conjunto, a partir de piezas digitalizadas sobre la base del cuerpo de la animadora, en donde Diego Vilches, diseñador de ProteinLab UTEM, desarrolló mediante la utilización de softwares paramétricos (programas de modelado 3D y de vectorización). Fue fabricado mediante tecnologías de impresión 3D, en donde su mayor composición se utilizó un filamento imprimible (termoplástico elastómero con base de poliuretano) que se caracteriza por sus propiedades elásticas, flexibles y ecológicas. Además, se compuso de una pieza central y estructural en el escote, un triángulo, hecho de polímero biodegradable llamado PLA.",
        "El diseño final posee una silueta con corte sirena y la paleta de color es monocromática, definida con el negro y trabajada una composición de distintos matices, tanto opacos como brillantes, donde el fin es estilizar y dar énfasis en la elegancia.",
        "Este trabajo colaborativo tomó alrededor de 3 meses, en donde el diseñador de ProteinLab UTEM, Diego Vilches junto al diseñador de vestuario Matías Hernán, ganador de Project Runway Latin América 2013 y su equipo, trabajaron en la formulación de este diseño, dando prioridad a la utilización de las nuevas tecnologías aplicadas a la industria textil.",
        "Este resultado marca un precedente en el ámbito textil y tecnológico, siendo el primer vestido nacional que utiliza tecnologías 3D en su fabricación.",
        "También marca como precedente la colaboración entre un diseñador de vestuario y una Universidad para la generación de una prenda para el Festival de Viña del Mar, que es difundido a nivel nacional e internacional."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Diego Vilchez",
      partner:"Matías Hernán",
      partnerIMG:null,
      partnerMSJ:null
    },
    {
      nombre:"M2M OR IMITATION OF NATURE CAPSULE COLLECTION, TRABAJO COLABORATIVO CON EL DISEÑADOR DE VESTUARIO CLAUDIO PAREDES",
      descripcion:[
        "'M2M or Imitation of Nature - Capsule collection' es un proyecto colaborativo en Diseño, Moda y Tecnología desarrollado entre ProteinLab UTEM y el diseñador de vestuario Claudio Paredes. M2M integra herramientas de fabricación digital (impresión 3D corte láser y electrónica embebida), con técnicas tradicionales de confección.",
        "La inspiración de M2M proviene directamente de la observación de la belleza matemática de la naturaleza, la cual se manifiesta en la utilización de diseños fractales y patrones encontrados en esta.El objetivo de este proyecto es explorar las potencialidades de la unión de moda y tecnología a través del uso de técnicas de diseño y desarrollo de alta costura tradicional, en combinación de las tecnologías de fabricación digital y electrónica interactiva. Tecnologías como el corte láser, permiten la aplicación de diseños, texturas y patrones dinámicos y complejos directamente sobre la tela, así como la impresión 3D facilita la creación de elementos biomiméticos los cuales se integran a las prendas."
      ],
      categoria:"Transferencia y Vinculación con la Industria",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Diego Vilchez",
      partner:"Claudio Paredes",
      partnerIMG:null,
      partnerMSJ:null
    }
  ];

  constructor() { }

   getProyectos():Proyecto[]{
     return this.proyectos;
   }

   getProyecto( idx:string ){
     return this.proyectos[idx];
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
  partnerIMG: string;
  partnerMSJ: string;
}
