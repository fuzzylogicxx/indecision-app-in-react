'use strict';

console.log('App.js is running');

var userName = 'Mike';
var userAge = 43;
var userLocation = 'Edinburgh';

var user = {
    name: 'Bob',
    age: 44,
    location: 'Aberdeen'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
