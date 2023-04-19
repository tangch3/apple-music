// Imported axios to make HTTP requests
import axios from 'axios';
// Imported AlbumTitle to perform the test.
import FirstAlbum from './album';

/**
 * To mock axios in Jest, the jest.mock() function is used.
 * A response is created and mocked axios is used to return it: axios.get.mockResolvedValue.
 * The returned title is expected to be the first album.
 */

jest.mock('axios');

it('Returns the title of the first album.', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        id: 1,
        title: 'quidem molestiae enim',
      },
      {
        id: 2,
        title: 'sunt qui excepturi placeat culpa',
      },
    ],
  });

  const title = await FirstAlbum();
  expect(title).toEqual('quidem molestiae enim');
});

/* https://github.com/KuvashneeNaidoo/iTunes_App/blob/master/frontend/src/test/album.js */