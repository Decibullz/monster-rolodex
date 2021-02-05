import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';



class App extends Component {
  constructor(){
    super()
    this.state={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters:users}))
  }


  
  render() {
    const { monsters, searchField } = this.state 
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className = "App">
      <SearchBox
        placeholder='Seach Monsters'
        handleChange={e=>this.setState({searchField: e.target.value})}/>
      <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
