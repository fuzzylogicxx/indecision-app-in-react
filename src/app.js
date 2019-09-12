console.log('App.js is running');

var userName = 'Mike';
var userAge = 43;
var userLocation = 'Edinburgh';

var user = {
    name: 'Bob', 
    age: 44, 
    location: 'Aberdeen'
}

var templateTwo = (
    <div>
        <h1>{ user.name }</h1>
        <p>Age: { user.age }</p>
        <p>Location: { user.location }</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
