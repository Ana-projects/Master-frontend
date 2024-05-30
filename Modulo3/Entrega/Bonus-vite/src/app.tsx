import logoImg from "./content/chef-calavera.jpg";

export const App = () => {
  const myText: string = "Hello World!!!";
  const env = import.meta.env.VITE_ENVIRONMENT;
  return (
    <>
      <header>
        <div id="imgContainer">
          <img src={logoImg} alt="chef-calavera"></img>
        </div>
        <div className="headerText">React app</div>
      </header>
      <h1>{myText}</h1>
      <h2>Estamos en el entorno de {env}</h2>
    </>
  );
};
