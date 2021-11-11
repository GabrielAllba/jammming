import logo from './logo.svg';
import './App.css';
import { SearchBar } from './Components/SearchBar/App';
import {SearchResult} from './Components/SearchResult/App'
import { Playlist } from './Components/Playlist/App';
import React from 'react';
export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ]
    }
  }
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResult searchResults={this.state.searchResults}/>
            
            <Playlist />
          </div>
        </div>
      </div>
      );
  }
}


