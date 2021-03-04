import Kiwi from './images/kiwi.jpg';
import './KiwiImage.scss'


class KiwiImage{
  render() {
    const img = document.createElement('img'); 
    img.src = Kiwi;
    img.alt = 'Kiwi';
    img.classList.add('kiwi-image');

    const bodyDom = document.querySelector('body');
    bodyDom.appendChild(img);
  }
}

export default KiwiImage;