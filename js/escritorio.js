const listaMenu = [
    {
        opcion: 1,
        titulo: "Crear Articulo",
        clase: "crearArticulo",
        id: "idCrearArticulo",
        nivelTitulo: 1
    },
    {
        opcion: 2,
        titulo: "Listar Articulos",
        clase: "listarArticulos",
        id: "idListarArticulos",
        nivelTitulo: 1
    },
    {
        opcion: 3,
        titulo: "Listar Articulos Con Descuento",
        clase: "listarArticulosConDescuento",
        id: "idListarArticulosConDescuento",
        nivelTitulo: 1
    },
    {
        opcion: 4,
        titulo: "Buscar Articulo Por Id",
        clase: "buscarArticuloPorId",
        id: "idBuscarArticuloPorId",
        nivelTitulo: 1
    },
    {
        opcion: 5,
        titulo: "Buscar Articulo Por Categoria",
        clase: "buscarArticuloPorCategoria",
        id: "idBuscarArticuloPorCategoria",
        nivelTitulo: 2
    },
    {
        opcion: 6,
        titulo: "Buscar Articulo Por Nombre",
        clase: "buscarArticuloPorNombre",
        id: "idBuscarArticuloPorNombre",
        nivelTitulo: 2
    },
    {
        opcion: 7,
        titulo: "Verificar Existencia Articulo",
        clase: "verificarExistenciaArticulo",
        id: "idVerificarExistenciaArticulo",
        nivelTitulo: 2
    },
    {
        opcion: 8,
        titulo: "Comprar",
        clase: "comprar",
        id: "idComprar",
        nivelTitulo: 2
    },
    {
        opcion: 9,
        titulo: "Salida",
        clase: "salida",
        id: "idSalida",
        nivelTitulo: 2
    }
];

const lista = [];

console.log("-------------------")
//console.log(lista)
console.log("-------------------")
const tag = document.getElementById("idpepe");

      //tag.addEventListener("change", crearListado);
      //tag.onchange = (()=>console.log("cambiar"))
      //tag.addEventListener = (() => console.log("algo"))
      tag.addEventListener('change', () => console.log("algo"));

      tag.onchange = () => console.log("Cambió el valor a: " );

      

 const input = document.getElementById("idListarArticulosConDescuentoInputDescuento");

// input.addEventListener("keydown", () => console.log("Presionaste una tecla"));
// input.addEventListener("keyup", () => console.log("Soltaste una tecla"));

 input.addEventListener("input", () => console.log("Valor actual: " + input.value));

// input.onchange = () => console.log("Cambió el valor a: " + input.value);
