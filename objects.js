var playlist = {artist: ''};

// function updatePlaylist(thePlaylist, theaArtistName, theSongTitle){
//   return Object.assign({}, thePlaylist, {[theaArtistName]: theSongTitle});
// }

function updatePlaylist(thePlaylist, theaArtistName, theSongTitle){
  thePlaylist[theaArtistName] = theSongTitle;
  return thePlaylist;
}

function removeFromPlaylist(thePlaylist, theaArtistName){
  delete thePlaylist[theaArtistName];
  return thePlaylist;
}