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

  function updateRecords(records, id, prop, value) {
      if (prop == 'tracks' && records[id].hasOwnProperty('tracks') == false) {
        records[id][prop] = [value]
        // records[id][prop].push(value);
      }
    
      return console.log(records);
  }

  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")