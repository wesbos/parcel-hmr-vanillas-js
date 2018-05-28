import sayHi from './sayHi';

const button = document.querySelector('button');

if (module.hot) {
  module.hot.dispose(() => {
    console.log('disposing old ones');
    button.removeEventListener('click', sayHi);
  });
}

button.addEventListener('click', sayHi);
