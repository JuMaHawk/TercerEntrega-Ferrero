listadoProductos = [];


//-------------TRAIGO DEL LOCALSTORAGE LOS PRODUCTOS GUARDADOS-----------------
const listadoLS = JSON.parse(localStorage.getItem("listOfProduct"))
console.log(listadoLS)


//-------SI HAY ALGO EN EL LS LO GUARDO DENTRO DE LA VARIABLE LISTADOPRODUCTOS----
if(listadoLS){
    listadoProductos = listadoLS;
}


//---------FUNCION PARA GUARDAR LOS DATOS EN EL STRORAGE------
const guardarLS = (clave , valor) => localStorage.setItem(clave,valor);



//-----------------------AGREGAR PRODUCTOS--------------------------
let botonAgregar = document.getElementById("botonAgregar")

botonAgregar.addEventListener("click", () => {
  
  let botones = document.getElementById("botones");
  botones.remove();

  if(document.getElementById("muestraProductos")){
    let muestraProductos = document.getElementById("muestraProductos");
    muestraProductos.remove();
  }

  let saludo = document.getElementById("saludo")
  saludo.innerText = "Ingrese los datos del producto que desea agregar"
  
  let inputDatos = document.createElement("div");
  inputDatos.innerHTML = `
    <form id="formulario">
    <input type="text" placeholder="Categoria">
    <input type="text" placeholder="Nombre">
    <input type="number" placeholder="Precio">
    <input type="submit" value="Agregar producto">
    </form>
    `
  document.body.append(inputDatos);

  let formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (e) => {
    let inputs = e.target.children;
    let categoria = inputs[0].value;
    let nombre = inputs[1].value;
    let precio = inputs[2].value;
    if (categoria != "" && nombre != ""){
    nuevoProducto = {categoria, nombre, precio};
    }else {
      e.preventDefault()
      inputDatos.innerHTML`
      <p>Por favor complete los campos con los datos correctos</p>
      ` 
    }
    listadoProductos.push(nuevoProducto)

    guardarLS("listOfProduct", JSON.stringify(listadoProductos))
  })
});
console.log(listadoProductos)


//----------------------------MOSTRAR PRODUCTOS-----------------------------

let mostrarStock = document.getElementById("botonMostrar");
let muestraProductos = document.getElementById("muestraProductos");

mostrarStock.addEventListener("click", () => {
  
  listadoProductos.forEach((item) => {
    let nuevoDiv = document.createElement("div");
      nuevoDiv.id = "muestreo"
      listadoProductos = [];
      nuevoDiv.innerHTML = `
      <h2>Categoria: ${item.categoria}</h2>
      <p>Producto: ${item.nombre}</p>
      <p>Precio: ${item.precio}</p>
      `
  muestraProductos.append(nuevoDiv)
  });
})
          

//-----------------------------ELIMINAR PRODUCTOS----------------------------
let botonEliminar = document.getElementById("botonEliminar");
botonEliminar.addEventListener("click", () =>{
  localStorage.clear();
  listadoProductos = [];
  let nuevoDiv = document.getElementById("muestraProductos")
  nuevoDiv.remove()
  console.log(listadoProductos)
})