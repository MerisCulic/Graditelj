import component from "./component";
import logo from './images/logo.webp';
import './styles/app.scss';


const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img)

document.body.appendChild(component());