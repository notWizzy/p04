import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Header from './components/header/Header';
import Example from './components/example/Example';
import States from "./components/states/States";

ReactDOM.render(
    <Header/>,
    document.getElementById('reactappHeader')
);

ReactDOM.render(
    <States/>,
    document.getElementById('reactappStates')
);

ReactDOM.render(
    <Example />,
    document.getElementById('reactapp')
);
