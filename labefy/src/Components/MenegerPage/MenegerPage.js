import React, {useState} from "react"
import PLaylistDetails from "../PLaylistDetails/PlaylistDetails"
import Playlist from "../PLaylists/Playlists"

const MenegerPage = () => {
    const [currentComponent, setCurrentComponent] = useState('playlists')
    const [playlistId, setPlaylistId] = useState([])

    const renderCurrentComponent = () => {
        if (currentComponent === 'playlists'){
            return <Playlist chageComponent={chageComponent}/>
        } else if(currentComponent === 'playlistDetails'){
            return <PLaylistDetails chageComponent={chageComponent} playlistId={playlistId}/>
        }
    } 

    const chageComponent = (currentComponentTxt, idPlaylist) => {
        setCurrentComponent(currentComponentTxt)
        setPlaylistId(idPlaylist)
        
    }
    return(
        <>
        <h2> Gerenciamento de playlist</h2>
        {renderCurrentComponent()}
        </>
    )
}

export default MenegerPage