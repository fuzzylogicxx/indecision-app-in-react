console.log('App.js is running');

var userName = 'Mike';
var userAge = 43;
var userLocation = 'Edinburgh';
var templateTwo = (
    <div>
        <h1>{ userName }</h1>
        <p>Age: { userAge }</p>
        <p>Location: { userLocation }</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
