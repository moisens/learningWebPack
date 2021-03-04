import './hello-world-btn.scss'


class HelloWorldBtn {
  buttonCSSClass = 'hello-world-button';
  render() {
    const button  = document.createElement('button');
    button.innerHTML = 'Hello world';
    button.classList.add(this.buttonCSSClass);
    const body = document.querySelector('body');
    button.onclick = function(){
      const p = document.createElement('p');
      p.innerHTML = 'Hello world';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    }
    
    body.appendChild(button);
  }
}

export default HelloWorldBtn;