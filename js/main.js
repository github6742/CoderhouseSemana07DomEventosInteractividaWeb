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

const listaPrecioArticulos = [
      {
        id: 1,
        codigo: "TVS0033PCO01",
        nombre: "TELEVISOR SMART TV PHILCO 33 PULGADAS", 
        marca: "PHILCO",
        categoria: "TELEVISOR",
        precio: 331000
      },                                 
      {
        id: 2,
        codigo: "TVS0033PHI02",
        nombre: "TELEVISOR SMART TV PHILLIPS 33 PULGADAS", 
        marca: "PHILLIPS",
        categoria: "TELEVISOR",
        precio: 332000
      },                                 
      {
        id: 3,
        codigo: "TVS0033SAM03",
        nombre: "TELEVISOR SMART TV SAMSUNG 33 PULGADAS", 
        marca: "SAMSUNG",
        categoria: "TELEVISOR",
        precio: 333000
      },                                 
      {
        id: 4,
        codigo: "TVS0033JVL04",
        nombre: "TELEVISOR SMART TV JVL 33 PULGADAS",
        marca: "JVL",
        categoria: "TELEVISOR",
        precio: 334000
      },                                 
      {
        id: 5,
        codigo: "TVS0042PCO05",
        nombre: "TELEVISOR SMART TV PHILCO 42 PULGADAS",
        marca: "PHILCO",
        categoria: "TELEVISOR",
        precio: 425000
      },                                 
      {
        id: 6,
        codigo: "TVS0042PHI06",
        nombre: "TELEVISOR SMART TV PHILLIPS 42 PULGADAS",
        marca: "PHILLIPS",
        categoria: "TELEVISOR",
        precio: 426000
      },                                 
      {
        id: 7,
        codigo: "TVS0042SAM07",
        nombre: "TELEVISOR SMART TV SAMSUNG 42 PULGADAS",
        marca: "SAMSUNG",
        categoria: "TELEVISOR",
        precio: 427000
      },                                 
      {
        id: 8,
        codigo: "TVS0042JVL08",
        nombre: "TELEVISOR SMART TV JVL 42 PULGADAS", 
        marca: "JVL",
        categoria: "TELEVISOR",
        precio: 580000
      },                                 
      {
        id: 9,
        codigo: "COCESC009",
        nombre: "COCINA ESCORIAL",
        marca: "ESCORIAL",
        categoria: "COCINA",
        precio: 590000
      },                                 
      {
        id: 10,
        codigo: "COCDRE010",
        nombre: "COCINA DREAN",
        marca: "DREAN",
        categoria: "COCINA",
        precio: 510000
      },                                 
      {
        id: 11,
        codigo: "COCWHI011",
        nombre: "COCINA WHIRLPOOL", 
        marca: "WHIRLPOOL",
        categoria: "COCINA",
        precio: 511000
      },                                 
      {
        id: 12,
        codigo: "COCELE012",
        nombre: "COCINA ELECTROLUX", 
        marca: "ELECTROLUX",
        categoria: "COCINA",
        precio: 512000
      },                                 
      {
        id: 13,
        codigo: "HELELE0013",
        nombre: "HELADERA ELECTOLUX INVERTER NO FROST",
        marca: "ELECTROLUX",
        categoria: "HELADERA",
        precio: 1300000
      },                                 
      {
        id: 14,
        codigo: "HELWHI0014",
        nombre: "HELADERA WHIRLPOOL INVERTER NO FROST",
        marca: "WHIRLPOOL",
        categoria: "HELADERA",
        precio: 1400000
      },                                 
      {
        id: 15,
        codigo: "HELGAG0015",
        nombre: "HELADERA GAFA INVERTER",
        marca: "SAMSUNG",
        categoria: "HELADERA",
        precio: 1500000
      },                                 
      {
        id: 16,
        codigo: "HELDRE0016",
        nombre: "HELADERA DREAN INVERTER",
        marca: "DREAN",
        categoria: "HELADERA",
        precio: 1600000
      }
];

