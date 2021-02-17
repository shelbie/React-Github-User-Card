import React from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/Card";


class App extends React.Component {
  state = {
    user: []
  }

 componentDidMount() {
   console.log("componentDidMount Running");

   axios
   .get("https://api.github.com/users/shelbie")
   .then(res => {
     console.log(res);
    this.setState({ user: res.data })
   })
   .catch(err => console.log(err));
 }

//  handleChanges = e => {
//    console.log(e.target.name, e.target.value);
//    this.setState({ ...this.state, })
//  }

fetchUser = e => {
  e.preventDefault();
  axios
  .get(`https://api.github.com/users/shelbie`)
  .then(res => this.setState({...this.state, user: res.data }))
  .catch(err => console.log(err))
}

render(){
  console.log("rendering");
  return(
 <div>
  <Card

            img={this.state.user.avatar_url}
            name={this.state.user.name}
            location={this.state.user.location}
            address={this.state.user.html_url}
            followers={this.state.user.followers}
            following={this.state.user.following}
            bio={this.state.user.bio}

          />

</div>
  )}
}


export default App;
