import React from 'react'
import './style.css'
import {TrackList} from '../TrackList/App'
export class SearchResult extends React.Component{
    render(){
       console.log(this.props)
       console.log('hello')
        return(
            <div class="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults}/>
            </div>
        )
    }
}