const carritoCompras = [];
class Articulo {
      constructor(id,
                  codigo, 
                  nombre, 
                  marca,
                  categoria,
                  precio){
        this.id = id,
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
      };
};

function crearHeaderMenu(){
  //
    const tagHeader = document.querySelector("header");
    let menuNivel1 = listaMenu.filter(menu => menu.nivelTitulo == 1);
    let menuNivel2 = listaMenu.filter(menu => menu.nivelTitulo == 2);
  //
    let htmlContenido;
    htmlContenido = `
        <div class="headerContenedor">
             <div class="headerContendorElementos">
                  <h1 class="headerTitulo">MODULO DE ARTICULOS, PRECIOS, COMPRAS</h1>
                  <div class="headerOpciones">
                  <nav class="headerNav">
                    <ul class= "headerUl">
        `;
    menuNivel1.forEach(opciones => {
        htmlContenido += `
        <li class="headerLiOpciones">
        <a id=${opciones.id} class="headerAOpciones">
        ${opciones.titulo}
        </a>
        </li>
        `;
    });
    //
    htmlContenido += `
                    </ul>
                </nav>
        `;
    htmlContenido += `     
                  <nav class="headerNav">
                    <ul class= "headerUl">
        `;  
    menuNivel2.forEach(opciones => {
        htmlContenido += `
        <li class="headerLiOpciones">
        <a id=${opciones.id} class="headerAOpciones">
        ${opciones.titulo}
        </a>
        </li>
        `;
    });
    //
    htmlContenido += `
                    </ul>
                </nav>
        `;   
    htmlContenido += `
                </div>
            </div>
        </div>
        `;
    tagHeader.innerHTML = htmlContenido;     
    //   
};

crearHeaderMenu();

function crearMensajeDialog(tipo, texto){
    console.log("crearMensajeDialog");
    let titulo;
    let htmlContenido;
    if (tipo === 'exito') {
        titulo="✔ Correcto";
    } else {
        titulo="❌ Error";
    };
    const tagDialog = document.createElement("dialog");
    tagDialog.id = "idMensajeDialog";
    tagDialog.className = "mensajeDialog";
    htmlContenido = `<h3 class="mensajeDialogH3">${titulo}</h3>
                        <p class="mensajeDialogP">${texto}</p>
                        <button id="idMensajeDialogButton" class="buttonGlobal">Aceptar</button>`;;
    tagDialog.innerHTML = htmlContenido;
    document.body.appendChild(tagDialog);
    tagDialog.showModal();       
    const tagMensajeDialogButton = document.getElementById("idMensajeDialogButton");
    tagMensajeDialogButton.addEventListener("click", 
                                      function() {
                                                   tagDialog.close();
                                                   tagDialog.remove();
                                                  });                                           
};

function cargarArticulo(e){
  e.preventDefault();
  const id = listaPrecioArticulos.length + 1;  
  const codigo = document.getElementById("idCrearArticuloCodigo").value;
  const nombre = document.getElementById("idCrearArticuloNombre").value;
  const marca = document.getElementById("idCrearArticuloMarca").value;
  const categoria = document.getElementById("idCrearArticuloCategoria").value;
  const precio = document.getElementById("idCrearArticuloPrecio").value;
  const articuloNuevo = new Articulo(id, 
                                     codigo.toUpperCase(), 
                                     nombre.toUpperCase(), 
                                     marca.toUpperCase(), 
                                     categoria.toUpperCase(), 
                                     parseFloat(precio));
  const elementoNuevo = {
    id: articuloNuevo.id, 
    codigo: articuloNuevo.codigo,
    nombre: articuloNuevo.nombre,
    marca: articuloNuevo.marca,
    categoria: articuloNuevo.categoria,
    precio: articuloNuevo.precio
  };
  //
  listaPrecioArticulos.push(elementoNuevo);
  console.log(listaPrecioArticulos)
  crearMensajeDialog("exito", "El articulo se creo satisfactoriamente");
}

