import React from 'react'
import './style.css'
import {TrackList} from '../TrackList/App'
export class SearchResult extends React.Component{
    render(){
        return(
            <div class="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} 
                onAdd={this.props.onAdd}
                isRemoval={false}/>
            </div>
        )
    }
}