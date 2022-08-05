import React from "react";
import axios from "axios";

const urlGetPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers: {
        Authorization: "walmir-junior-hooks"
    }
}

class PlaylistListing extends React.Component {
    state = {
        playlists: []
      }

      componentDidMount() {
        this.showPlaylists()
    }

    //  //==== MOSTRA PLAYLISTS CRIADAS ===
     showPlaylists = () => {
        axios
            .get(urlGetPlaylist, headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => { 
                alert('algo deu errado, tente novamente!')
                console.log(err) 
            })
    }

    //   // ==== DELETA PLAYLISTS =====

      deletePlaylist = (id) => {
        axios
            .delete(`${urlGetPlaylist}/${id}`, headers)
            .then((res) => {
                alert('playlist deletada com sucesso!')
                this.showPlaylists()
            })
            .catch((err) => {
                alert('algo deu errado, tente novamente!')
                console.log(err.mensage)
            })
    }

    render() { 

        // ===== renderiza playlists na tela =====
        const printPlaylists = this.state.playlists.map((playlist) => {
            return (

                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button
                        onClick={() => { this.deletePlaylist(playlist.id) }}
                    >Deletar</button>

                    <button
                    onClick={() => { this.props.changePage('tracks') }}
                    > 
                    ADD Track
                    </button>
                </div>

            )
        })

        return ( 
            <>
            <button onClick={() => { this.props.changePage('create') }}>Create</button>
            <div>
                {printPlaylists}
            </div>

            </>
         );
    }
}
 
export default PlaylistListing;