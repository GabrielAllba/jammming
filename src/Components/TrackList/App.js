import React from 'react'
import './style.css'
import {Track}  from '../Track/App'

export class TrackList extends React.Component{
    render(){
        return(
            <div className="TrackList">
                  {/* {

                    this.props.tracks.map(track => {
                        return <Track track={track} key={track.id} />
                    })
                }   */}
            </div>
        )
    }
}