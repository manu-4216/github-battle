var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        {this.props.children} {/* this ensurees that the Main component will
                                  contain its children (nested routes) */ }

      </div>
    )
  }
});


module.exports = Main;
