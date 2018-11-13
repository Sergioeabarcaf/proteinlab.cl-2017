export interface Proyecto {
  portada: Portada;
  contenido: Contenido;
  imagenes: Imagenes;
  partner?: any;
  tipo: string;
  id: string;
}

export interface Imagenes {
  grupal: string;
  img1: string;
  img2: string;
  img3: string;
}

export interface Contenido {
  nombre: string;
  periodo: string;
  descripcion: string[];
  link: string;
}

export interface Portada {
  nombre: string;
  bajada: string;
  categoria: string;
}

// {
    //   portada: {
    //     nombre: "MIO EXO",
    //     bajada: null,
    //     categoria: "Transferencia y Vinculación con la Industria"
    //   },
    //   contenido:{
    //     nombre: "MIO EXO",
    //     periodo: "2017",
    //     descripcion:[
    //       "Este proyecto corresponde al trabajo final para la obtención del Título Profesional en Ingeniería Electrónica de los alumnos Carla Pérez y Mauricio Olivares.",
    //       "Este proyecto considera el diseño y construcción de un dispositivo electro-mecánico accionando mediante señales mioeléctricas con un formato de exoesqueleto e implementado en pacientes con falta de movilidad, producto de algún daño neuromuscular, traumatismo craneal o lesiones de médula espinal que le hayan provocado al afectado una pérdida muscular en extremidades superiores.",
    //       "El trabajo se inició a fines del año 2016, con el desarrollo del proyecto y posteriormente se apoyó para la postulación a financiamiento externo. En Mayo del 2017 se adjudicó financiamiento CORFO, mediante el programa de apoyo al emprendimiento STARTUP CHILE"
    //     ],
    //     link: null
    //   },
    //   imagenes: null,
    //   partner: null,
    //   tipo: "apoyo"
    // },
    // {
    //   portada: {
    //     nombre: "",
    //     bajada: "",
    //     categoria: ""
    //   },
    //   contenido:{
    //     nombre: "",
    //     periodo: "",
    //     descripcion:[
    //       ""
    //     ],
    //     link: ""
    //   },
    //   imagenes:{
    //     grupal: "",
    //     img1: "",
    //     img2: "",
    //     img3: ""
    //   },
    //   partner:{
    //     nombre: "",
    //     descripcion: "",
    //     img: ""
    //   },
    //   tipo: "",
    //   id: 81817
    // },
