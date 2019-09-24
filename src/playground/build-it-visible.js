class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            isVisible: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.isVisible ? 'Hide details' : 'Show details'}
                </button>
                {this.state.isVisible && <p>Here’s some text you can now see!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
