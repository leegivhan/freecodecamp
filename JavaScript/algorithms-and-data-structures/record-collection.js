// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // If prop isn't tracks and value isn't an empty string, 
  if (prop != 'tracks' && value != '') {
    // update or set that album's prop to value.
    records[id][prop] = value;
  // If prop is tracks but the album doesn't have a tracks property
  } else if (prop == 'tracks' && records[id].hasOwnProperty('tracks') == false) {
    // create an empty array and add value to it
    records[id][prop] = [value];
  // If prop is tracks and value isn't an empty string
  } else if (prop == 'tracks' && value != '') {
    // add value to the end of the album's existing tracks array.
    records[id][prop].push(value);
  // If value is an empty string
  } else if (value == '') {
    // delete the given prop property from the album.
    delete records[id][prop];
  // If value is artist
  } else if (prop == 'artist') {
    // Set artist property to value
    records[id][prop] == value;
  }

  return records; // returns entire record collection object
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');