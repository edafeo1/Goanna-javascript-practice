const { Musician } = require('./Musician');

test('Test get mus', ()=>{
   // let artist = new student();
    let musician = new Musician('dave', 33, 4);
    //artist.setName('john');
    //expect(artist.getName()).toEqual('john');
    expect(musician.getArtistName()).toEqual('dave');
})


