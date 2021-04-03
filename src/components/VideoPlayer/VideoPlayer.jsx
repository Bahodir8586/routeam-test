import React from "react";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ closePlayer, src }) => {
  return (
    <div className={styles.video}>
      <button onClick={closePlayer}>Close</button>
      <video controls autoPlay src={src} width="800" height="450" />
    </div>
  );
};

export default VideoPlayer;
