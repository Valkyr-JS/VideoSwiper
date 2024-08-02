import * as styles from "./VideoItem.module.scss";
import { useIsInViewport } from "../../hooks";
const { React } = window.PluginApi;
const { useEffect, useRef, useState } = React;

const VideoItem: React.FC<VideoProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadNewVidsAt, setloadNewVidsAt] = useState(props.lastVideoIndex);

  const isInViewport = useIsInViewport(videoRef);

  useEffect(() => {
    if (isInViewport) {
      setTimeout(() => {
        if (videoRef.current) videoRef.current.play();
      }, 1000);

      if (loadNewVidsAt === props.index) {
        // increase loadNewVidsAt by 2
        setloadNewVidsAt((prev) => prev + 2);
        props.getVideos(3);
      }
    }
  });

  const togglePlay = () => {
    let currentVideo = videoRef.current;
    if (currentVideo?.paused) {
      currentVideo.play();
    } else {
      currentVideo?.pause();
    }
  };

  const toggleMuteHandler = () => {
    if (videoRef.current) videoRef.current.muted = !videoRef.current.muted;
    console.log("toggled");
  };

  useEffect(() => {
    if (!isInViewport) {
      videoRef.current?.pause();
      console.log("left viewport");
    }
  }, [isInViewport]);

  return (
    <div className={styles["slider-children"]}>
      <video
        className={styles["video"]}
        id={props.id}
        muted
        onClick={togglePlay}
        onDoubleClick={toggleMuteHandler}
        ref={videoRef}
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100%",
        }}
      >
        <source src={props.videoURL} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoItem;

interface VideoProps {
  getVideos: (length: number) => void;
  id: IvideoData["id"];
  index: number;
  lastVideoIndex: number;
  videoURL: IvideoData["videoURL"];
}
