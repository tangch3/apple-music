import { useState, useEffect } from 'react';
import axios from 'axios';

export const Saved = () => {

    const [savedSongs, setSavedSongs] = useState([])

    useEffect(() => {

        const fetchSavedSongs = async () => {
            try {
                const response = await axios.get("http://localhost:3001/saved");
                setSavedSongs(response.data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchSavedSongs()

    })

    const deleteSong = async (songID) => {
        try {
            await axios.delete("http://localhost:3001/delete/"+songID)
            window.location.reload()
        } catch (err) {
            console.error(err)
        }
    }

  return (
    <div>
        <h1>Saved Songs</h1>
        <ol>
            {savedSongs.map((song) => (
                <li key={song.id}>
                    <div className='song-row'>
                        <img src={song.artworkUrl60} alt={song.trackName}/>
                        <div className='song-row-inner'>
                            <p>Artist: {song.artistName}</p>
                            <p>Track: {song.trackName}</p>
                            <p>ID: {song.id}</p>
                        </div>
                        <button type="button" onClick={() => deleteSong(song.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ol>
    </div>
  )
}
