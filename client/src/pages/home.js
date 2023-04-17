import { useState } from 'react';
import axios from 'axios';


export const Home = () => {

    const [ appleData, setAppleData ] = useState([{
        artistName: "",
        trackName: "",
        artworkUrl60: "",
    }]);

    // Creating an array of options and then map later on in the front end
    const options = [
        {label: "All", value: "all"},
        {label: "Song", value: "song"},
        {label: "Album", value: "album"},
        {label: "Music Video", value: "musicVideo"},
        {label: "Podcast", value: "podcast"},
        {label: "Audiobook", value: "audiobook"},
        {label: "Software", value: "software"}
    ]

    const [checkedItem, setCheckedItem] = useState({all: true})

    // logic to handle the change when clicking on the options
    const handleChange = (event) => {

        const {name, checked} = event.target;

        const newCheckedItem = { ...checkedItem, [event.target.name]: event.target.checked };

        Object.keys(newCheckedItem).forEach(key => {
            if (key !== name) {
                newCheckedItem[key] = false;
            }
        });

        const atLeastOneChecked = Object.values(newCheckedItem).some(item=>item);
        if (!atLeastOneChecked && !checked) {
            // Prevent unchecking the last checked option
            return;
        }

        setCheckedItem(newCheckedItem);
    }

    const searchAppleApi = async (e) => {
        e.preventDefault();

        let searchTerm = document.getElementById('search').value
        console.log(searchTerm)

        // Getting the kind from the checkedItem react hook -> Making it into a string so we can parse into the URL
        let kind = Object.keys(checkedItem).filter(key=>checkedItem[key]).join(", ")
        console.log(kind==='all')

        if(kind === 'all') {
            try {
                const response = await axios.get("http://localhost:3001/home/"+searchTerm)
                setAppleData(response.data)
                console.log(appleData)
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                const response = await axios.get("http://localhost:3001/home/"+searchTerm+'/'+kind)
                setAppleData(response.data)
                console.log(appleData)
            } catch (err) {
                console.log(err)
            }
        } 
    }

    
    // Calling API to save a song to the Saved Page for the user
    const saveSong = async (songID, aName, tName, url) => {
        
        try {
            const response = await axios.post("http://localhost:3001/saved", {
                id: crypto.randomUUID(),
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
            <input type="text" id="search" name="search" placeholder='Search me'></input> {" "}
            <button type="button" onClick={searchAppleApi}>Search</button>
            <div className='checkboxes'>
                <ul>
                    {options.map((option) => (
                        <label>
                            {option.label}
                            <input
                                type="checkbox"
                                name={option.value}
                                checked={checkedItem[option.value]}
                                onChange={handleChange} 
                            />
                        </label>
                    ))}
                </ul>

            </div>
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
