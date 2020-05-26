import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
    React.createElement(
        'ul',
        {},
        React.createElement('h1', {}, "My Favorite Things"),
        React.createElement('li', {}, "Favorite Colors",
            React.createElement('ol', {},
                React.createElement('li', {}, "Blue"),
                React.createElement('li', {}, "Green"),
                React.createElement('li', {}, "White"))),
        React.createElement('li', {}, "Favoite Music",
            React.createElement('ol', {},
                React.createElement('li', {}, "Christian"),
                React.createElement('li', {}, "Flamenco"),
                React.createElement('li', {}, "Instrumental"))),
        React.createElement('li', {}, "Favorite Food",
            React.createElement('ol', {},
                React.createElement('li', {}, "Ceviche"),
                React.createElement('li', {}, "Poke"),
                React.createElement('li', {}, "Thai"))),
        React.createElement('li', {}, "Favorite Websites",
            React.createElement('ol', {},
                React.createElement('li', {}, "https://www.google.com"),
                React.createElement('li', {}, "https://www.amazon.com"),
                React.createElement('li', {}, "https://www.betheltech.net"))),
    ),
    document.getElementById('root')
);