import React from "react"

const Header = (props) => {
    return (
        <>
        <div>
            <h1>LABEFY</h1>

            <button onClick={() => {props.changePage('PlaylistCreation')}}>criar playlist</button>
            <button onClick={() => {props.changePage('playlistManeger')}}>gerenciar playlists</button>
        </div>
        </>
    )
}

export default Header