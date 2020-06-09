import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
 state = {
   login: [],
   user: "",
   img: ""
 }

 componentDidMount() {
   console.log("componentDidMount Running");

   axios
   .get("https://api.github.com/users")
   .then(res => {
     console.log(res);
    this.setState({ login: res.data.message })
   })
   .catch(err => console.log(err));
 }

 handleChanges = e => {
   console.log(e.target.name, e.target.value);
   this.setState({ ...this.state, })
 }

fetchUser = e => {
  e.preventDefault();
  axios
  .get(`https://api.github.com/users`)
  .then(res => this.setState({...this.state, login: res.data.message }))
  .catch(err => console.log(err))
}

render(){
  console.log("rendering");
  return(
    <div>
      <h1>
      Welcome User!
      </h1>
     
<div className="card">
<div className="user">
          {this.state.login.map(user => (
            <h1 key={user}></h1>
          ))}
        </div>
</div>
  {/* <img src={image url of user} /> */}
  {/* <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div> */}
</div>

  )
}

}

export default App;
