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
    //console.log("crearMensajeDialog");
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
  ////console.log(listaPrecioArticulos)
  crearMensajeDialog("exito", "El articulo se creo satisfactoriamente");
}

function crearCard(articulo){
  let contenidoHtml;
  contenidoHtml = `
            <div id="IdArticuloEncontrado" class="articuloEncontrado">
            <h6>ID: ${articulo.id}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>  
            </div>`;
  return contenidoHtml;            
};

function buscarArticulo(e){
  e.preventDefault();
  const idMenu = e.target.dataset.idMenu;
  //console.log(idMenu);
  let resultadoBusqueda = false;
  let filtro;
  let articulosEncontrados = [];
      //const tagMainContenedorResultados = document.getElementById("IdMainContenedorResultados");
  //
  switch(idMenu){
    case "idBuscarArticuloPorId":
      filtro = document.getElementById("idBuscarArticuloPorIdInput").value;
      resultadoBusqueda = listaPrecioArticulos.some(articulo => articulo.id == filtro);
      if (resultadoBusqueda){
         let articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.id == filtro);
         articulosEncontrados = [
         {          
           id: articuloEncontrado.id,
           codigo: articuloEncontrado.codigo,
           nombre: articuloEncontrado.nombre,
           marca: articuloEncontrado.marca,
           categoria: articuloEncontrado.categoria,
           precio: articuloEncontrado.precio
         }
         ];
      };
      break;
    case "idBuscarArticuloPorNombre":
      filtro = document.getElementById("idBuscarArticuloPorNombreInput").value.toUpperCase();
      articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.nombre.toUpperCase().includes(filtro.toUpperCase()));
      if (articulosEncontrados.length > 0){
         resultadoBusqueda = true;
      };
      break;
    case "idBuscarArticuloPorCategoria":
      filtro = document.getElementById("idBuscarArticuloPorCategoriaSelect").value.toUpperCase();
      articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria.toUpperCase().includes(filtro.toUpperCase()));
      if (articulosEncontrados.length > 0){
         resultadoBusqueda = true;
      };
      break;
    case "idVerificarExistenciaArticulo":
      filtro = document.getElementById("idBuscarArticuloPorCodigoInput").value.toUpperCase();
      resultadoBusqueda = listaPrecioArticulos.some(articulo => articulo.codigo.toUpperCase() == filtro.toUpperCase());
      if (resultadoBusqueda){
         let articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.codigo.toUpperCase() == filtro.toUpperCase());
         articulosEncontrados = [
         {          
           id: articuloEncontrado.id,
           codigo: articuloEncontrado.codigo,
           nombre: articuloEncontrado.nombre,
           marca: articuloEncontrado.marca,
           categoria: articuloEncontrado.categoria,
           precio: articuloEncontrado.precio
         }
         ];
      };
      break;
    default:
      break;  
  }
  //console.log("resultadoBusqueda: " + resultadoBusqueda)
  //console.log("articulosEncontrados: " + articulosEncontrados)
  let htmlContenido;
  //////////////////////////////////////////////////////////////////////////////
  const tagContenido = document.createElement("div");
  if(!resultadoBusqueda){
    console.log("resultadoBusqueda-1")
    //const tagContenido = document.createElement("div");
    tagContenido.id = "idMainContenedorResultados";
    tagContenido.className = "mainContenedorResultados";
    tagContenido.innerHTML =``;
    crearMensajeDialog("error", "No se encontraron articulos para estos filtros");
  } else {
    console.log("resultadoBusqueda-2")
    //const tagContenido = document.createElement("div");
    tagContenido.id = "idMainContenedorResultados";
    tagContenido.className = "mainContenedorResultados";
    //
    htmlContenido = `<div id="idMainResultados" class="mainResultados">`;
    articulosEncontrados.forEach(articulo => {
          htmlContenido += crearCard(articulo);
       }
    );
    htmlContenido += `</div>`;
    tagContenido.innerHTML = htmlContenido;
    /////////////////////////////////////////////////////////////////////////////////////////////
    /*
    if (document.getElementById("idMainContenedorResultados")) {
    console.log("resultadoBusqueda-3")
      //console.log("ya existe")
       document.getElementById("idMainContenedorResultados").innerHTML = tagContenido.innerHTML;
    } else {
    console.log("resultadoBusqueda-4")
      //console.log("no  existe contenedor")
       document.getElementById("idMainContenedorElementos").appendChild(tagContenido);
    }
       */
  };
    if (document.getElementById("idMainContenedorResultados")) {
    console.log("resultadoBusqueda-3")
      //console.log("ya existe")
       document.getElementById("idMainContenedorResultados").innerHTML = tagContenido.innerHTML;
    } else {
    console.log("resultadoBusqueda-4")
      //console.log("no  existe contenedor")
       document.getElementById("idMainContenedorElementos").appendChild(tagContenido);
    };
}
function crearListado(idMenu){
  //console.log("crearListado - ")
  //console.log("crearListado - idMenu: "+ idMenu)
  let htmlContenido = ``;
  if (idMenu="idCrearListadoArticulosConDescuento") {
     htmlContenido = document.getElementById("idMainListado").innerHTML;
  }
  htmlContenido += `
                    <table id="idMainListadoTable" class="mainListadoTable">
                      <thead class="mainListadoThead">
                        <tr class="mainListadoTr">
                            <th>ID</th>
                            <th>Código</th>
                            <th>Nombre del Artículo</th>
                            <th>Marca</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                        </tr>
                      </thead>
                      <tbody id="idMainListadoTbody" class="mainListadoTbody">
                      </tbody>
                     </table>`;
  //
  //console.log(htmlContenido);
  document.getElementById("idMainListado").innerHTML = htmlContenido;
  cargarListado(idMenu);

}

