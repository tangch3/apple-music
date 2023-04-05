import { useState } from 'react';
import axios from 'axios';


export const Home = () => {

    const [ appleData, setAppleData ] = useState([{
        artistName: "",
        trackName: "",
        artworkUrl60: "",
    }]);

    console.log(appleData)

    const searchAppleApi = async (e) => {
        e.preventDefault();

        let searchTerm = document.getElementById('search').value
        console.log(searchTerm)

        try {
            const response = await axios.get("http://localhost:3001/home/"+searchTerm)
            setAppleData(response.data)
            console.log(appleData)
        } catch (err) {
            console.log(err)
        }
    }

    const saveSong = async (songID, aName, tName, url) => {
        try {
            const response = await axios.post("http://localhost:3001/saved", {
                trackId: songID,
                artistName: aName,
                trackName: tName,
                artworkUrl60: url
            })
            console.log(response)

        } catch (err) {
            console.error(err)
        }
    }

    return (

        <div>
            <input type="text" id="search" name="search" placeholder='Song Name'></input> {" "}
            <button type="button" onClick={searchAppleApi}>Search</button>
            <ol>
                {appleData.map((song) => (
                    <li key={song.trackId}>
                        <div className='song-row'>
                            <img src={song.artworkUrl60} alt={song.trackName}/>
                                <div className='song-row-inner'>
                                <p>Artist: {song.artistName}</p>
                                <p>Track: {song.trackName}</p>
                            </div>
                            <button type="button" onClick={() => saveSong(
                                song.trackId,
                                song.artistName,
                                song.trackName,
                                song.artworkUrl60
                                )}>Save</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