function crearCamposDeCrearArticulos(){
  console.log("crearCamposDeCrearArticulos")
    let htmlContenido;
    htmlContenido = `
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloCodigo" >Codigo:</label>
                    <input class="inputGlobal" type="text" id="idCrearArticuloCodigo" name="crearArticuloCodigo" required>
                 </div>
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloNombre" >Nombre:</label>
                    <input class="inputGlobal" type="text" id="idCrearArticuloNombre" name="crearArticuloNombre" required>
                 </div>
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloMarca" >Marca:</label>
                    <input class="inputGlobal" type="text" id="idCrearArticuloMarca" name="crearArticuloMarca" required>
                 </div>
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloCategoria" >Categoria:</label>
                    <select id="idCrearArticuloCategoria" name="crearArticuloCategoria" required="">
                      <option value="">Seleccione Una Categoria</option>
                      <option value="TELEVISOR">TELEVISOR</option>
                      <option value="COCINA">COCINA</option>
                      <option value="HELADERA">HELADERA</option>
                    </select>
                 </div>
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloPrecio" >Precio:</label>
                    <input class="inputGlobal" type="number" id="idCrearArticuloPrecio" name="crearArticuloPrecio" required>
                 </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Guardar</button>
                 </div>`;
   const tagFormulario = document.getElementById("idMainFormulario");
   tagFormulario.innerHTML = htmlContenido;
}

function cargarTablaListado(idMenu){
  console.log("cargarTablaListado")
    let htmlContenido;
   
listaPrecioArticulos.forEach(articulo => {    
      htmlContenido += `<tr id="idMainListarArticulosTr" class="mainListarArticulosTr">
                           <td>${articulo.id}</td>
                           <td>${articulo.codigo.toUpperCase()}</td>
                           <td>${articulo.nombre.toUpperCase()}</td>
                           <td>${articulo.marca.toUpperCase()}</td>
                           <td>${articulo.categoria.toUpperCase()}</td>
                           <td>$${articulo.precio}</td>
                        </tr>`;
    }); 
    htmlContenido += `  </tbody>`;
   const tagMainListarTbody = document.getElementById("idMainListarTbody");
   tagMainListarTbody.innerHTML = htmlContenido;
}

function crearTablaListado(){
  console.log("crearTablaListado")
    let htmlContenido;
                  //<div id="idMainListarArticulosTableContenedor" class="mainListarArticulosTableContenedor">
    htmlContenido = `
                    <table id="idMainListarTable" class="mainListarArticulosTable">
                      <thead class="mainListarThead">
                        <tr class="mainListarTr">
                            <th>ID</th>
                            <th>Código</th>
                            <th>Nombre del Artículo</th>
                            <th>Marca</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                        </tr>
                      </thead>
                      <tbody id="idMainListarTbody" class="mainListarTbody">
                      </tbody>
                     </table>`;
                     
                  //</div>`
    console.log(htmlContenido);
   const tagMainListarTableContenedor = document.createElement("div");
   tagMainListarTableContenedor.id = "idMainListarTableContenedor";
   tagMainListarTableContenedor.className= "mainListarTableContenedor";
   tagMainListarTableContenedor.innerHTML = htmlContenido;
   const tagMainContenedorListado = document.getElementById("idMainContenedorListado");
   tagMainContenedorListado.appendChild(tagMainListarTableContenedor);
}

function crearCamposDeListarArticulosDescuento(){
  
    console.log("crearCamposDeListarArticulosConDescuento")
    //crearListadoDeArticulos();
    let htmlContenido;
    htmlContenido = `<div class="mainListadoFila">
                    <label class="labelGlobal" for="idListarArticulosDescuento" >Descuento:</label>
                    <input class="inputGlobal" type="number" id="idListarArticulosDescuento" name="listarArticulosDescuento">
                 </div>`;
    
    const tagDivDescuento = document.createElement("div");
    tagDivDescuento.className = "mainFormularioFila";
    tagDivDescuento.innerHTML = htmlContenido;                
    document.getElementById("idMainContenedorListado").appendChild(tagDivDescuento)
    const inputDescuento = document.getElementById("idListarArticulosDescuento");
    //inputDescuento.addEventListener("change", cargarTablaListado);
    inputDescuento.onchange(()=>(cargarTablaListado()))
}

