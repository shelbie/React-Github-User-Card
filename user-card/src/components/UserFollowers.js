import React from 'react';
import axios from "axios"

class UserFollowers extends React.Component {
    state = {
      followers: []
    }
  
   componentDidMount() {
     console.log("componentDidMount Running - UserFollowers");
     console.log(this.state.followers.data)

     axios
      .get("https://api.github.com/users/shelbie/followers")
      .then(res => {
        console.log(res);
        this.setState({ followers: res.data });
      })
      .catch(err => console.log(err));
  
}

fetchFollowers = e => {
    e.preventDefault();
    axios
    .get(`https://api.github.com/users/shelbie/followers`)
    .then(res => this.setState({...this.state, followers: res.data }))
    .catch(err => console.log(err))
}

 render(){
  return (
      <div className="followers">
  {/* <p>Followers: {props.followers}</p>
  <p>Following: {props.following}</p> */}
  {this.state.followers.map(users => (
            <p>{users.login}</p>
          ))}
        </div>
    
    );
}
}

 export default UserFollowers; 