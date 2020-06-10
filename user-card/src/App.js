import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
 state = {
   user: [],
   img: ""
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

 handleChanges = e => {
   console.log(e.target.name, e.target.value);
   this.setState({ ...this.state, })
 }

fetchUser = e => {
  e.preventDefault();
  axios
  .get(`https://api.github.com/users/shelbie`)
  .then(res => this.setState({...this.state, user: res.data }))
  .catch(err => console.log(err))
}
// followers_url following_url html_url url
render(){
  console.log("rendering");
  return(
    <div>
      <h1>
      Welcome User!
      </h1>
<div className="card">
<div className="user">
  <img key={img} src={img.avatur_url} />
         
        </div>
</div>
</div>

  )
}

}

export default App;
