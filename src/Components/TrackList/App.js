import React from 'react'
import './style.css'
import {Track}  from '../Track/App'

export class TrackList extends React.Component{
    render(){
        console.log('hello theresdfsdf riel')
        console.log(this.props)
        
        return(
            <div className="TrackList">
                        {this.props.tracks.map(track => {
                          return <Track track={track} key={track.id} 
                          onAdd={this.props.onAdd} onRemove={this.props.onRemove}
                          isRemoval={this.props.isRemoval}
                          />})}    
            </div>
        )
    }
}