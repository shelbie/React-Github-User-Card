import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
 state = {
   users: [],
 }

 componentDidMount() {
   console.log("componentDidMount Running");

   axios
   .get("https://api.github.com/users")
   .then(res => {
     console.log(res);
    this.setState({ users: res.data.message })
   })
   .catch(err => console.log(err));
 }

 handleChanges = e => {
   console.log(e.target.name, e.target.value);
   this.setState({ ...this.state, })
 }

// fetchUsers = e => {
//   e.preventDefault();
//   axios
//   .get(`https://api.github.com/users/`)
// }

render(){
  console.log("rendering");
  return(
    <div>
      <h1>
      Welcome User!
      </h1>
    </div>
  )
}

}

export default App;