function cargarListado(idMenu){
  //console.log("cargarListado----: " + idMenu)
  let lista = []; 
  listaPrecioArticulos.forEach(articulo => lista.push(articulo));
  let htmlContenido=` `;
  //
  if (idMenu == "idListarArticulosConDescuento") {
     let valorDescuento = document.getElementById("idListarArticulosConDescuentoInputDescuento").value;
     lista = listaPrecioArticulos.map(articulo => {
     let precioDescuento = articulo.precio - (articulo.precio * (valorDescuento/100));
     return {
         id: articulo.id,
         codigo: articulo.codigo,
         nombre: articulo.nombre,
         marca: articulo.marca,
         categoria: articulo.categoria,
         precio: precioDescuento
     };
    });
  };
  // 
  lista.forEach(articulo => {    
  htmlContenido += `<tr id="idMainListadoTbodyTr" class="mainListadoTbodyTr">
                           <td>${articulo.id}</td>
                           <td>${articulo.codigo.toUpperCase()}</td>
                           <td>${articulo.nombre.toUpperCase()}</td>
                           <td>${articulo.marca.toUpperCase()}</td>
                           <td>${articulo.categoria.toUpperCase()}</td>
                           <td>$${articulo.precio}</td>
                      </tr>`;
  }); 
  //
  ////console.log("-------------------------------------")
  ////console.log(htmlContenido)
  //htmlContenido += `</tbody>`;
  /*const tagMainListarTbody = document.getElementById("idMainListadoTbody");
  tagMainListarTbody.innerHTML = htmlContenido;*/
  document.getElementById("idMainListadoTbody").innerHTML = htmlContenido;
}