function crearCamposListado(idMenu){
  console.log("crearTablaListado")
  // 
  switch(idMenu){
    case "idListarArticulosConDescuento":
      crearCamposDeListarArticulosDescuento();  
      break;
    default:
      break;
  };
  //
}

function hacerAlgo(){
  console.log("hacer algo")
}

function crearCamposFormulario(idMenu){
  console.log("crearCamposFormulario");
  const tagFormulario = document.getElementById("idMainFormulario");
  //
  switch(idMenu){
    case "idCrearArticulo":
      crearCamposDeCrearArticulos();  
      tagFormulario.addEventListener("submit", cargarArticulo);
      break;
    case "idBuscarArticuloPorId":
      crearCamposDeCrearArticulos();  
      break;
    case "idBuscarArticuloPorCategoria":
      crearCamposDeCrearArticulos();  
      break;
    case "idBuscarArticuloPorNombre":
      crearCamposDeCrearArticulos();  
      break;
    case "idBuscarArticuloPorCodigo":
      crearCamposDeCrearArticulos();  
      break;
    case "idComprar":
      crearCamposDeCrearArticulos();  
      break;
    case "idSalida":
      crearCamposDeCrearArticulos();  
      break;
    default:
      break;
  }
}
;

function crearFormulario(e) {
    e.preventDefault();
    console.log("crearFormulario");
    const tagMain = document.querySelector("main");
    const idMenu = e.target.dataset.idMenu;
    const tituloMenu = e.target.dataset.tituloMenu;
    console.log("opcion menu: " + idMenu);
    let htmlContenido;
    htmlContenido = `
    <div id="idMainContenedor" class="mainContenedor">
       <div id="idMainContenedorElementos" class="mainContenedorElementos">
          <h2 id="idMainTitulo" class="mainTitulo">${tituloMenu}</h2>
          <div id="idMainContenedorFormulario" class="mainContenedorFormulario">
            <form id="idMainFormulario" class="mainFormulario" method="POST">
            </form>
          </div>
       </div>
    </div>
    `;
    tagMain.innerHTML = htmlContenido; 
    crearCamposFormulario(idMenu);
};

function crearListado(e) {
    e.preventDefault();
    console.log("crearListado");
    const tagMain = document.querySelector("main");
    const idMenu = e.target.dataset.idMenu;
    const tituloMenu = e.target.dataset.tituloMenu;
    let htmlContenido;
    htmlContenido = `
    <div id="idMainContenedor" class="mainContenedor">
       <div id="idMainContenedorElementos" class="mainContenedorElementos">
          <h2 id="idMainTitulo" class="mainTitulo">${tituloMenu}</h2>
          <div id="idMainContenedorListado" class="mainContenedorListado">
          </div>
       </div>
    </div>
    `;
    tagMain.innerHTML = htmlContenido; 
    crearCamposListado(idMenu);    
    crearTablaListado();  
    cargarTablaListado(idMenu)  
    //crearTablaListado(idMenu);
};
//
const crearFormularioOpcion1 = document.getElementById((listaMenu.find(menu => menu.opcion == 1)).id);
crearFormularioOpcion1.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 1)).id;
crearFormularioOpcion1.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 1)).titulo;
crearFormularioOpcion1.addEventListener("click", crearFormulario);
//
const crearFormularioOpcion2 = document.getElementById((listaMenu.find(menu => menu.opcion == 2)).id);
crearFormularioOpcion2.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 2)).id;
crearFormularioOpcion2.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 2)).titulo;
crearFormularioOpcion2.addEventListener("click", crearListado);
//
const crearFormularioOpcion3 = document.getElementById((listaMenu.find(menu => menu.opcion == 3)).id);
crearFormularioOpcion3.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 3)).id;
crearFormularioOpcion3.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 3)).titulo;
crearFormularioOpcion3.addEventListener("click", crearListado);