import * as styles from "./VideoItem.module.scss";
import { useIsInViewport } from "@/hooks";
import { FILES_PER_LOAD } from "@/constants";
const { React } = window.PluginApi;
const { useEffect, useRef, useState } = React;

const VideoItem: React.FC<VideoProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadNewVidsAt, setloadNewVidsAt] = useState(props.lastVideoIndex);

  const isInViewport = useIsInViewport(videoRef, {
    threshold: 1,
  });

  useEffect(() => {
    if (isInViewport) {
      if (videoRef.current) {
        videoRef.current.play();
        console.log("playing " + props.index);
      }

      if (loadNewVidsAt === props.index) {
        // increase loadNewVidsAt by set amount
        setloadNewVidsAt((prev) => prev + FILES_PER_LOAD);
        props.getVideos(FILES_PER_LOAD);
      }
    } else {
      videoRef.current?.pause();
      console.log("paused " + props.index);
    }
  });

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      console.log("playing " + props.index);
    } else {
      videoRef.current?.pause();
      console.log("paused " + props.index);
    }
  };

  const toggleMuteHandler = () => {
    if (videoRef.current) videoRef.current.muted = !videoRef.current.muted;
    console.log("toggled");
  };

  useEffect(() => {
    if (!isInViewport) videoRef.current?.pause();
  }, [isInViewport]);

  // ? Index reference, for development purposes only
  const developmentIndexRef = (
    <span
      style={{
        fontSize: "24px",
        position: "absolute",
        backgroundColor: "black",
        padding: "10px",
      }}
    >
      {props.index}
    </span>
  );

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
      {developmentIndexRef}
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
