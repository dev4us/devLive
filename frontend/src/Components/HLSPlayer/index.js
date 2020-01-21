import React, { useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import videojs from "video.js";

import "video.js/dist/video-js.css";
import "@videojs/themes/dist/fantasy/index.css";

const HLSPlayer = ({ src, controls, autoplay, width, height }) => {
  const videoNode = useRef(null);
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
  useLayoutEffect(() => {
    const player = videojs(videoNode.current, {
      ...options,
      controls,
      autoplay,
      sources: [src]
    });
    return () => {
      player.dispose();
    };
  }, [JSON.stringify(options)]);

  return (
    <div style={{ width, height }}>
      <div data-vjs-player>
        <video
          ref={videoNode}
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
