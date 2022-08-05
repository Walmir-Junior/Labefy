import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TrackCardeComponent from '../TrackCardeComponent/TrackCardeComponent'
import {BASE_URL, axiosConfig} from '../../constants/index'

const PLaylistDetails = (props) => {
    const [tracks, setTracks] = useState([])
    const [inputNome, setInputNome] = useState('')
    const [inputArtist, setInputArtist] = useState('')
    const [inputURL, setInputURL] = useState('')

    useEffect(() =>{
        getPlaylistTracks()
    }, [])

   

    const getPlaylistTracks = () => {
        axios
        .get(`${BASE_URL}/${props.playlistId}/tracks`, axiosConfig)
        .then( res => setTracks(res.data.result.tracks))
        .catch(err => console.log(err))
    }

    const removeTrackFromPlaylist = (trackId) => {
        axios
        .delete(`${BASE_URL}/${props.playlistId}/tracks/${trackId}`, axiosConfig)
        .then(() => {
            getPlaylistTracks()
            alert('deletada com sucesso!')
        })
        .catch(err => console.log(err))
    }

    const addTrackToPlaylist = (event) => {
        event.preventDefault()
        const body = {
            name: inputNome,
            artist: inputArtist,
            url: inputURL
        }
        axios
        .post(`${BASE_URL}/${props.playlistId}/tracks`, body,axiosConfig)
        .then(() => {
            alert('criada com sucesso!')
            getPlaylistTracks()
            setInputArtist('')
            setInputNome('')
            setInputURL('')
        })
        .catch(err => console.log(err))
    } 

    const renderdTracks = tracks.map((track) => {
        return<TrackCardeComponent 
        track={track} 
        key={track.id}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        />
    })
    return (
        <>
            <div>
                <h3>Detalhes da playlist</h3>

                <form>
                    <input 
                    placeholder='nome' 
                    value={inputNome}
                    onChange={(event) => {setInputNome(event.target.value)}}
                    />
                    <input 
                    placeholder='artista' 
                    value={inputArtist}
                    onChange={(event) => {setInputArtist(event.target.value)}}
                    />
                    <input 
                    placeholder='url' 
                    value={inputURL}
                    onChange={(event) => {setInputURL(event.target.value)}}
                    />
                    <button onClick={addTrackToPlaylist}>add musica</button>
                </form>
                <hr />
                {renderdTracks}

                <button onClick={() => { props.chageComponent('playlists') }}> voltar</button>
            </div>


        </>
    )
}

export default PLaylistDetails