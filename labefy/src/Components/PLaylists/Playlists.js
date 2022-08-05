import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PlaylistCardComponent from '../PlaylistCardeComponent/PlaylistCardComponent'
import {BASE_URL, axiosConfig} from '../../constants/index'

const Playlist = (props) => {
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        getAllPlaylists()
    }, [])

    const getAllPlaylists = () => {

        axios
        .get(BASE_URL, axiosConfig)
        .then(res => setPlaylists(res.data.result.list))
        .catch(err => console.log(err))
    }

    const deletePlaylist = (playlistId) => {
        axios
        .delete(`${BASE_URL}/${playlistId}`, axiosConfig)
        .then(() => {
            getAllPlaylists()
            alert('apagada com  sucesso!')
        })
        .catch(err => console.log(err))
    }

    const renderPlaylists = playlists.map((playlist) => {
        return <PlaylistCardComponent 
        key={playlist.id} 
        playlistId={playlist.id} 
        deletePlaylist={deletePlaylist} 
        plalistName={playlist.name} 
        chageComponent={props.chageComponent} />
    })

    return (
        <>
        playlists
        {renderPlaylists}
        </>
    )
}

export default Playlist