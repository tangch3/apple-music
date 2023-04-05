import fetch from 'node-fetch';

let savedSongs = []

// GET APPLE MUSIC DATA FETCHING FROM API
export const getAppleMusicData = async (req, res) => {
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