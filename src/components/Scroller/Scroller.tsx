import VideoItem from "@/components/VideoItem/VideoItem";
import * as styles from "./Scroller.module.scss";
const { React } = window.PluginApi;

const Scroller: React.FC<ScrollerProps> = (props) => {
  return (
    <div className={styles["slider-container"]}>
      {props.videos.map((v, i) => (
        <VideoItem
          getVideos={props.getVideos}
          id={v.id}
          key={i}
          index={i + 1}
          lastVideoIndex={props.videos.length - 1}
          videoURL={v.videoURL}
        />
      ))}
    </div>
  );
};

export default Scroller;

interface ScrollerProps {
  getVideos: (length: number) => void;
  videos: IvideoData[];
}
