import createFakeMbid from './index';

describe('create fake mbid', () => {
  it('should replace spaces', () => {
    const initialData = {
      name: 'Julia Michaels',
      mbid: '',
      url: 'https://www.last.fm/music/Julia+Michaels',
    } as any;
    const result = createFakeMbid(initialData);
    const expectedMbid = 'juliamichaelshttps://www.last.fm/music/julia+michaels';
    expect(result).toEqual(expectedMbid);
  });
});
