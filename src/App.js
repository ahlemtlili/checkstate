import './App.css';
import React , {Component}from "react";
import Profile from './Profile/Profile';

class App extends Component {
  state={
    person: {
      fullName: "ahlem tlili",
      bio: "Currently a student at GO MY CODE",
      profession: "Student",
      imgSrc:"./photo.jpg"
      
    },
    shows: false,
    timer:0
  }
  handleClick=()=>this.setState({shows:!this.state.shows})
  componentDidMount() {
    setInterval(() => {
        this.setState({ timer: this.state.timer + 1 })
    }, 1000)   
}
  render(){
  return (
    <div className="App">
  <button className='button' onClick={this.handleClick}> {this.state.shows ? "hide":"show"}</button>      
{
  this.state.shows?
  <Profile pro={this.state.person}/>

 :<h4 className='txt'>click to show  your profile </h4>
}
<h1 className="cnt">Timer: {this.state.timer}{" "}seconds</h1>

    </div>
  );
}
}

export default App;
