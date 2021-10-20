import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  play,
  songs,
  id,
  setSongs,
}) => {
  //seting the current song based on click
  const songSelectHandler = async () => {
    setCurrentSong(song);
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    await setSongs(newSong);
    if (play) audioRef.current.play();
  };
  //adding auto play song when play is active
  /*if (play) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }*/
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
