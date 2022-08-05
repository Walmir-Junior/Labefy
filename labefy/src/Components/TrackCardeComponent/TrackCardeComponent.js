import React from 'react'

const TrackCardeComponent = (props) => {
    return(
        <>
        <div>
            <h4>nome:{props.track.name}</h4>
            <p>artista:{props.track.artist}</p>
            <audio controls src={props.track.url}/>

            <button onClick={() => props.removeTrackFromPlaylist(props.track.id)}>X</button>

            <hr />
        </div>
        </>
    )
}

export default TrackCardeComponent