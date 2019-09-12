'use strict';

console.log('App.js is running');

var userName = 'Mike';
var userAge = 43;
var userLocation = 'Edinburgh';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        userLocation
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
