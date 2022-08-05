import React from "react";

const PlaylistCardComponent = (props) => {
    return (
        <>
        <div>
        <button onClick={() => {props.chageComponent('playlistDetails', props.playlistId)}}> ver detalhes</button>
            <p>{props.plalistName}</p>
            <button onClick={() => {props.deletePlaylist(props.playlistId)}}>Apagar</button>
            <hr />
        </div>
        </>
    )
}

export default PlaylistCardComponent