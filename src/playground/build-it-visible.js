const appRoot = document.getElementById('app')

const app = {
    title: 'Toggle Visibility', 
    isButtonHidden: true
}

const onToggleClick = () => {
    app.isButtonHidden = !app.isButtonHidden
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleClick}>{app.isButtonHidden ? 'Show Details' : 'Hide Details'}</button>
            { (app.isButtonHidden === false) && <p>Here are some details you can now see!</p>}
    </div>
    );
    
    ReactDOM.render(template, appRoot)
}

render()