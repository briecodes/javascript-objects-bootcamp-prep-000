var playlist = {artist: ''};

// function updatePlaylist(thePlaylist, theaArtistName, theSongTitle){
//   return Object.assign({}, thePlaylist, {[theaArtistName]: theSongTitle});
// }

function updatePlaylist(thePlaylist, theaArtistName, theSongTitle){
  thePlaylist[theaArtistName] = theSongTitle;
  return thePlaylist;
}

function removeFromPlaylist(thePlaylist, theaArtistName){
  console.log(thePlaylist[theaArtistName]);
  // console.log(`first variable is: ${thePlaylist}. second variable is: ${theaArtistName}.`);
  // delete thePlaylist.kanye;
  // return thePlaylist;
}