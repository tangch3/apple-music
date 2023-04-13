import fetch from 'node-fetch';

let savedSongs = []

// GET APPLE MUSIC DATA FETCHING FROM API AND FILTERED BY KIND E.G. SONG, MUSICVIDEO, PODCAST ETC
export const getAppleMusicData = async (req, res) => {
    
    const url = 'https://itunes.apple.com/search?term='+req.params.searchTerm+'&entity='+req.params.kind
    
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error: ' + err))

    try {
        let response = await fetch(url)
        response = await response.json();
        res.status(200).json(response.results);
    } catch (err) {
        console.log(err);
    }
}

// GET ALL MEDIATYPES
export const getAllAppleMusicData = async (req, res) => {
    
    const url = 'https://itunes.apple.com/search?term='+req.params.searchTerm
    
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error: ' + err))

    try {
        let response = await fetch(url)
        response = await response.json();
        res.status(200).json(response.results);
    } catch (err) {
        console.log(err);
    }
}

export const getSavedSongs = (req, res) => {
    res.send(savedSongs)
}

export const saveSong = (req, res) => {
    const song = req.body;

    savedSongs.push({...song});
    console.log(savedSongs)
} 

export const deleteSong = (req, res) => {
    //easy way to delete is to just filter out the savedSongs array for everything except the specified record
    savedSongs = savedSongs.filter((song) => song.id != req.params.trackID)
}