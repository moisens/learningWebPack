import HelloWorldBtn from './components/hello-world-btn/hello-world-btn.js';
import Heading from './components/heading/heading.js';




const heading = new Heading();
heading.render();

const HelloWorldButton = new HelloWorldBtn();
HelloWorldButton.render();


if (process.env.NODE_ENV === 'production') {
  console.log('Production mode!');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode!');
}

HelloWorldButton.methodTatDoesNotExist();