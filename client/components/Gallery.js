import React from 'react';
import '../../node_modules/video-react/dist/video-react.css'
import { Player, ControlBar, ForwardControl } from 'video-react';

const Gallery =  (props) => {
  return (
    <Player
      playsInline
    //   poster="/assets/poster.png"
      src="https://www.youtube.com/watch?v=v5Jdq3Ljro4"
    >
    <ControlBar autoHide={false}>
    <ForwardControl seconds={5} order={3.1} />
    <ForwardControl seconds={10} order={3.2} />
    <ForwardControl seconds={30} order={3.3} />
    </ControlBar>
    </Player>
   );
};

export default Gallery;