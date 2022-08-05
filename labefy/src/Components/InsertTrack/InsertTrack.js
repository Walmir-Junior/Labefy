import React from "react"
import axios from "axios"


const urlGetPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers: {
        Authorization: "walmir-junior-hooks"
    }
}

class InsertTrack extends React.Component {
    state = {
        playlists: [],
        trackName: '',
        artist: '',
        url: ''
    }
    componentDidMount() {
        this.getPlaylists()
    }
    
    // ====== ON CHANGE ======
    updateTrackName = (event) => {
        this.setState({ trackName: event.target.value })
    }

    updateArtist = (event) => {
        this.setState({ artist: event.target.value })
    }

    updateUrl = (event) => {
        this.setState({ url: event.target.value })
    }


    // ====== REQUISIÇÕES =============
    getPlaylists = () => {
        axios
            .get(urlGetPlaylist, headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => {
                alert('algo deu errado, tente novamente!')
            })
    }

    // ======== ADD MUSICA A PLAYLIST =====
    addTrack = (playlistId) => {
        const body = {

            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        }
        const urlAddTrackToPlaylist = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

        axios
            .post(urlAddTrackToPlaylist, body, headers)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <>
            <button onClick={() => { this.props.changePage('list') }}>lista</button>

                <input
                    value={this.state.trackName}
                    placeholder='Nome...'
                    onChange={this.updateTrackName}
                />
                
                <input
                    value={this.state.artist}
                    placeholder='Artista/Banda....'
                    onChange={this.updateArtist}
                />
                <input
                    value={this.state.url}
                    placeholder='http//urlDaMusica....'
                    onChange={this.updateUrl}
                />

                <button
                onClick={() => {this.addTrack()}}
                >
                    ADD
                </button>

            </>
        );
    }
}

export default InsertTrack;