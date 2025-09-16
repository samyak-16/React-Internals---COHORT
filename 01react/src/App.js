import React from 'https://esm.sh/react@19.1.0';
import ReactDOM from 'https://esm.sh/react-dom@19.1.0/client';

const chai = () => {
  return React.createElement('div', {}, [
    React.createElement('p', {}, 'Lemon Tea'),
    React.createElement('p', {}, 'Bhack Tea '),
    React.createElement('p', {}, 'Masala Tea'),
    React.createElement('p', {}, 'Ginger Tea'),
    React.createElement('p', {}, 'Black Tea'),
  ]);
};

const APP = () => {
  return React.createElement('div', {}, [
      React.createElement('h1', {}, 'Types of Chai : '),
      //  https://chatgpt.com/share/6837285a-f360-800b-8dd0-88dd1b420695 
    React.createElement(chai, {}),
  ]);
};
const container = document.getElementById('root');

const root = ReactDOM.createRoot(container); // it creates virtual DOM root
// and it is used to render the React component into the DOM
root.render(React.createElement(APP));
