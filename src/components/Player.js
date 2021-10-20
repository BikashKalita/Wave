import React, { useState } from "react";

const Player = ({
  songs,
  currentSong,
  setCurrentSong,
  play,
  setPlay,
  audioRef,
  setSongs,
}) => {
  //handler
  const playSongHandler = () => {
    if (play) {
      audioRef.current.pause();
      setPlay(!play);
    } else {
      audioRef.current.play();
      setPlay(!play);
    }
  };
  //state for time
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationDuration: 0,
  });
  //time handler
  const onTimeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //for song bar animation
    const roundCurrent = Math.round(current);
    const roundDuration = Math.round(duration);
    const roundAnimation = Math.round((roundCurrent / roundDuration) * 100);
    setSongInfo({
      currentTime: current,
      duration,
      animationDuration: roundAnimation,
    });
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //drag slider
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  //song next button handler
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if (currentIndex === 0) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (play) audioRef.current.play();
  };

  //song ended handler
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (play) audioRef.current.play();
  };

  //updating sidebar current
  /*useEffect(() => {
    const newSong = songs.map((song) => {
      if (song.id === currentSong.id) {
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
    setSongs(newSong);
  }, [currentSong]);*/
  const activeLibraryHandler = (nextPrev) => {
    const newSong = songs.map((song) => {
      if (song.id === nextPrev.id) {
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
    setSongs(newSong);
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, #${currentSong.color[0]},#${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min="0"
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div
            style={{ transform: `translateX(${songInfo.animationDuration}%)` }}
            className="animate-track"
          ></div>
        </div>
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <img
          className="skip-back"
          src="https://image.flaticon.com/icons/png/512/271/271220.png"
          alt="Next"
          onClick={() => skipTrackHandler("skip-back")}
        />
        <img
          className="play"
          src={
            play
              ? "https://image.flaticon.com/icons/png/512/64/64485.png"
              : "https://image.flaticon.com/icons/png/512/727/727245.png"
          }
          onClick={playSongHandler}
          alt="Play"
        />
        <img
          className="skip-forward"
          src="https://image.flaticon.com/icons/png/512/271/271228.png"
          alt="Next"
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
      <audio
        onLoadedMetadata={onTimeHandler}
        onTimeUpdate={onTimeHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default Player;
