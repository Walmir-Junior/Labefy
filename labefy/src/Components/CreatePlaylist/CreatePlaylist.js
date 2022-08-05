import React, { useState } from "react"
import {BASE_URL, axiosConfig} from '../../constants/index'
import axios from "axios"

const CreatePlaylist = () => {
    const [newPlaylistInput, setNewPlaylistInput] = useState('')

    const createPlaylist = (event) => {
        event.preventDefault()

        const body = {
            name: newPlaylistInput
        }

        axios
        .post(BASE_URL, body, axiosConfig)
        .then(() => {
            setNewPlaylistInput('')
            alert('playlist criada com sucesso!')
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <h2>Criar playlist</h2>

            <form>
                <input 
                placeholder="Nome da playlist" 
                value={newPlaylistInput}
                onChange={(event) => {setNewPlaylistInput(event.target.value)}}
                />
                <button onClick={createPlaylist}>add playlist</button>
            </form>
        </>
    )
}

export default CreatePlaylist