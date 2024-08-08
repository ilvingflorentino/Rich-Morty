import imagenrich from "./img/rich.png";
import "./App.css";
import { useState } from "react";

function App() {
  //!estado de State characters inicia en null asta que la api le pasa el json y luego ese null en este caso se convierte en results que es lo que quiero de mi Api.
  const [characters, setCharacters] = useState(null);

  //? funcion de Clik funcion asyncrona que siempre debe tener await.
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    //?lo que resibe el state del json de la api es el Results
    const { results } = await api.json();
    //? Aqui el characters deja de ser null coje el json y toma todos los resultados
    setCharacters(results);
  };

  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rich y Morty</h1>

        <>
          {" "}
          <img src={imagenrich} alt="Rich & Morty" className="img-home"></img>
          <button onClick={reqApi} className="btn-search">
            Buscar personajes
          </button>
        </>
      </header>
    </div>
  );
}

export default App;
