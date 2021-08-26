const MyComponent = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h2', {}, props.name),
        React.createElement('small', {}, props.description)
    ]);
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {id: 'tag-h1'}, 'Header h1'),
        React.createElement(MyComponent, {name: 'name 1', description: 'description 1'}),
        React.createElement(MyComponent, {name: 'name 2', description: 'description 2'}),
        React.createElement(MyComponent, {name: 'name 3', description: 'description 3'})
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
