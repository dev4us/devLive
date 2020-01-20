import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import videojs from "video.js";

import "video.js/dist/video-js.css";
import "@videojs/themes/dist/fantasy/index.css";

const usePlayer = ({ src, controls, autoplay }) => {
  const options = {
    fill: true,
    fluid: true,
    preload: "auto",
    html5: {
      hls: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true
      }
    }
  };
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, {
      ...options,
      controls,
      autoplay,
      sources: [src]
    });
    setPlayer(vjsPlayer);

    return () => {
      if (player !== null) {
        player.dispose();
      }
    };
  });
  useEffect(() => {
    if (player !== null) {
      player.src({ src });
    }
  }, [src]);

  return videoRef;
};

const HLSPlayer = ({ src, controls, autoplay, width, height }) => {
  const playerRef = usePlayer({ src, controls, autoplay });

  return (
    <div style={{ width, height }}>
      <div data-vjs-player>
        <video
          ref={playerRef}
          className="video-js vjs-big-play-centered vjs-theme-fantasy vjs-fluid"
        />
      </div>
    </div>
  );
};

HLSPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool
};

HLSPlayer.defaultProps = {
  controls: true,
  autoplay: false
};

export default HLSPlayer;
