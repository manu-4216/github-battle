var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Manuel Micu',
  username: "manu-4216",
  image: "https://avatars0.githubusercontent.com/u/18104777?v=3&u=f41b02f01f508a164dc99ff55615457c0b1f06d9&s=140"
}

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var Link = React.createClass({
  changeUrl: function () {
    window.location.replace(this.props.href)
  },

  render: function () {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeUrl}>
        {this.props.children}
      </span>
    );
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function () {
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});


ReactDOM.render(<Avatar user={USER_DATA}/>, document.getElementById('app'));
