import kiwi from './images/kiwi.jpg';
import altText from './altText.txt';

function addImage() {
  const img = document.createElement('img');
  img.alt= altText;
  img.width="300";
  img.src = kiwi
  const body = document.querySelector('body');
  body.appendChild(img);
}

//export default addImage;

//in webpack 4 we need to put the public path
//publicPath: '...path'
//in version 5 publicPath is set to auto