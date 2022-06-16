function App() {
  /* ----------------------------- Spread operator ---------------------------- */
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Declaro nombe en objeto
   const objeto = {
    id: 1,
    nombre: "Ignacio"
  }
  const { nombre } = objeto;

  // Destructuring con array 
  const array2 = [
    {
      id: 1,
      title: "Casco"
    },
    {
      id: 2,
      title: "Ignacio"
    }
  ]
  const { title } = array2[1];
  console.log(title)
  const contenedorStyle = {
    backgroundColor: "#ccc"
  }
  return (
    <div style={contenedorStyle} className="App">
      <h1>Primer entrega React.JS</h1>
      <p>Accedo a la propiedad Title del objecto en el array con posicion 1 ** {title} **</p>
      <p>Accedo a la propiedad Nombre del objeto ** {nombre} ** </p>
      <h2>Imprimo mi array</h2>
      {array2.map((persona) => (
        <p>{persona.title}</p>
      ))}
    </div>
  );
}

export default App;
