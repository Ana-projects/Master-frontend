import "./styles.scss";
import logoImg from "./content/chef-calavera.jpg";

let username = "Ana";
document.write(`hello ${username}`);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);
