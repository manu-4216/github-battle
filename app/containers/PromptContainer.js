var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: ''
    }
  },

  handleUpdateUser: function (e) {
    this.setState({
      username: e.target.value
    });
  },

  handleSubmitUser: function (e) {
    e.preventDefault();
    // Cache the username, but deletes the input, so that if we press back button,
    // the user won't have the old one.
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      // I can control the router by pushing an 'object' to it:
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // I can control the router by pushing a 'route' to it:
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function () {
    return (
      <Prompt
       onSubmitUser={this.handleSubmitUser}
       onUpdateUser={this.handleUpdateUser}
       header={this.props.route.header}
       username={this.state.username}/>

    )
  }
});

module.exports = PromptContainer;
