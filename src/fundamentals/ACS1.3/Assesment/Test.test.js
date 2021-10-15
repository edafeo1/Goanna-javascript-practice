const { Musician } = require('./Musician');

test('Test get mus', ()=>{
   
    let musician = new Musician('dave', 33, 4);
    
    expect(musician.getArtistName()).toEqual('dave');
})


