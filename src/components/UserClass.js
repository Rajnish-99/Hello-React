import React from "react";

class UserClass extends React.Component {
  // constructor is called first
  constructor(props) {
    super(props);
    // earlier we used useState hook to maintain state
    // now we will use this.state
    // this.state is an object
    // we can define as many as key value pairs in this object
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy location",
        avatar_url: "dummy-photo"
      },
    };
    //console.log(this.props.name + "child constructor called");
  }
  // componentDidMount called third

  // how to make api call in class based component
  async componentDidMount() {
    //console.log(this.props.name + "Child component mount called");
    // api call is made here and
    const data = await fetch("https://api.github.com/users/rajnish-99");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  // render method is called second
  render() {
    //console.log(this.props.name + "child render called");
    return (
        
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
      </div>
    );
  }
}

export default UserClass;


/* sequence in which things are working 

* -------Mounting ------
* Render (dummy)
*      <HTML Dummy>
* Component Did mount Called 
*      <API Call>
*      <this.setState-> State Variable is updated>
*-------Update------
* render(API Data)
* <HTML (New API Data)
* componentDid Update




*/