function crearCamposHtml(idMenu){
  //console.log("crearCamposHtml - ")
    let htmlContenido;
    //const tagMainFormulario = document.getElementById("idMainFormulario");
    //console.log("crearCamposHtml - idMenu: " + idMenu)
    switch(idMenu) {
      case "idCrearArticulo":
        //console.log("idMenu: " + idMenu)
        htmlContenido =  `<div class="mainFormularioFila">
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
        break;
      case "idListarArticulosConDescuento":
        //console.log("input descueno switch")
        htmlContenido = ` `;
        /*
        htmlContenido = `
        <div class="mainListadoFila">
                    <label class="labelGlobal" for="idListarArticulosConDescuentoInputDescuento" >Descuento:</label>
                    <input class="inputGlobal" type="number" id="idListarArticulosConDescuentoInputDescuento" name="listarArticulosConDescuentoInputDescuento" value=5>
                 </div>
        `;
        //console.log("input descueno switch-htmlContenido: "+ htmlContenido)*/
        break;
      case "idBuscarArticuloPorId":
        htmlContenido = `<div id="idMainFormularioFila" class="mainFormularioFila">
                    <label class="labelGlobal" for="idBuscarArticuloPorIdInput" >ID:</label>
                    <input class="inputGlobal" type="text" id="idBuscarArticuloPorIdInput" name="buscarArticuloPorIdInput" required>
                    </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Buscar</button>
                 </div>`;
        break;
      case "idBuscarArticuloPorCategoria":
        htmlContenido = `<div id="idMainFormularioFila" class="mainFormularioFila">
                    <label class="labelGlobal" for="idBuscarArticuloPorCategoriaSelect" >Categoria:</label>
                    <select id="idBuscarArticuloPorCategoriaSelect" name="buscarArticuloPorCategoriaSelect" required>
                      <option value="">Seleccione Una Categoria</option>
                      <option value="TELEVISOR">TELEVISOR</option>
                      <option value="COCINA">COCINA</option>
                      <option value="HELADERA">HELADERA</option>
                    </select>
                    </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Buscar</button>
                 </div>`;
        break;
      case "idBuscarArticuloPorNombre":
        htmlContenido = `<div id="idMainFormularioFila" class="mainFormularioFila">
                    <label class="labelGlobal" for="idBuscarArticuloPorNombreInput" >Nombre:</label>
                    <input class="inputGlobal" type="text" id="idBuscarArticuloPorNombreInput" name="BuscarArticuloPorNombreInput" required>
                    </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Buscar</button>
                 </div>`;
        break;
      case "idVerificarExistenciaArticulo":
        htmlContenido = `<div id="idMainFormularioFila" class="mainFormularioFila">
                    <label class="labelGlobal" for="idBuscarArticuloPorCodigoInput" >Codigo:</label>
                    <input class="inputGlobal" type="text" id="idBuscarArticuloPorCodigoInput" name="BuscarArticuloPorCodigoInput" required>
                    </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Buscar</button>
                 </div>`;
        break;
      case "idComprar":
        htmlContenido =  `
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloCategoria" >Categoria:</label>
                    <select id="idCrearArticuloCategoria" name="crearArticuloCategoria">
                      <option value="">Seleccione Una Categoria</option>
                      <option value="TELEVISOR">TELEVISOR</option>
                      <option value="COCINA">COCINA</option>
                      <option value="HELADERA">HELADERA</option>
                    </select>
                 </div>
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloMarca" >Marca:</label>
                    <input class="inputGlobal" type="text" id="idCrearArticuloMarca" name="crearArticuloMarca">
                 </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Buscar</button>
                 </div>`;
        break;
      default:
        break;  
    };
    //
    ////console.log("crearCamposHtml-htmlCOntenido-aaa--" +htmlContenido)
    //tagMainFormulario.innerHTML = htmlContenido;
    if (idMenu=="idListarArticulosConDescuento") {
    ////console.log("crearCamposHtml-htmlCOntenido-bbb--" +htmlContenido)
      //document.getElementById("idMainListado").innerHTML = htmlContenido;//idMainContenedorListado
    ////console.log("crearCamposHtml-htmlCOntenido-ccc--" +htmlContenido)
    //console.log("innnnner---------");//+document.getElementById("idMainListado").innerHTML)
    } else {
      document.getElementById("idMainFormulario").innerHTML = htmlContenido;
    }
/*      document.getElementById("idMainFormulario").innerHTML = htmlContenido;*/
}

function crearCampos(idMenu){
  //console.log("crearCampos - ");
  //console.log("crearCampos - idMenu: " + idMenu);
  const tagFormulario = document.getElementById("idMainFormulario");
  //
  switch(idMenu){
    case "idCrearArticulo":
      //console.log("crearCampos - idMenu: " + idMenu)
      crearCamposHtml(idMenu);  
      tagFormulario.addEventListener("submit", cargarArticulo);
      break;
    case "idListarArticulos":
      break;
    case "idListarArticulosConDescuento":
      crearCamposHtml(idMenu);
      const tagMainListadoFila = document.createElement("div");
      tagMainListadoFila.className = "mainListadoFila";
      const tagLabel = document.createElement("label");
      tagLabel.className = "labelGlobal";
      tagLabel.setAttribute("for","idListarArticulosConDescuentoInputDescuento");
      //tagLabel.for = "idListarArticulosConDescuentoInputDescuento";
      tagLabel.innerText ="Descuento: "
      const tagInput = document.createElement("input");
      tagInput.className = "inputGlobal";
      tagInput.type = "number";
      tagInput.id = "idListarArticulosConDescuentoInputDescuento";
      tagInput.name = "listarArticulosConDescuentoInputDescuento";
      tagInput.value = 0;
      tagMainListadoFila.appendChild(tagLabel);
      tagMainListadoFila.appendChild(tagInput);
      const tagMainContenedorElementos = document.getElementById("idMainContenedorElementos");
      tagMainContenedorElementos.insertBefore(tagMainListadoFila,document.getElementById("idMainContenedorListado"));
      //tagInput.addEventListener("input", () => //console.log("Valor actual: " + tagInput.value));
      tagInput.addEventListener("input", () => cargarListado(idMenu));
      break;      
    case "idBuscarArticuloPorId":
      crearCamposHtml(idMenu);
      tagFormulario.dataset.idMenu = idMenu;  
      tagFormulario.addEventListener("submit", buscarArticulo);
      break;
    case "idBuscarArticuloPorCategoria":
      tagFormulario.dataset.idMenu = idMenu;  
      crearCamposHtml(idMenu);  
      tagFormulario.addEventListener("submit", buscarArticulo);
      break;
    case "idBuscarArticuloPorNombre":
      tagFormulario.dataset.idMenu = idMenu;  
      crearCamposHtml(idMenu);  
      tagFormulario.addEventListener("submit", buscarArticulo);
      break;
    case "idVerificarExistenciaArticulo":
      tagFormulario.dataset.idMenu = idMenu;  
      crearCamposHtml(idMenu);  
      tagFormulario.addEventListener("submit", buscarArticulo);
      break;
    case "idComprar":
      crearCamposHtml(idMenu);  
      break;
    default:
      break;
  }
}

function crearContenedor(idMenu,tituloMenu, claseContenedor,tipoContenedor, tagContenedor) {
    //console.log("crearContenedor - idMenu: " + idMenu);
    //console.log("crearContenedor - tituloMenu: " + tituloMenu);
    //console.log("crearContenedor - claseContenedor: " + claseContenedor);
    //console.log("crearContenedor - tipoContenedor: " + tipoContenedor);
    //console.log("crearContenedor - tagContenedor: " + tagContenedor);
    let htmlContenido;
    htmlContenido = `
    <div id="idMainContenedor" class="mainContenedor">
       <div id="idMainContenedorElementos" class="mainContenedorElementos">
          <h2 id="idMainTitulo" class="mainTitulo">${tituloMenu}</h2>
          <div id="idMainContenedor${tipoContenedor}" class="mainContenedor${tipoContenedor}"> `;
    //          
    if (tipoContenedor == "Formulario") {
        htmlContenido += `
              <${tagContenedor} id="idMain${tipoContenedor}" class="main${tipoContenedor}" method="POST">
              </${tagContenedor}>`;
    } else {
        htmlContenido += `
              <${tagContenedor} id="idMain${tipoContenedor}" class="main${tipoContenedor}">
              </${tagContenedor}>`;
    };
    //           
    htmlContenido += `
          </div>
       </div>
    </div>
    `;
   document.querySelector("main").innerHTML = htmlContenido;
}


function crearPagina(e) {
  e.preventDefault();
  //console.log("crearPagina - ");
  const idMenu = e.target.dataset.idMenu;
  const tituloMenu = e.target.dataset.tituloMenu;
  const claseContenedor = e.target.dataset.claseContenedor;
  const tipoContenedor = e.target.dataset.tipoContenedor;
  const tagContenedor = e.target.dataset.tagContenedor;
  //console.log("crearPagina - idMenu: " + idMenu);
  //console.log("crearPagina - tituloMenu: " + tituloMenu);
  //console.log("crearPagina - claseContenedor: " + claseContenedor);
  //console.log("crearPagina - tipoContenedor: " + tipoContenedor);
  //console.log("crearPagina - tagContenedor: " + tagContenedor);
  crearContenedor(idMenu,tituloMenu, claseContenedor,tipoContenedor, tagContenedor);
  crearCampos(idMenu);
  if (idMenu=="idListarArticulos" || idMenu=="idListarArticulosConDescuento") {
     crearListado(idMenu);
  }
}
//
const crearFormularioOpcion1 = document.getElementById((listaMenu.find(menu => menu.opcion == 1)).id);
crearFormularioOpcion1.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 1)).id;
crearFormularioOpcion1.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 1)).titulo;
crearFormularioOpcion1.dataset.claseContenedor = (listaMenu.find(menu => menu.opcion == 1)).clase;
crearFormularioOpcion1.dataset.tipoContenedor = "Formulario";
crearFormularioOpcion1.dataset.tagContenedor = "form";
crearFormularioOpcion1.addEventListener("click", crearPagina);
//
const crearFormularioOpcion2 = document.getElementById((listaMenu.find(menu => menu.opcion == 2)).id);
crearFormularioOpcion2.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 2)).id;
crearFormularioOpcion2.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 2)).titulo;
crearFormularioOpcion2.dataset.claseContenedor = (listaMenu.find(menu => menu.opcion == 2)).clase;
crearFormularioOpcion2.dataset.tipoContenedor = "Listado";
crearFormularioOpcion2.dataset.tagContenedor = "div";
crearFormularioOpcion2.addEventListener("click", crearPagina);
//
const crearFormularioOpcion3 = document.getElementById((listaMenu.find(menu => menu.opcion == 3)).id);
crearFormularioOpcion3.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 3)).id;
crearFormularioOpcion3.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 3)).titulo;
crearFormularioOpcion3.dataset.claseContenedor = (listaMenu.find(menu => menu.opcion == 3)).clase;
crearFormularioOpcion3.dataset.tipoContenedor = "Listado";
crearFormularioOpcion3.dataset.tagContenedor = "div";
crearFormularioOpcion3.addEventListener("click", crearPagina);
//
const crearFormularioOpcion4 = document.getElementById((listaMenu.find(menu => menu.opcion == 4)).id);
crearFormularioOpcion4.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 4)).id;
crearFormularioOpcion4.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 4)).titulo;
crearFormularioOpcion4.dataset.claseContenedor = (listaMenu.find(menu => menu.opcion == 4)).clase;
crearFormularioOpcion4.dataset.tipoContenedor = "Formulario";
crearFormularioOpcion4.dataset.tagContenedor = "form";
crearFormularioOpcion4.addEventListener("click", crearPagina);
//
const crearFormularioOpcion5 = document.getElementById((listaMenu.find(menu => menu.opcion == 5)).id);
crearFormularioOpcion5.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 5)).id;
crearFormularioOpcion5.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 5)).titulo;
crearFormularioOpcion5.dataset.claseContenedor = (listaMenu.find(menu => menu.opcion == 5)).clase;
crearFormularioOpcion5.dataset.tipoContenedor = "Formulario";
crearFormularioOpcion5.dataset.tagContenedor = "form";
crearFormularioOpcion5.addEventListener("click", crearPagina);
//
const crearFormularioOpcion6 = document.getElementById((listaMenu.find(menu => menu.opcion == 6)).id);
crearFormularioOpcion6.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 6)).id;
crearFormularioOpcion6.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 6)).titulo;
crearFormularioOpcion6.dataset.claseContenedor = (listaMenu.find(menu => menu.opcion == 6)).clase;
crearFormularioOpcion6.dataset.tipoContenedor = "Formulario";
crearFormularioOpcion6.dataset.tagContenedor = "form";
crearFormularioOpcion6.addEventListener("click", crearPagina);
//
const crearFormularioOpcion7 = document.getElementById((listaMenu.find(menu => menu.opcion == 7)).id);
crearFormularioOpcion7.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 7)).id;
crearFormularioOpcion7.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 7)).titulo;
crearFormularioOpcion7.dataset.claseContenedor = (listaMenu.find(menu => menu.opcion == 7)).clase;
crearFormularioOpcion7.dataset.tipoContenedor = "Formulario";
crearFormularioOpcion7.dataset.tagContenedor = "form";
crearFormularioOpcion7.addEventListener("click", crearPagina);
//
const crearFormularioOpcion8 = document.getElementById((listaMenu.find(menu => menu.opcion == 8)).id);
crearFormularioOpcion8.dataset.idMenu = (listaMenu.find(menu => menu.opcion == 8)).id;
crearFormularioOpcion8.dataset.tituloMenu = (listaMenu.find(menu => menu.opcion == 8)).titulo;
crearFormularioOpcion8.dataset.claseContenedor = (listaMenu.find(menu => menu.opcion == 8)).clase;
crearFormularioOpcion8.dataset.tipoContenedor = "Formulario";
crearFormularioOpcion8.dataset.tagContenedor = "form";
crearFormularioOpcion8.addEventListener("click", crearPagina);