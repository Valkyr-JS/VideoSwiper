import { useEffect } from "react";
import Scroller from "../components/Scroller/Scroller";

const { React } = window.PluginApi;
const { useState } = React;

const App: React.FC<AppProps> = (props) => {
  const [videos, setVideos] = useState<IvideoData[]>([]);

  const getVideos = (number: number) => {
    const newVideos = [...props.allVideos].slice(
      videos.length,
      videos.length + number
    );
    console.log(newVideos);
    setVideos((oldVideos) => [...oldVideos, ...newVideos]);
  };

  useEffect(() => {
    getVideos(3);
  }, []);

  return (
    <main>
      <Scroller getVideos={getVideos} videos={videos} />
    </main>
  );
};

export default App;

interface AppProps {
  allVideos: IvideoData[];
}
