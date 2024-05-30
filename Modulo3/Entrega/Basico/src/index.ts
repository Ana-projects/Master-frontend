import "./styles.scss";
import logoImg from "./content/chef-calavera.jpg";

const username: string = "Ana";
document.write(`hello ${username}`);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);
