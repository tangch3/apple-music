import axios from 'axios';
import chai from 'chai';

const expect = chai.expect;

describe('Search functionality', () => {
  it('Should search for "Coldplay" and return the first song', async () => {
    const searchTerm = 'Coldplay';
    const response = await axios.get(`http://localhost:3001/home/${searchTerm}/song`);

    // Assuming that the first song is returned in the response data
    const expectedSong = response.data[0];
    
    // Assertions using Chai
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
    expect(expectedSong).to.have.property('artistName');
    expect(expectedSong).to.have.property('trackName');
    expect(expectedSong).to.have.property('artworkUrl60');
  });
});

