import React, { Component } from 'react';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import './App.css';



class App extends Component {
   constructor (){
    super()
    this.state ={
      robots: [],
      searchfield:""

    }
   
 
   }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ robots: user}));
   }

   onSearchChange = (event)=> {
    this.setState({searchfield: event.target.value})
     
   }


  

  render() {

  // destructuring the state 
   const{ robots, searchfield} = this.state;

    const filteredRobots = robots.filter(robot=> {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())

    })
    
    return  ( !robots.length) 
      ?
       <h1 className="tc pa4">Loading</h1>
      : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1> 
        <SearchBox onSearchChange={this.onSearchChange} searchfield={searchfield}/>
        <Scroll>
         <CardList robots={filteredRobots}/>
        </Scroll>
        
      </div>
    );
  }
}


export default App;
