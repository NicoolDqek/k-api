// enpoitns = {
//     albums:"",
//     artista:"",
//     grupo:"",
//     empresa:"",

// }


export const fieldsByType = {
  album: [
    { name: "titulo", label: "Título", type: "text" },
    { name: "grupo", label: "Grupo", type: "select", endpoint: "grupo" },
    { name: "lanzamiento", label: "Lanzamiento", type: "date" },
    { name: "tipo", label: "Tipo", type: "text" },
    { name: "concepto", label: "Concepto", type: "select", endpoint: "concepto" },
    { name: "descripcion", label: "Descripción", type: "textarea" },
  ],
  grupo: [
    { name: "nombre", label: "Nombre del grupo", type: "text" },
    { name: "empresa", label: "Empresa", type: "select", endpoint: "empresa" },
    { name: "generacion", label: "Generación", type: "select", endpoint: "generacion" },
    { name: "concepto", label: "Concepto", type: "select", endpoint: "concepto" },
    { name: "activo", label: "Activo", type: "boolean" },
    { name: "descripcion", label: "Descripción", type: "textarea" },
  ],
  integrante: [
    { name: "nombre", label: "Nombre", type: "text" },
    { name: "nacimiento", label: "Nacimiento", type: "date" },
    { name: "grupo", label: "Grupo", type: "select", endpoint: "grupo" },
    { name: "empresa", label: "Empresa", type: "select", endpoint: "empresa" },
    { name: "edad", label: "Edad", type: "number" },
    { name: "rol", label: "Rol", type: "select", endpoint: "rol" },
    { name: "activo", label: "Activo", type: "boolean" },
    { name: "fandom", label: "Fandom", type: "select", endpoint: "fandom" },
    { name: "descripcion", label: "Descripción", type: "textarea" },
  ],
  empresa: [
    { name: "nombre", label: "Nombre", type: "text" },
    { name: "sede", label: "Sede", type: "text" },
    { name: "fundacion", label: "Fundación", type: "date" },
  ]
}
