var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      fruits: {
        'fruit-1': 'orange',
        'fruit-2': 'apple'
      }
    };
  },
  addFruit: function addFruit(fruit) {
    //create a unike key for each new fruit item
    var timestamp = new Date().getTime();
    // update the state object
    this.state.fruits['fruit-' + timestamp] = fruit;
    // set the state
    this.setState({ fruits: this.state.fruits });
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'component-wrapper' },
      React.createElement(FruitList, { fruits: this.state.fruits }),
      React.createElement(AddFruitForm, { addFruit: this.addFruit })
    );
  }
});

var FruitList = React.createClass({
  displayName: 'FruitList',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'ul',
        { className: 'list-group text-center' },
        Object.keys(this.props.fruits).map(function (key) {
          return React.createElement(
            'li',
            { className: 'list-group-item list-group-item-info' },
            this.props.fruits[key]
          );
        }.bind(this))
      )
    );
  }
});

var AddFruitForm = React.createClass({
  displayName: 'AddFruitForm',

  createFruit: function createFruit(e) {
    e.preventDefault();
    //get the fruit object name from the form
    var fruit = this.refs.fruitName.value;
    //if we have a value
    //call the addFruit method of the App component
    //to change the state of the fruit list by adding an new item
    if (typeof fruit === 'string' && fruit.length > 0) {
      this.props.addFruit(fruit);
      //reset the form
      this.refs.fruitForm.reset();
    }
  },
  render: function render() {
    return React.createElement(
      'form',
      { className: 'form-inline', ref: 'fruitForm', onSubmit: this.createFruit },
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { 'for': 'fruitItem' },
          'Fruit Name',
          React.createElement('input', { type: 'text', id: 'fruitItem', placeholder: 'e.x.lemmon', ref: 'fruitName', className: 'form-control' })
        )
      ),
      React.createElement(
        'button',
        { type: 'submit', className: 'btn btn-primary' },
        'Add Fruit'
      )
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('app'));
