var playlist = {artist: ''};

// function updatePlaylist(thePlaylist, theaArtistName, theSongTitle){
//   return Object.assign({}, thePlaylist, {[theaArtistName]: theSongTitle});
// }

function updatePlaylist(obj, key, value){
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(obj, key){
  console.log(obj[key]);
  delete obj.[key];
  return obj;
}