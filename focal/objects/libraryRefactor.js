const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists : function() {
    console.log(this["playlists"]["p01"]["name"]);
    let playlists = this['playlists']
    for(let playlist in playlists) {
      //console.log(item["name"]);
      console.log( `${playlists[playlist]["id"]}: ${playlists[playlist]["name"]} - ${playlists[playlist]["tracks"].length} tracks`);       
    }
  },
  printTracks : function() {
    let tracks = this['tracks'];
    for(let track in tracks) {
      //console.log(item["name"]);
      console.log( `${track}: ${tracks[track]["name"]} by ${tracks[track]["artist"]} (${tracks[track]["album"]})`);       
    }
  },
  printPlaylist : function(playlistId) {
    let playlists = this['playlists'];
    let tracks = this['tracks'];
    for(let playlist in playlists) {
      console.log( `${playlists[playlist]["id"]}: ${playlists[playlist]["name"]} - ${playlists[playlist]["tracks"].length} tracks`);  
      for(let track in tracks) {
        for (let i in playlists[playlist]["tracks"]) {
          if(track === playlists[playlist]["tracks"][i])
          console.log( `${track}: ${tracks[track]["name"]} by ${tracks[track]["artist"]} (${tracks[track]["album"]})`);       
        }      
      }     
    }   
  },
  addTrackToPlaylist : function(trackId, playlistId) {
    let playlists = this['playlists'];
    (playlists[playlistId]["tracks"]).push(trackId);
    console.log(playlists['p02']['tracks']);
  },
  generateUid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack : function(name, artist, album) {
    const results = {id: 0, name: "", artist : "", album: ""};
    let tracks = this["tracks"];
    results["id"] = this.generateUid();
    results["name"] = name;
    results["artist"] = artist;
    results["album"] = album;
    tracks["t04"] = results;
    console.log(tracks);
  },
  addPlaylist : function(name) {
    const results = {id:0 , name: "", tracks: []};
    let tracks = this.tracks;
    results["id"] = this.generateUid();
    results["name"] = name;
    results["tracks"] = ["t01", "t02"];
    console.log(results);
  }
};
//library.printPlaylists();
//library.printTracks();
//library.printPlaylist("p01");
//library.addTrackToPlaylist("t02","p02");
//library.addTrack("Heer","Indu", "Ranjha");
library.addPlaylist("Punjabi Music");